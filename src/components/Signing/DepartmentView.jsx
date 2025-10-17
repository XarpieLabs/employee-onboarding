import React, { useState } from 'react';
import { DocusealForm } from '@docuseal/react';
import { FileText, CheckCircle, X, ArrowLeft } from 'lucide-react';
import icon1 from '../../Asset/icon1.png';
import icon2 from '../../Asset/icon2.png';
import icon3 from '../../Asset/icon3.png';
import hrBg from '../../Asset/hr-bg.png';
import financeBg from '../../Asset/finance-bg.png';

export default function DepartmentView({ 
  department, 
  documents, 
  onBackToLobby, 
  onDocumentsUpdate 
}) {
  const [localDocuments, setLocalDocuments] = useState(documents);
  const [activeDocumentId, setActiveDocumentId] = useState(null);

  const isHR = department === 'hr';
  const bgImage = isHR ? hrBg : financeBg;
  const allDocsSigned = localDocuments.every(doc => doc.signed);
  const signedCount = localDocuments.filter(doc => doc.signed).length;
  const activeDocument = localDocuments.find(doc => doc.id === activeDocumentId);

  const headerGradient = 'linear-gradient(135deg, #4a9d95 0%, #5fb9b0 100%)';
  const headerBorderColor = '#3a8d85';
  const headerTextColor = '#fde68a';

  const handleStartSigning = (docId) => {
    setActiveDocumentId(docId);
  };

  const handleCloseForm = () => {
    setActiveDocumentId(null);
  };

  const handleMarkAsSigned = (docId) => {
    const updatedDocs = localDocuments.map(doc => 
      doc.id === docId ? { ...doc, signed: true } : doc
    );
    setLocalDocuments(updatedDocs);
    onDocumentsUpdate(updatedDocs);
    setActiveDocumentId(null);
  };

  const handleFormCompleted = (docId) => {
    const updatedDocs = localDocuments.map(doc => 
      doc.id === docId ? { ...doc, signed: true } : doc
    );
    setLocalDocuments(updatedDocs);
    onDocumentsUpdate(updatedDocs);
    setActiveDocumentId(null);
  };

  const handleBackClick = () => {
    if (allDocsSigned) {
      onBackToLobby();
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
      padding: 'clamp(1.5rem, 3vw, 2.5rem) clamp(1rem, 2vw, 2rem) clamp(2rem, 3vw, 3rem)',
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '714px',
        background: 'white',
        borderRadius: 'clamp(24px, 3vw, 32px)',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        border: '3px solid white',
        outlineOffset: '0px'
      }}>
        {!activeDocumentId ? (
          <>
            {/* Header */}
            <div style={{
              background: headerGradient,
              padding: 'clamp(0.85rem, 1.8vw, 1.25rem) clamp(0.75rem, 1vw, 1rem)',
              borderBottom: `2px solid ${headerBorderColor}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'clamp(0.5rem, 1vw, 0.75rem)',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={onBackToLobby}
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  border: 'none',
                  borderRadius: '8px',
                  padding: 'clamp(0.4rem, 1vw, 0.6rem) clamp(0.75rem, 1.5vw, 1rem)',
                  color: 'white',
                  fontSize: 'clamp(0.8rem, 1.6vw, 0.9rem)',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                <ArrowLeft size={16} />
                Back
              </button>
              <h2 style={{ 
                fontSize: 'clamp(1.15rem, 2.8vw, 1.5rem)', 
                fontWeight: '700', 
                color: headerTextColor,
                textAlign: 'center',
                margin: '0',
                flex: 1,
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                letterSpacing: '0.02em',
                lineHeight: '1.3'
              }}>
                {isHR ? 'HR Department Documents' : 'Finance Department Documents'}
              </h2>
              <div style={{
                background: 'white',
                padding: 'clamp(0.35rem, 0.8vw, 0.5rem) clamp(0.75rem, 1.5vw, 1rem)',
                borderRadius: '8px',
                fontSize: 'clamp(0.85rem, 1.8vw, 1rem)',
                fontWeight: '700',
                color: '#4a9d95'
              }}>
                {signedCount}/3
              </div>
            </div>

            {/* Documents List */}
            <div style={{
              background: 'linear-gradient(180deg, #9edbe8 0%, #eef5eb 100%)',
              padding: 'clamp(2rem, 3vw, 2.5rem) clamp(1.5rem, 2.5vw, 2rem)'
            }}>
              <p style={{ 
                fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)', 
                color: '#1e3a5f',
                textAlign: 'center',
                marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: '500'
              }}>
                Sign all documents to complete {isHR ? 'HR' : 'Finance'} department
              </p>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(1rem, 2vw, 1.25rem)',
                marginBottom: 'clamp(2rem, 3vw, 2.5rem)'
              }}>
                {localDocuments.map((doc) => (
                  <div
                    key={doc.id}
                    style={{
                      background: 'white',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: doc.signed ? '3px solid #52b788' : '3px solid #e5e7eb',
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'clamp(0.75rem, 1.5vw, 1rem)',
                      padding: 'clamp(1rem, 2vw, 1.25rem)'
                    }}
                  >
                    <div style={{
                      width: 'clamp(50px, 10vw, 64px)',
                      height: 'clamp(50px, 10vw, 64px)',
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#fef3c7',
                      borderRadius: '10px'
                    }}>
                      <img 
                        src={doc.id === 1 || doc.id === 4 ? icon1 : doc.id === 2 || doc.id === 5 ? icon2 : icon3} 
                        alt={doc.name}
                        style={{
                          width: '70%',
                          height: '70%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h4 style={{
                        fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
                        fontWeight: '600',
                        margin: '0 0 0.25rem 0',
                        color: '#1f2937'
                      }}>
                        {doc.name}
                      </h4>
                      <p style={{
                        fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
                        color: '#6b7280',
                        margin: 0
                      }}>
                        {doc.description}
                      </p>
                    </div>

                    <div style={{ flexShrink: 0 }}>
                      {doc.signed ? (
                        <div style={{
                          padding: 'clamp(0.5rem, 1vw, 0.65rem) clamp(0.75rem, 1.5vw, 1rem)',
                          fontSize: 'clamp(0.8rem, 1.6vw, 0.9rem)',
                          fontWeight: '600',
                          color: '#059669',
                          background: '#d1fae5',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          whiteSpace: 'nowrap'
                        }}>
                          <CheckCircle style={{ 
                            width: 'clamp(14px, 2.5vw, 18px)', 
                            height: 'clamp(14px, 2.5vw, 18px)'
                          }} />
                          Signed
                        </div>
                      ) : (
                        <button
                          onClick={() => handleStartSigning(doc.id)}
                          style={{
                            padding: 'clamp(0.5rem, 1vw, 0.65rem) clamp(1rem, 2vw, 1.25rem)',
                            fontSize: 'clamp(0.8rem, 1.6vw, 0.9rem)',
                            fontWeight: '600',
                            color: 'white',
                            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                            border: 'none',
                            borderRadius: '8px',
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            transition: 'all 0.2s ease',
                            boxShadow: '0 2px 8px rgba(102, 126, 234, 0.3)'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-1px)';
                            e.currentTarget.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 8px rgba(102, 126, 234, 0.3)';
                          }}
                        >
                          Sign
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{
                padding: 'clamp(1rem, 2vw, 1.25rem)',
                background: 'rgba(255, 255, 255, 0.8)',
                borderRadius: '12px',
                marginBottom: 'clamp(1.5rem, 2.5vw, 2rem)',
                border: '1px solid rgba(226, 232, 240, 0.8)',
                textAlign: 'center'
              }}>
                <p style={{
                  margin: 0,
                  fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)',
                  color: '#64748b',
                  fontWeight: '500'
                }}>
                  {allDocsSigned
                    ? '✓ Great! All documents signed. You can return to the lobby.'
                    : 'Please sign all documents to complete this department.'}
                </p>
              </div>

              <div style={{
                display: 'flex',
                justifyContent: 'center'
              }}>
                <button
                  onClick={handleBackClick}
                  disabled={!allDocsSigned}
                  className="btn"
                  style={{
                    fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                    padding: 'clamp(0.75rem, 1.8vw, 0.9rem) clamp(2rem, 4vw, 2.5rem)',
                    opacity: allDocsSigned ? 1 : 0.5,
                    cursor: allDocsSigned ? 'pointer' : 'not-allowed',
                    minHeight: 'clamp(48px, 8vw, 56px)'
                  }}
                >
                  {allDocsSigned ? 'Back to Lobby →' : 'Complete All Documents to Continue'}
                </button>
              </div>
            </div>
          </>
        ) : (
          <div>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1rem, 2vw, 1.25rem)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'white'
              }}>
                <FileText size={20} />
                <h3 style={{
                  fontSize: 'clamp(1rem, 2vw, 1.15rem)',
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
                <X size={20} color="white" />
              </button>
            </div>

            <div style={{
              padding: 'clamp(1rem, 2vw, 1.5rem)',
              minHeight: '60vh',
              background: '#f9fafb'
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

            <div style={{
              padding: 'clamp(0.75rem, 1.5vw, 1rem) clamp(1rem, 2vw, 1.25rem)',
              background: '#f9fafb',
              borderTop: '1px solid #e5e7eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '0.75rem',
              flexWrap: 'wrap'
            }}>
              <p style={{
                fontSize: 'clamp(0.75rem, 1.5vw, 0.85rem)',
                color: '#6b7280',
                margin: 0,
                flex: 1
              }}>
                Complete all required signatures
              </p>
              <div style={{
                display: 'flex',
                gap: '0.5rem'
              }}>
                <button
                  onClick={handleCloseForm}
                  style={{
                    padding: 'clamp(0.5rem, 1.2vw, 0.6rem) clamp(0.75rem, 1.5vw, 1rem)',
                    fontSize: 'clamp(0.8rem, 1.6vw, 0.9rem)',
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
                  Back
                </button>
                <button
                  onClick={() => handleMarkAsSigned(activeDocumentId)}
                  style={{
                    padding: 'clamp(0.5rem, 1.2vw, 0.6rem) clamp(1rem, 2vw, 1.25rem)',
                    fontSize: 'clamp(0.8rem, 1.6vw, 0.9rem)',
                    fontWeight: '600',
                    color: 'white',
                    background: '#10b981',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 8px rgba(16, 185, 129, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.5)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(16, 185, 129, 0.3)';
                  }}
                >
                  Mark as Signed
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

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
    </div>
  );
}