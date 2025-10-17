// FILE: src/components/Video/CompanyInfoVideo.jsx
// STEP 3: Company Info Videos - 3 Videos in One Line

import React, { useState, useRef, useEffect } from 'react';
import { Play, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import TypeWriter from '../TypeWriter';

export default function CompanyInfoVideo({ onComplete }) {
  const [videosWatched, setVideosWatched] = useState({
    video1: false,
    video2: false,
    video3: false
  });
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const playerRefs = useRef({});
  const [players, setPlayers] = useState({});

  const videos = [
    { id: 'video1', title: 'IndiVillage Overview', youtubeId: '0-8saQTp-gc' },
    { id: 'video2', title: 'Every Step Forward', youtubeId: 'lltKQDbCMU0' },
    { id: 'video3', title: 'Manju Kesani at the Golisano', youtubeId: 'fTxW0Ll2KeI' }
  ];

  const allVideosWatched = Object.values(videosWatched).every(watched => watched);

  useEffect(() => {
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    window.onYouTubeIframeAPIReady = () => {
      videos.forEach(video => {
        if (playerRefs.current[video.id]) {
          const player = new window.YT.Player(playerRefs.current[video.id], {
            videoId: video.youtubeId,
            events: {
              onStateChange: (event) => onPlayerStateChange(event, video.id)
            }
          });
          setPlayers(prev => ({ ...prev, [video.id]: player }));
        }
      });
    };

    if (window.YT && window.YT.Player) {
      videos.forEach(video => {
        if (playerRefs.current[video.id]) {
          const player = new window.YT.Player(playerRefs.current[video.id], {
            videoId: video.youtubeId,
            events: {
              onStateChange: (event) => onPlayerStateChange(event, video.id)
            }
          });
          setPlayers(prev => ({ ...prev, [video.id]: player }));
        }
      });
    }
  }, []);

  const onPlayerStateChange = (event, videoId) => {
    if (event.data === 0) {
      setVideosWatched(prev => ({ ...prev, [videoId]: true }));
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
      padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 2rem) clamp(2rem, 3vw, 3rem)',
      background: 'linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 100%)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1400px',
        background: 'white',
        borderRadius: 'clamp(24px, 3vw, 32px)',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        border: '3px solid white',
        outlineOffset: '0px'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, #4a9d95 0%, #5fb9b0 100%)',
          padding: 'clamp(0.85rem, 1.8vw, 1.25rem) clamp(0.75rem, 1vw, 1rem)',
          borderBottom: '2px solid #3a8d85'
        }}>
          <h2 style={{ 
            fontSize: 'clamp(1.15rem, 2.8vw, 1.5rem)', 
            fontWeight: '700', 
            color: '#fde68a',
            textAlign: 'center',
            marginBottom: '0.5rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            letterSpacing: '0.02em',
            lineHeight: '1.3'
          }}>
            <TypeWriter 
              key="company-header"
              text="What It's Like to Join IndiVillage"
              speed={50}
              delay={500}
              onComplete={() => setShowSubtitle(true)}
            />
          </h2>
          <div style={{
            fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
            color: '#e2e8f0',
            textAlign: 'center',
            marginBottom: '0'
          }}>
            {showSubtitle && (
              <TypeWriter 
                key="company-subtitle"
                text="Learn about our mission and values through these videos"
                speed={30}
                delay={0}
                onComplete={() => setShowContent(true)}
              />
            )}
          </div>
        </div>

        <motion.div 
          style={{
            background: 'linear-gradient(180deg, #9edbe8 0%, #eef5eb 100%)',
            padding: 'clamp(2rem, 3vw, 2.5rem) clamp(1.5rem, 2.5vw, 2rem)'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: showContent ? 1 : 0, 
            y: showContent ? 0 : 20 
          }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ 
            fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)', 
            color: '#1e3a5f',
            textAlign: 'center',
            marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: '500'
          }}>
            Watch videos to learn about our mission and culture
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'clamp(1rem, 2vw, 1.5rem)',
            marginBottom: 'clamp(2rem, 3vw, 2.5rem)'
          }}>
            {videos.map((video) => (
              <div key={video.id} style={{
                background: 'white',
                borderRadius: '12px',
                overflow: 'hidden',
                border: videosWatched[video.id] ? '3px solid #52b788' : '3px solid #e5e7eb',
                position: 'relative',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, background: '#000' }}>
                  <iframe
                    ref={el => playerRefs.current[video.id] = el}
                    id={video.id}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%'
                    }}
                    src={`https://www.youtube.com/embed/${video.youtubeId}?enablejsapi=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                
                <div style={{
                  padding: 'clamp(0.75rem, 1.5vw, 1rem)',
                  background: '#fef3c7',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  minHeight: '60px'
                }}>
                  <h4 style={{
                    fontSize: 'clamp(0.8rem, 1.6vw, 0.95rem)',
                    fontWeight: '600',
                    margin: 0,
                    color: '#1f2937',
                    flex: 1
                  }}>
                    {video.title}
                  </h4>
                  {videosWatched[video.id] && (
                    <CheckCircle style={{ 
                      width: 'clamp(18px, 3vw, 22px)', 
                      height: 'clamp(18px, 3vw, 22px)', 
                      color: '#52b788',
                      flexShrink: 0,
                      marginLeft: '8px'
                    }} />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            padding: 'clamp(1rem, 2vw, 1.25rem)',
            background: 'rgba(255, 255, 255, 0.8)',
            borderRadius: '12px',
            marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            textAlign: 'center'
          }}>
            <p style={{
              margin: 0,
              fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
              color: '#64748b',
              fontWeight: '500'
            }}>
              {allVideosWatched
                ? '✓ Great! You have watched all videos.'
                : 'Please watch all videos completely to continue with your onboarding.'}
            </p>
          </div>

          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <button
              onClick={onComplete}
              disabled={!allVideosWatched}
              className="btn"
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                padding: 'clamp(0.75rem, 1.8vw, 0.9rem) clamp(2rem, 4vw, 2.5rem)',
                opacity: allVideosWatched ? 1 : 0.5,
                cursor: allVideosWatched ? 'pointer' : 'not-allowed',
                minHeight: 'clamp(48px, 8vw, 56px)'
              }}
            >
              {allVideosWatched ? 'Continue to Next Step →' : 'Complete All Videos to Continue'}
            </button>
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 768px) {
          div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}