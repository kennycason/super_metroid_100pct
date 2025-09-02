import React, { useState, useEffect } from 'react';
import './App.css';
import { allItems, routeOrder, Item, energyTanks, superMissiles, powerBombs, missiles, majorUpgrades, bosses, reserveTanks } from './data/items';
import ItemCard from './components/ItemCard';
import Header from './components/Header';
import FilterBar from './components/FilterBar';
import ProgressTracker from './components/ProgressTracker';


type ViewMode = 'route' | 'region' | 'type';
type ItemType = 'all' | 'energy_tanks' | 'super_missiles' | 'power_bombs' | 'missiles' | 'reserve_tanks' | 'upgrades' | 'bosses';

function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('route');
  const [itemFilter, setItemFilter] = useState<ItemType>('all');
  const [regionFilter, setRegionFilter] = useState<string>('all');
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');

  // Load checked items from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('super-metroid-checked-items');
    if (saved) {
      setCheckedItems(new Set(JSON.parse(saved)));
    }
  }, []);

  // Save checked items to localStorage
  useEffect(() => {
    localStorage.setItem('super-metroid-checked-items', JSON.stringify(Array.from(checkedItems)));
  }, [checkedItems]);

  const handleItemToggle = (itemId: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
  };

  const resetProgress = () => {
    setCheckedItems(new Set());
  };

  const filterItems = (items: Item[]) => {
    return items.filter(item => {
      // Item type filter
      if (itemFilter !== 'all') {
        const typeMap = {
          energy_tanks: 'Energy Tank',
          super_missiles: 'Super Missile',
          power_bombs: 'Power Bomb',
          missiles: 'Missile',
          reserve_tanks: 'Reserve Tank',
          upgrades: 'upgrade',
          bosses: 'boss'
        };
        
        const filterValue = typeMap[itemFilter];
        if (itemFilter === 'upgrades' || itemFilter === 'bosses') {
          if (item.type !== filterValue) return false;
        } else {
          if (item.name !== filterValue) return false;
        }
      }

      // Region filter
      if (regionFilter !== 'all' && item.region !== regionFilter) {
        return false;
      }

      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        return (
          item.name.toLowerCase().includes(searchLower) ||
          item.room.toLowerCase().includes(searchLower) ||
          item.location.toLowerCase().includes(searchLower) ||
          (item.nickname && item.nickname.toLowerCase().includes(searchLower))
        );
      }

      return true;
    });
  };

  const getItemsForView = () => {
    if (viewMode === 'route') {
      // Return items in exact route order, but apply filters
      const routeItems = routeOrder
        .map(id => allItems.find(item => item.id === id))
        .filter((item): item is Item => item !== undefined);
      return filterItems(routeItems);
    } else if (viewMode === 'region') {
      // Group by region
      const regions = ['Crateria', 'Brinstar', 'Norfair', 'Wrecked Ship', 'Maridia', 'Tourian'];
      const grouped: { [key: string]: Item[] } = {};
      
      regions.forEach(region => {
        grouped[region] = filterItems(allItems.filter(item => item.region === region));
      });
      
      return grouped;
    } else if (viewMode === 'type') {
      // Group by item type
      const types = {
        'Energy Tanks': energyTanks,
        'Super Missiles': superMissiles,
        'Power Bombs': powerBombs,
        'Reserve Tanks': reserveTanks,
        'Missiles': missiles,
        'Major Upgrades': majorUpgrades,
        'Bosses': bosses
      };
      
      const grouped: { [key: string]: Item[] } = {};
      Object.entries(types).forEach(([typeName, items]) => {
        grouped[typeName] = filterItems(items);
      });
      
      return grouped;
    }
    
    return [];
  };

  const regions = ['Crateria', 'Brinstar', 'Norfair', 'Wrecked Ship', 'Maridia', 'Tourian'];

  return (
    <div className="App">
      <Header />
              <FilterBar
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          itemFilter={itemFilter}
          onItemFilterChange={setItemFilter}
          regionFilter={regionFilter}
          onRegionFilterChange={setRegionFilter}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          regions={regions}
          onReset={resetProgress}
        />
      <ProgressTracker 
        total={allItems.filter(item => item.type !== 'boss').length} 
        completed={Array.from(checkedItems).filter(id => {
          const item = allItems.find(i => i.id === id);
          return item && item.type !== 'boss';
        }).length}
        checkedItems={checkedItems}
        allItems={allItems}
      />

      <main className="main-content">
        {viewMode === 'route' && (
          <div className="route-order-view">
            {/* <h2 className="view-title">📋 100% Route Order</h2>
            <p className="view-description">
              Complete 106-item speedrun sequence from guide.html
            </p> */}
            <div className="route-grid">
              {(getItemsForView() as Item[]).map((item, index) => (
                <div key={item.id} className="route-card">
                  <div className="route-number">{index + 1}</div>
                  <ItemCard
                    item={item}
                    isChecked={checkedItems.has(item.id)}
                    onToggle={handleItemToggle}
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {(viewMode === 'region' || viewMode === 'type') && (
          <div className={`${viewMode}-view`}>
            <h2 className="view-title">
              {viewMode === 'region' ? '🗺️ Items by Region' : '🔧 Items by Type'}
            </h2>
            {Object.entries(getItemsForView() as { [key: string]: Item[] }).map(([groupName, items]) => (
              <div key={groupName} className="group-section">
                <h3 className="group-title">{groupName}</h3>
                <div className="items-grid">
                  {items.map(item => (
                    <ItemCard
                      key={item.id}
                      item={item}
                      isChecked={checkedItems.has(item.id)}
                      onToggle={handleItemToggle}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
