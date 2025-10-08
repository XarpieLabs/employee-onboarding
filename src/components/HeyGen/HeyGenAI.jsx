import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

export default function HeyGenAI({ onComplete }) {
  const [sessionStarted, setSessionStarted] = useState(false);
  const [conversationCompleted, setConversationCompleted] = useState(false);

  const heygenUrl = "https://labs.heygen.com/guest/interactive-avatar/share?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJTaWxhc0hSX3B1YmxpYyIsInByZXZpZXdJbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzLzU4MmVlOGZlMDcyYTQ4ZmRhM2JjNjgyNDFhZWZmNjYwXzQ1NjYwL3ByZXZpZXdfdGFyZ2V0LndlYnAiLCJuZWVkUmVtb3ZlQmFja2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6Ijg1MDYwODI2M2M5MjQ3NzM4NGQ3NjIxODU3YWQwNTYxIiwidXNlcm5hbWUiOiI2YTY5Y2EyNTRmYTU0OTIzODliNzYxNjAyYzJlMTM2MCJ9";

  const handleOpenInNewTab = () => {
    window.open(heygenUrl, '_blank', 'noopener,noreferrer');
    setSessionStarted(true);
  };

  const handleMarkCompleted = () => {
    setConversationCompleted(true);
  };

  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(1rem, 3vw, 2rem)',
      background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)'
    }}>
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
          {!sessionStarted ? (
            <>
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
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
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
                Click below to open the interactive AI avatar session in a new tab. Have a conversation with our CEO and learn about the company vision, culture, and your role.
              </p>

              <div style={{
                padding: '1rem',
                background: '#fef3c7',
                borderRadius: '8px',
                marginBottom: '2rem',
                border: '1px solid #f59e0b',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                textAlign: 'left'
              }}>
                <ExternalLink size={20} color="#f59e0b" style={{ flexShrink: 0 }} />
                <p style={{
                  margin: 0,
                  fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                  color: '#92400e',
                  fontWeight: '500'
                }}>
                  The AI avatar will open in a new tab. After your conversation, return here and click "Mark as Completed"
                </p>
              </div>

              <button
                onClick={handleOpenInNewTab}
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
                <ExternalLink size={18} />
              </button>
            </>
          ) : !conversationCompleted ? (
            <>
              <div style={{
                width: '100px',
                height: '100px',
                margin: '0 auto 2rem',
                background: '#f3f4f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  border: '4px solid #667eea',
                  borderTopColor: 'transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                fontWeight: '600',
                color: '#1f2937',
                marginBottom: '1rem'
              }}>
                Conversation in Progress
              </h3>
              <p style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                color: '#6b7280',
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Your AI avatar session is open in another tab. After completing your conversation, click the button below.
              </p>

              <button
                onClick={handleMarkCompleted}
                style={{
                  padding: '1rem 2rem',
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
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(16, 185, 129, 0.6)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(16, 185, 129, 0.4)';
                }}
              >
                Mark Conversation as Completed
              </button>
            </>
          ) : (
            <>
              <div style={{
                width: '100px',
                height: '100px',
                margin: '0 auto 2rem',
                background: '#d1fae5',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                fontWeight: '600',
                color: '#065f46',
                marginBottom: '1rem'
              }}>
                Conversation Completed!
              </h3>
              <p style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                color: '#6b7280',
                marginBottom: '2rem',
                lineHeight: '1.6'
              }}>
                Great job! You've completed your Q&A session with our CEO. Click continue to proceed to the next step.
              </p>
            </>
          )}
        </div>

        <div style={{
          padding: 'clamp(1rem, 2vw, 1.5rem)',
          background: '#f9fafb',
          borderTop: '1px solid #e5e7eb'
        }}>
          <button
            onClick={onComplete}
            disabled={!conversationCompleted}
            className="btn"
            style={{
              width: '100%',
              opacity: conversationCompleted ? 1 : 0.5,
              cursor: conversationCompleted ? 'pointer' : 'not-allowed',
              background: conversationCompleted ? '#10b981' : '#d1d5db'
            }}
          >
            {conversationCompleted ? 'Continue to Your Role & Responsibilities →' : 'Complete Conversation to Continue'}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}