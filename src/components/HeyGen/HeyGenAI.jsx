import React, { useState } from 'react';
import { MessageCircle, CheckCircle, X } from 'lucide-react';

export default function HeyGenAI({ onComplete }) {
  const [sessionStarted, setSessionStarted] = useState(false);
  const [conversationCompleted, setConversationCompleted] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);


  const heygenUrl = "https://labs.heygen.com/guest/interactive-avatar/share?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJTaWxhc0hSX3B1YmxpYyIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzLzU4MmVlOGZlMDcyYTQ4ZmRhM2JjNjgyNDFhZWZmNjYwXzQ1NjYwL3ByZXZpZXdfdGFyZ2V0LndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6Ijg1MDYwODI2M2M5MjQ3NzM4NGQ3NjIxODU3YWQwNTYxIiwidXNlcm5hbWUiOiI2YTY5Y2EyNTRmYTU0OTIzODliNzYxNjAyYzJlMTM2MCJ9";

  const handleStartSession = () => {
    setSessionStarted(true);
  };

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  const handleMarkCompleted = () => {
    setConversationCompleted(true);
  };

  const handleClose = () => {
    if (conversationCompleted) {
      onComplete();
    }
  };

  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: sessionStarted ? '0' : 'clamp(1rem, 3vw, 2rem)',
      background: sessionStarted ? '#000' : 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)'
    }}>
      {!sessionStarted ? (
        <>
          <div style={{ 
            maxWidth: '1000px', 
            width: '100%',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)'
          }}>
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 4vw, 2.5rem)', 
              fontWeight: 'bold', 
              color: '#fff',
              textAlign: 'center',
              marginBottom: '1rem'
            }}>
              Q&A with CEO
            </h2>
            <p style={{ 
              fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', 
              color: '#cbd5e1',
              textAlign: 'center',
              marginBottom: '2rem'
            }}>
              Have an interactive conversation with our CEO using AI
            </p>
          </div>

          <div style={{
            width: '100%',
            maxWidth: '1000px',
            background: 'white',
            borderRadius: '16px',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
            overflow: 'hidden'
          }}>
            <div style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              textAlign: 'center'
            }}>
              <div style={{
                width: '120px',
                height: '120px',
                margin: '0 auto 2rem',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(102, 126, 234, 0.3)'
              }}>
                <MessageCircle size={60} color="white" />
              </div>

              <h3 style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                Meet Our CEO - AI Avatar
              </h3>
              <p style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                color: '#6b7280',
                marginBottom: '2rem',
                lineHeight: '1.6',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}>
                Click below to start an interactive AI avatar session. Have a conversation with our CEO and learn about the company vision, culture, and your role.
              </p>

              <div style={{
                padding: '1rem',
                background: '#dbeafe',
                borderRadius: '8px',
                marginBottom: '2rem',
                border: '1px solid #3b82f6',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textAlign: 'left'
              }}>
                <MessageCircle size={20} color="#3b82f6" style={{ flexShrink: 0 }} />
                <p style={{
                  margin: 0,
                  fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                  color: '#1e40af',
                  fontWeight: '500'
                }}>
                  The AI avatar will load in this window. After your conversation, click "Mark as Completed" to continue.
                </p>
              </div>

              <button
                onClick={handleStartSession}
                style={{
                  padding: '1rem 2.5rem',
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                  fontWeight: '600',
                  color: 'white',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)',
                  display: 'inline-flex',
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
                Start Conversation
                <MessageCircle size={18} />
              </button>
            </div>
          </div>
        </>
      ) : (
        <div style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          background: '#000'
        }}>
          {/* Loading indicator */}
          {!iframeLoaded && (
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              zIndex: 10
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                border: '4px solid rgba(255, 255, 255, 0.3)',
                borderTopColor: '#667eea',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 1rem'
              }}></div>
              <p style={{ color: 'white', fontSize: '1rem' }}>Loading AI Avatar...</p>
            </div>
          )}

          {/* HeyGen Iframe - Full Screen */}
          <div style={{
            flex: 1,
            width: '100%',
            height: '100%',
            position: 'relative'
          }}>
            <iframe
              src={heygenUrl}
              onLoad={handleIframeLoad}
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
                position: 'absolute',
                top: 0,
                left: 0
              }}
              allow="camera; microphone; autoplay; fullscreen"
              allowFullScreen
              title="HeyGen AI Avatar"
            />
          </div>

          {/* Bottom Control Bar - Fixed Overlay */}
          <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '80px',
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            borderTop: '1px solid #e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 clamp(1rem, 3vw, 2rem)',
            gap: '1rem',
            zIndex: 1000,
            boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: conversationCompleted ? '#10b981' : '#ef4444',
                animation: conversationCompleted ? 'none' : 'pulse 2s infinite'
              }}></div>
              <p style={{
                margin: 0,
                fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                color: '#6b7280',
                fontWeight: '500'
              }}>
                {conversationCompleted ? 'Session Completed ✓' : 'Session Active'}
              </p>
            </div>

            <div style={{
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'center'
            }}>
              {!conversationCompleted && (
                <button
                  onClick={handleMarkCompleted}
                  style={{
                    padding: '0.75rem 1.5rem',
                    fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                    fontWeight: '600',
                    color: 'white',
                    background: '#10b981',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(16, 185, 129, 0.3)';
                  }}
                >
                  Mark as Completed
                </button>
              )}

              <button
                onClick={handleClose}
                disabled={!conversationCompleted}
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                  fontWeight: '600',
                  color: 'white',
                  background: conversationCompleted ? '#667eea' : '#d1d5db',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: conversationCompleted ? 'pointer' : 'not-allowed',
                  transition: 'all 0.2s ease',
                  opacity: conversationCompleted ? 1 : 0.6,
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
                onMouseEnter={(e) => {
                  if (conversationCompleted) {
                    e.currentTarget.style.background = '#5a67d8';
                  }
                }}
                onMouseLeave={(e) => {
                  if (conversationCompleted) {
                    e.currentTarget.style.background = '#667eea';
                  }
                }}
              >
                {conversationCompleted && <CheckCircle size={18} />}
                Continue →
              </button>
            </div>
          </div>

          <style>{`
            @keyframes spin {
              to { transform: rotate(360deg); }
            }
            @keyframes pulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.5; }
            }
          `}</style>
        </div>
      )}
    </div>
  );
}