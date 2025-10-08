import React, { useState } from "react"

function MemoryGame() {
  const cards = ["🍎", "🍌", "🍎", "🍌"]
  const [flipped, setFlipped] = useState([])

  function flipCard(i) {
    if (flipped.length < 2) setFlipped([...flipped, i])
  }

  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      {cards.map((card, i) => (
        <div
          key={i}
          onClick={() => flipCard(i)}
          className="w-20 h-20 flex items-center justify-center border rounded-xl bg-indigo-50 cursor-pointer text-2xl"
        >
          {flipped.includes(i) ? card : "❓"}
        </div>
      ))}
    </div>
  )
}

export default MemoryGame
