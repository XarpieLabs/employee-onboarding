import React, { useState } from "react"

function CustomerSimulation() {
  const question = {
    q: "What is IndiVillage's mission?",
    options: ["Profit only", "Impact sourcing", "Building apps"],
    answer: 1,
  }
  const [result, setResult] = useState(null)

  function handleAnswer(i) {
    setResult(i === question.answer ? "Correct! You earned a certificate." : " Try again.")
  }

  return (
    <div>
      <p className="text-lg font-medium mb-3">{question.q}</p>
      <div className="flex flex-col gap-2">
        {question.options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            className="px-4 py-2 bg-green-100 hover:bg-green-200 rounded-lg"
          >
            {opt}
          </button>
        ))}
      </div>
      {result && <p className="mt-4 font-bold">{result}</p>}
    </div>
  )
}

export default CustomerSimulation
