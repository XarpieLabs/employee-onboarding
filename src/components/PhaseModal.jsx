import React, { useState } from 'react';
import { X, Play, Clock, Target, Award } from 'lucide-react';
import { useGame } from '../context/GameContext';
import AvatarSelection from './Avatar/AvatarSelection';
import BabylonOffice from './VirtualOffice/BabylonOffice';
import HRQuiz from './Quiz/HRQuiz';
import MemoryGame from './Games/MemoryGame';
import CustomerSimulation from './Games/CustomerSimulation';

function PhaseModal({ phase, onClose }) {
  const { completePhase, setCurrentPhase } = useGame();
  const [currentStep, setCurrentStep] = useState(0);

  const handleStartPhase = () => {
    setCurrentPhase(phase.index);
    setCurrentStep(1);
  };

  const handlePhaseComplete = () => {
    completePhase(phase.index);
    onClose();
  };

  const renderPhaseContent = () => {
    if (currentStep === 0) {
      return (
        <div className="phase-overview">
          <h2 className="text-2xl font-bold mb-4">{phase.title}</h2>
          <p className="text-gray-600 mb-6">{phase.description}</p>
          
          <div className="phase-details grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="detail-card">
              <Clock className="w-6 h-6 text-blue-500 mb-2" />
              <h3 className="font-semibold">Duration</h3>
              <p>{phase.estimatedTime}</p>
            </div>
            <div className="detail-card">
              <Target className="w-6 h-6 text-green-500 mb-2" />
              <h3 className="font-semibold">Objectives</h3>
              <p>{phase.objectives?.length || 0} goals</p>
            </div>
            <div className="detail-card">
              <Award className="w-6 h-6 text-yellow-500 mb-2" />
              <h3 className="font-semibold">Type</h3>
              <p className="capitalize">{phase.type}</p>
            </div>
          </div>

          {phase.objectives && (
            <div className="objectives-list mb-6">
              <h3 className="font-semibold mb-3">Learning Objectives:</h3>
              <ul className="space-y-2">
                {phase.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button 
            onClick={handleStartPhase}
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            <Play className="w-5 h-5" />
            Start Phase
          </button>
        </div>
      );
    }

    // Render specific phase content
    switch (phase.type) {
      case 'interactive':
        return <AvatarSelection onComplete={handlePhaseComplete} />;
      case '3d':
        return <BabylonOffice onComplete={handlePhaseComplete} />;
      case 'quiz':
        return <HRQuiz onComplete={handlePhaseComplete} />;
      case 'game':
        return <MemoryGame onComplete={handlePhaseComplete} />;
      case 'simulation':
        return <CustomerSimulation onComplete={handlePhaseComplete} />;
      default:
        return <div>Phase content not implemented yet.</div>;
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button 
          onClick={onClose}
          className="close-button"
        >
          <X className="w-6 h-6" />
        </button>
        
        {renderPhaseContent()}
      </div>
    </div>
  );
}

export default PhaseModal;