import React from 'react';
import './SpriteIcon.css';

interface SpriteInfo {
  spriteFile: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface SpriteIconProps {
  itemId: string;
  isObtained?: boolean;
  size?: number;
  className?: string;
}

const getSpriteInfo = (itemId: string): SpriteInfo | null => {
  switch (itemId) {
    // === ITEM SPRITES (item_sprites.png) - 16x16 sprites in 128x128 sheet (8x8 grid) ===
    
    // Progress tracker sprites with correct coordinates
    case "health":
    case "energy_tank":
      return { spriteFile: "item_sprites.png", x: 64, y: 0, width: 16, height: 16 }; // Row 0, Col 4
      
    case "missile":
    case "missiles":
      return { spriteFile: "item_sprites.png", x: 16, y: 16, width: 16, height: 16 }; // Row 1, Col 1
    case "super":
    case "supers":
    case "super_missile":
      return { spriteFile: "item_sprites.png", x: 48, y: 16, width: 16, height: 16 }; // Row 1, Col 3
    case "power_bomb":
    case "power_bombs":
    case "powerbombs":
      return { spriteFile: "item_sprites.png", x: 64, y: 16, width: 16, height: 16 }; // Row 1, Col 4
    case "reserve_tank":
      return { spriteFile: "item_sprites.png", x: 64, y: 0, width: 16, height: 16 };

    // Major items - Row 0 continued
    case "morph":
    case "morph_ball":
      return { spriteFile: "item_sprites.png", x: 80, y: 0, width: 16, height: 16 };
    case "bomb":
    case "bombs":
      return { spriteFile: "item_sprites.png", x: 96, y: 0, width: 16, height: 16 };

    // Row 1 (y=16)
    case "hijump":
    case "hi_jump":
      return { spriteFile: "item_sprites.png", x: 0, y: 16, width: 16, height: 16 };
    case "speed":
    case "speed_booster":
      return { spriteFile: "item_sprites.png", x: 16, y: 16, width: 16, height: 16 };
    case "grapple":
    case "grappling_beam":
      return { spriteFile: "item_sprites.png", x: 32, y: 16, width: 16, height: 16 };
    case "xray":
    case "x_ray":
      return { spriteFile: "item_sprites.png", x: 48, y: 16, width: 16, height: 16 };

    // Row 2 (y=32)
    case "spring":
    case "spring_ball":
      return { spriteFile: "item_sprites.png", x: 0, y: 32, width: 16, height: 16 };
    case "space":
    case "space_jump":
      return { spriteFile: "item_sprites.png", x: 16, y: 32, width: 16, height: 16 };
    case "screw":
    case "screw_attack":
      return { spriteFile: "item_sprites.png", x: 32, y: 32, width: 16, height: 16 };
    case "charge":
    case "charge_beam":
      return { spriteFile: "item_sprites.png", x: 48, y: 32, width: 16, height: 16 };

    // Row 3 (y=48) - Beams
    case "spazer":
      return { spriteFile: "item_sprites.png", x: 0, y: 48, width: 16, height: 16 };
    case "wave":
    case "wave_beam":
      return { spriteFile: "item_sprites.png", x: 16, y: 48, width: 16, height: 16 };
    case "ice":
    case "ice_beam":
      return { spriteFile: "item_sprites.png", x: 32, y: 48, width: 16, height: 16 };
    case "plasma":
    case "plasma_beam":
      return { spriteFile: "item_sprites.png", x: 48, y: 48, width: 16, height: 16 };

    // Row 4 (y=64) - Suits
    case "varia":
    case "varia_suit":
      return { spriteFile: "item_sprites.png", x: 0, y: 64, width: 16, height: 16 };
    case "gravity":
    case "gravity_suit":
      return { spriteFile: "item_sprites.png", x: 16, y: 64, width: 16, height: 16 };

    // === BOSS SPRITES (boss_sprites.png) - Single row, 64px each ===
    case "bomb_torizo":
      return { spriteFile: "boss_sprites.png", x: 0, y: 0, width: 64, height: 64 };
    case "spore_spawn":
      return { spriteFile: "boss_sprites.png", x: 64, y: 0, width: 64, height: 64 };
    case "kraid":
      return { spriteFile: "boss_sprites.png", x: 128, y: 0, width: 64, height: 64 };
    case "crocomire":
      return { spriteFile: "boss_sprites.png", x: 192, y: 0, width: 64, height: 64 };
    case "phantoon":
      return { spriteFile: "boss_sprites.png", x: 256, y: 0, width: 64, height: 64 };
    case "botwoon":
      return { spriteFile: "boss_sprites.png", x: 320, y: 0, width: 64, height: 64 };
    case "draygon":
      return { spriteFile: "boss_sprites.png", x: 384, y: 0, width: 64, height: 64 };
    case "gold_torizo":
    case "golden_torizo":
      return { spriteFile: "boss_sprites.png", x: 448, y: 0, width: 64, height: 64 };
    case "ridley":
      return { spriteFile: "boss_sprites.png", x: 512, y: 0, width: 64, height: 64 };
    case "mother_brain_1":
    case "mb1":
    case "mother_brain":
      return { spriteFile: "boss_sprites.png", x: 576, y: 0, width: 64, height: 64 };
    case "mother_brain_2":
    case "mb2":
      return { spriteFile: "boss_sprites.png", x: 640, y: 0, width: 64, height: 64 };
    case "samus_ship":
    case "ship":
      return { spriteFile: "boss_sprites.png", x: 704, y: 0, width: 64, height: 64 };
    case "ceres_station":
      return { spriteFile: "boss_sprites.png", x: 768, y: 0, width: 64, height: 64 };
    case "golden_four":
    case "g4":
      return { spriteFile: "boss_sprites.png", x: 832, y: 0, width: 64, height: 64 };

    default:
      return null;
  }
};

const SpriteIcon: React.FC<SpriteIconProps> = ({ 
  itemId, 
  isObtained = false, 
  size = 24,
  className = ""
}) => {
  const spriteInfo = getSpriteInfo(itemId);

  if (!spriteInfo) {
    // Fallback for unknown items
    return (
      <div 
        className={`sprite-icon fallback ${className}`}
        style={{ width: size, height: size }}
      >
        {itemId.substring(0, 2).toUpperCase()}
      </div>
    );
  }

  const scale = size / Math.max(spriteInfo.width, spriteInfo.height);
  const scaledSheetWidth = spriteInfo.spriteFile === 'boss_sprites.png' ? 896 * scale : 128 * scale;
  const scaledSheetHeight = spriteInfo.spriteFile === 'boss_sprites.png' ? 64 * scale : 128 * scale;

  return (
    <div 
      className={`sprite-icon ${isObtained ? 'obtained' : 'not-obtained'} ${className}`}
      style={{
        width: size,
        height: size,
        backgroundImage: `url(/${spriteInfo.spriteFile})`,
        backgroundPosition: `-${spriteInfo.x * scale}px -${spriteInfo.y * scale}px`,
        backgroundSize: `${scaledSheetWidth}px ${scaledSheetHeight}px`,
        imageRendering: 'pixelated'
      }}
    />
  );
};

export default SpriteIcon;
