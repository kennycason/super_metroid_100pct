import React from 'react';
import './RouteView.css';
import { Item } from '../data/items';
import ItemCard from './ItemCard';

interface RouteViewProps {
  items: Item[];
  checkedItems: Set<string>;
  onItemToggle: (itemId: string) => void;
}

const RouteView: React.FC<RouteViewProps> = ({ items, checkedItems, onItemToggle }) => {
  // Group items by major route sections for better organization
  const getRouteSection = (index: number, item: Item) => {
    if (index < 6) return 'Early Game (Bombs → Charge Beam)';
    if (index < 15) return 'Norfair 1 (Hi-Jump → Crocomire)';
    if (index < 25) return 'Wrecked Ship & Crateria Ocean';
    if (index < 35) return 'Crateria Cleanup & Etecoons';
    if (index < 45) return 'Maridia (Gravity → Space Jump)';
    if (index < 55) return 'Plasma & Sand Holes';
    if (index < 65) return 'Lower Norfair (Ice → GT)';
    return 'Final Cleanup & Brinstar';
  };

  // Group items by sections
  const sections: { [key: string]: { items: Item[], startIndex: number } } = {};
  
  items.forEach((item, index) => {
    const section = getRouteSection(index, item);
    if (!sections[section]) {
      sections[section] = { items: [], startIndex: index };
    }
    sections[section].items.push(item);
  });

  return (
    <div className="route-view">
      {Object.entries(sections).map(([sectionName, { items: sectionItems, startIndex }]) => (
        <div key={sectionName} className="route-section">
          <h3 className="section-title">
            <span className="section-icon">📍</span>
            {sectionName}
            <span className="section-progress">
              {sectionItems.filter(item => checkedItems.has(item.id)).length}/{sectionItems.length}
            </span>
          </h3>
          
          <div className="route-items">
            {sectionItems.map((item, index) => (
              <ItemCard
                key={item.id}
                item={item}
                isChecked={checkedItems.has(item.id)}
                onToggle={onItemToggle}
                showRouteNumber={true}
                routeNumber={startIndex + index + 1}
              />
            ))}
          </div>
        </div>
      ))}
      
      <div className="route-notes">
        <h3>🎯 Route Notes</h3>
        <ul>
          <li><strong>Early Supers:</strong> Can be obtained with mockball before Speed Booster</li>
          <li><strong>Spore Spawn Supers:</strong> Can be collected without fighting Spore Spawn</li>
          <li><strong>Power Bomb of Shame:</strong> Located in Wasteland (Norfair 2)</li>
          <li><strong>Crab Supers:</strong> Main Street in Maridia</li>
          <li><strong>Final Missile:</strong> In Parlor after the climb - don't forget this one!</li>
        </ul>
      </div>
    </div>
  );
};

export default RouteView;
