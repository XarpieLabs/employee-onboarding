// ============================================
// FILE: src/components/Video/VideoPlayer.jsx
// STEP 6: Leadership Video(FIXED)
// ============================================

import React, { useState, useRef, useEffect } from 'react';

export default function VideoPlayer({ onComplete }) {
  const [videoWatched, setVideoWatched] = useState(false);
  const playerRef = useRef(null);
  const [player, setPlayer] = useState(null);

  const videoId = 'fTxW0Ll2KeI';
  const videoTitle = 'Manju Kesani at the Golisano';

  useEffect(() => {
    const loadYouTubeAPI = () => {
      if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    };

    const initPlayer = () => {
      if (window.YT && window.YT.Player && playerRef.current) {
        const newPlayer = new window.YT.Player(playerRef.current, {
          videoId: videoId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            modestbranding: 1,
            rel: 0
          },
          events: {
            onStateChange: onPlayerStateChange
          }
        });
        setPlayer(newPlayer);
      }
    };

    loadYouTubeAPI();

    window.onYouTubeIframeAPIReady = () => {
      initPlayer();
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    }

    return () => {
      if (player) {
        player.destroy();
      }
    };
  }, []);

  const onPlayerStateChange = (event) => {
    if (event.data === 0) {
      setVideoWatched(true);
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
          Welcome Message from Leadership
        </h2>
        <p style={{ 
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', 
          color: '#cbd5e1',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          Watch this important message from our leadership team
        </p>
      </div>

      <div style={{
        width: '100%',
        maxWidth: '1000px',
        background: 'white',
        borderRadius: '16px',
        padding: 'clamp(1.5rem, 3vw, 2rem)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)'
      }}>
        <h3 style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
          fontWeight: '600',
          color: '#1f2937',
          marginBottom: '1rem',
          textAlign: 'center'
        }}>
          {videoTitle}
        </h3>

        <div style={{
          position: 'relative',
          paddingBottom: '56.25%',
          height: 0,
          overflow: 'hidden',
          borderRadius: '12px',
          marginBottom: '1.5rem',
          background: '#000'
        }}>
          <div 
            ref={playerRef}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%'
            }}
          />
        </div>

        <div style={{
          padding: 'clamp(0.75rem, 2vw, 1rem)',
          background: videoWatched ? '#d1fae5' : '#fef3c7',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          border: videoWatched ? '1px solid #52b788' : '1px solid #f59e0b'
        }}>
          <p style={{
            margin: 0,
            fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
            color: videoWatched ? '#065f46' : '#92400e',
            textAlign: 'center',
            fontWeight: '500'
          }}>
            {videoWatched
              ? '✓ Video completed! Click continue to proceed.'
              : 'Please watch the complete video to continue.'}
          </p>
        </div>

        <button
          onClick={onComplete}
          disabled={!videoWatched}
          className="btn"
          style={{
            width: '100%',
            opacity: videoWatched ? 1 : 0.5,
            cursor: videoWatched ? 'pointer' : 'not-allowed'
          }}
        >
          {videoWatched ? 'Continue to Q&A with CEO →' : 'Complete Video to Continue'}
        </button>
      </div>
    </div>
  );
}