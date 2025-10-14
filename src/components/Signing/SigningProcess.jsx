import React, { useState } from 'react';
import { DocusealForm } from '@docuseal/react';
import { FileText, CheckCircle, X } from 'lucide-react';
import icon1 from '../../Asset/icon1.png';
import icon2 from '../../Asset/icon2.png';
import icon3 from '../../Asset/icon3.png';
import bgImage from '../../Asset/bg.png';

export default function SigningProcess({ onComplete }) {
  const documents = [
    {
      id: 1,
      name: 'NDA',
      description: 'Confidentiality agreement',
      icon: icon1,
      docusealLink: 'https://docuseal.com/d/5buDuLUuacSAsx',
      signed: false
    },
    {
      id: 2,
      name: 'Offer Letter',
      description: 'Employment terms',
      icon: icon2,
      docusealLink: 'https://docuseal.com/d/CPwJJCGsszvdK6',
      signed: false
    },
    {
      id: 3,
      name: 'Company Policy',
      description: 'Policies and guidelines',
      icon: icon3,
      docusealLink: 'https://docuseal.com/d/64vKwukbnQGfVS',
      signed: false
    }
  ];

  const [documentStatus, setDocumentStatus] = useState(documents);
  const [activeDocumentId, setActiveDocumentId] = useState(null);

  const handleStartSigning = (docId) => {
    setActiveDocumentId(docId);
  };

  const handleCloseForm = () => {
    setActiveDocumentId(null);
  };

  const handleFormCompleted = (docId) => {
    const updatedDocs = documentStatus.map(doc => 
      doc.id === docId ? { ...doc, signed: true } : doc
    );
    setDocumentStatus(updatedDocs);
    setActiveDocumentId(null);
  };

  const handleMarkAsSigned = (docId) => {
    const updatedDocs = documentStatus.map(doc => 
      doc.id === docId ? { ...doc, signed: true } : doc
    );
    setDocumentStatus(updatedDocs);
    setActiveDocumentId(null);
  };

  const allDocumentsSigned = documentStatus.every(doc => doc.signed);
  const signedCount = documentStatus.filter(doc => doc.signed).length;
  const activeDocument = documentStatus.find(doc => doc.id === activeDocumentId);

  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(1rem, 3vw, 2rem)',
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      position: 'relative'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1100px',
        background: 'white',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
      }}>
        {!activeDocumentId ? (
          <>
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #0d9488 0%, #0891b2 100%)',
              padding: 'clamp(1.5rem, 3vw, 2rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderRadius: '24px 24px 0 0'
            }}>
              <h2 style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '600',
                color: 'white',
                margin: 0
              }}>
                Human Resources Documents
              </h2>
              <div style={{
                background: 'white',
                padding: '0.5rem 1.25rem',
                borderRadius: '12px',
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                fontWeight: '600',
                color: '#0d9488'
              }}>
                {signedCount}/3
              </div>
            </div>

            {/* Documents List */}
            <div style={{
              padding: 'clamp(2rem, 4vw, 3rem)'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                {documentStatus.map((doc) => (
                  <div
                    key={doc.id}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1.5rem',
                      padding: '1.5rem',
                      background: '#f8fafc',
                      borderRadius: '16px',
                      border: '1px solid #e2e8f0',
                      flexWrap: 'wrap'
                    }}
                  >
                    {/* Icon */}
                    <div style={{
                      width: '64px',
                      height: '64px',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <img 
                        src={doc.icon} 
                        alt={doc.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>

                    {/* Document Info */}
                    <div style={{ flex: 1, minWidth: '200px' }}>
                      <h3 style={{
                        fontSize: 'clamp(1.1rem, 2vw, 1.25rem)',
                        fontWeight: '600',
                        color: '#1e293b',
                        margin: '0 0 0.25rem 0'
                      }}>
                        {doc.name}
                      </h3>
                      <p style={{
                        fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
                        color: '#64748b',
                        margin: 0
                      }}>
                        {doc.description}
                      </p>
                    </div>

                    {/* Sign Button or Signed Badge */}
                    {doc.signed ? (
                      <div style={{
                        padding: '0.75rem 1.75rem',
                        fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                        fontWeight: '600',
                        color: '#059669',
                        background: '#d1fae5',
                        borderRadius: '12px',
                        minWidth: '100px',
                        textAlign: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <CheckCircle size={20} />
                        Signed
                      </div>
                    ) : (
                      <button
                        onClick={() => handleStartSigning(doc.id)}
                        style={{
                          padding: '0.75rem 1.75rem',
                          fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
                          fontWeight: '600',
                          color: 'white',
                          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                          border: 'none',
                          borderRadius: '12px',
                          cursor: 'pointer',
                          minWidth: '100px',
                          textAlign: 'center',
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
                        Sign
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Complete Button */}
              <div style={{
                marginTop: '2rem',
                display: 'flex',
                justifyContent: 'center'
              }}>
                <button
                  onClick={onComplete}
                  disabled={!allDocumentsSigned}
                  style={{
                    minWidth: '250px',
                    padding: '1rem 2rem',
                    fontSize: 'clamp(1rem, 2vw, 1.1rem)',
                    fontWeight: '600',
                    color: 'white',
                    background: allDocumentsSigned ? '#10b981' : '#d1d5db',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: allDocumentsSigned ? 'pointer' : 'not-allowed',
                    opacity: allDocumentsSigned ? 1 : 0.6,
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    if (allDocumentsSigned) {
                      e.currentTarget.style.background = '#059669';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (allDocumentsSigned) {
                      e.currentTarget.style.background = '#10b981';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {allDocumentsSigned ? 'Complete Signing Process →' : 'Complete All Signatures to Continue'}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div style={{
            position: 'relative'
          }}>
            {/* DocuSeal Form Header */}
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                color: 'white'
              }}>
                <FileText size={24} />
                <h3 style={{
                  fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)',
                  fontWeight: '600',
                  margin: 0
                }}>
                  {activeDocument?.name}
                </h3>
              </div>
              <button
                onClick={handleCloseForm}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <X size={24} color="white" />
              </button>
            </div>

            {/* DocuSeal Form */}
            <div style={{
              padding: '1.5rem',
              minHeight: '70vh'
            }}>
              <DocusealForm
                src={activeDocument?.docusealLink}
                onCompleted={() => handleFormCompleted(activeDocumentId)}
                style={{
                  width: '100%',
                  minHeight: '600px',
                  border: 'none'
                }}
              />
            </div>

            {/* Footer */}
            <div style={{
              padding: '1rem 1.5rem',
              background: '#f9fafb',
              borderTop: '1px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <p style={{
                fontSize: 'clamp(0.8rem, 1.8vw, 0.875rem)',
                color: '#6b7280',
                margin: 0
              }}>
                Complete all required signatures in the document above
              </p>
              <div style={{
                display: 'flex',
                gap: '0.75rem'
              }}>
                <button
                  onClick={handleCloseForm}
                  style={{
                    padding: '0.625rem 1.25rem',
                    fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                    fontWeight: '500',
                    color: '#6b7280',
                    background: 'white',
                    border: '1px solid #d1d5db',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f3f4f6';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'white';
                  }}
                >
                  Back to Documents
                </button>
                <button
                  onClick={() => handleMarkAsSigned(activeDocumentId)}
                  style={{
                    padding: '0.625rem 1.5rem',
                    fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                    fontWeight: '600',
                    color: 'white',
                    background: '#10b981',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(16, 185, 129, 0.4)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(16, 185, 129, 0.4)';
                  }}
                >
                  Mark as Signed
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}