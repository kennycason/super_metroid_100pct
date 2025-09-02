import React from 'react';
import './ItemCard.css';
import { Item } from '../data/items';

interface ItemCardProps {
  item: Item;
  isChecked: boolean;
  onToggle: (itemId: string) => void;
  showRouteNumber?: boolean;
  routeNumber?: number;
}

const ItemCard: React.FC<ItemCardProps> = ({ 
  item, 
  isChecked, 
  onToggle, 
  showRouteNumber, 
  routeNumber 
}) => {
  const getItemIcon = (itemName: string, itemType: string) => {
    // Specific icons for upgrades and bosses
    if (itemType === 'upgrade') {
      switch (itemName) {
        case 'Morph Ball': return '⚪';
        case 'Bombs': return '💣';
        case 'Charge Beam': return '⚡';
        case 'Spazer': return '🔫';
        case 'Varia Suit': return '🛡️';
        case 'Hi-Jump Boots': return '👢';
        case 'Speed Booster': return '💨';
        case 'Wave Beam': return '🌊';
        case 'Grappling Beam': return '🪝';
        case 'Gravity Suit': return '🚀';
        case 'Space Jump': return '🌟';
        case 'Spring Ball': return '🏀';
        case 'Plasma Beam': return '🔥';
        case 'Ice Beam': return '❄️';
        case 'Screw Attack': return '🌪️';
        case 'X-Ray Scope': return '👁️';
        default: return '🔧';
      }
    }
    
    if (itemType === 'boss') {
      switch (itemName) {
        case 'Kraid': return '🦎';
        case 'Phantoon': return '👻';
        case 'Draygon': return '🐉';
        case 'Ridley': return '🦅';
        case 'Mother Brain': return '🧠';
        default: return '👹';
      }
    }
    
    // Original collectible icons
    switch (itemName) {
      case 'Energy Tank': return '⚡';
      case 'Super Missile': return '🚀';
      case 'Power Bomb': return '💣';
      case 'Missile': return '🔸';
      default: return '📦';
    }
  };

  const getRegionColor = (region: string) => {
    switch (region) {
      case 'Crateria': return '#4a90e2';
      case 'Brinstar': return '#7ed321';
      case 'Norfair': return '#f5a623';
      case 'Wrecked Ship': return '#9013fe';
      case 'Maridia': return '#50e3c2';
      case 'Tourian': return '#ff6b35';
      default: return '#ff6b35';
    }
  };

  return (
    <div 
      className={`item-card ${isChecked ? 'checked' : ''}`}
      onClick={() => onToggle(item.id)}
    >
      {showRouteNumber && routeNumber && (
        <div className="route-number">{routeNumber}</div>
      )}

      <div className="item-image-container">
        <img 
          src={item.image}
          alt={`${item.name} in ${item.room}`}
          className="item-image"
          loading="lazy"
          onError={(e) => {
            // Fallback to original wiki image if local image fails to load
            const fallbackUrl = `https://wiki.supermetroid.run${item.sourceImageUrl}`;
            if ((e.target as HTMLImageElement).src !== fallbackUrl) {
              (e.target as HTMLImageElement).src = fallbackUrl;
            } else {
              // If even the fallback fails, use placeholder
              (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjMwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMzMzIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2ZmZiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
            }
          }}
        />
      </div>

      <div className="item-content">
        <div className="item-header">
          <h3 className="item-name">
            {item.nickname || `${item.name}`}
          </h3>
          <div 
            className="region-badge"
            style={{ backgroundColor: getRegionColor(item.region) }}
          >
            {item.region}
          </div>
        </div>
        
        <div className="item-details">
          <div className="item-room">📍 {item.room}</div>
          {item.description && (
            <div className="item-description">{item.description}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
