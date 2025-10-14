// ============================================
// FILE: src/components/Video/VideoPlayer.jsx
// STEP 6: Leadership Video
// ============================================

import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
// import logoDark from '../../Asset/logoDark.png';

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
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 2rem) clamp(2rem, 3vw, 3rem)',
      background: 'linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 100%)',
      position: 'relative'
    }}>
      {/* Logo */}
     {/* Logo
<div style={{
  marginBottom: 'clamp(0.5rem, 1vw, 0.75rem)',
  animation: 'fadeInDown 0.8s ease-out'
}}>
  <img
    src={logoDark}
    alt="IndiVillage Technology"
    style={{
      height: 'clamp(25px, 3.5vw, 35px)',
      width: 'auto'
    }}
  />
</div> */}

      {/* Main Card */}
      <div style={{ 
        width: '100%', 
        maxWidth: '1600px', // CONTROL WIDTH HERE - was 1400px, now 1600px for wider layout
        background: 'white',
        borderRadius: 'clamp(24px, 3vw, 32px)',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        border: '3px solid white'
      }}>
        {/* Header Section with Gradient */}
        <div style={{
          padding: 'clamp(1.5rem, 3vw, 2rem) clamp(0.75rem, 1.5vw, 1.25rem)',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #4a9d95 0%, #5fb9b0 100%)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative overlay */}
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
            Welcome Message from Leadership
          </h1>
          <p style={{
            fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
            color: 'white',
            margin: 0,
            fontWeight: '400',
            position: 'relative',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)'
          }}>
            Watch this important message from our leadership team
          </p>
        </div>

        {/* Content Section */}
        <div style={{
          background: 'linear-gradient(180deg, #9edbe8 0%, #eef6eb 100%)',
          padding: 'clamp(1.5rem, 2.5vw, 2rem) clamp(1rem, 2vw, 1.5rem)'
        }}>
          {/* Video Title */}
          <h3 style={{
            fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
            fontWeight: '600',
            color: '#1a365d',
            marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
            textAlign: 'center',
            margin: '0 0 clamp(1rem, 2vw, 1.5rem) 0'
          }}>
            {videoTitle}
          </h3>

          {/* Video Container - 10% smaller */}
          <div style={{
            maxWidth: '90%', // CONTROL VIDEO SIZE HERE - reduces video to 90% of container width
            margin: '0 auto clamp(1.5rem, 2.5vw, 2rem)',
            position: 'relative',
            paddingBottom: '50.625%', // 90% of 56.25% = 50.625% for aspect ratio
            height: 0,
            overflow: 'hidden',
            borderRadius: '12px',
            background: '#000',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
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

          {/* Status Message */}
          <div style={{
            padding: 'clamp(1rem, 2vw, 1.25rem)',
            background: videoWatched ? 'rgba(209, 250, 229, 0.9)' : 'rgba(254, 243, 199, 0.9)',
            borderRadius: '12px',
            marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)',
            border: videoWatched ? '2px solid #52b788' : '2px solid #f59e0b',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
          }}>
            <p style={{
              margin: 0,
              fontSize: 'clamp(0.9rem, 1.9vw, 1.05rem)',
              color: videoWatched ? '#065f46' : '#1a365d',
              textAlign: 'center',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              {videoWatched && <CheckCircle size={20} />}
              {videoWatched
                ? 'Video completed! Click continue to proceed.'
                : 'Please watch all videos completely to continue with your onboarding.'}
            </p>
          </div>

          {/* Continue Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'center'
          }}>
            <button
              onClick={onComplete}
              disabled={!videoWatched}
              style={{
                padding: 'clamp(0.6rem, 1.5vw, 0.75rem) clamp(1.5rem, 3vw, 2rem)',
                fontSize: 'clamp(0.8rem, 1.8vw, 0.95rem)',
                fontWeight: '700',
                color: '#1e5a8e',
                background: videoWatched ? 'linear-gradient(135deg, #a3e635 0%, #84cc16 100%)' : '#9ca3af',
                border: 'none',
                borderRadius: '20px',
                cursor: videoWatched ? 'pointer' : 'not-allowed',
                boxShadow: videoWatched ? '0 6px 20px rgba(132, 204, 22, 0.35), 0 2px 6px rgba(0, 0, 0, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                textTransform: 'capitalize',
                letterSpacing: '0.02em',
                opacity: videoWatched ? 1 : 0.6
              }}
              onMouseEnter={(e) => {
                if (videoWatched) {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(132, 204, 22, 0.4), 0 3px 8px rgba(0, 0, 0, 0.15)';
                }
              }}
              onMouseLeave={(e) => {
                if (videoWatched) {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(132, 204, 22, 0.35), 0 2px 6px rgba(0, 0, 0, 0.1)';
                }
              }}
            >
              {videoWatched ? 'Continue to Q&A with CEO' : 'Complete Video to Continue'}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}