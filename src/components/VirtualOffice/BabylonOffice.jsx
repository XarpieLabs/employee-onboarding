import React, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';

function BabylonOffice({ onComplete }) {
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const engineRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Initialize Babylon.js
    const engine = new BABYLON.Engine(canvasRef.current, true, {
      preserveDrawingBuffer: true,
      stencil: true
    });
    engineRef.current = engine;

    const scene = new BABYLON.Scene(engine);
    sceneRef.current = scene;

    // Create camera
    const camera = new BABYLON.ArcRotateCamera(
      "camera",
      -Math.PI / 2,
      Math.PI / 2.5,
      15,
      BABYLON.Vector3.Zero(),
      scene
    );
    camera.attachControls(canvasRef.current, true);

    // Create lighting
    const hemiLight = new BABYLON.HemisphericLight("hemiLight", new BABYLON.Vector3(0, 1, 0), scene);
    hemiLight.intensity = 0.7;

    const dirLight = new BABYLON.DirectionalLight("dirLight", new BABYLON.Vector3(-1, -1, -1), scene);
    dirLight.intensity = 0.5;

    // Create ground
    const ground = BABYLON.CreateGround("ground", 30, 30, 2, scene);
    const groundMaterial = new BABYLON.StandardMaterial("groundMat", scene);
    groundMaterial.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.9);
    ground.material = groundMaterial;

    // Create office layout
    createOfficeLayout(scene, onComplete);

    // Render loop
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Handle resize
    const handleResize = () => {
      engine.resize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      scene.dispose();
      engine.dispose();
    };
  }, [onComplete]);

  const createOfficeLayout = (scene, onComplete) => {
    // Office areas configuration
    const offices = [
      { name: 'HR Desk', position: [-8, 0.5, -8], color: [0.8, 0.4, 0.4] },
      { name: 'Finance', position: [8, 0.5, -8], color: [0.4, 0.8, 0.4] },
      { name: 'CEO Office', position: [0, 0.5, -12], color: [0.8, 0.8, 0.4] },
      { name: 'Your Desk', position: [0, 0.5, 0], color: [0.4, 0.4, 0.8] },
      { name: 'Team Area', position: [-8, 0.5, 8], color: [0.8, 0.4, 0.8] },
      { name: 'Meeting Room', position: [8, 0.5, 8], color: [0.4, 0.8, 0.8] }
    ];

    let interactionsCompleted = 0;
    const totalInteractions = offices.length;

    offices.forEach((office, index) => {
      // Create desk
      const desk = BABYLON.CreateBox(`desk_${index}`, { width: 3, height: 1, depth: 2 }, scene);
      desk.position = new BABYLON.Vector3(office.position[0], office.position[1], office.position[2]);

      // Create desk material
      const deskMaterial = new BABYLON.StandardMaterial(`deskMat_${index}`, scene);
      deskMaterial.diffuseColor = new BABYLON.Color3(...office.color);
      desk.material = deskMaterial;

      // Create name label
      const nameLabel = BABYLON.CreateGround(`label_${index}`, 2, 0.5, 1, scene);
      nameLabel.position = new BABYLON.Vector3(
        office.position[0], 
        office.position[1] + 1.5, 
        office.position[2]
      );
      nameLabel.billboardMode = BABYLON.Mesh.BILLBOARD_MODE_Y;

      const labelMaterial = new BABYLON.StandardMaterial(`labelMat_${index}`, scene);
      labelMaterial.diffuseColor = new BABYLON.Color3(1, 1, 1);
      nameLabel.material = labelMaterial;

      // Add interaction
      desk.actionManager = new BABYLON.ActionManager(scene);
      desk.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPickTrigger,
          () => {
            handleOfficeInteraction(office.name, () => {
              interactionsCompleted++;
              
              // Change color to indicate completion
              deskMaterial.diffuseColor = new BABYLON.Color3(0.2, 0.8, 0.2);
              
              if (interactionsCompleted === totalInteractions) {
                setTimeout(() => {
                  alert('🎉 Virtual office tour complete! You\'ve visited all areas.');
                  onComplete();
                }, 1000);
              }
            });
          }
        )
      );

      // Add hover effect
      desk.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPointerOverTrigger,
          () => {
            canvasRef.current.style.cursor = 'pointer';
            desk.scaling = new BABYLON.Vector3(1.1, 1.1, 1.1);
          }
        )
      );

      desk.actionManager.registerAction(
        new BABYLON.ExecuteCodeAction(
          BABYLON.ActionManager.OnPointerOutTrigger,
          () => {
            canvasRef.current.style.cursor = 'default';
            desk.scaling = new BABYLON.Vector3(1, 1, 1);
          }
        )
      );
    });

    // Add instructions
    setTimeout(() => {
      alert('Welcome! Click on desk areas to explore teams.');
    }, 1000);
  };

  const handleOfficeInteraction = (officeName, onInteractionComplete) => {
    const interactions = {
      'HR Desk': () => {
        alert('👋 HR Team here. We handle policies and support. Click OK to sign documents.');
        onInteractionComplete();
      },
      'Finance': () => {
        alert('💰 Finance Team: We manage payroll and expenses. Your info is set up!');
        onInteractionComplete();
      },
      'CEO Office': () => {
        alert('🎯 CEO Welcome: Welcome to IndiVillage! Our mission is to transform businesses through innovative technology. Excited to have you on board!');
        onInteractionComplete();
      },
      'Your Desk': () => {
        alert('💺 Your Workspace: This is where you\'ll be working! Your computer is set up and ready. Let\'s make great things happen!');
        onInteractionComplete();
      },
      'Team Area': () => {
        alert('👥 Your Team: Meet your colleagues! They\'re excited to work with you on upcoming projects. Collaboration is key to our success.');
        onInteractionComplete();
      },
      'Meeting Room': () => {
        alert('🏢 Meeting Room: This is where we hold team meetings, client calls, and brainstorming sessions. See you here for the next team meeting!');
        onInteractionComplete();
      }
    };

    if (interactions[officeName]) {
      interactions[officeName]();
    }
  };

  return (
    <div className="babylon-office-container">
      <div className="office-instructions">
        <h3>🏢 Virtual Office Tour</h3>
        <p>Click on different areas to explore and meet your new team!</p>
      </div>
      <canvas 
        ref={canvasRef}
        style={{ 
          width: '100%', 
          height: '500px',
          border: '2px solid #34495e',
          borderRadius: '10px'
        }}
      />
      <div className="office-controls">
        <p>💡 Use mouse to rotate, zoom and explore the office</p>
      </div>
    </div>
  );
}

export default BabylonOffice;