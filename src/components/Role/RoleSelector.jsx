// FILE: src/components/Role/RoleSelector.jsx
// STEP 8: Role Selection WITHOUT Skills Section

import React, { useState } from 'react';
import { Briefcase, Users, Code, TrendingUp, Shield, Palette } from 'lucide-react';

export default function RoleSelector({ onRoleSelect, selectedRole }) {
  const [tempSelected, setTempSelected] = useState(selectedRole);
  const [showDetails, setShowDetails] = useState(null);

  const roles = [
    {
      id: 'software-engineer',
      title: 'Software Engineer',
      icon: Code,
      department: 'Engineering',
      description: 'Build and maintain scalable software solutions',
      responsibilities: [
        'Develop high-quality code following best practices',
        'Collaborate with cross-functional teams',
        'Participate in code reviews and architectural discussions',
        'Optimize application performance and scalability',
        'Maintain and improve existing codebase'
      ],
      color: '#667eea'
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      icon: Briefcase,
      department: 'Product',
      description: 'Drive product strategy and execution',
      responsibilities: [
        'Define product vision and roadmap',
        'Gather and prioritize product requirements',
        'Work closely with engineering and design teams',
        'Analyze market trends and user feedback',
        'Define and track key product metrics'
      ],
      color: '#f59e0b'
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      icon: Palette,
      department: 'Design',
      description: 'Create intuitive and beautiful user experiences',
      responsibilities: [
        'Design user interfaces and experiences',
        'Conduct user research and usability testing',
        'Create wireframes, prototypes, and mockups',
        'Collaborate with developers on implementation',
        'Maintain design system and guidelines'
      ],
      color: '#ec4899'
    },
    {
      id: 'marketing-specialist',
      title: 'Marketing Specialist',
      icon: TrendingUp,
      department: 'Marketing',
      description: 'Drive brand awareness and customer engagement',
      responsibilities: [
        'Develop and execute marketing campaigns',
        'Manage social media and content strategy',
        'Analyze campaign performance and ROI',
        'Collaborate with sales and product teams',
        'Build and nurture customer relationships'
      ],
      color: '#10b981'
    },
    {
      id: 'hr-manager',
      title: 'HR Manager',
      icon: Users,
      department: 'Human Resources',
      description: 'Foster a positive workplace culture',
      responsibilities: [
        'Manage recruitment and onboarding processes',
        'Develop employee engagement initiatives',
        'Handle employee relations and conflict resolution',
        'Implement HR policies and procedures',
        'Oversee performance management systems'
      ],
      color: '#8b5cf6'
    },
    {
      id: 'security-analyst',
      title: 'Security Analyst',
      icon: Shield,
      department: 'Security',
      description: 'Protect company assets and data',
      responsibilities: [
        'Monitor and respond to security incidents',
        'Conduct vulnerability assessments',
        'Implement security best practices',
        'Develop security policies and procedures',
        'Train staff on security awareness'
      ],
      color: '#ef4444'
    }
  ];

  const handleSelect = (role) => {
    setTempSelected(role);
    setShowDetails(role.id);
  };

  const handleConfirm = () => {
    if (tempSelected) {
      onRoleSelect(tempSelected);
    }
  };

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      padding: 'clamp(2rem, 4vw, 4rem) clamp(1rem, 3vw, 2rem)',
      background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(2rem, 4vw, 3rem)'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#1e293b',
            marginBottom: '1rem'
          }}>
            Your Role & Responsibilities
          </h2>
          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Select your role to understand your responsibilities and what's expected of you
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'clamp(1rem, 2vw, 1.5rem)',
          marginBottom: '2rem'
        }}>
          {roles.map((role) => {
            const Icon = role.icon;
            const isSelected = tempSelected?.id === role.id;
            
            return (
              <div
                key={role.id}
                onClick={() => handleSelect(role)}
                style={{
                  background: isSelected ? 'white' : 'rgba(255, 255, 255, 0.7)',
                  borderRadius: '16px',
                  padding: 'clamp(1.25rem, 3vw, 1.5rem)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: isSelected ? `3px solid ${role.color}` : '3px solid transparent',
                  boxShadow: isSelected 
                    ? '0 10px 40px rgba(0, 0, 0, 0.15)'
                    : '0 4px 16px rgba(0, 0, 0, 0.08)',
                  transform: isSelected ? 'translateY(-4px)' : 'translateY(0)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.12)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSelected) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.08)';
                  }
                }}
              >
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '12px',
                  background: role.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                  boxShadow: `0 4px 12px ${role.color}40`
                }}>
                  <Icon size={28} color="white" />
                </div>
                
                <h3 style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                  fontWeight: '700',
                  color: '#1e293b',
                  marginBottom: '0.5rem'
                }}>
                  {role.title}
                </h3>
                
                <p style={{
                  fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)',
                  color: '#64748b',
                  fontWeight: '600',
                  marginBottom: '0.75rem'
                }}>
                  {role.department}
                </p>
                
                <p style={{
                  fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                  color: '#475569',
                  lineHeight: '1.5'
                }}>
                  {role.description}
                </p>

                {isSelected && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: role.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontWeight: 'bold'
                  }}>
                    ✓
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {showDetails && tempSelected && (
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: 'clamp(1.5rem, 3vw, 2rem)',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
            border: `3px solid ${tempSelected.color}`,
            animation: 'slideUp 0.4s ease-out'
          }}>
            <h3 style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              fontWeight: 'bold',
              color: '#1e293b',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem'
            }}>
              <span style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: tempSelected.color,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {React.createElement(tempSelected.icon, { size: 24, color: 'white' })}
              </span>
              {tempSelected.title} - Detailed View
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2rem'
            }}>
              <div>
                <h4 style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  fontWeight: '600',
                  color: '#1e293b',
                  marginBottom: '1rem'
                }}>
                  Key Responsibilities
                </h4>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                }}>
                  {tempSelected.responsibilities.map((resp, index) => (
                    <li key={index} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: 'clamp(0.875rem, 1.8vw, 0.95rem)',
                      color: '#475569',
                      lineHeight: '1.6'
                    }}>
                      <span style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: tempSelected.color,
                        marginTop: '0.5rem',
                        flexShrink: 0
                      }} />
                      {resp}
                    </li>
                  ))}
                </ul>

                <div style={{
                  marginTop: '2rem',
                  padding: '1rem',
                  background: '#f8fafc',
                  borderRadius: '12px',
                  border: '2px solid #e2e8f0'
                }}>
                  <p style={{
                    fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                    color: '#64748b',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    <strong style={{ color: '#1e293b' }}>Department:</strong> {tempSelected.department}
                  </p>
                </div>
              </div>
            </div>

            <div style={{
              marginTop: '2rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={() => setShowDetails(null)}
                style={{
                  padding: '0.75rem 1.5rem',
                  background: '#e2e8f0',
                  color: '#475569',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#cbd5e1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#e2e8f0';
                }}
              >
                Choose Different Role
              </button>
              <button
                onClick={handleConfirm}
                className="btn"
                style={{
                  background: tempSelected.color,
                  padding: '0.75rem 2rem'
                }}
              >
                Confirm Role Selection →
              </button>
            </div>
          </div>
        )}

        {!showDetails && (
          <div style={{
            textAlign: 'center',
            marginTop: '2rem'
          }}>
            <p style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              color: '#64748b',
              marginBottom: '1rem'
            }}>
              Select a role above to view detailed responsibilities and confirm
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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