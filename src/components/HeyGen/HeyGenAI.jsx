import React, { useState } from 'react';
import { ExternalLink, MessageCircle, Video, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import TypeWriter from '../TypeWriter';

export default function HeyGenAI({ onComplete }) {
  const [hasOpened, setHasOpened] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const heygenUrl = "https://labs.heygen.com/interactive-avatar/share?share=eyJxdWFsaXR5IjoiaGlnaCIsImF2YXRhck5hbWUiOiJTaWxhc0hSX3B1YmxpYyIsInByZXZpZXdJ%0D%0AbWciOiJodHRwczovL2ZpbGVzMi5oZXlnZW4uYWkvYXZhdGFyL3YzLzU4MmVlOGZlMDcyYTQ4ZmRh%0D%0AM2JjNjgyNDFhZWZmNjYwXzQ1NjYwL3ByZXZpZXdfdGFyZ2V0LndlYnAiLCJuZWVkUmVtb3ZlQmFj%0D%0Aa2dyb3VuZCI6ZmFsc2UsImtub3dsZWRnZUJhc2VJZCI6Ijg1MDYwODI2M2M5MjQ3NzM4NGQ3NjIx%0D%0AODU3YWQwNTYxIiwidXNlcm5hbWUiOiI2YTY5Y2EyNTRmYTU0OTIzODliNzYxNjAyYzJlMTM2MCJ9";

  const handleOpenHeyGen = () => {
    window.open(heygenUrl, '_blank', 'noopener,noreferrer');
    setHasOpened(true);
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
      <div style={{ 
        width: '100%', 
        maxWidth: '1600px',
        background: 'white',
        borderRadius: 'clamp(24px, 3vw, 32px)',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        border: '3px solid white'
      }}>
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
            margin: '0 0 0.5rem 0',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            letterSpacing: '0.02em',
            lineHeight: '1.3'
          }}>
            <TypeWriter 
              key="heygen-header"
              text="Q&A with CEO"
              speed={50}
              delay={500}
              onComplete={() => setShowSubtitle(true)}
            />
          </h1>
          <div style={{
            fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
            color: 'white',
            margin: 0,
            fontWeight: '400',
            position: 'relative',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
          }}>
            {showSubtitle && (
              <TypeWriter 
                key="heygen-subtitle"
                text="Interactive AI-powered conversation with our CEO"
                speed={30}
                delay={0}
                onComplete={() => setShowContent(true)}
              />
            )}
          </div>
        </div>

        <motion.div 
          style={{
            background: 'linear-gradient(180deg, #9edbe8 0%, #eef6eb 100%)',
            padding: 'clamp(1.5rem, 2.5vw, 2rem) clamp(1rem, 2vw, 1.5rem)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: showContent ? 1 : 0, 
            y: showContent ? 0 : 20 
          }}
          transition={{ duration: 0.6 }}
        >
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
            <Video size={40} color="white" />
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
            Have a conversation with our CEO powered by AI. Ask questions about the company, 
            our vision, culture, and anything else you would like to know!
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
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '0.75rem'
            }}>
              <MessageCircle size={20} color="#667eea" />
              <h3 style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                fontWeight: '600',
                color: '#1a365d',
                margin: 0
              }}>
                Interactive AI Experience
              </h3>
            </div>
            <p style={{
              fontSize: 'clamp(0.85rem, 1.7vw, 0.95rem)',
              color: '#475569',
              lineHeight: '1.6',
              margin: 0,
              textAlign: 'center'
            }}>
              Click below to open the interactive session in a new window. You can ask questions 
              and have a real-time conversation with our AI-powered CEO avatar.
            </p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
          }}>
            <button
              onClick={handleOpenHeyGen}
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
              <ExternalLink size={20} />
              Open Q&A Session
            </button>
          </div>

          {hasOpened && (
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
                Session opened! Complete your conversation and return here to continue.
              </p>
            </div>
          )}

          <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)'
          }}>
            <button
              onClick={onComplete}
              disabled={!hasOpened}
              style={{
                padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.5rem, 3vw, 2rem)',
                fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
                fontWeight: '700',
                color: '#1e5a8e',
                background: hasOpened ? 'linear-gradient(135deg, #a3e635 0%, #84cc16 100%)' : '#9ca3af',
                border: 'none',
                borderRadius: '20px',
                cursor: hasOpened ? 'pointer' : 'not-allowed',
                boxShadow: hasOpened ? '0 6px 20px rgba(132, 204, 22, 0.35), 0 2px 6px rgba(0, 0, 0, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize',
                letterSpacing: '0.02em',
                opacity: hasOpened ? 1 : 0.6
              }}
              onMouseEnter={(e) => {
                if (hasOpened) {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(132, 204, 22, 0.4), 0 3px 8px rgba(0, 0, 0, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (hasOpened) {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(132, 204, 22, 0.35), 0 2px 6px rgba(0, 0, 0, 0.1)';
                }
              }}
            >
              {hasOpened ? 'Continue to Your Role' : 'Complete Q&A First'}
            </button>
          </div>

          <div style={{
            padding: 'clamp(0.75rem, 1.5vw, 1rem)',
            background: 'rgba(254, 243, 199, 0.9)',
            borderRadius: '8px',
            border: '2px solid #fbbf24',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.06)',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <p style={{
              fontSize: 'clamp(0.8rem, 1.6vw, 0.85rem)',
              color: '#92400e',
              margin: 0,
              lineHeight: '1.5',
              textAlign: 'center'
            }}>
              <strong>Tip:</strong> Make sure pop-ups are enabled in your browser. 
              The Q&A session will open in a new tab.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}