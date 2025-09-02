# Super Metroid 100% Speedrun Guide

A modern, interactive React/TypeScript application for tracking your Super Metroid 100% speedrun progress. This guide combines all item locations from the original Super Metroid speedrun wiki into a single, comprehensive tool with images and multiple viewing modes.

## Features

- 🎯 **Route Order View**: Items organized in optimal speedrun collection order
- 🗺️ **Region View**: Items grouped by game areas (Crateria, Brinstar, Norfair, etc.)
- ✅ **Checklist Mode**: Simple item checklist with filtering
- 📱 **Responsive Design**: Works perfectly on desktop and mobile
- 🔍 **Advanced Filtering**: Filter by item type, region, or search terms
- 💾 **Progress Persistence**: Your checked items are saved locally
- 🖼️ **Inline Images**: All item screenshots displayed directly in the guide
- 📊 **Progress Tracking**: Real-time completion percentage

## Item Coverage

- **14 Energy Tanks** - All energy tank locations across all regions
- **10 Super Missiles** - Including "Early Supers", "Spore Spawn Supers", and "Crab Supers"
- **10 Power Bombs** - Including the infamous "Power Bomb of Shame"
- **46 Missiles** - Focus on commonly missed "bastard missiles" and key locations

Total: **80 collectible items** organized in optimal speedrun route order.

## Installation & Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

3. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for production:**
   ```bash
   npm run build
   ```

## Usage

### View Modes

- **Route Order**: Follow the optimal speedrun collection order with numbered steps
- **By Region**: Browse items organized by game areas
- **Checklist**: Simple list view with advanced filtering options

### Filtering Options

- **Item Type**: Filter by Energy Tanks, Super Missiles, Power Bombs, or Missiles
- **Region**: Show items from specific areas only
- **Search**: Find items by name, room, or nickname

### Progress Tracking

- Click any item to mark it as collected
- Progress is automatically saved to your browser
- Use the reset button to start a new run
- Real-time completion percentage display

## Route Notes

The route is based on the standard "early Crocomire" route used in 100% speedruns:

- **Early Supers**: Can be obtained with mockball before Speed Booster
- **Spore Spawn Supers**: Can be collected without fighting Spore Spawn
- **Power Bomb of Shame**: Located in Wasteland (Norfair)
- **Crab Supers**: Main Street in Maridia
- **Final Missile**: In Parlor after the climb (commonly forgotten!)

## Technical Details

- **Framework**: React 18 with TypeScript
- **Styling**: Modern CSS with gradients and animations
- **State Management**: React hooks with localStorage persistence
- **Responsive**: Mobile-first design approach
- **Performance**: Lazy loading images and optimized rendering

## Data Source

All item data and images are sourced from the [Super Metroid Speedrun Wiki](https://wiki.supermetroid.run/), specifically:

- Energy Tank locations
- Super Missile locations  
- Power Bomb locations
- Missile locations (focused on commonly missed items)

## Contributing

Feel free to submit issues or pull requests to improve the guide. Possible enhancements:

- Additional route variations (Late Crocomire, etc.)
- Boss order tracking
- Timer integration
- Split tracking
- Video tutorials integration

## License

This project is for educational and speedrunning community purposes. All game content and images are property of Nintendo.

---

**World Record**: 1:12:17 by ShinyZeni

Happy speedrunning! 🚀
