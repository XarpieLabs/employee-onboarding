import React, { useRef, useEffect } from 'react';

function GameCanvas({ gameType, onGameComplete }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let game;
    
    switch (gameType) {
      case 'memory':
        game = initMemoryGame(canvasRef.current, onGameComplete);
        break;
      case 'logic':
        game = initLogicGame(canvasRef.current, onGameComplete);
        break;
      default:
        break;
    }

    return () => {
      if (game && game.destroy) {
        game.destroy(true);
      }
    };
  }, [gameType, onGameComplete]);

  const initMemoryGame = (canvas, onComplete) => {
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      canvas: canvas,
      backgroundColor: '#2c3e50',
      scene: {
        preload: function() {
          // Create colored rectangles
          this.load.image('card-back', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==');
        },
        create: function() {
          createMemoryGameLogic.call(this, onComplete);
        }
      }
    };

    return new Phaser.Game(config);
  };

  const createMemoryGameLogic = function(onComplete) {
    const cards = [];
    const colors = [0xff6b6b, 0x4ecdc4, 0x45b7d1, 0x96ceb4, 0xffeaa7, 0xdda0dd, 0x98d8c8, 0xf7dc6f];
    const cardPairs = [...colors, ...colors].sort(() => Math.random() - 0.5);
    
    let flippedCards = [];
    let matchedPairs = 0;
    let canFlip = true;

    // Create grid of cards
    for (let i = 0; i < 16; i++) {
      const col = i % 4;
      const row = Math.floor(i / 4);
      const x = 150 + col * 120;
      const y = 100 + row * 120;

      const cardBack = this.add.rectangle(x, y, 100, 100, 0x34495e)
        .setStroke(4, 0xecf0f1)
        .setInteractive({ useHandCursor: true });

      const cardFront = this.add.rectangle(x, y, 100, 100, cardPairs[i])
        .setStroke(4, 0xecf0f1)
        .setVisible(false);

      const card = {
        back: cardBack,
        front: cardFront,
        color: cardPairs[i],
        isFlipped: false,
        isMatched: false
      };

      cardBack.on('pointerdown', () => flipCard.call(this, card));
      cards.push(card);
    }

    // Add title and instructions
    this.add.text(400, 30, 'Memory Game - Match the Pairs!', {
      fontSize: '24px',
      fontFamily: 'Arial',
      color: '#ffffff'
    }).setOrigin(0.5);

    this.add.text(400, 60, 'Click cards to flip them. Match all pairs to complete!', {
      fontSize: '16px',
      fontFamily: 'Arial',
      color: '#bdc3c7'
    }).setOrigin(0.5);

    function flipCard(card) {
      if (!canFlip || card.isFlipped || card.isMatched) return;

      card.isFlipped = true;
      card.back.setVisible(false);
      card.front.setVisible(true);
      flippedCards.push(card);

      if (flippedCards.length === 2) {
        canFlip = false;
        this.time.delayedCall(1000, () => {
          if (flippedCards[0].color === flippedCards[1].color) {
            // Match found
            flippedCards.forEach(c => c.isMatched = true);
            matchedPairs++;
            
            if (matchedPairs === 8) {
              // Game complete
              this.add.text(400, 520, '🎉 Congratulations! Memory Challenge Complete!', {
                fontSize: '20px',
                fontFamily: 'Arial',
                color: '#27ae60'
              }).setOrigin(0.5);
              
              setTimeout(() => onComplete(), 2000);
            }
          } else {
            // No match - flip back
            flippedCards.forEach(c => {
              c.isFlipped = false;
              c.back.setVisible(true);
              c.front.setVisible(false);
            });
          }
          flippedCards = [];
          canFlip = true;
        });
      }
    }
  };

  return (
    <div className="game-canvas-container">
      <canvas 
        ref={canvasRef}
        className="game-canvas"
        style={{ 
          maxWidth: '100%', 
          height: 'auto',
          border: '2px solid #34495e',
          borderRadius: '10px'
        }}
      />
    </div>
  );
}

export default GameCanvas;