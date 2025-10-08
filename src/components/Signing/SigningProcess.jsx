import React, { useState } from 'react';
import { DocusealForm } from '@docuseal/react';
import { FileText, CheckCircle, X } from 'lucide-react';

export default function SigningProcess({ onComplete }) {
  const [showSigningForm, setShowSigningForm] = useState(false);
  const [allDocumentsSigned, setAllDocumentsSigned] = useState(false);

  const documents = [
    {
      id: 1,
      name: 'Employment Agreement',
      description: 'Your official employment contract',
      icon: '📄',
      signed: false
    },
    {
      id: 2,
      name: 'Non-Disclosure Agreement',
      description: 'Confidentiality and data protection',
      icon: '🔒',
      signed: false
    },
    {
      id: 3,
      name: 'Company Policies',
      description: 'Acknowledge company guidelines',
      icon: '📋',
      signed: false
    }
  ];

  const [documentStatus, setDocumentStatus] = useState(documents);

  const handleStartSigning = () => {
    setShowSigningForm(true);
  };

  const handleDocumentSigned = () => {
    const updatedDocs = documentStatus.map(doc => ({ ...doc, signed: true }));
    setDocumentStatus(updatedDocs);
    setAllDocumentsSigned(true);
    setShowSigningForm(false);
  };

  const handleCloseForm = () => {
    setShowSigningForm(false);
  };

  const handleFormCompleted = () => {
    // Called when DocuSeal form is completed
    handleDocumentSigned();
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
        maxWidth: '1000px', 
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
          Document Signing
        </h2>
        <p style={{ 
          fontSize: 'clamp(0.9rem, 2vw, 1.1rem)', 
          color: '#cbd5e1',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          Please review and sign the following documents to complete your onboarding
        </p>
      </div>

      <div style={{
        width: '100%',
        maxWidth: '1000px',
        background: 'white',
        borderRadius: '16px',
        padding: showSigningForm ? '0' : 'clamp(2rem, 4vw, 3rem)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden'
      }}>
        {!showSigningForm ? (
          <>
            <div style={{
              display: 'grid',
              gap: '1.5rem',
              marginBottom: '2rem'
            }}>
              {documentStatus.map((doc) => (
                <div
                  key={doc.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1.25rem',
                    background: doc.signed ? '#f0fdf4' : '#f9fafb',
                    border: doc.signed ? '2px solid #22c55e' : '2px solid #e5e7eb',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    fontSize: '2.5rem',
                    flexShrink: 0
                  }}>
                    {doc.icon}
                  </div>
                  
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                      fontWeight: '600',
                      color: '#1f2937',
                      margin: '0 0 0.25rem 0'
                    }}>
                      {doc.name}
                    </h3>
                    <p style={{
                      fontSize: 'clamp(0.85rem, 1.8vw, 0.95rem)',
                      color: '#6b7280',
                      margin: 0
                    }}>
                      {doc.description}
                    </p>
                  </div>

                  {doc.signed && (
                    <CheckCircle 
                      size={32} 
                      color="#22c55e"
                      style={{ flexShrink: 0 }}
                    />
                  )}
                </div>
              ))}
            </div>

            {allDocumentsSigned && (
              <div style={{
                padding: '1rem',
                background: '#d1fae5',
                borderRadius: '8px',
                marginBottom: '1.5rem',
                border: '1px solid #52b788'
              }}>
                <p style={{
                  margin: 0,
                  fontSize: 'clamp(0.9rem, 2vw, 1rem)',
                  color: '#065f46',
                  textAlign: 'center',
                  fontWeight: '500'
                }}>
                  ✓ All documents signed successfully! You can now continue.
                </p>
              </div>
            )}

            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              {!allDocumentsSigned && (
                <button
                  onClick={handleStartSigning}
                  style={{
                    flex: 1,
                    minWidth: '200px',
                    padding: '1rem 2rem',
                    fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
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
                  Start E-Signing Process
                </button>
              )}

              <button
                onClick={onComplete}
                disabled={!allDocumentsSigned}
                className="btn"
                style={{
                  flex: 1,
                  minWidth: '200px',
                  opacity: allDocumentsSigned ? 1 : 0.5,
                  cursor: allDocumentsSigned ? 'pointer' : 'not-allowed',
                  background: allDocumentsSigned ? '#10b981' : '#d1d5db',
                  padding: '1rem 2rem',
                  fontSize: 'clamp(0.95rem, 2vw, 1.05rem)',
                  fontWeight: '600',
                  color: 'white',
                  border: 'none',
                  borderRadius: '12px'
                }}
              >
                {allDocumentsSigned ? 'Continue to Welcome Message →' : 'Complete Signing to Continue'}
              </button>
            </div>
          </>
        ) : (
          <div style={{
            position: 'relative'
          }}>
            {/* Header */}
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
                  Document Signing Portal
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
                src="https://docuseal.com/d/64vKwukbnQGfVS"
                onCompleted={handleFormCompleted}
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
                Complete all required signatures in the documents above
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
                  Cancel
                </button>
                <button
                  onClick={handleDocumentSigned}
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
                  Mark as Completed
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}