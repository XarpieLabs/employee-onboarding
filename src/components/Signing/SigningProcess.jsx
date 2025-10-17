import React, { useState } from 'react';
import LobbyView from './LobbyView';
import DepartmentView from './DepartmentView';

export default function SigningProcess({ onComplete }) {
  const [currentView, setCurrentView] = useState('lobby'); // 'lobby', 'hr', 'finance'
  const [hrCompleted, setHrCompleted] = useState(false);
  const [financeCompleted, setFinanceCompleted] = useState(false);

  const hrDocuments = [
    {
      id: 1,
      name: 'NDA',
      description: 'Confidentiality agreement',
      docusealLink: 'https://docuseal.com/d/5buDuLUuacSAsx',
      signed: false
    },
    {
      id: 2,
      name: 'Offer Letter',
      description: 'Employment terms',
      docusealLink: 'https://docuseal.com/d/CPwJJCGsszvdK6',
      signed: false
    },
    {
      id: 3,
      name: 'Company Policy',
      description: 'Policies and guidelines',
      docusealLink: 'https://docuseal.com/d/64vKwukbnQGfVS',
      signed: false
    }
  ];

  const financeDocuments = [
    {
      id: 4,
      name: 'Tax Declaration',
      description: 'Income tax details',
      docusealLink: 'https://docuseal.com/d/5buDuLUuacSAsx',
      signed: false
    },
    {
      id: 5,
      name: 'Bank Details',
      description: 'Salary account information',
      docusealLink: 'https://docuseal.com/d/CPwJJCGsszvdK6',
      signed: false
    },
    {
      id: 6,
      name: 'PF Form',
      description: 'Provident fund enrollment',
      docusealLink: 'https://docuseal.com/d/64vKwukbnQGfVS',
      signed: false
    }
  ];

  const [hrDocStatus, setHrDocStatus] = useState(hrDocuments);
  const [financeDocStatus, setFinanceDocStatus] = useState(financeDocuments);

  const handleDoorClick = (department) => {
    setCurrentView(department);
  };

  const handleBackToLobby = () => {
    setCurrentView('lobby');
  };

  const handleDepartmentComplete = (department, updatedDocs) => {
    if (department === 'hr') {
      setHrDocStatus(updatedDocs);
      if (updatedDocs.every(doc => doc.signed)) {
        setHrCompleted(true);
      }
    } else {
      setFinanceDocStatus(updatedDocs);
      if (updatedDocs.every(doc => doc.signed)) {
        setFinanceCompleted(true);
      }
    }
  };

  const allCompleted = hrCompleted && financeCompleted;

  // Render appropriate view
  if (currentView === 'lobby') {
    return (
      <LobbyView
        hrCompleted={hrCompleted}
        financeCompleted={financeCompleted}
        allCompleted={allCompleted}
        onDoorClick={handleDoorClick}
        onComplete={onComplete}
      />
    );
  }

  if (currentView === 'hr' || currentView === 'finance') {
    return (
      <DepartmentView
        department={currentView}
        documents={currentView === 'hr' ? hrDocStatus : financeDocStatus}
        onBackToLobby={handleBackToLobby}
        onDocumentsUpdate={(updatedDocs) => handleDepartmentComplete(currentView, updatedDocs)}
      />
    );
  }

  return null;
}