import React, { createContext, useState, useContext } from "react"

const GameContext = createContext()

export function GameProvider({ children }) {
  const [phase, setPhase] = useState(1) // 1–5 onboarding phases
  const [user, setUser] = useState({ name: "", avatar: "" })

  function nextPhase() {
    setPhase((prev) => Math.min(prev + 1, 5))
  }

  function prevPhase() {
    setPhase((prev) => Math.max(prev - 1, 1))
  }

  return (
    <GameContext.Provider value={{ phase, nextPhase, prevPhase, user, setUser }}>
      {children}
    </GameContext.Provider>
  )
}

export function useGame() {
  return useContext(GameContext)
}
