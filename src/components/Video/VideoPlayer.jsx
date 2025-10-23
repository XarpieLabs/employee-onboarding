// ============================================
// FILE: src/components/Video/VideoPlayer.jsx
// STEP 6: Leadership Video
// ============================================

import React, { useState, useRef, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import TypeWriter from '../TypeWriter';

export default function VideoPlayer({ onComplete }) {
  const [videoWatched, setVideoWatched] = useState(false);
  const playerRef = useRef(null);
  const [player, setPlayer] = useState(null);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [headerAnimationComplete, setHeaderAnimationComplete] = useState(false);
  const [isTyping, setIsTyping] = useState(true); // NEW: Controls typing phase

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
      {/* Main Card */}
      <motion.div 
        style={{ 
          width: '100%', 
          maxWidth: '1600px',
          background: 'white',
          borderRadius: 'clamp(24px, 3vw, 32px)',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
          border: '3px solid white'
        }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.3
        }}
      >
        {/* Sequential Header Section */}
        <motion.div 
          style={{
            padding: 'clamp(1.5rem, 3vw, 2rem) clamp(0.75rem, 1.5vw, 1.25rem)',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #4a9d95 0%, #5fb9b0 100%)',
            position: 'relative',
            overflow: 'hidden'
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
          onAnimationComplete={() => setHeaderAnimationComplete(true)}
        >
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
            margin: '0 0 0.5rem 0',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            letterSpacing: '0.02em',
            lineHeight: '1.3'
          }}>
            {headerAnimationComplete && (
              <TypeWriter 
                key="video-header"
                text="Welcome Message from Leadership"
                speed={50}
                delay={200}
                onComplete={() => setShowSubtitle(true)}
              />
            )}
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
                key="video-subtitle"
                text="Watch this important message from our leadership team"
                speed={30}
                delay={0}
                onComplete={() => {
                  setShowContent(true);
                  setIsTyping(false);
                }}
              />
            )}
          </div>
        </motion.div>

        {/* Content Section */}
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
          transition={{ 
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            delay: 0.2
          }}
        >
          {/* Video Title */}
          <motion.h3 
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.25rem)',
              fontWeight: '600',
              color: '#1a365d',
              marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
              textAlign: 'center',
              margin: '0 0 clamp(1rem, 2vw, 1.5rem) 0'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 20
            }}
            transition={{ 
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.3
            }}
          >
            {videoTitle}
          </motion.h3>

          {/* Video Container */}
          <motion.div 
            style={{
              maxWidth: '90%',
              margin: '0 auto clamp(1.5rem, 2.5vw, 2rem)',
              position: 'relative',
              paddingBottom: '50.625%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '12px',
              background: '#000',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 20
            }}
            transition={{ 
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.4
            }}
          >
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
          </motion.div>

          {/* Status Message */}
          <motion.div 
            style={{
              padding: 'clamp(1rem, 2vw, 1.25rem)',
              background: videoWatched ? 'rgba(209, 250, 229, 0.9)' : 'rgba(254, 243, 199, 0.9)',
              borderRadius: '12px',
              marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)',
              border: videoWatched ? '2px solid #52b788' : '2px solid #f59e0b',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 20
            }}
            transition={{ 
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.5
            }}
          >
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
          </motion.div>

          {/* Continue Button */}
          <motion.div 
            style={{
              display: 'flex',
              justifyContent: 'center'
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 20
            }}
            transition={{ 
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.6
            }}
          >
            <motion.button
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
              whileHover={videoWatched ? {
                y: -2,
                boxShadow: '0 8px 25px rgba(132, 204, 22, 0.4), 0 3px 8px rgba(0, 0, 0, 0.15)',
                transition: { duration: 0.2 }
              } : {}}
              whileTap={videoWatched ? { scale: 0.98 } : {}}
            >
              {videoWatched ? 'Continue to Q&A with CEO' : 'Complete Video to Continue'}
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}