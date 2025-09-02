import React from 'react';
import './ProgressTracker.css';

interface ProgressTrackerProps {
  total: number;
  completed: number;
  onReset: () => void;
}

const ProgressTracker: React.FC<ProgressTrackerProps> = ({ total, completed, onReset }) => {
  const percentage = Math.round((completed / total) * 100);
  
  return (
    <div className="progress-tracker">
      <div className="progress-content">
        <div className="progress-info">
          <span className="progress-text">
            Progress: {completed}/{total} items ({percentage}%)
          </span>
          <button className="reset-button" onClick={onReset} title="Reset Progress">
            🔄 Reset
          </button>
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;
