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
    <motion.div 
      style={{ 
        width: '100%', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 2rem) clamp(2rem, 3vw, 3rem)',
        background: 'linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 100%)',
        position: 'relative'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Floating Background Elements */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: 0
          }}
          animate={{
            opacity: [0, 0.08, 0],
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            scale: [0, 1.2, 0],
            rotate: [0, 90]
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            width: '25px',
            height: '25px',
            background: `linear-gradient(45deg, rgba(74, 157, 149, 0.08) 0%, rgba(95, 185, 176, 0.12) 100%)`,
            borderRadius: '50%',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />
      ))}

      {/* Video Play Icons Floating */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`play-${i}`}
          initial={{ 
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            opacity: [0, 0.06, 0],
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: [0, 180],
            scale: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 18 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            zIndex: 1,
            color: 'rgba(74, 157, 149, 0.08)'
          }}
        >
          <Play size={18} />
        </motion.div>
      ))}

      {/* Extra Visual Effects */}
      {/* Floating Hearts and Stars */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          initial={{ 
            opacity: 0,
            x: Math.random() * window.innerWidth,
            y: window.innerHeight + 50
          }}
          animate={{
            opacity: [0, 0.15, 0],
            x: Math.random() * window.innerWidth,
            y: -50,
            rotate: [0, 90],
            scale: [0.5, 0.8, 0.5]
          }}
          transition={{
            duration: 30 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 15,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            pointerEvents: 'none',
            zIndex: 1,
            fontSize: '16px',
            color: 'rgba(74, 157, 149, 0.1)'
          }}
        >
          {i % 2 === 0 ? '💼' : '🌟'}
        </motion.div>
      ))}

      {/* Orbiting Elements around main card */}
      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`orbit-${i}`}
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 35 + i * 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            left: '50%',
            top: '50%',
            marginLeft: '-250px',
            marginTop: '-250px',
            pointerEvents: 'none',
            zIndex: 1
          }}
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.06, 0.1, 0.06]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
            style={{
              position: 'absolute',
              top: '10px',
              left: '50%',
              width: '10px',
              height: '10px',
              background: `linear-gradient(45deg, rgba(74, 157, 149, 0.1), rgba(95, 185, 176, 0.15))`,
              borderRadius: '50%',
              marginLeft: '-5px'
            }}
          />
        </motion.div>
      ))}

      <motion.div 
        style={{
          width: '100%',
          maxWidth: '1400px',
          background: 'white',
          borderRadius: 'clamp(24px, 3vw, 32px)',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
          border: '3px solid white',
          outlineOffset: '0px',
          position: 'relative',
          zIndex: 2
        }}
        initial={{ 
          opacity: 0, 
          scale: 0.7, 
          y: 80,
          rotateX: 20,
          filter: 'blur(15px)'
        }}
        animate={{ 
          opacity: 1, 
          scale: 1, 
          y: 0,
          rotateX: 0,
          filter: 'blur(0px)'
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 1,
          delay: 0.3
        }}
        whileHover={{
          scale: 1.01,
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.25)',
          transition: { duration: 0.3 }
        }}
      >
        {/* Animated Border Glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0],
            background: [
              'linear-gradient(0deg, rgba(74, 157, 149, 0.3) 0%, transparent 60%)',
              'linear-gradient(180deg, rgba(74, 157, 149, 0.3) 0%, transparent 60%)',
              'linear-gradient(0deg, rgba(74, 157, 149, 0.3) 0%, transparent 60%)'
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderRadius: 'clamp(24px, 3vw, 32px)',
            pointerEvents: 'none',
            zIndex: 1
          }}
        />

        {/* Pulsing Ring Effects */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{
              scale: [0.9, 1.3, 1.8],
              opacity: [0, 0.2, 0]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 3,
              ease: "easeOut"
            }}
            style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              right: '-20px',
              bottom: '-20px',
              border: '2px solid rgba(74, 157, 149, 0.2)',
              borderRadius: 'clamp(44px, 4vw, 52px)',
              pointerEvents: 'none',
              zIndex: 0
            }}
          />
        ))}

        <motion.div 
          style={{
            background: 'linear-gradient(135deg, #4a9d95 0%, #5fb9b0 100%)',
            padding: 'clamp(0.85rem, 1.8vw, 1.25rem) clamp(0.75rem, 1vw, 1rem)',
            borderBottom: '2px solid #3a8d85',
            position: 'relative',
            overflow: 'hidden',
            zIndex: 2
          }}
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {/* Animated Header Background */}
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)',
                'radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)',
                'radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 60%)'
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              pointerEvents: 'none'
            }}
          />
          <h2 style={{ 
            fontSize: 'clamp(1.15rem, 2.8vw, 1.5rem)', 
            fontWeight: '700', 
            color: '#fde68a',
            textAlign: 'center',
            marginBottom: '0.5rem',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            letterSpacing: '0.02em',
            lineHeight: '1.3',
            position: 'relative'
          }}>
            {/* Glowing text effect behind TypeWriter - only after completion */}
            {showSubtitle && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 0.7, 0.4, 0.7],
                  textShadow: [
                    '0 0 5px rgba(253, 230, 138, 0.3)',
                    '0 0 15px rgba(253, 230, 138, 0.6)',
                    '0 0 5px rgba(253, 230, 138, 0.3)'
                  ]
                }}
                transition={{
                  opacity: { duration: 0.5 },
                  textShadow: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  opacity: 0.7,
                  pointerEvents: 'none'
                }}
              >
                What It's Like to Join IndiVillage
              </motion.span>
            )}
            <TypeWriter 
              key="company-header"
              text="What It's Like to Join IndiVillage"
              speed={80}
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
                speed={50}
                delay={0}
                onComplete={() => setShowContent(true)}
              />
            )}
          </div>
        </motion.div>

        <motion.div 
          style={{
            background: 'linear-gradient(180deg, #9edbe8 0%, #eef5eb 100%)',
            padding: 'clamp(2rem, 3vw, 2.5rem) clamp(1.5rem, 2.5vw, 2rem)',
            position: 'relative',
            overflow: 'hidden'
          }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ 
            opacity: showContent ? 1 : 0, 
            y: showContent ? 0 : 40
          }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Content Area Particles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                opacity: 0,
                x: Math.random() * 600,
                y: Math.random() * 300
              }}
              animate={{
                opacity: showContent ? [0, 0.1, 0] : 0,
                x: Math.random() * 600,
                y: Math.random() * 300,
                scale: [0.5, 1, 0.5],
                rotate: [0, 90]
              }}
              transition={{
                duration: 15 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                width: '8px',
                height: '8px',
                background: `hsl(${180 + Math.random() * 40}, 50%, 60%)`,
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 1
              }}
            />
          ))}

          {/* Progress Indicators */}
          <motion.div
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              display: 'flex',
              gap: '8px',
              zIndex: 3
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: showContent ? 1 : 0,
              scale: showContent ? 1 : 0
            }}
            transition={{ delay: 1.6, duration: 0.5 }}
          >
            {videos.map((video, index) => (
              <motion.div
                key={`progress-${video.id}`}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: videosWatched[video.id] ? '#52b788' : 'rgba(255, 255, 255, 0.3)',
                  border: '2px solid rgba(255, 255, 255, 0.5)'
                }}
                animate={videosWatched[video.id] ? {
                  scale: [1, 1.3, 1],
                  boxShadow: [
                    '0 0 0px rgba(82, 183, 136, 0)',
                    '0 0 15px rgba(82, 183, 136, 0.6)',
                    '0 0 0px rgba(82, 183, 136, 0)'
                  ]
                } : {}}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
          </motion.div>
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
            marginBottom: 'clamp(2rem, 3vw, 2.5rem)',
            position: 'relative',
            zIndex: 2
          }}>
            {videos.map((video, index) => (
              <motion.div 
                key={video.id} 
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  border: videosWatched[video.id] ? '3px solid #52b788' : '3px solid #e5e7eb',
                  position: 'relative',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
                }}
                initial={{ 
                  opacity: 0, 
                  scale: 0.8, 
                  y: 50,
                  rotateY: -15 
                }}
                animate={{ 
                  opacity: showContent ? 1 : 0,
                  scale: showContent ? 1 : 0.8,
                  y: showContent ? 0 : 50,
                  rotateY: showContent ? 0 : -15,
                  borderColor: videosWatched[video.id] ? '#52b788' : '#e5e7eb'
                }}
                transition={{
                  delay: 0.6 + (index * 0.2),
                  duration: 0.6,
                  type: "spring",
                  stiffness: 200,
                  damping: 20
                }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.2)',
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Video Card Glow Effect */}
                <motion.div
                  animate={videosWatched[video.id] ? {
                    boxShadow: [
                      '0 0 0px rgba(82, 183, 136, 0)',
                      '0 0 20px rgba(82, 183, 136, 0.3)',
                      '0 0 0px rgba(82, 183, 136, 0)'
                    ]
                  } : {}}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    borderRadius: '12px',
                    pointerEvents: 'none',
                    zIndex: 1
                  }}
                />

                {/* Magic Sparkles around video cards */}
                {!videosWatched[video.id] && (
                  <>
                    {[...Array(3)].map((_, sparkleIndex) => (
                      <motion.div
                        key={`sparkle-${sparkleIndex}`}
                        initial={{ 
                          scale: 0,
                          x: Math.random() * 300 - 150,
                          y: Math.random() * 200 - 100
                        }}
                        animate={{
                          scale: [0, 1, 0],
                          x: Math.random() * 300 - 150,
                          y: Math.random() * 200 - 100,
                          rotate: [0, 180],
                          opacity: [0, 0.6, 0]
                        }}
                        transition={{
                          duration: 4 + Math.random() * 2,
                          repeat: Infinity,
                          delay: Math.random() * 3,
                          ease: "easeInOut"
                        }}
                        style={{
                          position: 'absolute',
                          width: '5px',
                          height: '5px',
                          background: 'linear-gradient(45deg, #fbbf24, #f59e0b)',
                          borderRadius: '50%',
                          pointerEvents: 'none',
                          zIndex: 2,
                          boxShadow: '0 0 6px rgba(251, 191, 36, 0.6)'
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Success Fireworks Effect */}
                {videosWatched[video.id] && (
                  <>
                    {[...Array(6)].map((_, fireworkIndex) => (
                      <motion.div
                        key={`firework-${fireworkIndex}`}
                        initial={{ 
                          scale: 0,
                          x: 0,
                          y: 0,
                          opacity: 0
                        }}
                        animate={{
                          scale: [0, 1.2, 0],
                          x: (Math.random() - 0.5) * 150,
                          y: (Math.random() - 0.5) * 150,
                          opacity: [0, 0.8, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: Math.random() * 4,
                          ease: "easeOut"
                        }}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          width: '4px',
                          height: '4px',
                          background: `hsl(${120 + Math.random() * 60}, 70%, 60%)`,
                          borderRadius: '50%',
                          pointerEvents: 'none',
                          zIndex: 2
                        }}
                      />
                    ))}
                  </>
                )}

                {/* Completion Badge Animation */}
                {videosWatched[video.id] && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0, rotate: -180 }}
                    animate={{ 
                      scale: 1, 
                      opacity: 1, 
                      rotate: 0
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 250,
                      damping: 20,
                      delay: 0.3
                    }}
                    style={{
                      position: 'absolute',
                      top: '10px',
                      right: '10px',
                      zIndex: 3,
                      background: 'rgba(82, 183, 136, 0.9)',
                      borderRadius: '50%',
                      padding: '5px'
                    }}
                  >
                    <CheckCircle size={20} color="white" />
                  </motion.div>
                )}

                <motion.div 
                  style={{ 
                    position: 'relative', 
                    paddingBottom: '56.25%', 
                    height: 0, 
                    background: '#000',
                    overflow: 'hidden'
                  }}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 }
                  }}
                >
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
                </motion.div>
                
                <motion.div 
                  style={{
                    padding: 'clamp(0.75rem, 1.5vw, 1rem)',
                    background: '#fef3c7',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    minHeight: '60px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: showContent ? 1 : 0,
                    y: showContent ? 0 : 20
                  }}
                  transition={{ delay: 0.8 + (index * 0.2), duration: 0.4 }}
                >
                  {/* Title Card Background Animation */}
                  <motion.div
                    animate={{
                      background: [
                        'linear-gradient(45deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%)',
                        'linear-gradient(225deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%)',
                        'linear-gradient(45deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.1) 50%, rgba(255, 255, 255, 0) 100%)'
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      pointerEvents: 'none'
                    }}
                  />
                  <h4 style={{
                    fontSize: 'clamp(0.8rem, 1.6vw, 0.95rem)',
                    fontWeight: '600',
                    margin: 0,
                    color: '#1f2937',
                    flex: 1,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {video.title}
                  </h4>
                  {videosWatched[video.id] && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 15,
                        delay: 0.2
                      }}
                      style={{ position: 'relative', zIndex: 1 }}
                    >
                      <CheckCircle style={{ 
                        width: 'clamp(18px, 3vw, 22px)', 
                        height: 'clamp(18px, 3vw, 22px)', 
                        color: '#52b788',
                        flexShrink: 0,
                        marginLeft: '8px'
                      }} />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            style={{
              padding: 'clamp(1rem, 2vw, 1.25rem)',
              background: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '12px',
              marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)',
              border: '1px solid rgba(226, 232, 240, 0.8)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ 
              opacity: showContent ? 1 : 0,
              scale: showContent ? 1 : 0.9,
              y: showContent ? 0 : 30
            }}
            transition={{ delay: 1.2, duration: 0.5 }}
            whileHover={{
              scale: 1.02,
              boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
              transition: { duration: 0.2 }
            }}
          >
            {/* Progress Indicator Background */}
            <motion.div
              animate={{
                background: [
                  'linear-gradient(90deg, rgba(74, 157, 149, 0.05) 0%, transparent 50%)',
                  'linear-gradient(270deg, rgba(74, 157, 149, 0.05) 0%, transparent 50%)',
                  'linear-gradient(90deg, rgba(74, 157, 149, 0.05) 0%, transparent 50%)'
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderRadius: '12px',
                pointerEvents: 'none'
              }}
            />
            <motion.p 
              style={{
                margin: 0,
                fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
                color: '#64748b',
                fontWeight: '500',
                position: 'relative',
                zIndex: 1
              }}
              animate={{
                color: allVideosWatched ? '#52b788' : '#64748b'
              }}
              transition={{ duration: 0.3 }}
            >
              {allVideosWatched
                ? '✓ Great! You have watched all videos.'
                : 'Please watch all videos completely to continue with your onboarding.'}
            </motion.p>
          </motion.div>

          <motion.div 
            style={{
              display: 'flex',
              justifyContent: 'center',
              position: 'relative'
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: showContent ? 1 : 0,
              y: showContent ? 0 : 30
            }}
            transition={{ delay: 1.4, duration: 0.5 }}
          >
            {/* Success Celebration Confetti */}
            {allVideosWatched && (
              <>
                {[...Array(8)].map((_, confettiIndex) => (
                  <motion.div
                    key={`confetti-${confettiIndex}`}
                    initial={{ 
                      scale: 0,
                      x: 0,
                      y: 0,
                      rotate: 0
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      x: (Math.random() - 0.5) * 300,
                      y: -150 - Math.random() * 50,
                      rotate: [0, 360 * 2],
                      opacity: [0, 0.8, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: Math.random() * 3,
                      ease: "easeOut"
                    }}
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      width: '6px',
                      height: '6px',
                      background: `hsl(${Math.random() * 360}, 70%, 60%)`,
                      borderRadius: confettiIndex % 3 === 0 ? '50%' : '0%',
                      pointerEvents: 'none',
                      zIndex: 1
                    }}
                  />
                ))}
              </>
            )}

            <motion.button
              onClick={onComplete}
              disabled={!allVideosWatched}
              className="btn"
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                padding: 'clamp(0.75rem, 1.8vw, 0.9rem) clamp(2rem, 4vw, 2.5rem)',
                cursor: allVideosWatched ? 'pointer' : 'not-allowed',
                minHeight: 'clamp(48px, 8vw, 56px)',
                position: 'relative',
                overflow: 'hidden',
                border: 'none',
                borderRadius: '12px'
              }}
              initial={{ scale: 0.9, opacity: 0.5 }}
              animate={{ 
                scale: allVideosWatched ? 1 : 0.95,
                opacity: allVideosWatched ? 1 : 0.5,
                background: allVideosWatched ? [
                  'linear-gradient(135deg, #52b788 0%, #40916c 100%)',
                  'linear-gradient(135deg, #40916c 0%, #52b788 100%)',
                  'linear-gradient(135deg, #52b788 0%, #40916c 100%)'
                ] : 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)'
              }}
              transition={{
                background: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                scale: { duration: 0.2 },
                opacity: { duration: 0.2 }
              }}
              whileHover={allVideosWatched ? {
                scale: 1.03,
                boxShadow: '0 8px 25px rgba(82, 183, 136, 0.3)',
                y: -2,
                transition: { duration: 0.2 }
              } : {}}
              whileTap={allVideosWatched ? { scale: 0.98 } : {}}
            >
              {/* Button Shimmer Effect */}
              {allVideosWatched && (
                <motion.div
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ 
                    x: '100%', 
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatDelay: 4,
                    ease: "easeInOut"
                  }}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)',
                    pointerEvents: 'none'
                  }}
                />
              )}
              <span style={{ position: 'relative', zIndex: 1, color: 'white', fontWeight: '600' }}>
                {allVideosWatched ? 'Continue to Next Step →' : 'Complete All Videos to Continue'}
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

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
    </motion.div>
  );
}