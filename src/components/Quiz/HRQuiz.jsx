import React, { useState } from "react"

const questions = [
  { q: "How do you apply for leave?", options: ["Email HR", "247HRM Portal", "Tell Manager"], answer: 1 },
  { q: "POSH stands for?", options: ["Policy on Safety & Health", "Prevention of Sexual Harassment", "Privacy of Staff Handbook"], answer: 1 },
]

function HRQuiz() {
  const [current, setCurrent] = useState(0)
  const [score, setScore] = useState(0)

  const handleAnswer = (i) => {
    if (i === questions[current].answer) setScore(score + 1)
    if (current < questions.length - 1) setCurrent(current + 1)
  }

  return (
    <div>
      <p className="text-lg font-medium mb-3">{questions[current].q}</p>
      <div className="flex flex-col gap-2">
        {questions[current].options.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleAnswer(i)}
            className="px-4 py-2 bg-indigo-100 hover:bg-indigo-200 rounded-lg"
          >
            {opt}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-600">Score: {score}</p>
    </div>
  )
}

export default HRQuiz
