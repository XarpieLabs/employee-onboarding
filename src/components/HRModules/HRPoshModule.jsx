import React, { useState } from 'react';
import { Shield, CheckCircle, ChevronRight, Book, AlertCircle, Users, FileText, X, MessageCircle } from 'lucide-react';

export default function HRPoshModule({ onComplete }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scenarioPhase, setScenarioPhase] = useState(false);
  const [currentScenario, setCurrentScenario] = useState(0);
  const [chatMessages, setChatMessages] = useState([]);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [scenarioAnswers, setScenarioAnswers] = useState({});
  const [showScenarioQuestion, setShowScenarioQuestion] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const slides = [
    {
      id: 1,
      title: "What is POSH?",
      icon: Shield,
      color: "#667eea",
      content: [
        "POSH stands for Prevention of Sexual Harassment at Workplace",
        "It's a legal framework under the Sexual Harassment of Women at Workplace Act, 2013",
        "Ensures a safe and respectful work environment for all employees",
        "Mandatory for all organizations with 10 or more employees"
      ]
    },
    {
      id: 2,
      title: "What Constitutes Sexual Harassment?",
      icon: AlertCircle,
      color: "#ef4444",
      content: [
        "Unwelcome sexual advances or requests for sexual favors",
        "Unwelcome physical contact or advances",
        "Sexually colored remarks or jokes",
        "Showing pornography or sexual content",
        "Any other unwelcome physical, verbal, or non-verbal conduct of a sexual nature"
      ]
    },
    {
      id: 3,
      title: "Your Rights & Responsibilities",
      icon: Users,
      color: "#10b981",
      content: [
        "Right to work in a harassment-free environment",
        "Right to file a complaint without fear of retaliation",
        "Responsibility to treat all colleagues with respect",
        "Responsibility to report any harassment you witness",
        "Maintain confidentiality of complaints and proceedings"
      ]
    },
    {
      id: 4,
      title: "How to Report",
      icon: FileText,
      color: "#f59e0b",
      content: [
        "Contact ICC immediately",
        "File complaint within 3 months", 
        "Provide incident details",
        "Include witness names",
        "Confidential investigation assured"
      ]
    },
    {
      id: 5,
      title: "Zero Tolerance Policy",
      icon: Shield,
      color: "#8b5cf6",
      content: [
        "Zero tolerance for harassment",
        "All complaints investigated",
        "Strict action against offenders",
        "No retaliation allowed",
        "Regular training programs"
      ]
    }
  ];

  const scenarios = [
    {
      id: 1,
      title: "Late Night Email",
      context: "Raj receives a project update from team member Sonal.",
      chat: [
        { sender: "Sonal", message: "Hi Raj, project update sent. Hope this helps!", avatar: "", type: "received" },
        { sender: "Sonal", message: "Ready for the weekend!", avatar: "", type: "received" }
      ],
      question: "How should Raj respond?",
      options: [
        {
          text: "You and me both! Don't let the grind get you down, gorgeous! See you Monday.",
          label: "A",
          isCorrect: false,
          feedback: "Harassment Risk/Vague: This response includes inappropriate personal comments ('gorgeous') that could be considered harassment."
        },
        {
          text: "Received. Excellent work on getting this done tonight, Sonal. Rest up and enjoy the weekend.",
          label: "B",
          isCorrect: true,
          feedback: "The Right Answer: Non-Harassing & Appropriate - Professional, acknowledges good work, and maintains appropriate boundaries."
        },
        {
          text: "Same here! Maybe we should celebrate surviving the week with a drink Friday? My treat!",
          label: "C",
          isCorrect: false,
          feedback: "Too Informal/Overly Friendly: Could be perceived as an unwelcome advance outside work context."
        },
        {
          text: "Note taken. Please avoid sending non-essential communication outside of official office hours going forward.",
          label: "D",
          isCorrect: false,
          feedback: "Too Strict/Unnecessarily Harsh: Doesn't acknowledge the employee's effort and is overly formal."
        }
      ]
    },
    {
      id: 2,
      title: "Scenario 2: Concerned Colleague",
      context: "Mohit, a senior manager, notices his colleague, Neha, looks tired while reviewing documents at her desk late on a Friday.",
      chat: [
        { sender: "Mohit", message: "Hi Neha, still here? You look exhausted. Is that report giving you trouble?", avatar: "", type: "sent" },
        { sender: "Neha", message: "Hi Mohit. Yeah, it's a grind. I'm just hoping to finish this so I can rush home and finally get some rest. I'm wiped out.", avatar: "", type: "received" }
      ],
      question: "What should Mohit say next?",
      options: [
        {
          text: "A beautiful woman like you shouldn't be grinding this hard. You need someone to take care of you. What are you doing tonight?",
          label: "A",
          isCorrect: false,
          feedback: "Harassment Risk/Intrusive: Highly inappropriate! Contains unwelcome personal comments and intrusive questions."
        },
        {
          text: "Understood. That's enough for today then. Please wrap up and head out—we need you fresh on Monday.",
          label: "B",
          isCorrect: true,
          feedback: "The Right Answer: Non-Harassing & Appropriate - Shows professional concern for employee wellbeing while maintaining boundaries."
        },
        {
          text: "I know the feeling! Text me when you get home safe? I worry about people traveling alone this late.",
          label: "C",
          isCorrect: false,
          feedback: "Too Casual/Risky: Too personal and crosses professional boundaries by requesting personal contact."
        },
        {
          text: "Work-life balance is important, Neha. You must manage your time better so you don't stay late. That's a performance issue.",
          label: "D",
          isCorrect: false,
          feedback: "Too Strict/Condescending: Turns a supportive moment into an unnecessary criticism."
        }
      ]
    },
    {
      id: 3,
      title: "Scenario 3: Break Room Gossip",
      context: "Liam, a young project lead, is chatting with two male colleagues, Rahul and Suresh, in the break room.",
      chat: [
        { sender: "Rahul", message: "Did you hear about Priya's promotion? I heard she didn't get it by working late, if you catch my drift.", avatar: "", type: "received" },
        { sender: "Rahul", message: "She must have spent a lot of time in the CEO's office", avatar: "", type: "received" },
        { sender: "Suresh", message: "*forces a short, uncomfortable laugh and looks down at phone*", avatar: "", type: "received", isAction: true }
      ],
      question: "Liam needs to respond appropriately. What should he say?",
      options: [
        {
          text: "Seriously? That's messy. Anyway, did either of you catch the game last night?",
          label: "A",
          isCorrect: false,
          feedback: "Too Vague/Avoidance: Avoiding the issue makes you complicit. Silence enables harassment to continue."
        },
        {
          text: "Hey, stop right there. That kind of talk isn't professional and it's not appropriate for the workplace. Let's stick to the Q3 reports.",
          label: "B",
          isCorrect: true,
          feedback: "The Right Answer: Non-Harassing & Appropriate - Direct, professional, and shuts down inappropriate behavior immediately."
        },
        {
          text: "That's a sick thing to say, Rahul! Why are you always such a jerk? You should be ashamed of yourself.",
          label: "C",
          isCorrect: false,
          feedback: "Harassment Risk/Confrontational: Too confrontational and emotional. This could escalate the situation unnecessarily."
        },
        {
          text: "I don't want to hear that. I'm going to walk away now, you two can discuss that garbage somewhere else.",
          label: "D",
          isCorrect: false,
          feedback: "Self-Protection/Passive-Aggressive: Doesn't actually address the inappropriate behavior."
        }
      ]
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Move to scenario phase after slides
      setScenarioPhase(true);
      startScenario(0);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const startScenario = (scenarioIndex) => {
    setCurrentScenario(scenarioIndex);
    setChatMessages([]);
    setCurrentMessageIndex(0);
    setShowScenarioQuestion(false);
    
    // Auto-play chat messages
    setTimeout(() => {
      playNextMessage(scenarioIndex, 0);
    }, 500);
  };

  const playNextMessage = (scenarioIndex, messageIndex) => {
    const scenario = scenarios[scenarioIndex];
    if (messageIndex < scenario.chat.length) {
      setChatMessages(prev => [...prev, scenario.chat[messageIndex]]);
      setCurrentMessageIndex(messageIndex + 1);
      
      // Continue to next message
      setTimeout(() => {
        playNextMessage(scenarioIndex, messageIndex + 1);
      }, 1500); // 1.5 seconds between messages
    } else {
      // All messages shown, now show question
      setTimeout(() => {
        setShowScenarioQuestion(true);
      }, 1000);
    }
  };

  const handleScenarioAnswer = (scenarioId, answerIndex) => {
    setScenarioAnswers({
      ...scenarioAnswers,
      [scenarioId]: answerIndex
    });
  };

  const handleScenarioNext = () => {
    if (currentScenario < scenarios.length - 1) {
      // Move to next scenario
      startScenario(currentScenario + 1);
    } else {
      // All scenarios complete, show results
      calculateResults();
    }
  };

  const calculateResults = () => {
    let correctCount = 0;
    
    scenarios.forEach(scenario => {
      const userAnswer = scenarioAnswers[scenario.id];
      if (userAnswer !== undefined && scenario.options[userAnswer].isCorrect) {
        correctCount++;
      }
    });
    
    setScore(correctCount);
    setShowResults(true);
  };

  const handleComplete = () => {
    onComplete();
  };

  const totalQuestions = scenarios.length;

  // Results View
  if (showResults) {
    const passed = score >= 2; // Need 2 out of 3 correct
    return (
      <div style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1rem, 3vw, 2rem)',
        background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)'
      }}>
        <div style={{
          maxWidth: '600px',
          width: '100%',
          background: 'white',
          borderRadius: '20px',
          padding: 'clamp(2rem, 4vw, 3rem)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          textAlign: 'center'
        }}>
          <div style={{
            width: '100px',
            height: '100px',
            margin: '0 auto 2rem',
            borderRadius: '50%',
            background: passed ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #ef4444, #dc2626)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: `0 10px 30px ${passed ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
          }}>
            {passed ? <CheckCircle size={60} color="white" /> : <AlertCircle size={60} color="white" />}
          </div>

          <h2 style={{
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            fontWeight: 'bold',
            color: '#1f2937',
            marginBottom: '1rem'
          }}>
            {passed ? 'Congratulations!' : 'Review Needed'}
          </h2>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#6b7280',
            marginBottom: '2rem'
          }}>
            You scored {score} out of {totalQuestions}
          </p>

          <div style={{
            padding: '1.5rem',
            background: passed ? '#d1fae5' : '#fee2e2',
            borderRadius: '12px',
            marginBottom: '2rem'
          }}>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: passed ? '#065f46' : '#991b1b',
              margin: 0,
              lineHeight: '1.6'
            }}>
              {passed 
                ? 'You have successfully completed the POSH training module. You understand how to handle workplace situations professionally and appropriately.'
                : 'Please review the training material and retake the scenarios. A score of 2/3 or higher is required to pass.'}
            </p>
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {!passed && (
              <button
                onClick={() => {
                  setShowResults(false);
                  setScenarioPhase(false);
                  setScenarioAnswers({});
                  setCurrentSlide(0);
                }}
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  fontWeight: '600',
                  color: '#667eea',
                  background: 'white',
                  border: '2px solid #667eea',
                  borderRadius: '10px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                Review Material
              </button>
            )}

            <button
              onClick={passed ? handleComplete : () => {
                setShowResults(false);
                setScenarioAnswers({});
                startScenario(0);
              }}
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
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
              {passed ? 'Complete Module' : 'Retake Scenarios'}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Scenario Chat View
  if (scenarioPhase) {
    const scenario = scenarios[currentScenario];
    const hasAnswered = scenarioAnswers[scenario.id] !== undefined;
    const selectedAnswer = scenarioAnswers[scenario.id];

    return (
      <div style={{
        width: '100%',
        minHeight: '100vh',
        padding: 'clamp(1rem, 3vw, 2rem)',
        background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Progress */}
          <div style={{
            background: 'white',
            borderRadius: '12px',
            padding: '1rem',
            marginBottom: '1.5rem',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '0.5rem'
            }}>
              <span style={{ fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)', color: '#6b7280', fontWeight: '500' }}>
                Scenario {currentScenario + 1} of {scenarios.length}
              </span>
              <span style={{ fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)', color: '#667eea', fontWeight: '600' }}>
                Knowledge Check
              </span>
            </div>
            <div style={{
              height: '6px',
              background: '#e5e7eb',
              borderRadius: '3px',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                width: `${((currentScenario + 1) / scenarios.length) * 100}%`,
                background: 'linear-gradient(90deg, #667eea, #764ba2)',
                transition: 'width 0.3s ease'
              }}></div>
            </div>
          </div>

          {/* Scenario Header */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              fontWeight: 'bold',
              color: '#1f2937',
              marginBottom: '1rem'
            }}>
              {scenario.title}
            </h2>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: '#6b7280',
              lineHeight: '1.6',
              margin: 0
            }}>
              {scenario.context}
            </p>
          </div>

          {/* Chat Box */}
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: '1.5rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            minHeight: '300px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '2px solid #e5e7eb'
            }}>
              <MessageCircle size={24} color="#667eea" />
              <h3 style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                fontWeight: '600',
                color: '#1f2937',
                margin: 0
              }}>
                Conversation
              </h3>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    justifyContent: msg.type === 'sent' ? 'flex-end' : 'flex-start',
                    animation: 'slideIn 0.3s ease-out'
                  }}
                >
                  {msg.type === 'received' && (
                    <div style={{
                      fontSize: '2rem',
                      flexShrink: 0
                    }}>
                      {msg.avatar}
                    </div>
                  )}
                  
                  <div style={{
                    maxWidth: '70%'
                  }}>
                    <div style={{
                      fontSize: 'clamp(0.75rem, 1.6vw, 0.85rem)',
                      color: '#6b7280',
                      marginBottom: '0.25rem',
                      textAlign: msg.type === 'sent' ? 'right' : 'left'
                    }}>
                      {msg.sender}
                    </div>
                    <div style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      background: msg.type === 'sent' ? '#667eea' : (msg.isAction ? '#fef3c7' : '#f3f4f6'),
                      color: msg.type === 'sent' ? 'white' : '#1f2937',
                      fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                      lineHeight: '1.5',
                      fontStyle: msg.isAction ? 'italic' : 'normal'
                    }}>
                      {msg.message}
                    </div>
                  </div>

                  {msg.type === 'sent' && (
                    <div style={{
                      fontSize: '2rem',
                      flexShrink: 0
                    }}>
                      {msg.avatar}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Question and Options */}
          {showScenarioQuestion && (
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              animation: 'fadeIn 0.5s ease-out'
            }}>
              <h3 style={{
                fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '1.5rem'
              }}>
                {scenario.question}
              </h3>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '2rem'
              }}>
                {scenario.options.map((option, idx) => {
                  const isSelected = selectedAnswer === idx;
                  const showFeedback = hasAnswered && isSelected;
                  
                  return (
                    <div key={idx}>
                      <button
                        onClick={() => handleScenarioAnswer(scenario.id, idx)}
                        disabled={hasAnswered}
                        style={{
                          width: '100%',
                          padding: '1rem',
                          textAlign: 'left',
                          background: isSelected ? (option.isCorrect ? '#d1fae5' : '#fee2e2') : 'white',
                          border: `2px solid ${isSelected ? (option.isCorrect ? '#10b981' : '#ef4444') : '#e5e7eb'}`,
                          borderRadius: '10px',
                          cursor: hasAnswered ? 'not-allowed' : 'pointer',
                          transition: 'all 0.2s ease',
                          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                          color: '#1f2937',
                          opacity: hasAnswered && !isSelected ? 0.5 : 1
                        }}
                        onMouseEnter={(e) => {
                          if (!hasAnswered) {
                            e.currentTarget.style.background = '#f9fafb';
                            e.currentTarget.style.borderColor = '#667eea';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!hasAnswered) {
                            e.currentTarget.style.background = 'white';
                            e.currentTarget.style.borderColor = '#e5e7eb';
                          }
                        }}
                      >
                        <span style={{ fontWeight: '700', marginRight: '0.5rem' }}>{option.label}.</span>
                        {option.text}
                      </button>
                      
                      {showFeedback && (
                        <div style={{
                          marginTop: '0.5rem',
                          padding: '0.75rem',
                          background: option.isCorrect ? '#d1fae5' : '#fee2e2',
                          borderRadius: '8px',
                          fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                          color: option.isCorrect ? '#065f46' : '#991b1b',
                          lineHeight: '1.5'
                        }}>
                          {option.feedback}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {hasAnswered && (
                <button
                  onClick={handleScenarioNext}
                  style={{
                    width: '100%',
                    padding: '1rem 2rem',
                    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                    fontWeight: '600',
                    color: 'white',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
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
                  {currentScenario < scenarios.length - 1 ? 'Next Scenario' : 'View Results'}
                  <ChevronRight size={20} />
                </button>
              )}
            </div>
          )}
        </div>

        <style>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  }

  // Training Slides View
  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(1rem, 3vw, 2rem)',
      background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)'
    }}>
      <div style={{
        maxWidth: '900px',
        width: '100%',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden'
      }}>
        {/* Progress Bar */}
        <div style={{
          height: '8px',
          background: '#e5e7eb'
        }}>
          <div style={{
            height: '100%',
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            background: 'linear-gradient(90deg, #667eea, #764ba2)',
            transition: 'width 0.3s ease'
          }}></div>
        </div>

        {/* Content */}
        <div style={{ padding: 'clamp(2rem, 4vw, 3rem)' }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '2rem'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: currentSlideData.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 4px 15px ${currentSlideData.color}40`
              }}>
                <Icon size={30} color="white" />
              </div>
              <div>
                <p style={{
                  fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                  color: '#6b7280',
                  margin: 0,
                  marginBottom: '0.25rem'
                }}>
                  Module {currentSlide + 1} of {slides.length}
                </p>
                <h2 style={{
                  fontSize: 'clamp(1.5rem, 3vw, 1.75rem)',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  margin: 0
                }}>
                  {currentSlideData.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Content List */}
          <div style={{
            background: '#f9fafb',
            borderRadius: '16px',
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            marginBottom: '2rem'
          }}>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {currentSlideData.content.map((item, index) => (
                <li key={index} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: index < currentSlideData.content.length - 1 ? '1.25rem' : 0,
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                  lineHeight: '1.6',
                  color: '#374151'
                }}>
                  <div style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: currentSlideData.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.15rem'
                  }}>
                    <CheckCircle size={14} color="white" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Buttons */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem'
          }}>
            <button
              onClick={handlePrevious}
              disabled={currentSlide === 0}
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                fontWeight: '600',
                color: currentSlide === 0 ? '#9ca3af' : '#667eea',
                background: 'white',
                border: `2px solid ${currentSlide === 0 ? '#e5e7eb' : '#667eea'}`,
                borderRadius: '10px',
                cursor: currentSlide === 0 ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s ease',
                opacity: currentSlide === 0 ? 0.5 : 1
              }}
            >
              Previous
            </button>

            <div style={{
              display: 'flex',
              gap: '0.5rem'
            }}>
              {slides.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: index === currentSlide ? '24px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: index === currentSlide ? currentSlideData.color : '#e5e7eb',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                fontWeight: '600',
                color: 'white',
                background: 'linear-gradient(135deg, #667eea, #764ba2)',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
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
              {currentSlide < slides.length - 1 ? 'Next' : 'Start Scenarios'}
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}