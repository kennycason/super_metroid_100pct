import React from 'react';
import './FilterBar.css';

type ViewMode = 'route' | 'region' | 'type';
type ItemType = 'all' | 'energy_tanks' | 'super_missiles' | 'power_bombs' | 'missiles' | 'reserve_tanks' | 'upgrades' | 'bosses';

interface FilterBarProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  itemFilter: ItemType;
  onItemFilterChange: (filter: ItemType) => void;
  regionFilter: string;
  onRegionFilterChange: (region: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  regions: string[];
  onReset: () => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  viewMode,
  onViewModeChange,
  itemFilter,
  onItemFilterChange,
  regionFilter,
  onRegionFilterChange,
  searchTerm,
  onSearchChange,
  regions,
  onReset
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-section">
        <label>View Mode:</label>
        <div className="button-group">
          <button 
            className={viewMode === 'route' ? 'active' : ''}
            onClick={() => onViewModeChange('route')}
          >
            Route Order
          </button>
          <button 
            className={viewMode === 'region' ? 'active' : ''}
            onClick={() => onViewModeChange('region')}
          >
            By Region
          </button>
          <button 
            className={viewMode === 'type' ? 'active' : ''}
            onClick={() => onViewModeChange('type')}
          >
            By Type
          </button>
        </div>
      </div>

      <div className="filter-section">
        <label>Item Type:</label>
        <select 
          value={itemFilter} 
          onChange={(e) => onItemFilterChange(e.target.value as ItemType)}
        >
          <option value="all">All Items</option>
          <option value="energy_tanks">Energy Tanks</option>
          <option value="missiles">Missiles</option>
          <option value="super_missiles">Super Missiles</option>
          <option value="power_bombs">Power Bombs</option>
          <option value="reserve_tanks">Reserve Tanks</option>
          <option value="upgrades">Upgrades</option>
          <option value="bosses">Bosses</option>
        </select>
      </div>

      <div className="filter-section">
        <label>Region:</label>
        <select 
          value={regionFilter} 
          onChange={(e) => onRegionFilterChange(e.target.value)}
        >
          <option value="all">All Regions</option>
          {regions.map(region => (
            <option key={region} value={region}>{region}</option>
          ))}
        </select>
      </div>

      <div className="filter-section">
        <label>Search:</label>
        <input
          type="text"
          placeholder="Search items, rooms, nicknames..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="filter-section">
        <button className="reset-button" onClick={onReset} title="Reset Progress">
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
