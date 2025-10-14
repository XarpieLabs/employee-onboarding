import React, { useState } from 'react';
import { CheckCircle, XCircle, Award } from 'lucide-react';

export default function CustomerQuiz({ onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const questions = [
    {
      id: 1,
      question: "What is IndiVillage's main mission?",
      options: [
        { id: 'A', text: 'Low-cost BPO services only' },
        { id: 'B', text: 'Create tech jobs in rural communities', isCorrect: true },
        { id: 'C', text: 'Government lobbying for subsidies' },
        { id: 'D', text: 'Profit-driven AI firm in Bengaluru' }
      ]
    },
    {
      id: 2,
      question: "Which service does IndiVillage provide to clients?",
      options: [
        { id: 'A', text: 'Handloom textile production' },
        { id: 'B', text: 'Event management services' },
        { id: 'C', text: 'Data management and AI solutions', isCorrect: true },
        { id: 'D', text: 'Financial auditing services' }
      ]
    },
    {
      id: 3,
      question: "How does the 'profit-for-all' model work?",
      options: [
        { id: 'A', text: 'Free vacation packages for all' },
        { id: 'B', text: 'Reinvest profits in community development', isCorrect: true },
        { id: 'C', text: 'Mandatory local spending requirement' },
        { id: 'D', text: 'Only hire advanced degree holders' }
      ]
    },
    {
      id: 4,
      question: "What highlights workforce quality?",
      options: [
        { id: 'A', text: 'Fortune 500 experience required' },
        { id: 'B', text: '96% retention, 92% college graduates', isCorrect: true },
        { id: 'C', text: 'Mandatory PhD requirement' },
        { id: 'D', text: 'Live within 5 minutes of office' }
      ]
    },
    {
      id: 5,
      question: "When was the first tech center established?",
      options: [
        { id: 'A', text: '1999' },
        { id: 'B', text: '2010', isCorrect: true },
        { id: 'C', text: '2020' },
        { id: 'D', text: '1985' }
      ]
    }
  ];

  const currentQ = questions[currentQuestion];
  const totalQuestions = questions.length;
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (optionId) => {
    if (showFeedback) return;
    setSelectedAnswer(optionId);
  };

  const handleSubmitAnswer = () => {
    if (!selectedAnswer) return;

    const isCorrect = currentQ.options.find(opt => opt.id === selectedAnswer)?.isCorrect;
    
    setShowFeedback(true);
    setAnsweredQuestions([...answeredQuestions, {
      question: currentQuestion,
      selectedAnswer,
      isCorrect
    }]);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setIsComplete(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setAnsweredQuestions([]);
    setIsComplete(false);
  };

  if (isComplete) {
    const percentage = Math.round((score / totalQuestions) * 100);
    const passed = percentage >= 60;

    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2rem)',
        background: 'linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 100%)'
      }}>
        <div style={{
          maxWidth: '600px',
          width: '100%',
          background: 'white',
          borderRadius: 'clamp(20px, 2.5vw, 28px)',
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5)',
          border: '3px solid #2c7a7b',
          textAlign: 'center'
        }}>
          <div style={{
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: passed ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #f59e0b, #d97706)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.25rem',
            animation: 'scaleIn 0.5s ease-out'
          }}>
            <Award size={45} color="white" />
          </div>

          <h2 style={{
            fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
            fontWeight: '700',
            color: '#1a365d',
            marginBottom: '0.75rem'
          }}>
            {passed ? 'Congratulations! 🎉' : 'Keep Learning! 📚'}
          </h2>

          <div style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
            fontWeight: '800',
            color: passed ? '#10b981' : '#f59e0b',
            marginBottom: '0.5rem'
          }}>
            {score}/{totalQuestions}
          </div>

          <p style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
            color: '#64748b',
            marginBottom: '1.5rem'
          }}>
            You scored {percentage}%
          </p>

          <p style={{
            fontSize: 'clamp(0.85rem, 1.6vw, 0.95rem)',
            color: '#475569',
            marginBottom: '1.5rem',
            lineHeight: 1.6
          }}>
            {passed 
              ? "Great job! You understand IndiVillage well."
              : "Review and try again to improve."}
          </p>

          <div style={{
            display: 'flex',
            gap: '0.75rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {!passed && (
              <button
                onClick={handleRetry}
                style={{
                  padding: '0.75rem 1.75rem',
                  fontSize: 'clamp(0.85rem, 1.6vw, 0.95rem)',
                  fontWeight: '600',
                  color: 'white',
                  background: 'linear-gradient(135deg, #667eea, #764ba2)',
                  border: 'none',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
                }}
              >
                Try Again
              </button>
            )}
            
            <button
              onClick={onComplete}
              className="btn"
              style={{
                padding: '0.75rem 1.75rem',
                minHeight: 'auto'
              }}
            >
              {passed ? 'Continue to Next Phase' : 'Skip to Next Phase'}
            </button>
          </div>
        </div>

        <style>{`
          @keyframes scaleIn {
            from {
              transform: scale(0);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(1rem, 3vw, 2rem)',
      background: 'linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 100%)'
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        background: 'white',
        borderRadius: 'clamp(20px, 2.5vw, 28px)',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.5)',
        border: '3px solid #2c7a7b'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #2c7a7b 0%, #319795 100%)',
          padding: 'clamp(1.25rem, 2.5vw, 1.75rem)',
          color: 'white'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.35rem, 3vw, 1.75rem)',
            fontWeight: '700',
            margin: '0 0 0.75rem 0'
          }}>
            Meet Your Customer Quiz
          </h2>
          
          {/* Progress Bar */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.3)',
            borderRadius: '10px',
            height: '7px',
            overflow: 'hidden'
          }}>
            <div style={{
              background: 'white',
              height: '100%',
              width: `${progressPercentage}%`,
              transition: 'width 0.3s ease',
              borderRadius: '10px'
            }} />
          </div>
          
          <p style={{
            margin: '0.5rem 0 0 0',
            fontSize: 'clamp(0.8rem, 1.5vw, 0.9rem)',
            opacity: 0.9
          }}>
            Question {currentQuestion + 1} of {totalQuestions}
          </p>
        </div>

        {/* Question Content */}
        <div style={{
          padding: 'clamp(1.25rem, 2.5vw, 2rem)'
        }}>
          <h3 style={{
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            fontWeight: '600',
            color: '#1a365d',
            marginBottom: '1.25rem',
            lineHeight: 1.5
          }}>
            {currentQ.question}
          </h3>

          {/* Options */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem',
            marginBottom: '1.75rem'
          }}>
            {currentQ.options.map((option) => {
              const isSelected = selectedAnswer === option.id;
              const isCorrectAnswer = option.isCorrect;
              const showCorrect = showFeedback && isCorrectAnswer;
              const showWrong = showFeedback && isSelected && !isCorrectAnswer;

              return (
                <button
                  key={option.id}
                  onClick={() => handleAnswerSelect(option.id)}
                  disabled={showFeedback}
                  style={{
                    padding: '0.85rem 1rem',
                    textAlign: 'left',
                    background: showCorrect ? '#d1fae5' : showWrong ? '#fee2e2' : isSelected ? '#ede9fe' : '#f8fafc',
                    border: `2px solid ${showCorrect ? '#10b981' : showWrong ? '#ef4444' : isSelected ? '#8b5cf6' : '#e2e8f0'}`,
                    borderRadius: '10px',
                    cursor: showFeedback ? 'not-allowed' : 'pointer',
                    transition: 'all 0.2s ease',
                    fontSize: 'clamp(0.85rem, 1.6vw, 0.95rem)',
                    color: '#1a365d',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    opacity: showFeedback && !showCorrect && !showWrong ? 0.5 : 1
                  }}
                  onMouseEnter={(e) => {
                    if (!showFeedback) {
                      e.currentTarget.style.borderColor = '#8b5cf6';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!showFeedback && !isSelected) {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  <span style={{
                    width: '26px',
                    height: '26px',
                    borderRadius: '50%',
                    background: showCorrect ? '#10b981' : showWrong ? '#ef4444' : isSelected ? '#8b5cf6' : '#e2e8f0',
                    color: showCorrect || showWrong || isSelected ? 'white' : '#64748b',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: '600',
                    fontSize: '0.8rem',
                    flexShrink: 0
                  }}>
                    {option.id}
                  </span>
                  
                  <span style={{ flex: 1 }}>{option.text}</span>
                  
                  {showCorrect && <CheckCircle size={22} color="#10b981" />}
                  {showWrong && <XCircle size={22} color="#ef4444" />}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '0.75rem'
          }}>
            {!showFeedback ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={!selectedAnswer}
                className="btn"
                style={{
                  padding: '0.75rem 1.75rem',
                  minHeight: 'auto',
                  opacity: selectedAnswer ? 1 : 0.5,
                  cursor: selectedAnswer ? 'pointer' : 'not-allowed'
                }}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="btn"
                style={{
                  padding: '0.75rem 1.75rem',
                  minHeight: 'auto'
                }}
              >
                {currentQuestion < totalQuestions - 1 ? 'Next Question' : 'View Results'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}