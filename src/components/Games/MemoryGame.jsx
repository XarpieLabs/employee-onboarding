// ============================================
// FILE: src/components/Games/MemoryGame.jsx
// STEP 11: Skill Assessment Games - WebGL Game Player
// ============================================

import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Gamepad2, CheckCircle } from 'lucide-react';

export default function GamePlayer({ onComplete }) {
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showManualComplete, setShowManualComplete] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const iframeRef = useRef(null);

  // CHANGE THIS URL TO YOUR GAME URL
  const gameUrl = "https://unityrunner2.superhuge-ld.com/games/MemoryGame/index.html?gameplayId=shs_c1e5gmemc65whct7";

  // Listen for postMessage from game
  useEffect(() => {
    const handleMessage = (event) => {
      // Accept messages from game completion
      if (event.data.type === 'GAME_COMPLETED' || event.data === 'GAME_COMPLETED') {
        setGameCompleted(true);
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  // Show manual complete button after 2 minutes
  useEffect(() => {
    if (!gameStarted) return;

    const timer = setTimeout(() => {
      if (!gameCompleted) {
        setShowManualComplete(true);
      }
    }, 120000); // 2 minutes

    return () => clearTimeout(timer);
  }, [gameCompleted, gameStarted]);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleManualComplete = () => {
    setGameCompleted(true);
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 2rem) clamp(2rem, 3vw, 3rem)',
      background: 'linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 100%)',
      position: 'relative'
    }}>
      {/* Main Card */}
      <div style={{ 
        width: '100%', 
        maxWidth: '1400px',
        background: 'white',
        borderRadius: 'clamp(24px, 3vw, 32px)',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        border: '3px solid white',
        outline: '3px solid #4a9d95',
        outlineOffset: '0px'
      }}>
        {/* Header Section with Gradient */}
        <div style={{
          padding: 'clamp(1.5rem, 3vw, 2rem) clamp(0.75rem, 1.5vw, 1.25rem)',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #4a9d95 0%, #5fb9b0 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 30% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)',
            pointerEvents: 'none'
          }}></div>

          <h1 style={{
            fontSize: 'clamp(1.15rem, 2.8vw, 1.5rem)',
            fontWeight: '700',
            color: '#fde68a',
            margin: '0 0 0.3rem 0',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            letterSpacing: '0.02em',
            lineHeight: '1.3'
          }}>
            Skill Assessment Games
          </h1>
          <p style={{
            fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
            color: 'white',
            margin: 0,
            fontWeight: '400',
            position: 'relative',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
          }}>
            Test your cognitive abilities with interactive challenges
          </p>
        </div>

        {/* Content Section */}
        <div style={{
          background: 'linear-gradient(180deg, #9edbe8 0%, #eef6eb 100%)',
          padding: 'clamp(1.5rem, 2.5vw, 2rem) clamp(1rem, 2vw, 1.5rem)'
        }}>
          {!gameStarted ? (
            // Game Introduction Screen
            <>
              <div style={{
                width: 'clamp(70px, 10vw, 90px)',
                height: 'clamp(70px, 10vw, 90px)',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto clamp(1.5rem, 3vw, 2rem)',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
              }}>
                <Gamepad2 size={40} color="white" />
              </div>

              <p style={{
                fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
                color: '#1e3a5f',
                textAlign: 'center',
                lineHeight: '1.7',
                marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: '500',
                maxWidth: '800px',
                margin: '0 auto clamp(1.5rem, 2.5vw, 2rem)'
              }}>
                Get ready to challenge your memory, logic, and problem-solving skills! 
                This game will help us understand your cognitive strengths and abilities.
              </p>

              <div style={{
                background: 'rgba(255, 255, 255, 0.9)',
                borderRadius: '12px',
                padding: 'clamp(1rem, 2vw, 1.5rem)',
                marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)',
                border: '2px solid #93c5fd',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                maxWidth: '800px',
                margin: '0 auto clamp(1.5rem, 2.5vw, 2rem)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                  fontWeight: '600',
                  color: '#1a365d',
                  marginBottom: '0.75rem',
                  margin: '0 0 0.75rem 0',
                  textAlign: 'center'
                }}>
                  Game Instructions
                </h3>
                <ul style={{
                  fontSize: 'clamp(0.85rem, 1.7vw, 0.95rem)',
                  color: '#475569',
                  lineHeight: '1.8',
                  margin: 0,
                  paddingLeft: '1.5rem',
                  textAlign: 'left'
                }}>
                  <li>Click Start Game to begin the challenge</li>
                  <li>The game will open in a fullscreen iframe</li>
                  <li>Follow the on-screen instructions in the game</li>
                  <li>Complete all levels to finish the assessment</li>
                  <li>Your progress will be automatically tracked</li>
                </ul>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <button
                  onClick={handleStartGame}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.5rem, 3vw, 2rem)',
                    fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
                    fontWeight: '700',
                    color: 'white',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4), 0 2px 6px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    textTransform: 'capitalize',
                    letterSpacing: '0.02em'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.5), 0 3px 8px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.4), 0 2px 6px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <Gamepad2 size={20} />
                  Start Game
                </button>
              </div>
            </>
          ) : (
            // Game Playing Screen
            <>
              {/* Game Iframe */}
              <div style={{
                width: '100%',
                maxWidth: '100%',
                margin: '0 auto clamp(1.5rem, 2.5vw, 2rem)',
                position: 'relative',
                paddingBottom: '56.25%',
                height: 0,
                overflow: 'hidden',
                borderRadius: '12px',
                background: '#000',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
              }}>
                <iframe
                  ref={iframeRef}
                  src={gameUrl}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none'
                  }}
                  title="Assessment Game"
                  allowFullScreen
                  allow="gamepad; fullscreen"
                />
              </div>

              {/* Status Message */}
              {gameCompleted ? (
                <div style={{
                  padding: 'clamp(1rem, 2vw, 1.25rem)',
                  background: 'rgba(209, 250, 229, 0.9)',
                  borderRadius: '12px',
                  marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)',
                  border: '2px solid #52b788',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  maxWidth: '800px',
                  margin: '0 auto clamp(1.5rem, 2.5vw, 2rem)'
                }}>
                  <p style={{
                    margin: 0,
                    fontSize: 'clamp(0.9rem, 1.9vw, 1.05rem)',
                    color: '#065f46',
                    textAlign: 'center',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                  }}>
                    <CheckCircle size={20} />
                    Congratulations! Game completed successfully!
                  </p>
                </div>
              ) : (
                <div style={{
                  padding: 'clamp(1rem, 2vw, 1.25rem)',
                  background: 'rgba(254, 243, 199, 0.9)',
                  borderRadius: '12px',
                  marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)',
                  border: '2px solid #f59e0b',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  maxWidth: '800px',
                  margin: '0 auto clamp(1.5rem, 2.5vw, 2rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  alignItems: 'center'
                }}>
                  <p style={{
                    margin: 0,
                    fontSize: 'clamp(0.9rem, 1.9vw, 1.05rem)',
                    color: '#1a365d',
                    textAlign: 'center',
                    fontWeight: '600'
                  }}>
                    Playing game... Complete all challenges to continue!
                  </p>
                  
                  {showManualComplete && (
                    <button
                      onClick={handleManualComplete}
                      style={{
                        padding: '0.5rem 1.25rem',
                        fontSize: 'clamp(0.8rem, 1.6vw, 0.85rem)',
                        fontWeight: '600',
                        color: '#6b7280',
                        background: 'white',
                        border: '2px solid #d1d5db',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#f3f4f6';
                        e.currentTarget.style.borderColor = '#9ca3af';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.borderColor = '#d1d5db';
                      }}
                    >
                      Mark as Complete
                    </button>
                  )}
                </div>
              )}

              {/* Continue Button */}
              <div style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <button
                  onClick={onComplete}
                  disabled={!gameCompleted}
                  style={{
                    padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.5rem, 3vw, 2rem)',
                    fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
                    fontWeight: '700',
                    color: '#1e5a8e',
                    background: gameCompleted ? 'linear-gradient(135deg, #a3e635 0%, #84cc16 100%)' : '#9ca3af',
                    border: 'none',
                    borderRadius: '20px',
                    cursor: gameCompleted ? 'pointer' : 'not-allowed',
                    boxShadow: gameCompleted ? '0 6px 20px rgba(132, 204, 22, 0.35), 0 2px 6px rgba(0, 0, 0, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    textTransform: 'capitalize',
                    letterSpacing: '0.02em',
                    opacity: gameCompleted ? 1 : 0.6
                  }}
                  onMouseEnter={(e) => {
                    if (gameCompleted) {
                      e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(132, 204, 22, 0.4), 0 3px 8px rgba(0, 0, 0, 0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (gameCompleted) {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(132, 204, 22, 0.35), 0 2px 6px rgba(0, 0, 0, 0.1)';
                    }
                  }}
                >
                  {gameCompleted ? 'Continue to Customer Scenarios' : 'Complete Game First'}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
// import React, { useState } from "react"

// function MemoryGame() {
//   const cards = ["🍎", "🍌", "🍎", "🍌"]
//   const [flipped, setFlipped] = useState([])

//   function flipCard(i) {
//     if (flipped.length < 2) setFlipped([...flipped, i])
//   }

//   return (
//     <div className="grid grid-cols-2 gap-4 mt-4">
//       {cards.map((card, i) => (
//         <div
//           key={i}
//           onClick={() => flipCard(i)}
//           className="w-20 h-20 flex items-center justify-center border rounded-xl bg-indigo-50 cursor-pointer text-2xl"
//         >
//           {flipped.includes(i) ? card : "❓"}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default MemoryGame
