import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import AvatarSelection from "./Avatar/AvatarSelection";
import CompanyInfoVideo from "./Video/CompanyInfoVideo";
import OfficeTour from "./OfficeTour/OfficeTour";
import VideoPlayer from "./Video/VideoPlayer";
import SigningProcess from "./Signing/SigningProcess";
import HeyGenAI from "./HeyGen/HeyGenAI";
import RoleSelector from "./Role/RoleSelector";
import TeamHierarchy from "./Team/TeamHierarchy";
import HRPoshModule from "./HRModules/HRPoshModule"; 
import Certificate from "./Certificate/Certificate";
import logo from "../Asset/logo.png";
import logoDark from "../Asset/logoDark.png";
import { ChevronDown, HelpCircle, Globe } from "lucide-react";

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
          <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            textAlign: 'center', 
            width: '100%', 
            padding: 'clamp(1rem, 3vw, 2rem)' 
          }}>
            <div style={{ marginBottom: 'clamp(1rem, 2vw, 1.5rem)' }}>
              <img
                src={logoDark}
                alt="IndiVillage Technology"
                style={{ 
                  height: 'clamp(50px, 8vw, 80px)', 
                  width: 'auto', 
                  margin: '0 auto', 
                  display: 'block' 
                }}
              />
            </div>

            <div style={{ 
              maxWidth: '48rem', 
              margin: '0 auto', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: 'clamp(1rem, 2vw, 1.5rem)' 
            }}>
              <p style={{ 
                color: '#6b7280', 
                fontSize: 'clamp(0.8rem, 2vw, 1rem)', 
                margin: 0 
              }}>
                {t('welcome.employee')}
              </p>

              <h2 style={{ 
                fontSize: 'clamp(1.25rem, 4vw, 2.25rem)', 
                fontWeight: 'bold', 
                color: '#111827', 
                margin: 0,
                lineHeight: 1.2
              }}>
                {t('welcome.greeting')}
              </h2>

              <p style={{ 
                color: '#374151', 
                fontSize: 'clamp(0.85rem, 2vw, 1rem)', 
                lineHeight: '1.75', 
                margin: 0 
              }}>
                {t('welcome.description')}{" "}
                <span style={{ fontWeight: 'bold' }}>{t('welcome.interactive')}</span> {t('welcome.that_will')}
              </p>

              <ul style={{ 
                textAlign: 'left', 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 'clamp(0.5rem, 1.5vw, 0.75rem)', 
                margin: '0 auto', 
                maxWidth: '36rem', 
                padding: 0, 
                listStyle: 'none' 
              }}>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: 'clamp(0.5rem, 1.5vw, 0.75rem)' 
                }}>
                  <span style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>•</span>
                  <span style={{ 
                    color: '#374151', 
                    fontSize: 'clamp(0.85rem, 2vw, 1rem)' 
                  }}>
                    {t('welcome.explore')}
                  </span>
                </li>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: 'clamp(0.5rem, 1.5vw, 0.75rem)' 
                }}>
                  <span style={{ fontSize: '1.25rem', marginTop: '0.25rem' }}>•</span>
                  <span style={{ 
                    color: '#374151', 
                    fontSize: 'clamp(0.85rem, 2vw, 1rem)' 
                  }}>
                    {t('welcome.know_you')}
                  </span>
                </li>
              </ul>

              <p style={{ 
                color: '#374151', 
                fontSize: 'clamp(0.85rem, 2vw, 1rem)', 
                lineHeight: '1.75', 
                margin: 0 
              }}>
                {t('welcome.self_guided')}
              </p>

              <p style={{ 
                color: '#111827', 
                fontWeight: '600', 
                fontSize: 'clamp(0.85rem, 2vw, 1rem)', 
                marginTop: 'clamp(0.5rem, 1.5vw, 1.5rem)', 
                margin: 0 
              }}>
                {t('welcome.get_started')}
              </p>

              <button
                type="button"
                className="btn"
                onClick={() => goToStep(step + 1)}
                style={{ 
                  alignSelf: 'center', 
                  marginTop: 'clamp(0.75rem, 2vw, 1rem)' 
                }}
              >
                {t('welcome.button')}
              </button>
            </div>
          </div>
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
  return <HRPoshModule onComplete={() => goToStep(step + 1)} />; 

      case 13:
        return <Certificate userName={userName} role={selectedRole} onComplete={() => goToStep(step + 1)} />;

      default:
        return (
          <div className="text-center space-y-6">
            <div className="space-y-4">
              <h3 style={{ 
                fontSize: 'clamp(1.1rem, 3vw, 1.5rem)', 
                fontWeight: '600', 
                color: '#374151' 
              }}>
                {current.title}
              </h3>
              <p style={{ 
                color: '#6b7280', 
                maxWidth: '32rem', 
                margin: '0 auto', 
                lineHeight: '1.6',
                fontSize: 'clamp(0.875rem, 2vw, 1rem)'
              }}>
                {current.subtitle}
              </p>
              <div style={{ 
                marginTop: 'clamp(1.5rem, 3vw, 2rem)', 
                padding: 'clamp(1rem, 3vw, 1.5rem)', 
                background: 'linear-gradient(135deg, #dbeafe 0%, #e9d5ff 100%)',
                borderRadius: 'clamp(12px, 2vw, 20px)', 
                border: '1px solid #93c5fd' 
              }}>
                <p style={{ 
                  color: '#6b7280', 
                  fontSize: 'clamp(0.8rem, 2vw, 0.875rem)' 
                }}>
                  {t('phase.coming_soon')}
                </p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div style={{ minHeight: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
      <div
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm shadow-sm mobile-dark-header"
        style={{ backgroundColor: 'rgba(19, 48, 73, 0.95)' }}
      >
        <div
          style={{
            width: '100%',
            padding: 'clamp(0.5rem, 1.5vw, 0.75rem) clamp(0.75rem, 2vw, 1.5rem)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 'clamp(0.25rem, 1vw, 0.5rem)',
            backgroundColor: 'rgba(19, 48, 73, 1)'
          }}
        >
          <div className="logo-container" style={{ flexShrink: 0, visibility: step === 1 ? 'hidden' : 'visible' }}>
            <img
              src={logo}
              alt="IndiVillage"
              style={{ 
                height: 'clamp(32px, 6vw, 48px)', 
                width: 'auto', 
                display: 'block' 
              }}
            />
          </div>

          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: 'clamp(4px, 0.8vw, 8px)', 
            flexShrink: 0, 
            marginLeft: step === 1 ? 'auto' : '0', 
            flexWrap: 'wrap' 
          }}>
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
                  width: 'clamp(120px, 22vw, 160px)',
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
                        padding: 'clamp(6px, 1.5vw, 8px) clamp(12px, 2.5vw, 16px)',
                        fontSize: 'clamp(11px, 2vw, 14px)',
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
                width: 'clamp(12px, 2.5vw, 16px)', 
                height: 'clamp(12px, 2.5vw, 16px)', 
                marginRight: '4px' 
              }} />
              <span className="hidden sm:inline">{t('nav.help')}</span>
            </button>

            {selectedAvatar && (
              <div style={{
                width: 'clamp(28px, 5vw, 40px)',
                height: 'clamp(28px, 5vw, 40px)',
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
          className="fixed left-0 right-0 z-40 backdrop-blur-sm shadow-sm mobile-dark-progress"
          style={{
            top: 'clamp(58px, 9vw, 76px)',
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
        paddingTop: step > 1 ? 'clamp(115px, 17vw, 145px)' : '0' 
      }}>
        {step === 1 ? (
          <div style={{ 
            minHeight: '100vh', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            padding: 'clamp(1rem, 3vw, 2rem)'
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
              minHeight: '100vh',
              display: 'flex',
              alignItems: 'start',
              justifyContent: 'center',
             padding: (step === 2 || step === 3 || step === 4 || step === 5 || step === 6 || step === 7 || step === 10 || step === 13) ? '0' : 'clamp(0.5rem, 2vw, 2rem)',
             paddingTop: (step === 2 || step === 3 || step === 4 || step === 5 || step === 6 || step === 7 || step === 10 || step === 13) ? '0' : 'var(--content-top-offset)'
            }}
          >
            <div style={{ width: '100%', maxWidth: '80rem' }}>
              <div
                className={`${(step === 2 || step === 3 || step === 4 || step === 5 || step === 6 || step === 7 || step === 13) ? "" : "phase-card"} ${
                  animating
                    ? "opacity-0 translate-y-8"
                    : "opacity-100 translate-y-0"
                } transition-all duration-300`}
              >
                <div style={{ 
                 minHeight: (step === 2 || step === 3 || step === 4 || step === 5 || step === 6 || step === 7 || step === 10 || step === 13) ? 'auto' : 'clamp(300px, 50vh, 400px)', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  {renderPhaseContent()}
                </div>

                {(step !== 2 && step !== 3 && step !== 4 && step !== 5 && step !== 6 && step !== 7 && step !== 8 && step !== 10 && step !== 13) && (
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: 'clamp(0.5rem, 2vw, 1rem)',
                    marginTop: 'clamp(1rem, 3vw, 2rem)'
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
                      gap: 'clamp(0.5rem, 1.5vw, 0.75rem)' 
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