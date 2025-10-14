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
          <h2 className="text-xl font-bold mb-3">{phase.title}</h2>
          <p className="text-gray-600 mb-4">{phase.description}</p>
          
          <div className="phase-details grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            <div className="detail-card">
              <Clock className="w-5 h-5 text-blue-500 mb-2" />
              <h3 className="font-semibold text-sm">Duration</h3>
              <p className="text-sm">{phase.estimatedTime}</p>
            </div>
            <div className="detail-card">
              <Target className="w-5 h-5 text-green-500 mb-2" />
              <h3 className="font-semibold text-sm">Goals</h3>
              <p className="text-sm">{phase.objectives?.length || 0} items</p>
            </div>
            <div className="detail-card">
              <Award className="w-5 h-5 text-yellow-500 mb-2" />
              <h3 className="font-semibold text-sm">Type</h3>
              <p className="text-sm capitalize">{phase.type}</p>
            </div>
          </div>

          {phase.objectives && (
            <div className="objectives-list mb-4">
              <h3 className="font-semibold mb-2 text-sm">Objectives:</h3>
              <ul className="space-y-1">
                {phase.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm">{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button 
            onClick={handleStartPhase}
            className="btn-primary w-full flex items-center justify-center gap-2 py-2"
          >
            <Play className="w-4 h-4" />
            Start
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