import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import WelcomeScreen from "./Welcome/WelcomeScreen";
import AvatarSelection from "./Avatar/AvatarSelection";
import CompanyInfoVideo from "./Video/CompanyInfoVideo";
import OfficeTour from "./OfficeTour/OfficeTour";
import VideoPlayer from "./Video/VideoPlayer";
import SigningProcess from "./Signing/SigningProcess";
import HeyGenAI from "./HeyGen/HeyGenAI";
import RoleSelector from "./Role/RoleSelector";
import TeamHierarchy from "./Team/TeamHierarchy";
import HRModuleSelector from "./HRModules/HRModuleSelector";
import CustomerQuiz from "./Customer/CustomerQuiz";
import Certificate from "./Certificate/Certificate";
import MemoryGame from "./Games/MemoryGame";
import logo from "../Asset/logo.png";
import { ChevronDown, HelpCircle, Globe, SkipForward } from "lucide-react";

const PHASES = [
 { id: 1, title: "Welcome", subtitle: "Welcome to IndiVillage", label: "welcome" },
  { id: 2, title: "Choose Avatar", subtitle: "Pick your avatar", label: "Choose Avatar" },
  { id: 3, title: "What It's Like to Join IndiVillage", subtitle: "Learn about our mission", label: "Joining IndiVillage" },
  { id: 4, title: "About your new office", subtitle: "Find your way around", label: "Office" },
  { id: 5, title: "Signing Process", subtitle: "Complete documentation", label: "Signing Process" },
  { id: 6, title: "Welcome Message", subtitle: "Message from leadership", label: "Welcome Video" },
  { id: 7, title: "Q&A with CEO", subtitle: "Interactive session", label: "Q&A with CEO" },
  { id: 8, title: "Your Role & Responsibilities", subtitle: "Understand your role", label: "Your Role" },
  { id: 9, title: "Meet Your Team", subtitle: "Connect with colleagues", label: "Meet Your Team" },
  { id: 10, title: "HR Gamified Modules", subtitle: "Training modules", label: "HR Modules" },
  { id: 11, title: "Skill Assessment Games", subtitle: "Cognitive challenges", label: "Assessment Games" },
  { id: 12, title: "Meet your Customer", subtitle: "Customer scenarios", label: "Customer" },
  { id: 13, title: "Certificate", subtitle: "Get your certificate", label: "Certificate" },
  { id: 14, title: "Introduction to HRM247", subtitle: "Digital tools mastery", label: "HRM247" },
];

export default function PhaseContainer() {
  const { t, i18n } = useTranslation();
  const [step, setStep] = useState(1);
  const [animating, setAnimating] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [selectedRole, setSelectedRole] = useState(null);
  const [userName, setUserName] = useState("Employee Name");
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showJumpToStep, setShowJumpToStep] = useState(false);

  const current = PHASES.find((p) => p.id === step);

  const languages = [
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
    { code: 'kn', name: 'ಕನ್ನಡ', flag: '🇮🇳' }
  ];

  function goToStep(nextStep) {
    if (nextStep >= 1 && nextStep <= PHASES.length) {
      setAnimating(true);
      setTimeout(() => {
        setStep(nextStep);
        setAnimating(false);
        setShowJumpToStep(false);
      }, 300);
    }
  }

  const handleAvatarSelection = (avatarUrl) => {
    setSelectedAvatar(avatarUrl);
    goToStep(step + 1);
  };

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    goToStep(step + 1);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setShowLanguageDropdown(false);
  };

  const renderPhaseContent = () => {
    switch (step) {
      case 1:
        return (
          <WelcomeScreen onGetStarted={() => goToStep(step + 1)} />
        );
      case 2:
        return <AvatarSelection onDone={handleAvatarSelection} logo={logo} />;

      case 3:
        return <CompanyInfoVideo onComplete={() => goToStep(step + 1)} />;

      case 4:
        return <OfficeTour onComplete={() => goToStep(step + 1)} />;

      case 5:
        return <SigningProcess onComplete={() => goToStep(step + 1)} />;

      case 6:
        return <VideoPlayer onComplete={() => goToStep(step + 1)} />;

      case 7:
        return <HeyGenAI onComplete={() => goToStep(step + 1)} />;

      case 8:
        return <RoleSelector onRoleSelect={handleRoleSelection} selectedRole={selectedRole} />;

      case 9:
        return <TeamHierarchy onComplete={() => goToStep(step + 1)} />;

      case 10:
        return <HRModuleSelector onComplete={() => goToStep(step + 1)} />;
        case 11:
  return <MemoryGame onComplete={() => goToStep(step + 1)} />;
        
      case 12:
        return <CustomerQuiz onComplete={() => goToStep(step + 1)} />;

      case 13:
        return <Certificate userName={userName} role={selectedRole} onComplete={() => goToStep(step + 1)} />;

      default:
        return (
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h3 style={{ 
                fontSize: 'clamp(0.9rem, 2vw, 1rem)', 
                fontWeight: '600', 
                color: '#374151' 
              }}>
                {current.title}
              </h3>
              <p style={{ 
                color: '#6b7280', 
                maxWidth: '20rem', 
                margin: '0 auto', 
                lineHeight: '1.3',
                fontSize: 'clamp(0.7rem, 1.4vw, 0.8rem)'
              }}>
                {current.subtitle}
              </p>
              <div style={{ 
                marginTop: 'clamp(0.6rem, 1.2vw, 0.8rem)', 
                padding: 'clamp(0.5rem, 1.2vw, 0.6rem)', 
                background: 'linear-gradient(135deg, #dbeafe 0%, #e9d5ff 100%)',
                borderRadius: 'clamp(6px, 1.2vw, 10px)', 
                border: '1px solid #93c5fd' 
              }}>
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: 'clamp(0.65rem, 1.4vw, 0.7rem)' 
                }}>
                  Coming Soon
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #a8d5e2 0%, #e8f4f8 100%)' }}>
      <div
        className="fixed-header mobile-dark-header"
        style={{ backgroundColor: 'rgba(19, 48, 73, 0.95)' }}
      >
        <div
          style={{
            width: '100%',
            padding: 'clamp(0.3rem, 1.2vw, 0.5rem) clamp(0.6rem, 1.5vw, 1rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'clamp(0.2rem, 0.8vw, 0.4rem)',
            backgroundColor: 'rgba(19, 48, 73, 1)'
          }}
        >
          <div className="logo-container" style={{ flexShrink: 0, visibility: step === 1 ? 'hidden' : 'visible' }}>
            <img
              src={logo}
              alt="IndiVillage"
              style={{ 
                height: 'clamp(24px, 4vw, 32px)', 
                width: 'auto', 
                display: 'block' 
              }}
            />
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 'clamp(3px, 0.6vw, 6px)', 
            flexShrink: 0, 
            marginLeft: step === 1 ? 'auto' : '0', 
            flexWrap: 'wrap' 
          }}>
            {step > 1 && (
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <button
                  className="header-btn"
                  onClick={() => setShowJumpToStep(!showJumpToStep)}
                  title="Jump to Step"
                >
                  <SkipForward style={{ 
                    width: 'clamp(10px, 2vw, 14px)', 
                    height: 'clamp(10px, 2vw, 14px)', 
                    marginRight: '3px' 
                  }} />
                  <span className="hidden sm:inline">Jump</span>
                </button>
                {showJumpToStep && (
                  <div style={{
                    position: 'absolute',
                    right: 0,
                    marginTop: '8px',
                    width: 'clamp(160px, 25vw, 220px)',
                    maxHeight: '300px',
                    overflowY: 'auto',
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                    padding: '8px 0',
                    zIndex: 50,
                    border: '1px solid #e5e7eb'
                  }}>
                    <div style={{
                      padding: '6px 8px',
                      fontSize: 'clamp(9px, 1.5vw, 10px)',
                      color: '#9ca3af',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Jump to Step
                    </div>
                    {PHASES.map((phase) => (
                      <button
                        key={phase.id}
                        onClick={() => goToStep(phase.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          width: '100%',
                          textAlign: 'left',
                          padding: 'clamp(6px, 1.2vw, 8px) clamp(8px, 2vw, 12px)',
                          fontSize: 'clamp(10px, 1.8vw, 11px)',
                          color: step === phase.id ? '#667eea' : '#374151',
                          fontWeight: step === phase.id ? '600' : '400',
                          backgroundColor: step === phase.id ? '#ede9fe' : 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          if (step !== phase.id) {
                            e.currentTarget.style.backgroundColor = '#f3f4f6';
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (step !== phase.id) {
                            e.currentTarget.style.backgroundColor = 'transparent';
                          }
                        }}
                      >
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          fontSize: '10px',
                          fontWeight: '600',
                          flexShrink: 0,
                          backgroundColor: phase.id <= step ? '#667eea' : '#e5e7eb',
                          color: phase.id <= step ? 'white' : '#9ca3af'
                        }}>
                          {phase.id}
                        </span>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ 
                            fontWeight: '600',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}>
                            {phase.label}
                          </div>
                          <div style={{ 
                            fontSize: 'clamp(8px, 1.4vw, 9px)', 
                            color: '#9ca3af',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap'
                          }}>
                            {phase.subtitle}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button
                className="header-btn"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              >
                <Globe style={{ 
                  width: 'clamp(12px, 2.5vw, 16px)', 
                  height: 'clamp(12px, 2.5vw, 16px)', 
                  marginRight: '4px' 
                }} />
                <span className="hidden sm:inline">{t('nav.language')}</span>
              </button>
              {showLanguageDropdown && (
                <div style={{
                  position: 'absolute',
                  right: 0,
                  marginTop: '8px',
                  width: 'clamp(100px, 18vw, 130px)',
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                  padding: '8px 0',
                  zIndex: 50,
                  border: '1px solid #e5e7eb'
                }}>
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        width: '100%',
                        textAlign: 'left',
                        padding: 'clamp(5px, 1.2vw, 6px) clamp(8px, 2vw, 12px)',
                        fontSize: 'clamp(10px, 1.8vw, 12px)',
                        color: i18n.language === lang.code ? '#667eea' : '#374151',
                        fontWeight: i18n.language === lang.code ? '600' : '400',
                        backgroundColor: 'transparent',
                        border: 'none',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button className="header-btn">
              <HelpCircle style={{ 
                width: 'clamp(10px, 2vw, 14px)', 
                height: 'clamp(10px, 2vw, 14px)', 
                marginRight: '3px' 
              }} />
              <span className="hidden sm:inline">{t('nav.help')}</span>
            </button>

            {selectedAvatar && (
              <div style={{
                width: 'clamp(24px, 4vw, 32px)',
                height: 'clamp(24px, 4vw, 32px)',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '2px solid white',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
              }}>
                <img
                  src={selectedAvatar}
                  alt="Profile"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {step > 1 && (
        <div
          className="fixed-progress mobile-dark-progress"
          style={{
            backgroundColor: 'rgba(19, 48, 73, 0.95)'
          }}
        >
          <div className="checkpoint-progress">
            {PHASES.map((phase, index) => (
              <div key={phase.id} className="checkpoint">
                <div
                  className={`checkpoint-circle ${
                    phase.id < step ? "completed" : phase.id === step ? "active" : ""
                  }`}
                >
                  {phase.id < step ? "✓" : phase.id}
                </div>
                <div className="checkpoint-label">{phase.label}</div>
                {index < PHASES.length - 1 && (
                  <div
                    className={`checkpoint-line ${
                      phase.id < step ? "completed" : ""
                    }`}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div style={{ 
        width: '100%', 
        position: 'relative', 
        paddingTop: step > 1 ? 'calc(var(--header-height) + var(--progress-height) + 0.5rem)' : '0px',
        paddingBottom: '1rem'
      }}>
        {step === 1 ? (
          <div style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: 'clamp(0.5rem, 2vw, 1rem)'
          }}>
            <div
              className={`${
                animating
                  ? "opacity-0 translate-y-8"
                  : "opacity-100 translate-y-0"
              } transition-all duration-300`}
              style={{ width: '100%' }}
            >
              {renderPhaseContent()}
            </div>
          </div>
        ) : (
          <div 
            style={{
              minHeight: 'calc(100vh - var(--header-height) - var(--progress-height))',
              display: 'flex',
              alignItems: 'start',
              justifyContent: 'center',
             padding: (step === 2 || step === 3 || step === 4 || step === 5 || step === 6 || step === 7 || step === 10 || step === 11 || step === 12 || step === 13) ? '0' : 'clamp(0.3rem, 1vw, 0.75rem)',
              paddingTop: (step === 2 || step === 3 || step === 4 || step === 5 || step === 6 || step === 7 || step === 10 || step === 12 || step === 13) ? '0' : 'clamp(0.3rem, 1vw, 0.75rem)'
            }}
          >
            <div style={{ width: '100%', maxWidth: (step === 4) ? '100%' : '900px' }}>
              <div
                className={`${(step === 2 || step === 3 || step === 4 || step === 5 || step === 6 || step === 7 || step == 11 || step === 12 || step === 13) ? "" : "phase-card"} ${
                  animating
                    ? "opacity-0 translate-y-8"
                    : "opacity-100 translate-y-0"
                } transition-all duration-300`}
              >
                <div style={{ 
                  minHeight: (step === 2 || step === 3 || step === 4 || step === 5 || step === 6 || step === 7 || step === 10 || step === 12 || step === 13) ? 'auto' : 'clamp(150px, 25vh, 250px)', 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  justifyContent: 'center',
                  width: '100%'
                }}>
                  {renderPhaseContent()}
                </div>

                {(step !== 2 && step !== 3 && step !== 4 && step !== 5 && step !== 6 && step !== 7 && step !== 8 && step !== 10 && step !== 12 && step !== 13) && (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 'clamp(0.4rem, 1.5vw, 0.75rem)',
                    marginTop: 'clamp(0.75rem, 1.5vw, 1rem)'
                  }}>
                    <button
                      className="btn"
                      onClick={() => goToStep(step - 1)}
                      disabled={step === 1}
                    >
                      ← <span className="hidden sm:inline">{t('nav.previous')}</span>
                    </button>

                    <div style={{ 
                      display: 'flex', 
                      gap: 'clamp(0.4rem, 1.2vw, 0.6rem)' 
                    }}>
                      <button
                        className="btn"
                        onClick={() => goToStep(step + 1)}
                        disabled={step === PHASES.length}
                      >
                        {t('nav.skip')}
                      </button>

                      {step < PHASES.length ? (
                        <button
                          className="btn"
                          onClick={() => goToStep(step + 1)}
                        >
                          <span className="hidden sm:inline">{t('nav.continue')}</span> →
                        </button>
                      ) : (
                        <button
                          className="btn"
                          onClick={() =>
                            alert("Congratulations! Onboarding Complete!")
                          }
                        >
                          {t('nav.complete')}
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}