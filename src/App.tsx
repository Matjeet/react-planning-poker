import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { SplashPage } from "./pages/SplashPage/SplashPage"

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
              <Navigate to="/" replace />
            )
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
