// FILE: src/components/Video/CompanyInfoVideo.jsx
// STEP 3: Company Info Videos - 3 Videos

import React, { useState, useRef, useEffect } from 'react';
import { Play, CheckCircle } from 'lucide-react';

export default function CompanyInfoVideo({ onComplete }) {
  const [videosWatched, setVideosWatched] = useState({
    video1: false,
    video2: false,
    video3: false
  });

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
      padding: 'clamp(1rem, 3vw, 2rem)',
      background: 'linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)'
    }}>
      <div style={{ 
        maxWidth: '1200px', 
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
          What It's Like to Join IndiVillage
        </h2>
        <p style={{ 
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', 
          color: '#cbd5e1',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          Watch all three videos to learn about our mission, vision, and culture
        </p>
      </div>

      <div style={{
        background: 'white',
        borderRadius: '16px',
        padding: 'clamp(1.5rem, 3vw, 2rem)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        width: '100%',
        maxWidth: '1200px'
      }}>
        <h3 style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
          fontWeight: '700',
          marginBottom: '1rem',
          color: '#1f2937'
        }}>
          Welcome Videos - Watch All to Continue
        </h3>
        
        <p style={{
          fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
          color: '#6b7280',
          marginBottom: '1.5rem'
        }}>
          Please watch all three videos completely to proceed with your onboarding journey.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(1rem, 2vw, 1.5rem)',
          marginBottom: '2rem'
        }}>
          {videos.map((video) => (
            <div key={video.id} style={{
              background: '#f9fafb',
              borderRadius: '12px',
              overflow: 'hidden',
              border: videosWatched[video.id] ? '2px solid #52b788' : '2px solid #e5e7eb',
              position: 'relative'
            }}>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
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
                padding: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <h4 style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  fontWeight: '600',
                  margin: 0,
                  color: '#374151'
                }}>
                  {video.title}
                </h4>
                {videosWatched[video.id] ? (
                  <CheckCircle style={{ width: '20px', height: '20px', color: '#52b788' }} />
                ) : (
                  <Play style={{ width: '20px', height: '20px', color: '#9ca3af' }} />
                )}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          padding: 'clamp(0.75rem, 2vw, 1rem)',
          background: allVideosWatched ? '#d1fae5' : '#fef3c7',
          borderRadius: '8px',
          marginBottom: '1.5rem',
          border: allVideosWatched ? '1px solid #52b788' : '1px solid #f59e0b'
        }}>
          <p style={{
            margin: 0,
            fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
            color: allVideosWatched ? '#065f46' : '#92400e',
            textAlign: 'center',
            fontWeight: '500'
          }}>
            {allVideosWatched
              ? 'Great! You have watched all videos. Click continue to proceed.'
              : 'Please watch all videos completely to continue with your onboarding.'}
          </p>
        </div>

        <button
          onClick={onComplete}
          disabled={!allVideosWatched}
          className="btn"
          style={{
            width: '100%',
            opacity: allVideosWatched ? 1 : 0.5,
            cursor: allVideosWatched ? 'pointer' : 'not-allowed'
          }}
        >
          {allVideosWatched ? 'Continue to Office Tour →' : 'Complete All Videos to Continue'}
        </button>
      </div>
    </div>
  );
}