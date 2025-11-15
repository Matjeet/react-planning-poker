import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { SplashPage } from "./pages/SplashPage"
import { InitialPage } from "./pages/InitialPage"
import { LobbyPage } from "./pages/LobbyPage"
import { GamePage } from "./pages/GamePage"
import { SpectatorPage } from "./pages/SpectatorPage"

function App() {

  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <Router>
      <Routes>
       <Route 
          path="/" 
          element={
            isLoading ? (
              <SplashPage onLoadingComplete={handleLoadingComplete} />
            ) : (
              <Navigate to="/start-menu" replace />
            )
          } 
        />
        <Route 
          path="/start-menu" 
          element={<InitialPage />}
        />
        <Route
          path="/lobby"
          element={<LobbyPage />} 
        />
        <Route
          path="/game-room"
          element={<GamePage />} 
        />
        <Route
          path="/spectator-room"
          element={<SpectatorPage />}
        />
      </Routes>
    </Router>
  )
}

export default App
