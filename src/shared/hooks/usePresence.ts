import { useEffect, useRef, useState } from 'react'

type MsgType =
  | { type: 'request-state' }
  | { type: 'state'; payload: Player[] }
  | { type: 'join'; payload: Player }
  | { type: 'leave'; payload: { id: string } }
  | { type: 'heartbeat'; payload: { id: string; ts: number } }

export type Player = {
  id: string
  name: string
  lastSeen: number
}

const CHANNEL_NAME = 'planning-poker-presence-v1'
const HEARTBEAT_INTERVAL = 200000 // ms
const STALE_THRESHOLD = 500000 // ms

function uid() {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID()
  }
  return `${Date.now()}-${Math.floor(Math.random() * 1e6)}`
}

export default function usePresence(initialName?: string) {
  const [players, setPlayers] = useState<Player[]>([])
  const bcRef = useRef<BroadcastChannel | null>(null)
  const idRef = useRef<string>(uid())
  const nameRef = useRef<string>(initialName || `Player-${idRef.current.slice(-4)}`)
  const lastSeenRef = useRef<Record<string, number>>({})
  const tickRef = useRef<number | null>(null)

  useEffect(() => {
    const bc = new BroadcastChannel(CHANNEL_NAME)
    bcRef.current = bc

    const localId = idRef.current
    const localPlayer: Player = { id: localId, name: nameRef.current, lastSeen: Date.now() }

    // helper to set players from map
    const applyMap = (map: Record<string, Player>) => {
      const arr = Object.values(map)
      setPlayers(arr)
    }

    // local map of players -> last known
    const map: Record<string, Player> = {}

    // reply to a state request by sending our known players + our presence
    const sendState = () => {
      bc.postMessage({ type: 'state', payload: Object.values(map) } as MsgType)
    }

    const sendJoin = () => bc.postMessage({ type: 'join', payload: localPlayer } as MsgType)
    const sendLeave = () => bc.postMessage({ type: 'leave', payload: { id: localId } } as MsgType)
    const sendHeartbeat = () => bc.postMessage({ type: 'heartbeat', payload: { id: localId, ts: Date.now() } } as MsgType)

    // Listen messages from other tabs
    const onMessage = (ev: MessageEvent) => {
      const msg = ev.data as MsgType
      if (!msg || typeof msg !== 'object') return

      if (msg.type === 'request-state') {
        // someone new wants the current state
        sendState()
        // also announce ourselves
        sendJoin()
        return
      }

      if (msg.type === 'state') {
        // merge received players
        for (const p of msg.payload) {
          if (!map[p.id] || map[p.id].lastSeen < p.lastSeen) {
            map[p.id] = p
            lastSeenRef.current[p.id] = p.lastSeen
          }
        }
        // ensure local player is present
        map[localId] = { ...localPlayer, lastSeen: Date.now() }
        applyMap(map)
        return
      }

      if (msg.type === 'join') {
        const p = msg.payload
        map[p.id] = p
        lastSeenRef.current[p.id] = p.lastSeen
        applyMap(map)
        return
      }

      if (msg.type === 'leave') {
        const { id } = msg.payload
        delete map[id]
        delete lastSeenRef.current[id]
        applyMap(map)
        return
      }

      if (msg.type === 'heartbeat') {
        const { id, ts } = msg.payload
        if (!map[id]) {
          // create minimal record
          map[id] = { id, name: `Player-${id.slice(-4)}`, lastSeen: ts }
        } else {
          map[id].lastSeen = ts
        }
        lastSeenRef.current[id] = ts
        applyMap(map)
        return
      }
    }

    bc.addEventListener('message', onMessage)

    // ask for state so other tabs will reply
    bc.postMessage({ type: 'request-state' } as MsgType)

    // make ourselves known right away
    map[localId] = localPlayer
    lastSeenRef.current[localId] = localPlayer.lastSeen
    applyMap(map)
    sendJoin()

    // heartbeats
    const hb = setInterval(() => {
      const ts = Date.now()
      map[localId].lastSeen = ts
      lastSeenRef.current[localId] = ts
      sendHeartbeat()

      // cleanup stale entries
      for (const [pid, p] of Object.entries(map)) {
        if (pid === localId) continue
        const last = lastSeenRef.current[pid] || p.lastSeen
        if (Date.now() - last > STALE_THRESHOLD) {
          delete map[pid]
          delete lastSeenRef.current[pid]
        }
      }
      applyMap(map)
    }, HEARTBEAT_INTERVAL)
    tickRef.current = hb as unknown as number

    // inform others when we unload
    const onBeforeUnload = () => {
      try {
        sendLeave()
      } catch (e) {
        console.error('Error sending leave message', e)
      }
    }
    window.addEventListener('beforeunload', onBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', onBeforeUnload)
      clearInterval(hb)
      bc.removeEventListener('message', onMessage)
      try {
        sendLeave()
      } catch (e) {
        console.error('Error sending leave message', e)
      }
      bc.close()
      bcRef.current = null
    }
  }, [])

  const setName = (name: string) => {
    nameRef.current = name
    // broadcast a join with updated name so others see it
    const bc = bcRef.current
    if (bc) {
      const msg: MsgType = { type: 'join', payload: { id: idRef.current, name, lastSeen: Date.now() } }
      bc.postMessage(msg)
    }
    setPlayers((prev) => prev.map((p) => (p.id === idRef.current ? { ...p, name } : p)))
  }

  return { players, localId: idRef.current, localName: nameRef.current, setName }
}
