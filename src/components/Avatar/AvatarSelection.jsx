// ============================================
// FILE: src/components/Avatar/AvatarSelection.jsx
// STEP 2: Avatar Selection with Photo Upload and Hobbies
// ============================================
import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { Upload, Plus, User } from 'lucide-react';
import { motion } from 'framer-motion';
import TypeWriter from '../TypeWriter';

const HOBBIES_EMOJIS = [
  { emoji: '📚', label: 'Reading' },
  { emoji: '✈️', label: 'Travel' },
  { emoji: '⚽', label: 'Soccer' },
  { emoji: '🎵', label: 'Music' },
  { emoji: '🎮', label: 'Gaming' },
  { emoji: '🎨', label: 'Art' },
  { emoji: '🍕', label: 'Food' },
  { emoji: '🏃', label: 'Sports' },
  { emoji: '🎬', label: 'Movies' },
  { emoji: '📷', label: 'Photography' },
  { emoji: '🎸', label: 'Guitar' },
  { emoji: '🌍', label: 'Nature' },
  { emoji: '💻', label: 'Coding' },
  { emoji: '🎯', label: 'Goals' },
  { emoji: '😊', label: 'Happy' },
];

export default function AvatarSelection({ onDone, onAvatarSelect }) {
  const { t } = useTranslation();
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [selectedHobbies, setSelectedHobbies] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [hobbiesText, setHobbiesText] = useState('');
  const [favoriteMovie, setFavoriteMovie] = useState('');

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedPhoto(reader.result);
        if (onAvatarSelect) {
          onAvatarSelect(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEmojiSelect = (emoji) => {
    if (selectedHobbies.includes(emoji)) {
      setSelectedHobbies(selectedHobbies.filter(h => h !== emoji));
    } else if (selectedHobbies.length < 3) {
      setSelectedHobbies([...selectedHobbies, emoji]);
    }
  };

  const handleContinue = () => {
    if (onDone) {
      onDone(uploadedPhoto);
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
      <div style={{ 
        width: '100%', 
        maxWidth: '1400px',
        background: 'white',
        borderRadius: 'clamp(24px, 3vw, 32px)',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        border: '3px solid white',
        outline: '3px solid #4a9d95',
        outlineOffset: '0px'
      }}>
        {/* Header Section with Gradient */}
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
            margin: '0 0 0.3rem 0',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
            position: 'relative',
            letterSpacing: '0.02em',
            lineHeight: '1.3'
          }}>
            <TypeWriter 
              text="About You"
              speed={100}
              delay={500}
              onComplete={() => setShowContent(true)}
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
            <TypeWriter 
              text="Tell us a Little about yourself"
              speed={60}
              delay={1800}
            />
          </div>
        </div>

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
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.5rem, 2.5vw, 2rem)',
            maxWidth: '1200px',
            margin: '0 auto clamp(1.5rem, 2.5vw, 2rem)'
          }}>
            {/* Left Side - Photo Upload */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 'clamp(1rem, 2vw, 1.25rem)',
              minHeight: 'auto'
            }}>
              <div style={{
                position: 'relative',
                width: 'clamp(150px, 35vw, 200px)',
                height: 'clamp(150px, 35vw, 200px)',
                borderRadius: '50%',
                background: uploadedPhoto ? 'transparent' : '#4a9d95',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '4px solid #e5e7eb'
              }}>
                {uploadedPhoto ? (
                  <img
                    src={uploadedPhoto}
                    alt="Uploaded"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <div style={{
                    textAlign: 'center',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <User size={60} strokeWidth={2} />
                  </div>
                )}
                
                <label
                  htmlFor="photo-upload"
                  style={{
                    position: 'absolute',
                    bottom: 'clamp(4px, 1vw, 8px)',
                    right: 'clamp(4px, 1vw, 8px)',
                    width: 'clamp(40px, 8vw, 50px)',
                    height: 'clamp(40px, 8vw, 50px)',
                    borderRadius: '50%',
                    background: '#4a9d95',
                    border: '4px solid white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <Plus size={20} color="white" strokeWidth={3} />
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>

              <div style={{ textAlign: 'center' }}>
                <h3 style={{
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
                  fontWeight: '700',
                  color: '#1a365d',
                  margin: '0 0 0.5rem 0'
                }}>
                  Upload Your Photo
                </h3>
                <p style={{
                  fontSize: 'clamp(0.85rem, 1.7vw, 0.95rem)',
                  color: '#4a9d95',
                  margin: 0
                }}>
                  Show us who you are
                </p>
              </div>
            </div>

            {/* Right Side - Form Inputs */}
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: 'clamp(1.5rem, 3vw, 2.5rem)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(1rem, 2vw, 1.5rem)'
            }}>
              {/* Hobbies Input */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: 'clamp(0.95rem, 1.9vw, 1.05rem)',
                  fontWeight: '700',
                  color: '#1a365d',
                  marginBottom: '0.75rem'
                }}>
                  What are your hobbies?
                </label>
                <input
                  type="text"
                  value={hobbiesText}
                  onChange={(e) => setHobbiesText(e.target.value)}
                  placeholder="Type your favorite movie here"
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                    border: '2px solid #d1d5db',
                    borderRadius: '10px',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                    fontFamily: 'Roboto, sans-serif',
                    color: '#6b7280'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#4a9d95';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#d1d5db';
                  }}
                />
              </div>

              {/* Favorite Movie */}
              <div>
                <label style={{
                  display: 'block',
                  fontSize: 'clamp(0.95rem, 1.9vw, 1.05rem)',
                  fontWeight: '700',
                  color: '#1a365d',
                  marginBottom: '0.75rem'
                }}>
                  What's your favorite movie
                </label>
                <input
                  type="text"
                  value={favoriteMovie}
                  onChange={(e) => setFavoriteMovie(e.target.value)}
                  placeholder="Type your favorite movie here"
                  style={{
                    width: '100%',
                    padding: '0.875rem',
                    fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                    border: '2px solid #d1d5db',
                    borderRadius: '10px',
                    outline: 'none',
                    transition: 'all 0.2s ease',
                    fontFamily: 'Roboto, sans-serif',
                    color: '#6b7280'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = '#4a9d95';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = '#d1d5db';
                  }}
                />
              </div>

              {/* Emoji Selection */}
              <div style={{ flex: 1 }}>
                <label style={{
                  display: 'block',
                  fontSize: 'clamp(0.95rem, 1.9vw, 1.05rem)',
                  fontWeight: '700',
                  color: '#1a365d',
                  marginBottom: '0.75rem'
                }}>
                  Describe yourself using emojis (max 3)
                </label>

                {/* Selected Emojis Display + Add Button */}
                <div style={{
                  display: 'flex',
                  gap: 'clamp(0.75rem, 2vw, 1rem)',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  justifyContent: 'center'
                }}>
                  {/* Show selected emojis */}
                  {selectedHobbies.map((emoji, index) => (
                    <button
                      key={index}
                      onClick={() => handleEmojiSelect(emoji)}
                      style={{
                        width: 'clamp(70px, 15vw, 90px)',
                        height: 'clamp(70px, 15vw, 90px)',
                        borderRadius: '50%',
                        background: 'white',
                        border: '3px solid #4a9d95',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
                      }}
                    >
                      {emoji}
                    </button>
                  ))}

                  {/* Plus Button - Show emoji picker */}
                  {selectedHobbies.length < 3 && (
                    <button
                      onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                      style={{
                        width: 'clamp(70px, 15vw, 90px)',
                        height: 'clamp(70px, 15vw, 90px)',
                        borderRadius: '50%',
                        background: '#e0f2f1',
                        border: '3px dashed #4a9d95',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.background = '#b2dfdb';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.background = '#e0f2f1';
                      }}
                    >
                      <Plus size={35} color="#4a9d95" strokeWidth={3} />
                    </button>
                  )}
                </div>

                {/* Emoji Picker Dropdown */}
                {showEmojiPicker && (
                  <div style={{
                    marginTop: '1rem',
                    padding: '1.5rem',
                    background: 'white',
                    border: '2px solid #4a9d95',
                    borderRadius: '12px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                  }}>
                    <div style={{
                      fontSize: 'clamp(0.8rem, 1.6vw, 0.85rem)',
                      color: '#6b7280',
                      marginBottom: '1rem',
                      fontWeight: '500'
                    }}>
                      Choose up to {3 - selectedHobbies.length} more emoji{3 - selectedHobbies.length !== 1 ? 's' : ''}
                    </div>

                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fill, minmax(50px, 1fr))',
                      gap: '0.75rem',
                      maxHeight: '200px',
                      overflowY: 'auto'
                    }}>
                      {HOBBIES_EMOJIS.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            handleEmojiSelect(item.emoji);
                            if (selectedHobbies.length >= 2) {
                              setShowEmojiPicker(false);
                            }
                          }}
                          disabled={selectedHobbies.includes(item.emoji)}
                          style={{
                            width: '100%',
                            aspectRatio: '1',
                            fontSize: '2rem',
                            background: selectedHobbies.includes(item.emoji) ? '#d1fae5' : '#f9fafb',
                            border: selectedHobbies.includes(item.emoji) ? '2px solid #10b981' : '1px solid #e5e7eb',
                            borderRadius: '8px',
                            cursor: selectedHobbies.includes(item.emoji) ? 'not-allowed' : 'pointer',
                            opacity: selectedHobbies.includes(item.emoji) ? 0.5 : 1,
                            transition: 'all 0.2s ease',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                          }}
                          onMouseEnter={(e) => {
                            if (!selectedHobbies.includes(item.emoji)) {
                              e.currentTarget.style.transform = 'scale(1.1)';
                              e.currentTarget.style.background = '#f3f4f6';
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                            e.currentTarget.style.background = selectedHobbies.includes(item.emoji) ? '#d1fae5' : '#f9fafb';
                          }}
                          title={item.label}
                        >
                          {item.emoji}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Selected count */}
                {selectedHobbies.length > 0 && (
                  <div style={{
                    marginTop: '1rem',
                    fontSize: 'clamp(0.8rem, 1.6vw, 0.85rem)',
                    color: '#6b7280',
                    fontWeight: '500'
                  }}>
                    {selectedHobbies.length}/3 emojis selected
                  </div>
                )}
              </div>

              {/* Save Button */}
              <div style={{
                marginTop: 'auto',
                paddingTop: '1rem'
              }}>
                <button
                  onClick={handleContinue}
                  disabled={!uploadedPhoto}
                  style={{
                    width: '100%',
                    padding: 'clamp(0.75rem, 1.8vw, 0.9rem) clamp(1.5rem, 3vw, 2rem)',
                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                    fontWeight: '700',
                    color: '#1e5a8e',
                    background: uploadedPhoto ? 'linear-gradient(135deg, #a3e635 0%, #84cc16 100%)' : '#9ca3af',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: uploadedPhoto ? 'pointer' : 'not-allowed',
                    boxShadow: uploadedPhoto ? '0 6px 20px rgba(132, 204, 22, 0.35)' : 'none',
                    transition: 'all 0.3s ease',
                    textTransform: 'none',
                    letterSpacing: '0.02em',
                    opacity: uploadedPhoto ? 1 : 0.6
                  }}
                  onMouseEnter={(e) => {
                    if (uploadedPhoto) {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(132, 204, 22, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (uploadedPhoto) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 6px 20px rgba(132, 204, 22, 0.35)';
                    }
                  }}
                >
                  Save and Continue
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}