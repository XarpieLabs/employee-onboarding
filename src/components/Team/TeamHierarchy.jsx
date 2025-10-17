import React, { useState } from 'react';
import { Mail, Phone, MapPin, Heart, Calendar, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import TypeWriter from '../TypeWriter';

export default function TeamHierarchy({ onComplete }) {
  const [selectedMember, setSelectedMember] = useState(null);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const teamMembers = [
    {
      id: 1,
      name: 'Manju Kesani',
      position: 'CEO',
      email: 'manju.kesani@indivillage.com',
      phone: '+1 (555) 001-0001',
      location: 'New York, USA',
      joinDate: 'January 2015',
      hobbies: ['Strategic Planning', 'Mentoring', 'Golf'],
      department: 'Executive',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      color: '#ef4444'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'CTO',
      email: 'sarah.johnson@indivillage.com',
      phone: '+1 (555) 002-0002',
      location: 'San Francisco, USA',
      joinDate: 'March 2016',
      hobbies: ['Coding', 'AI Research', 'Hiking'],
      department: 'Technology',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      color: '#3b82f6'
    },
    {
      id: 3,
      name: 'David Kim',
      position: 'CFO',
      email: 'david.kim@indivillage.com',
      phone: '+1 (555) 003-0003',
      location: 'New York, USA',
      joinDate: 'July 2017',
      hobbies: ['Investment', 'Marathon', 'Chess'],
      department: 'Finance',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      color: '#10b981'
    },
    {
      id: 4,
      name: 'Jennifer Martinez',
      position: 'CMO',
      email: 'jennifer.martinez@indivillage.com',
      phone: '+1 (555) 004-0004',
      location: 'Los Angeles, USA',
      joinDate: 'November 2017',
      hobbies: ['Brand Strategy', 'Art', 'Surfing'],
      department: 'Marketing',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      color: '#f59e0b'
    },
    {
      id: 5,
      name: 'Michael Chen',
      position: 'Senior Engineer',
      email: 'michael.chen@indivillage.com',
      phone: '+1 (555) 101-0001',
      location: 'Seattle, USA',
      joinDate: 'June 2018',
      hobbies: ['Open Source', 'Gaming', 'Cooking'],
      department: 'Engineering',
      avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
      color: '#06b6d4'
    },
    {
      id: 6,
      name: 'Emily Rodriguez',
      position: 'DevOps Engineer',
      email: 'emily.rodriguez@indivillage.com',
      phone: '+1 (555) 101-0002',
      location: 'Austin, USA',
      joinDate: 'September 2019',
      hobbies: ['Automation', 'Cycling', 'Travel'],
      department: 'Engineering',
      avatar: 'https://randomuser.me/api/portraits/women/26.jpg',
      color: '#06b6d4'
    },
    {
      id: 7,
      name: 'Lisa Anderson',
      position: 'Financial Analyst',
      email: 'lisa.anderson@indivillage.com',
      phone: '+1 (555) 102-0001',
      location: 'Boston, USA',
      joinDate: 'January 2020',
      hobbies: ['Data Analysis', 'Swimming', 'Reading'],
      department: 'Finance',
      avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
      color: '#34d399'
    },
    {
      id: 8,
      name: 'Alex Thompson',
      position: 'Marketing Manager',
      email: 'alex.thompson@indivillage.com',
      phone: '+1 (555) 103-0001',
      location: 'Miami, USA',
      joinDate: 'April 2019',
      hobbies: ['SEO', 'Content', 'Tennis'],
      department: 'Marketing',
      avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
      color: '#fbbf24'
    }
  ];

  return (
    <div style={{
      width: '100%',
      minHeight: '100vh',
      padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem)',
      background: 'linear-gradient(180deg, #f8fafc 0%, #e2e8f0 100%)'
    }}>
      <div style={{
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(2rem, 4vw, 3rem)'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 'bold',
            color: '#fde68a',
            marginBottom: '1rem'
          }}>
            <TypeWriter 
              key="team-header"
              text="Explore the Hierarchy Chart"
              speed={50}
              delay={500}
              onComplete={() => setShowSubtitle(true)}
            />
          </h2>
          <div style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            color: '#64748b',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            {showSubtitle && (
              <TypeWriter 
                key="team-subtitle"
                text="Click on each team member's profile to reveal their role, responsibilities, hobbies, and interests"
                speed={30}
                delay={0}
                onComplete={() => setShowContent(true)}
              />
            )}
          </div>
        </div>

        <motion.div 
          style={{
            display: 'grid',
            gridTemplateColumns: selectedMember ? '60% 40%' : '1fr',
            gap: '2rem',
            alignItems: 'start'
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ 
            opacity: showContent ? 1 : 0, 
            y: showContent ? 0 : 20 
          }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div style={{
            background: 'white',
            borderRadius: '16px',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
          }}>
            <h3 style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.3rem)',
              fontWeight: '600',
              color: '#1f2937',
              marginBottom: '2rem',
              textAlign: 'center'
            }}>
              ORGANIZATIONAL CHART
            </h3>

            {/* CEO Section */}
            <div style={{ position: 'relative', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                  onClick={() => setSelectedMember(teamMembers[0])}
                  style={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    textAlign: 'center',
                    padding: '1rem',
                    background: selectedMember?.id === 1 ? '#fef2f2' : 'transparent',
                    borderRadius: '12px',
                    border: selectedMember?.id === 1 ? '3px solid #ef4444' : '3px solid transparent'
                  }}>
                    <div style={{
                      width: '90px',
                      height: '90px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      margin: '0 auto 0.75rem',
                      border: '4px solid #ef4444',
                      boxShadow: '0 4px 12px rgba(239, 68, 68, 0.3)'
                    }}>
                      <img src={teamMembers[0].avatar} alt={teamMembers[0].name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <p style={{ fontSize: '1rem', fontWeight: '700', color: '#1f2937', margin: '0 0 0.25rem 0' }}>{teamMembers[0].name}</p>
                    <p style={{ fontSize: '0.875rem', color: '#ef4444', fontWeight: '600', margin: 0 }}>{teamMembers[0].position}</p>
                  </div>
                </div>
              </div>

              {/* Vertical line from CEO */}
              <div style={{ 
                position: 'absolute', 
                bottom: '-30px', 
                left: '50%', 
                transform: 'translateX(-50%)',
                width: '3px', 
                height: '30px', 
                background: '#cbd5e1' 
              }}></div>

              {/* Horizontal line connecting to all reports */}
              <div style={{ 
                position: 'absolute', 
                bottom: '-30px', 
                left: '15%', 
                right: '15%',
                height: '3px', 
                background: '#cbd5e1',
                top: 'auto'
              }}></div>
            </div>

            {/* Spacing for lines */}
            <div style={{ height: '30px', position: 'relative' }}>
              {/* Vertical lines up to each direct report */}
              {[0, 1, 2, 3].map((idx) => (
                <div 
                  key={idx}
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: `calc(${15 + (idx * 23.33)}% + ${idx * 1.5}rem)`,
                    width: '3px', 
                    height: '30px', 
                    background: '#cbd5e1'
                  }}
                ></div>
              ))}
            </div>

            {/* Direct Reports Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.5rem',
              marginBottom: '3rem'
            }}>
              {teamMembers.slice(1, 5).map((member) => (
                <div key={member.id}>
                  <div
                    onClick={() => setSelectedMember(member)}
                    style={{
                      cursor: 'pointer',
                      textAlign: 'center',
                      padding: '0.875rem',
                      background: selectedMember?.id === member.id ? `${member.color}20` : '#f9fafb',
                      borderRadius: '12px',
                      border: selectedMember?.id === member.id ? `3px solid ${member.color}` : '2px solid #e5e7eb',
                      transition: 'all 0.3s ease',
                      boxShadow: selectedMember?.id === member.id ? `0 4px 12px ${member.color}40` : '0 2px 4px rgba(0,0,0,0.05)'
                    }}
                  >
                    <div style={{
                      width: '75px',
                      height: '75px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      margin: '0 auto 0.6rem',
                      border: `3px solid ${member.color}`,
                      boxShadow: `0 3px 10px ${member.color}30`
                    }}>
                      <img src={member.avatar} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                    <p style={{ fontSize: '0.875rem', fontWeight: '700', color: '#1f2937', margin: '0 0 0.25rem 0' }}>{member.name}</p>
                    <p style={{ fontSize: '0.75rem', color: member.color, fontWeight: '600', margin: 0 }}>{member.position}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Team Members Row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.25rem',
              marginTop: '2rem'
            }}>
              {teamMembers.slice(5).map((member) => (
                <div
                  key={member.id}
                  onClick={() => setSelectedMember(member)}
                  style={{
                    cursor: 'pointer',
                    textAlign: 'center',
                    padding: '0.75rem',
                    background: selectedMember?.id === member.id ? `${member.color}20` : '#f9fafb',
                    borderRadius: '12px',
                    border: selectedMember?.id === member.id ? `3px solid ${member.color}` : '2px solid #e5e7eb',
                    transition: 'all 0.3s ease',
                    boxShadow: selectedMember?.id === member.id ? `0 4px 12px ${member.color}40` : '0 2px 4px rgba(0,0,0,0.05)'
                  }}
                >
                  <div style={{
                    width: '65px',
                    height: '65px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    margin: '0 auto 0.5rem',
                    border: `3px solid ${member.color}`,
                    boxShadow: `0 3px 10px ${member.color}30`
                  }}>
                    <img src={member.avatar} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <p style={{ fontSize: '0.8rem', fontWeight: '700', color: '#1f2937', margin: '0 0 0.25rem 0' }}>{member.name}</p>
                  <p style={{ fontSize: '0.7rem', color: member.color, fontWeight: '600', margin: 0 }}>{member.position}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Member Details */}
          {selectedMember && (
            <div style={{
              background: 'white',
              borderRadius: '16px',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
              position: 'sticky',
              top: '2rem'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
                <div style={{
                  width: '110px',
                  height: '110px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: `4px solid ${selectedMember.color}`,
                  margin: '0 auto 1rem',
                  boxShadow: `0 8px 20px ${selectedMember.color}40`
                }}>
                  <img src={selectedMember.avatar} alt={selectedMember.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <h3 style={{
                  fontSize: 'clamp(1.3rem, 2.5vw, 1.5rem)',
                  fontWeight: 'bold',
                  color: '#1f2937',
                  margin: '0 0 0.5rem 0'
                }}>
                  {selectedMember.name}
                </h3>
                <p style={{
                  fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                  color: selectedMember.color,
                  fontWeight: '600',
                  margin: 0
                }}>
                  {selectedMember.position}
                </p>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.875rem',
                  background: '#f9fafb',
                  borderRadius: '10px',
                  border: '1px solid #e5e7eb'
                }}>
                  <Briefcase size={20} color={selectedMember.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: '0 0 0.25rem 0', fontWeight: '500' }}>Department</p>
                    <p style={{ fontSize: '0.95rem', color: '#1f2937', fontWeight: '600', margin: 0 }}>{selectedMember.department}</p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.875rem',
                  background: '#f9fafb',
                  borderRadius: '10px',
                  border: '1px solid #e5e7eb'
                }}>
                  <Mail size={20} color={selectedMember.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: '0 0 0.25rem 0', fontWeight: '500' }}>Email</p>
                    <p style={{ fontSize: '0.875rem', color: '#1f2937', fontWeight: '500', margin: 0, wordBreak: 'break-word' }}>{selectedMember.email}</p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.875rem',
                  background: '#f9fafb',
                  borderRadius: '10px',
                  border: '1px solid #e5e7eb'
                }}>
                  <Phone size={20} color={selectedMember.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: '0 0 0.25rem 0', fontWeight: '500' }}>Phone</p>
                    <p style={{ fontSize: '0.875rem', color: '#1f2937', fontWeight: '500', margin: 0 }}>{selectedMember.phone}</p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.875rem',
                  background: '#f9fafb',
                  borderRadius: '10px',
                  border: '1px solid #e5e7eb'
                }}>
                  <MapPin size={20} color={selectedMember.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: '0 0 0.25rem 0', fontWeight: '500' }}>Location</p>
                    <p style={{ fontSize: '0.875rem', color: '#1f2937', fontWeight: '500', margin: 0 }}>{selectedMember.location}</p>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  padding: '0.875rem',
                  background: '#f9fafb',
                  borderRadius: '10px',
                  border: '1px solid #e5e7eb'
                }}>
                  <Calendar size={20} color={selectedMember.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <p style={{ fontSize: '0.75rem', color: '#9ca3af', margin: '0 0 0.25rem 0', fontWeight: '500' }}>Joined IndiVillage</p>
                    <p style={{ fontSize: '0.875rem', color: '#1f2937', fontWeight: '500', margin: 0 }}>{selectedMember.joinDate}</p>
                  </div>
                </div>
              </div>

              <div style={{
                marginTop: '1.5rem',
                paddingTop: '1.5rem',
                borderTop: '2px solid #e5e7eb'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '1rem'
                }}>
                  <Heart size={20} color={selectedMember.color} />
                  <h4 style={{
                    fontSize: '1.05rem',
                    fontWeight: '700',
                    color: '#1f2937',
                    margin: 0
                  }}>
                    Hobbies & Interests
                  </h4>
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.6rem'
                }}>
                  {selectedMember.hobbies.map((hobby, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.6rem 1rem',
                        background: `${selectedMember.color}20`,
                        color: selectedMember.color,
                        borderRadius: '20px',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        border: `1px solid ${selectedMember.color}40`
                      }}
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <div style={{
          marginTop: '2rem',
          textAlign: 'center'
        }}>
          <button
            onClick={onComplete}
            className="btn"
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.1rem)',
              padding: '1rem 2rem',
              minWidth: '300px'
            }}
          >
            Continue to HR Modules →
          </button>
        </div>
      </div>
    </div>
  );
}