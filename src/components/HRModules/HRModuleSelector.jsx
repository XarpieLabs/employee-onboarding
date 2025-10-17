import React, { useState } from 'react';
import { BookOpen, Shield, FileText, Lock, CheckCircle, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import TypeWriter from '../TypeWriter';
import HRPoshModule from './HRPoshModule';

export default function HRModuleSelector({ onComplete }) {
  const [selectedModule, setSelectedModule] = useState(null);
  const [completedModules, setCompletedModules] = useState([]);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const modules = [
    {
      id: 'posh',
      title: 'POSH Training',
      subtitle: 'Harassment Prevention',
      description: 'Workplace ethics and professional conduct.',
      icon: Shield,
      isActive: true,
      color: '#667eea',
      bgColor: '#ede9fe',
      estimatedTime: '10 min',
      topics: ['Ethics', 'Boundaries', 'Reporting']
    },
    {
      id: 'leave',
      title: 'Leave Policy',
      subtitle: 'Leave Management',
      description: 'Company leave policies and procedures.',
      icon: FileText,
      isActive: false,
      color: '#10b981',
      bgColor: '#d1fae5',
      estimatedTime: '8 min',
      topics: ['Types', 'Application', 'Balance']
    },
    {
      id: 'ip',
      title: 'IP Rights',
      subtitle: 'Intellectual Property',
      description: 'IP rights and confidentiality agreements.',
      icon: BookOpen,
      isActive: false,
      color: '#f59e0b',
      bgColor: '#fef3c7',
      estimatedTime: '8 min',
      topics: ['Rights', 'Confidentiality', 'Security']
    }
  ];

  const handleModuleSelect = (moduleId) => {
    const module = modules.find(m => m.id === moduleId);
    if (module.isActive) {
      setSelectedModule(moduleId);
    }
  };

  const handleModuleComplete = () => {
    setCompletedModules([...completedModules, selectedModule]);
    setSelectedModule(null);
  };

  const handleContinue = () => {
    onComplete();
  };

  // If a module is selected, show that module's content
  if (selectedModule === 'posh') {
    return <HRPoshModule onComplete={handleModuleComplete} />;
  }

  // Show module selection screen
  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      padding: 'clamp(1.5rem, 3vw, 2rem) clamp(0.8rem, 2vw, 1.5rem)',
      background: 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(1.5rem, 3vw, 2rem)' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight: 'bold',
            color: '#fde68a',
            marginBottom: '0.5rem'
          }}>
            <TypeWriter 
              key="hr-header"
              text="HR Training"
              speed={50}
              delay={500}
              onComplete={() => setShowSubtitle(true)}
            />
          </h2>
          <div style={{
            fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
            color: '#6b7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            {showSubtitle && (
              <TypeWriter 
                key="hr-subtitle"
                text="Complete required training modules"
                speed={30}
                delay={0}
                onComplete={() => setShowContent(true)}
              />
            )}
          </div>
        </div>

        {/* Progress Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: showContent ? 1 : 0, 
            y: showContent ? 0 : 20 
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
          padding: '1rem',
          background: 'white',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <span style={{ fontSize: 'clamp(0.9rem, 2vw, 1rem)', color: '#6b7280', fontWeight: '500' }}>
            Completed: {completedModules.length} / {modules.filter(m => m.isActive).length}
          </span>
          <div style={{
            flex: 1,
            maxWidth: '200px',
            height: '8px',
            background: '#e5e7eb',
            borderRadius: '4px',
            overflow: 'hidden'
          }}>
            <div style={{
              height: '100%',
              width: `${(completedModules.length / modules.filter(m => m.isActive).length) * 100}%`,
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
        </div>

        {/* Module Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(1rem, 2vw, 1.5rem)',
          marginBottom: '2rem'
        }}>
          {modules.map((module) => {
            const Icon = module.icon;
            const isCompleted = completedModules.includes(module.id);
            
            return (
              <div
                key={module.id}
                onClick={() => handleModuleSelect(module.id)}
                style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: 'clamp(1.5rem, 3vw, 2rem)',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  cursor: module.isActive ? 'pointer' : 'not-allowed',
                  opacity: module.isActive ? 1 : 0.6,
                  transition: 'all 0.3s ease',
                  border: `2px solid ${isCompleted ? module.color : 'transparent'}`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (module.isActive) {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (module.isActive) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                  }
                }}
              >
                {/* Completed Badge */}
                {isCompleted && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: module.color,
                    borderRadius: '50%',
                    padding: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <CheckCircle size={20} color="white" />
                  </div>
                )}

                {/* Icon */}
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '12px',
                  background: module.bgColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem'
                }}>
                  <Icon size={30} color={module.color} />
                </div>

                {/* Content */}
                <h3 style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                  fontWeight: '600',
                  color: '#1f2937',
                  marginBottom: '0.5rem'
                }}>
                  {module.title}
                </h3>

                <p style={{
                  fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                  color: '#667eea',
                  fontWeight: '500',
                  marginBottom: '0.75rem'
                }}>
                  {module.subtitle}
                </p>

                <p style={{
                  fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                  color: '#6b7280',
                  lineHeight: '1.5',
                  marginBottom: '1rem'
                }}>
                  {module.description}
                </p>

                {/* Topics */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  {module.topics.map((topic, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
                        padding: '0.25rem 0.75rem',
                        background: module.bgColor,
                        color: module.color,
                        borderRadius: '12px',
                        fontWeight: '500'
                      }}
                    >
                      {topic}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid #e5e7eb'
                }}>
                  <span style={{
                    fontSize: 'clamp(0.8rem, 1.7vw, 0.9rem)',
                    color: '#9ca3af',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem'
                  }}>
                    ⏱ {module.estimatedTime}
                  </span>

                  {!module.isActive ? (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: '#9ca3af',
                      fontSize: 'clamp(0.8rem, 1.7vw, 0.9rem)'
                    }}>
                      <Lock size={16} />
                      <span>Coming Soon</span>
                    </div>
                  ) : isCompleted ? (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: module.color,
                      fontSize: 'clamp(0.8rem, 1.7vw, 0.9rem)',
                      fontWeight: '600'
                    }}>
                      <CheckCircle size={16} />
                      <span>Completed</span>
                    </div>
                  ) : (
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      color: module.color,
                      fontSize: 'clamp(0.8rem, 1.7vw, 0.9rem)',
                      fontWeight: '600'
                    }}>
                      <span>Start Module</span>
                      <ChevronRight size={16} />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Continue Button */}
        {completedModules.length >= modules.filter(m => m.isActive).length && (
          <div style={{
            textAlign: 'center',
            padding: '2rem',
            background: 'white',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
          }}>
            <p style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: '#10b981',
              fontWeight: '600',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}>
              <CheckCircle size={24} />
              All modules completed! Great job!
            </p>
            <button
              onClick={handleContinue}
              style={{
                padding: '1rem 2rem',
                fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                fontWeight: '600',
                color: 'white',
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                border: 'none',
                borderRadius: '12px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(102, 126, 234, 0.4)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
              }}
            >
              Continue to Next Phase →
            </button>
          </div>
        )}
        </motion.div>
      </div>
    </div>
  );
}