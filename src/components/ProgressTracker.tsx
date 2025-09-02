import React from 'react';
import './ProgressTracker.css';
import SpriteIcon from './SpriteIcon';

interface ProgressTrackerProps {
  total: number;
  completed: number;
  onReset: () => void;
  checkedItems: Set<string>;
  allItems: any[];
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ 
  total, 
  completed, 
  onReset, 
  checkedItems, 
  allItems 
}) => {
  const percentage = ((completed / total) * 100).toFixed(1);
  
  // Calculate individual counters
  const checkedItemsArray = allItems.filter(item => checkedItems.has(item.id));
  
  const counters = {
    energyTanks: {
      collected: checkedItemsArray.filter(item => item.name === 'Energy Tank').length,
      total: allItems.filter(item => item.name === 'Energy Tank').length
    },
    missiles: {
      collected: checkedItemsArray.filter(item => item.name === 'Missile').length,
      total: allItems.filter(item => item.name === 'Missile').length
    },
    superMissiles: {
      collected: checkedItemsArray.filter(item => item.name === 'Super Missile').length,
      total: allItems.filter(item => item.name === 'Super Missile').length
    },
    powerBombs: {
      collected: checkedItemsArray.filter(item => item.name === 'Power Bomb').length,
      total: allItems.filter(item => item.name === 'Power Bomb').length
    }
  };
  
  return (
    <div className="progress-tracker">
      <div className="progress-content">
        <div className="item-counters">
          <div className="counter-item">
            <SpriteIcon 
              itemId="energy_tank" 
              isObtained={counters.energyTanks.collected > 0}
              size={24}
              className="counter-icon"
            />
            <span className="counter-text">{counters.energyTanks.collected}/{counters.energyTanks.total}</span>
            {/* <span className="counter-label">E-Tanks</span> */}
          </div>
          <div className="counter-item">
            <SpriteIcon 
              itemId="missiles" 
              isObtained={counters.missiles.collected > 0}
              size={24}
              className="counter-icon"
            />
            <span className="counter-text">{counters.missiles.collected}/{counters.missiles.total}</span>
            {/* <span className="counter-label">Missiles</span> */}
          </div>
          <div className="counter-item">
            <SpriteIcon 
              itemId="super_missile" 
              isObtained={counters.superMissiles.collected > 0}
              size={24}
              className="counter-icon"
            />
            <span className="counter-text">{counters.superMissiles.collected}/{counters.superMissiles.total}</span>
            {/* <span className="counter-label">Supers</span> */}
          </div>
          <div className="counter-item">
            <SpriteIcon 
              itemId="power_bombs" 
              isObtained={counters.powerBombs.collected > 0}
              size={24}
              className="counter-icon"
            />
            <span className="counter-text">{counters.powerBombs.collected}/{counters.powerBombs.total}</span>
            {/* <span className="counter-label">P-Bombs</span> */}
          </div>
        </div>
        
        <div className="progress-actions">
          <button className="reset-button" onClick={onReset} title="Reset Progress">
            🔄 Reset
          </button>
        </div>
        
        <div className="completion-percentage">
          {percentage}%
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
