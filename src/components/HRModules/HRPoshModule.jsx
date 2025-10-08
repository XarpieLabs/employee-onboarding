import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw, BookOpen } from 'lucide-react';

export default function HRPoshModule({ onComplete }) {
  const [currentStep, setCurrentStep] = useState('story'); // 'story', 'quiz', 'result'
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizComplete, setQuizComplete] = useState(false);
  const [passed, setPassed] = useState(false);

  const story = {
    title: "Understanding POSH: A Workplace Scenario",
    content: `Sarah joined IndiVillage as a new Software Engineer. On her first day, she noticed that the office had a friendly and professional atmosphere. During lunch, her colleague Mike introduced himself and welcomed her to the team.

Throughout the week, Sarah observed various interactions in the office. She noticed that:
• Team members maintained professional boundaries while being friendly
• People respected each other's personal space
• Communication was clear and respectful
• Everyone was treated equally regardless of gender

One day, Sarah's manager conducted a POSH (Prevention of Sexual Harassment) training session. The manager explained that POSH guidelines exist to ensure a safe, respectful, and professional workplace for everyone.

The training covered important aspects like:
• What constitutes appropriate workplace behavior
• How to maintain professional relationships
• Understanding boundaries and consent
• Reporting mechanisms if anyone feels uncomfortable

Sarah realized that understanding and following POSH guidelines is essential for creating a positive work environment where everyone can thrive professionally.`,
    image: '👥'
  };

  const questions = [
    {
      id: 1,
      question: "How should you greet a female colleague on her first day at the office?",
      options: [
        "Give her a hug to make her feel welcome",
        "Offer a professional handshake and introduce yourself",
        "Comment on her appearance to break the ice",
        "Wait for her to approach you first"
      ],
      correctAnswer: 1,
      explanation: "A professional handshake and introduction is the appropriate way to greet any new colleague, maintaining professional boundaries while being welcoming."
    },
    {
      id: 2,
      question: "Your colleague shares personal information with you. What should you do?",
      options: [
        "Share it with other team members",
        "Keep it confidential and respect their privacy",
        "Post about it on social media",
        "Use it as a conversation topic with others"
      ],
      correctAnswer: 1,
      explanation: "Respecting privacy and maintaining confidentiality is crucial in a professional workplace. Personal information should never be shared without consent."
    },
    {
      id: 3,
      question: "During a team meeting, how should you address your female manager?",
      options: [
        "Use casual terms like 'dear' or 'sweetheart'",
        "By her professional title or name, just like any other colleague",
        "Avoid making eye contact",
        "Only speak when she asks you a direct question"
      ],
      correctAnswer: 1,
      explanation: "Professional titles and names should be used consistently for all colleagues regardless of gender, maintaining equality and respect."
    },
    {
      id: 4,
      question: "A colleague seems uncomfortable with a conversation topic. What should you do?",
      options: [
        "Continue the conversation to lighten the mood",
        "Change the topic immediately and respect their comfort",
        "Ask them why they're being sensitive",
        "Involve others to make them feel included"
      ],
      correctAnswer: 1,
      explanation: "Respecting others' boundaries and comfort levels is essential. If someone appears uncomfortable, changing the topic shows respect and professionalism."
    },
    {
      id: 5,
      question: "What is the best way to give feedback to a female colleague on her work?",
      options: [
        "Focus only on her appearance and presentation style",
        "Provide constructive, work-related feedback professionally",
        "Compare her to other team members",
        "Give feedback only through informal channels"
      ],
      correctAnswer: 1,
      explanation: "Feedback should always be professional, constructive, and focused on work performance, delivered through appropriate channels regardless of gender."
    }
  ];

  const handleStartQuiz = () => {
    setCurrentStep('quiz');
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setQuizComplete(false);
    setPassed(false);
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleSubmitQuiz();
    }
  };

  const handleSubmitQuiz = () => {
    let allCorrect = true;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] !== question.correctAnswer) {
        allCorrect = false;
      }
    });

    setPassed(allCorrect);
    setQuizComplete(true);
    setCurrentStep('result');
  };

  const handleRetry = () => {
    setCurrentStep('story');
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setQuizComplete(false);
    setPassed(false);
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)',
      background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(2rem, 4vw, 3rem)'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '1rem'
          }}>
            POSH Training Module
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: '#64748b'
          }}>
            Prevention of Sexual Harassment - Workplace Ethics
          </p>
        </div>

        {/* Story Section */}
        {currentStep === 'story' && (
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1rem'
              }}>
                {story.image}
              </div>
              <h3 style={{
                fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
                fontWeight: 'bold',
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                {story.title}
              </h3>
            </div>

            <div style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
              lineHeight: '1.8',
              color: '#4b5563',
              whiteSpace: 'pre-line',
              marginBottom: '2rem'
            }}>
              {story.content}
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <button
                onClick={handleStartQuiz}
                style={{
                  padding: '1rem 3rem',
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  fontWeight: '600',
                  color: 'white',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem'
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
                <BookOpen size={20} />
                Start Quiz
              </button>
            </div>
          </div>
        )}

        {/* Quiz Section */}
        {currentStep === 'quiz' && (
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <div style={{
              marginBottom: '2rem',
              paddingBottom: '1rem',
              borderBottom: '2px solid #e5e7eb'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'between',
                alignItems: 'center',
                marginBottom: '1rem'
              }}>
                <span style={{
                  fontSize: 'clamp(0.875rem, 1.8vw, 1rem)',
                  color: '#6b7280',
                  fontWeight: '500'
                }}>
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span style={{
                  fontSize: 'clamp(0.875rem, 1.8vw, 1rem)',
                  color: '#667eea',
                  fontWeight: '600'
                }}>
                  {Object.keys(selectedAnswers).length} / {questions.length} Answered
                </span>
              </div>
              <div style={{
                width: '100%',
                height: '8px',
                background: '#e5e7eb',
                borderRadius: '4px',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  height: '100%',
                  background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
                  transition: 'width 0.3s ease'
                }}></div>
              </div>
            </div>

            <h3 style={{
              fontSize: 'clamp(1.125rem, 2.5vw, 1.375rem)',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '2rem',
              lineHeight: '1.5'
            }}>
              {questions[currentQuestion].question}
            </h3>

            <div style={{
              display: 'grid',
              gap: '1rem',
              marginBottom: '2rem'
            }}>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(currentQuestion, index)}
                  style={{
                    padding: '1.25rem',
                    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                    textAlign: 'left',
                    color: selectedAnswers[currentQuestion] === index ? '#667eea' : '#1f2937',
                    background: selectedAnswers[currentQuestion] === index ? '#ede9fe' : '#f9fafb',
                    border: selectedAnswers[currentQuestion] === index ? '2px solid #667eea' : '2px solid #e5e7eb',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    fontWeight: selectedAnswers[currentQuestion] === index ? '600' : '400'
                  }}
                  onMouseEnter={(e) => {
                    if (selectedAnswers[currentQuestion] !== index) {
                      e.currentTarget.style.background = '#f3f4f6';
                      e.currentTarget.style.borderColor = '#d1d5db';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (selectedAnswers[currentQuestion] !== index) {
                      e.currentTarget.style.background = '#f9fafb';
                      e.currentTarget.style.borderColor = '#e5e7eb';
                    }
                  }}
                >
                  <span style={{ marginRight: '1rem', fontWeight: '600' }}>
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </button>
              ))}
            </div>

            <div style={{
              display: 'flex',
              justifyContent: 'flex-end'
            }}>
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswers[currentQuestion] === undefined}
                style={{
                  padding: '0.875rem 2rem',
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                  fontWeight: '600',
                  color: 'white',
                  background: selectedAnswers[currentQuestion] !== undefined ? '#667eea' : '#d1d5db',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: selectedAnswers[currentQuestion] !== undefined ? 'pointer' : 'not-allowed',
                  transition: 'all 0.3s ease',
                  opacity: selectedAnswers[currentQuestion] !== undefined ? 1 : 0.6
                }}
              >
                {currentQuestion < questions.length - 1 ? 'Next Question →' : 'Submit Quiz'}
              </button>
            </div>
          </div>
        )}

        {/* Result Section */}
        {currentStep === 'result' && (
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: 'clamp(2rem, 4vw, 3rem)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            textAlign: 'center'
          }}>
            <div style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: passed ? '#d1fae5' : '#fee2e2',
              margin: '0 auto 2rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {passed ? (
                <CheckCircle size={60} color="#10b981" />
              ) : (
                <XCircle size={60} color="#ef4444" />
              )}
            </div>

            <h3 style={{
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 'bold',
              color: passed ? '#065f46' : '#991b1b',
              marginBottom: '1rem'
            }}>
              {passed ? 'Congratulations! 🎉' : 'Not Quite There Yet'}
            </h3>

            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              color: '#6b7280',
              marginBottom: '2rem',
              lineHeight: '1.6'
            }}>
              {passed
                ? 'You have successfully completed the POSH training module! You answered all questions correctly and demonstrated a clear understanding of workplace ethics and professional conduct.'
                : 'You need to answer all questions correctly to pass the POSH training. Please review the story and try again. Understanding these concepts is crucial for maintaining a respectful workplace.'}
            </p>

            {!passed && (
              <div style={{
                padding: '1.5rem',
                background: '#fef3c7',
                borderRadius: '12px',
                marginBottom: '2rem',
                border: '1px solid #f59e0b'
              }}>
                <p style={{
                  fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                  color: '#92400e',
                  margin: 0,
                  fontWeight: '500'
                }}>
                  💡 Review the story carefully and understand the key principles of POSH before retrying the quiz.
                </p>
              </div>
            )}

            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              {!passed && (
                <button
                  onClick={handleRetry}
                  style={{
                    padding: '1rem 2rem',
                    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                    fontWeight: '600',
                    color: 'white',
                    background: '#ef4444',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <RotateCcw size={20} />
                  Try Again
                </button>
              )}

              {passed && (
                <button
                  onClick={onComplete}
                  style={{
                    padding: '1rem 3rem',
                    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                    fontWeight: '600',
                    color: 'white',
                    background: '#10b981',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(16, 185, 129, 0.4)'
                  }}
                >
                  Continue to Next Step →
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}