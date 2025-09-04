// Super Metroid 100% Item Data
export interface Item {
  id: string;
  name: string;
  location: string;
  room: string;
  region: string;
  image: string; // Local image path
  sourceImageUrl: string; // Original wiki URL
  imageName: string; // Local filename
  description?: string;
  nickname?: string;
  type: 'collectible' | 'upgrade' | 'boss';
}

export const energyTanks: Item[] = [
  {
    id: "et_crateria_1",
    name: "Energy Tank",
    location: "Terminator",
    room: "Terminator Room",
    region: "Crateria",
    image: "/images/230px-EnergyTankCrateria1.png",
    sourceImageUrl: "/images/thumb/2/2d/EnergyTankCrateria1.png/230px-EnergyTankCrateria1.png",
    imageName: "230px-EnergyTankCrateria1.png",
    type: "collectible"
  },
  {
    id: "et_crateria_2", 
    name: "Energy Tank",
    location: "Gauntlet",
    room: "Gauntlet Energy Tank Room",
    region: "Crateria",
    image: "/images/230px-EnergyTankCrateria2.png",
    sourceImageUrl: "/images/thumb/6/68/EnergyTankCrateria2.png/230px-EnergyTankCrateria2.png",
    imageName: "230px-EnergyTankCrateria2.png",
    type: "collectible"
  },
  {
    id: "et_brinstar_1",
    name: "Energy Tank",
    location: "Warehouse", 
    room: "Warehouse Energy Tank Room",
    region: "Brinstar",
    image: "/images/230px-EnergyTankBrinstar1.png",
    sourceImageUrl: "/images/thumb/0/04/EnergyTankBrinstar1.png/230px-EnergyTankBrinstar1.png",
    imageName: "230px-EnergyTankBrinstar1.png",
    type: "collectible"
  },
  {
    id: "et_brinstar_2",
    name: "Energy Tank",
    location: "Etecoon",
    room: "Etecoon Energy Tank Room", 
    region: "Brinstar",
    image: "/images/230px-EnergyTankBrinstar2.png",
    sourceImageUrl: "/images/thumb/7/79/EnergyTankBrinstar2.png/230px-EnergyTankBrinstar2.png",
    imageName: "230px-EnergyTankBrinstar2.png",
    type: "collectible"
  },
  {
    id: "et_brinstar_3",
    name: "Energy Tank",
    location: "Blue Brinstar",
    room: "Blue Brinstar Energy Tank Room",
    region: "Brinstar", 
    image: "/images/230px-EnergyTankBrinstar3.png",
    sourceImageUrl: "/images/thumb/a/a9/EnergyTankBrinstar3.png/230px-EnergyTankBrinstar3.png",
    imageName: "230px-EnergyTankBrinstar3.png",
    type: "collectible"
  },
  {
    id: "et_brinstar_4",
    name: "Energy Tank",
    location: "Hoptank",
    room: "Hoptank Room",
    region: "Brinstar",
    image: "/images/230px-EnergyTankBrinstar4.png",
    sourceImageUrl: "/images/thumb/d/d6/EnergyTankBrinstar4.png/230px-EnergyTankBrinstar4.png",
    imageName: "230px-EnergyTankBrinstar4.png",
    type: "collectible"
  },
  {
    id: "et_brinstar_5",
    name: "Energy Tank",
    location: "Waterway",
    room: "Waterway Energy Tank Room",
    region: "Brinstar",
    image: "/images/230px-EnergyTankBrinstar5.png",
    sourceImageUrl: "/images/thumb/9/99/EnergyTankBrinstar5.png/230px-EnergyTankBrinstar5.png",
    imageName: "230px-EnergyTankBrinstar5.png",
    type: "collectible"
  },
  {
    id: "et_norfair_1",
    name: "Energy Tank",
    location: "Hi Jump",
    room: "Hi Jump Energy Tank Room",
    region: "Norfair",
    image: "/images/230px-EnergyTankNorfair1.png",
    sourceImageUrl: "/images/thumb/e/ec/EnergyTankNorfair1.png/230px-EnergyTankNorfair1.png",
    imageName: "230px-EnergyTankNorfair1.png",
    type: "collectible"
  },
  {
    id: "et_norfair_2", 
    name: "Energy Tank",
    location: "Crocomire",
    room: "Crocomire's Room",
    region: "Norfair",
    image: "/images/230px-EnergyTankNorfair2.png",
    sourceImageUrl: "/images/thumb/4/45/EnergyTankNorfair2.png/230px-EnergyTankNorfair2.png",
    imageName: "230px-EnergyTankNorfair2.png",
    type: "collectible"
  },
  {
    id: "et_norfair_3",
    name: "Energy Tank", 
    location: "Fireflea",
    room: "Lower Norfair Fireflea Room",
    region: "Norfair",
    image: "/images/230px-EnergyTankNorfair3.png",
    sourceImageUrl: "/images/thumb/c/cf/EnergyTankNorfair3.png/230px-EnergyTankNorfair3.png",
    imageName: "230px-EnergyTankNorfair3.png",
    type: "collectible"
  },
  {
    id: "et_norfair_4",
    name: "Energy Tank",
    location: "Ridley", 
    room: "Ridley Tank Room",
    region: "Norfair",
    image: "/images/230px-EnergyTankNorfair4.png",
    sourceImageUrl: "/images/thumb/c/ca/EnergyTankNorfair4.png/230px-EnergyTankNorfair4.png",
    imageName: "230px-EnergyTankNorfair4.png",
    type: "collectible"
  },
  {
    id: "et_wrecked_ship_1",
    name: "Energy Tank",
    location: "Wrecked Ship",
    room: "Wrecked Ship Energy Tank Room",
    region: "Wrecked Ship",
    image: "/images/230px-EnergyTankWreckedShip1.png",
    sourceImageUrl: "/images/thumb/c/c9/EnergyTankWreckedShip1.png/230px-EnergyTankWreckedShip1.png",
    imageName: "230px-EnergyTankWreckedShip1.png",
    type: "collectible"
  },
  {
    id: "et_maridia_1",
    name: "Energy Tank",
    location: "Botwoon",
    room: "Botwoon Energy Tank Room", 
    region: "Maridia",
    image: "/images/230px-EnergyTankMaridia1.png",
    sourceImageUrl: "/images/thumb/b/b6/EnergyTankMaridia1.png/230px-EnergyTankMaridia1.png",
    imageName: "230px-EnergyTankMaridia1.png",
    type: "collectible"
  },
  {
    id: "et_maridia_2",
    name: "Energy Tank",
    location: "Mama Turtle",
    room: "Mama Turtle Room",
    region: "Maridia",
    image: "/images/230px-EnergyTankMaridia2.png",
    sourceImageUrl: "/images/thumb/1/16/EnergyTankMaridia2.png/230px-EnergyTankMaridia2.png",
    imageName: "230px-EnergyTankMaridia2.png",
    type: "collectible"
  }
];

export const superMissiles: Item[] = [
  {
    id: "sm_crateria_1",
    name: "Super Missile",
    location: "Crateria",
    room: "Crateria Super Room",
    region: "Crateria",
    image: "/images/230px-SuperMissileCrateria1.png",
    sourceImageUrl: "/images/thumb/5/5a/SuperMissileCrateria1.png/230px-SuperMissileCrateria1.png",
    imageName: "230px-SuperMissileCrateria1.png",
    type: "collectible"
  },
  {
    id: "sm_brinstar_1",
    name: "Super Missile",
    location: "Spore Spawn", 
    room: "Spore Spawn Super Room",
    region: "Brinstar",
    image: "/images/230px-SuperMissileBrinstar1.png",
    sourceImageUrl: "/images/thumb/1/1c/SuperMissileBrinstar1.png/230px-SuperMissileBrinstar1.png",
    imageName: "230px-SuperMissileBrinstar1.png",
    nickname: "Spore Spawn Supers",
    description: "Can be acquired without fighting Spore Spawn",
    type: "collectible"
  },
  {
    id: "sm_brinstar_2",
    name: "Super Missile",
    location: "Early Supers",
    room: "Early Supers Room", 
    region: "Brinstar",
    image: "/images/230px-SuperMissileBrinstar2.png",
    sourceImageUrl: "/images/thumb/6/6f/SuperMissileBrinstar2.png/230px-SuperMissileBrinstar2.png",
    imageName: "230px-SuperMissileBrinstar2.png",
    nickname: "Early Supers",
    description: "Can be acquired with mockball before Speed Booster",
    type: "collectible"
  },
  {
    id: "sm_brinstar_3",
    name: "Super Missile",
    location: "Etecoon",
    room: "Etecoon Super Room",
    region: "Brinstar",
    image: "/images/230px-SuperMissileBrinstar3.png",
    sourceImageUrl: "/images/thumb/f/f5/SuperMissileBrinstar3.png/230px-SuperMissileBrinstar3.png",
    imageName: "230px-SuperMissileBrinstar3.png",
    type: "collectible"
  },
  {
    id: "sm_norfair_1",
    name: "Super Missile",
    location: "Golden Torizo",
    room: "Golden Torizo's Room",
    region: "Norfair", 
    image: "/images/230px-SuperMissileNorfair1.png",
    sourceImageUrl: "/images/thumb/7/76/SuperMissileNorfair1.png/230px-SuperMissileNorfair1.png",
    imageName: "230px-SuperMissileNorfair1.png",
    type: "collectible"
  },
  {
    id: "sm_wrecked_ship_1",
    name: "Super Missile",
    location: "Wrecked Ship West",
    room: "Wrecked Ship West Super Room",
    region: "Wrecked Ship",
    image: "/images/230px-SuperMissileWreckedShip1.png",
    sourceImageUrl: "/images/thumb/c/cf/SuperMissileWreckedShip1.png/230px-SuperMissileWreckedShip1.png",
    imageName: "230px-SuperMissileWreckedShip1.png",
    type: "collectible"
  },
  {
    id: "sm_wrecked_ship_2", 
    name: "Super Missile",
    location: "Wrecked Ship East",
    room: "Wrecked Ship East Super Room",
    region: "Wrecked Ship",
    image: "/images/230px-SuperMissileWreckedShip2.png",
    sourceImageUrl: "/images/thumb/b/b8/SuperMissileWreckedShip2.png/230px-SuperMissileWreckedShip2.png",
    imageName: "230px-SuperMissileWreckedShip2.png",
    type: "collectible"
  },
  {
    id: "sm_maridia_1",
    name: "Super Missile",
    location: "Main Street",
    room: "Main Street",
    region: "Maridia",
    image: "/images/230px-SuperMissileMaridia1.png",
    sourceImageUrl: "/images/thumb/2/2d/SuperMissileMaridia1.png/230px-SuperMissileMaridia1.png",
    imageName: "230px-SuperMissileMaridia1.png",
    nickname: "Crab Supers",
    type: "collectible"
  },
  {
    id: "sm_maridia_2",
    name: "Super Missile",
    location: "Aqueduct",
    room: "Aqueduct",
    region: "Maridia",
    image: "/images/230px-SuperMissileMaridia2.png",
    sourceImageUrl: "/images/thumb/c/cb/SuperMissileMaridia2.png/230px-SuperMissileMaridia2.png",
    imageName: "230px-SuperMissileMaridia2.png",
    type: "collectible"
  },
  {
    id: "sm_maridia_3",
    name: "Super Missile",
    location: "Watering Hole", 
    room: "Watering Hole",
    region: "Maridia",
    image: "/images/230px-SuperMissileMaridia3.png",
    sourceImageUrl: "/images/thumb/c/cb/SuperMissileMaridia3.png/230px-SuperMissileMaridia3.png",
    imageName: "230px-SuperMissileMaridia3.png",
    type: "collectible"
  }
];

export const powerBombs: Item[] = [
  {
    id: "pb_crateria_1",
    name: "Power Bomb",
    location: "Crateria",
    room: "Crateria Power Bomb Room",
    region: "Crateria",
    image: "/images/230px-PowerBombCrateria1.png",
    sourceImageUrl: "/images/thumb/9/95/PowerBombCrateria1.png/230px-PowerBombCrateria1.png",
    imageName: "230px-PowerBombCrateria1.png",
    type: "collectible"
  },
  {
    id: "pb_brinstar_1",
    name: "Power Bomb",
    location: "Alpha",
    room: "Alpha Power Bomb Room",
    region: "Brinstar",
    image: "/images/230px-PowerBombBrinstar1.png",
    sourceImageUrl: "/images/thumb/5/5e/PowerBombBrinstar1.png/230px-PowerBombBrinstar1.png",
    imageName: "230px-PowerBombBrinstar1.png",
    nickname: "Power Bomb (Alpha)",
    type: "collectible"
  },
  {
    id: "pb_brinstar_2",
    name: "Power Bomb",
    location: "Beta",
    room: "Beta Power Bomb Room",
    region: "Brinstar", 
    image: "/images/230px-PowerBombBrinstar2.png",
    sourceImageUrl: "/images/thumb/7/72/PowerBombBrinstar2.png/230px-PowerBombBrinstar2.png",
    imageName: "230px-PowerBombBrinstar2.png",
    nickname: "Power Bomb (Beta)",
    type: "collectible"
  },
  {
    id: "pb_brinstar_3",
    name: "Power Bomb",
    location: "Morph Ball Room",
    room: "Morph Ball Room",
    region: "Brinstar",
    image: "/images/230px-PowerBombBrinstar3.png",
    sourceImageUrl: "/images/thumb/6/67/PowerBombBrinstar3.png/230px-PowerBombBrinstar3.png",
    imageName: "230px-PowerBombBrinstar3.png",
    type: "collectible"
  },
  {
    id: "pb_brinstar_4",
    name: "Power Bomb",
    location: "Etecoon", 
    room: "Etecoon Room",
    region: "Brinstar",
    image: "/images/230px-PowerBombBrinstar4.png",
    sourceImageUrl: "/images/thumb/1/13/PowerBombBrinstar4.png/230px-PowerBombBrinstar4.png",
    imageName: "230px-PowerBombBrinstar4.png",
    type: "collectible"
  },
  {
    id: "pb_brinstar_5",
    name: "Power Bomb",
    location: "Pink Brinstar",
    room: "Pink Brinstar Power Bomb Room",
    region: "Brinstar",
    image: "/images/230px-PowerBombBrinstar5.png",
    sourceImageUrl: "/images/thumb/c/cb/PowerBombBrinstar5.png/230px-PowerBombBrinstar5.png",
    imageName: "230px-PowerBombBrinstar5.png",
    type: "collectible"
  },
  {
    id: "pb_norfair_1",
    name: "Power Bomb",
    location: "Post Crocomire",
    room: "Post Crocomire Power Bomb Room",
    region: "Norfair",
    image: "/images/230px-PowerBombNorfair1.png",
    sourceImageUrl: "/images/thumb/6/67/PowerBombNorfair1.png/230px-PowerBombNorfair1.png",
    imageName: "230px-PowerBombNorfair1.png",
    type: "collectible"
  },
  {
    id: "pb_norfair_2",
    name: "Power Bomb",
    location: "Wasteland",
    room: "Wasteland",
    region: "Norfair",
    image: "/images/230px-PowerBombNorfair2.png",
    sourceImageUrl: "/images/thumb/0/0a/PowerBombNorfair2.png/230px-PowerBombNorfair2.png",
    imageName: "230px-PowerBombNorfair2.png",
    nickname: "Power Bomb of Shame",
    type: "collectible"
  },
  {
    id: "pb_norfair_3",
    name: "Power Bomb",
    location: "Lower Norfair Escape",
    room: "Lower Norfair Escape Power Bomb Room",
    region: "Norfair",
    image: "/images/230px-PowerBombNorfair3.png",
    sourceImageUrl: "/images/thumb/0/08/PowerBombNorfair3.png/230px-PowerBombNorfair3.png",
    imageName: "230px-PowerBombNorfair3.png",
    type: "collectible"
  },
  {
    id: "pb_maridia_1",
    name: "Power Bomb",
    location: "East Sand Hole",
    room: "East Sand Hole",
    region: "Maridia",
    image: "/images/230px-PowerBombMaridia1.png",
    sourceImageUrl: "/images/thumb/d/d4/PowerBombMaridia1.png/230px-PowerBombMaridia1.png",
    imageName: "230px-PowerBombMaridia1.png",
    type: "collectible"
  }
];

// Reserve Tanks
export const reserveTanks: Item[] = [
  {
    id: "rt_brinstar_1",
    name: "Reserve Tank",
    location: "Brinstar Reserve Tank Room",
    room: "Brinstar Reserve Tank Room",
    region: "Brinstar",
    image: "/images/230px-ReserveTankBrinstar1.png",
    sourceImageUrl: "/images/thumb/5/58/ReserveTankBrinstar1.png/230px-ReserveTankBrinstar1.png",
    imageName: "230px-ReserveTankBrinstar1.png",
    nickname: "Reserve Tank (In the hands of the Chozo)",
    type: "collectible"
  },
  {
    id: "rt_wrecked_ship_1", 
    name: "Reserve Tank",
    location: "Bowling Alley",
    room: "Bowling Alley",
    region: "Wrecked Ship",
    image: "/images/230px-ReserveTankWreckedShip1.png",
    sourceImageUrl: "/images/thumb/8/8b/ReserveTankWreckedShip1.png/230px-ReserveTankWreckedShip1.png",
    imageName: "230px-ReserveTankWreckedShip1.png",
    nickname: "Reserve Tank (Gravity Suit)",
    type: "collectible"
  },
  {
    id: "rt_maridia_1",
    name: "Reserve Tank",
    location: "West Sand Hole",
    room: "West Sand Hole",
    region: "Maridia",
    image: "/images/230px-ReserveTankMaridia1.png",
    sourceImageUrl: "/images/thumb/0/0d/ReserveTankMaridia1.png/230px-ReserveTankMaridia1.png",
    imageName: "230px-ReserveTankMaridia1.png",
    nickname: "Reserve Tank (West Sand Hole)",
    type: "collectible"
  },
  {
    id: "rt_norfair_1",
    name: "Reserve Tank",
    location: "Norfair Reserve Tank Room",
    room: "Norfair Reserve Tank Room",
    region: "Norfair",
    image: "/images/230px-ReserveTankNorfair1.png",
    sourceImageUrl: "/images/thumb/a/ad/ReserveTankNorfair1.png/230px-ReserveTankNorfair1.png",
    imageName: "230px-ReserveTankNorfair1.png",
    nickname: "Reserve Tank (Norfair)",
    type: "collectible"
  }
];

// All missile locations in route order (based on guide.html)
export const missiles: Item[] = [
  // 1. Missile (Awakening) - first missile in route
  {
    id: "m_brinstar_1",
    name: "Missile",
    location: "First Missile Room",
    room: "First Missile Room",
    region: "Brinstar",
    image: "/images/230px-MissileBrinstar1.png",
    sourceImageUrl: "/images/thumb/f/f0/MissileBrinstar1.png/230px-MissileBrinstar1.png",
    imageName: "230px-MissileBrinstar1.png",
    nickname: "Missile (Awakening)",
    type: "collectible"
  },
  // 2-3. Missile x2 (To the right of Early Supers)
  {
    id: "m_brinstar_7",
    name: "Missile",
    location: "Brinstar Reserve Tank Room",
    room: "Brinstar Reserve Tank Room",
    region: "Brinstar",
    image: "/images/230px-MissileBrinstar7.png",
    sourceImageUrl: "/images/thumb/4/4f/MissileBrinstar7.png/230px-MissileBrinstar7.png",
    imageName: "230px-MissileBrinstar7.png",
    nickname: "Missile x2 (To the right of Early Supers)",
    type: "collectible"
  },
  {
    id: "m_brinstar_8",
    name: "Missile",
    location: "Brinstar Reserve Tank Room",
    room: "Brinstar Reserve Tank Room",
    region: "Brinstar",
    image: "/images/230px-MissileBrinstar8.png",
    sourceImageUrl: "/images/thumb/8/8a/MissileBrinstar8.png/230px-MissileBrinstar8.png",
    imageName: "230px-MissileBrinstar8.png",
    nickname: "Missile x2 (To the right of Early Supers)",
    type: "collectible"
  },
  // 4. Missile (Below the bridge)
  {
    id: "m_brinstar_3",
    name: "Missile",
    location: "Early Supers Room",
    room: "Early Supers Room",
    region: "Brinstar",
    image: "/images/230px-MissileBrinstar3.png",
    sourceImageUrl: "/images/thumb/3/38/MissileBrinstar3.png/230px-MissileBrinstar3.png",
    imageName: "230px-MissileBrinstar3.png",
    nickname: "Missile (Below the bridge)",
    type: "collectible"
  },
  // 5. Missile (Charge Beam)
  {
    id: "m_brinstar_5",
    name: "Missile",
    location: "Big Pink",
    room: "Big Pink",
    region: "Brinstar",
    image: "/images/230px-MissileBrinstar5.png",
    sourceImageUrl: "/images/thumb/b/bc/MissileBrinstar5.png/230px-MissileBrinstar5.png",
    imageName: "230px-MissileBrinstar5.png",
    nickname: "Missile (Charge Beam)",
    type: "collectible"
  },
  // 6. Missile (Hi-Jump Boots)
  {
    id: "m_norfair_1",
    name: "Missile",
    location: "Hi Jump Energy Tank Room",
    room: "Hi Jump Energy Tank Room",
    region: "Norfair",
    image: "/images/230px-MissileNorfair1.png",
    sourceImageUrl: "/images/thumb/d/da/MissileNorfair1.png/230px-MissileNorfair1.png",
    imageName: "230px-MissileNorfair1.png",
    type: "collectible"
  },
  // 7. Missile (In center Cathedral lava pit)
  {
    id: "m_norfair_10",
    name: "Missile",
    location: "Cathedral",
    room: "Cathedral",
    region: "Norfair",
    image: "/images/230px-MissileNorfair10.png",
    sourceImageUrl: "/images/thumb/4/44/MissileNorfair10.png/230px-MissileNorfair10.png",
    imageName: "230px-MissileNorfair10.png",
    type: "collectible"
  },
  // 8. Missile (Hidden in ceiling right before Speed Booster door)
  {
    id: "m_norfair_3",
    name: "Missile",
    location: "Speed Booster Hall",
    room: "Speed Booster Hall",
    region: "Norfair",
    image: "/images/230px-MissileNorfair3.png",
    sourceImageUrl: "/images/thumb/b/b5/MissileNorfair3.png/230px-MissileNorfair3.png",
    imageName: "230px-MissileNorfair3.png",
    type: "collectible"
  },
  // 9. Missile (Wave Beam)
  {
    id: "m_norfair_wave_beam",
    name: "Missile",
    location: "Double Chamber",
    room: "Double Chamber",
    region: "Norfair",
    image: "/images/229px-MissileNorfair9.png",
    sourceImageUrl: "/images/thumb/6/67/MissileNorfair9.png/229px-MissileNorfair9.png",
    imageName: "229px-MissileNorfair9.png",
    nickname: "Missile (Wave Beam)",
    type: "collectible"
  },
  // 10. Missile (Grappling Beam)
  {
    id: "m_norfair_grappling_beam",
    name: "Missile",
    location: "Post Crocomire Jump Room",
    room: "Post Crocomire Jump Room",
    region: "Norfair",
    image: "/images/230px-MissileNorfair11.png",
    sourceImageUrl: "/images/thumb/f/f9/MissileNorfair11.png/230px-MissileNorfair11.png",
    imageName: "230px-MissileNorfair11.png",
    nickname: "Missile (Grappling Beam)",
    type: "collectible"
  },
  // 11. Missile (Lava tide)
  {
    id: "m_norfair_7",
    name: "Missile",
    location: "Post Crocomire Missile Room",
    room: "Post Crocomire Missile Room",
    region: "Norfair",
    image: "/images/230px-MissileNorfair7.png",
    sourceImageUrl: "/images/thumb/1/14/MissileNorfair7.png/230px-MissileNorfair7.png",
    imageName: "230px-MissileNorfair7.png",
    type: "collectible"
  },
  // 12. Missile (Next to green gate) in Crocomire Escape
  {
    id: "m_norfair_8",
    name: "Missile",
    location: "Crocomire Escape",
    room: "Crocomire Escape",
    region: "Norfair",
    image: "/images/230px-MissileNorfair8.png",
    sourceImageUrl: "/images/thumb/0/0a/MissileNorfair8.png/230px-MissileNorfair8.png",
    imageName: "230px-MissileNorfair8.png",
    type: "collectible"
  },
  // 13. Missile (Hidden behind Power Bomb (Alpha))
  {
    id: "m_brinstar_11",
    name: "Missile",
    location: "Alpha Power Bomb Room",
    room: "Alpha Power Bomb Room",
    region: "Brinstar",
    image: "/images/230px-MissileBrinstar11.png",
    sourceImageUrl: "/images/thumb/d/d7/MissileBrinstar11.png/230px-MissileBrinstar11.png",
    imageName: "230px-MissileBrinstar11.png",
    nickname: "Missile (Hidden behind Power Bomb (Alpha))",
    type: "collectible"
  },
  // 14. Missile (Moat)
  {
    id: "m_crateria_2",
    name: "Missile", 
    location: "Moat",
    room: "The Moat",
    region: "Crateria",
    image: "/images/230px-MissileCrateria2.png",
    sourceImageUrl: "/images/thumb/1/1f/MissileCrateria2.png/230px-MissileCrateria2.png",
    imageName: "230px-MissileCrateria2.png",
    nickname: "Moat Missile",
    type: "collectible"
  },
  // 15. Missile (Hidden to the left of the main Wrecked Ship shaft)
  {
    id: "m_wrecked_ship_1",
    name: "Missile",
    location: "Wrecked Ship Main Shaft",
    room: "Wrecked Ship Main Shaft",
    region: "Wrecked Ship",
    image: "/images/230px-MissileWreckedShip1.png",
    sourceImageUrl: "/images/thumb/0/0b/MissileWreckedShip1.png/230px-MissileWreckedShip1.png",
    imageName: "230px-MissileWreckedShip1.png",
    type: "collectible"
  },
  // 16. Missile (Right of attic)
  {
    id: "m_wrecked_ship_2",
    name: "Missile",
    location: "Assembly Line",
    room: "Assembly Line",
    region: "Wrecked Ship",
    image: "/images/230px-MissileWreckedShip2.png",
    sourceImageUrl: "/images/thumb/7/7a/MissileWreckedShip2.png/230px-MissileWreckedShip2.png",
    imageName: "230px-MissileWreckedShip2.png",
    type: "collectible"
  },
  // 17. Missile (Hidden in highest point of the mountain to the left)
  {
    id: "m_crateria_4",
    name: "Missile",
    location: "West Ocean",
    room: "West Ocean",
    region: "Crateria",
    image: "/images/230px-MissileCrateria4.png",
    sourceImageUrl: "/images/thumb/6/65/MissileCrateria4.png/230px-MissileCrateria4.png",
    imageName: "230px-MissileCrateria4.png",
    type: "collectible"
  },
  // 18. Missile (Hidden in ground maze to the left)
  {
    id: "m_crateria_5",
    name: "Missile",
    location: "West Ocean",
    room: "West Ocean",
    region: "Crateria",
    image: "/images/230px-MissileCrateria5.png",
    sourceImageUrl: "/images/thumb/e/e8/MissileCrateria5.png/230px-MissileCrateria5.png",
    imageName: "230px-MissileCrateria5.png",
    type: "collectible"
  },
  // 19. Missile (Gravity Suit)
  {
    id: "m_wrecked_ship_gravity_suit",
    name: "Missile",
    location: "Bowling Alley",
    room: "Bowling Alley",
    region: "Wrecked Ship",
    image: "/images/230px-MissileWreckedShip3.png",
    sourceImageUrl: "/images/thumb/3/30/MissileWreckedShip3.png/230px-MissileWreckedShip3.png",
    imageName: "230px-MissileWreckedShip3.png",
    nickname: "Missile (Gravity Suit)",
    type: "collectible"
  },
  // 20. Missile (Bottom left of ocean)
  {
    id: "m_crateria_6",
    name: "Missile",
    location: "West Ocean",
    room: "West Ocean",
    region: "Crateria",
    image: "/images/230px-MissileCrateria6.png",
    sourceImageUrl: "/images/thumb/8/83/MissileCrateria6.png/230px-MissileCrateria6.png",
    imageName: "230px-MissileCrateria6.png",
    type: "collectible"
  },
  // 21-22. Missile x2 (Crumble shaft after Gauntlet)
  {
    id: "m_crateria_7",
    name: "Missile",
    location: "Green Pirates Shaft",
    room: "Green Pirates Shaft",
    region: "Crateria",
    image: "/images/230px-MissileCrateria7.png",
    sourceImageUrl: "/images/thumb/c/c7/MissileCrateria7.png/230px-MissileCrateria7.png",
    imageName: "230px-MissileCrateria7.png",
    type: "collectible"
  },
  {
    id: "m_crateria_8",
    name: "Missile",
    location: "Green Pirates Shaft",
    room: "Green Pirates Shaft",
    region: "Crateria",
    image: "/images/230px-MissileCrateria7.png",
    sourceImageUrl: "/images/thumb/c/c7/MissileCrateria7.png/230px-MissileCrateria7.png",
    imageName: "230px-MissileCrateria7.png",
    type: "collectible"
  },
  // 23. Missile (Behind the Grapple blocks)
  {
    id: "m_brinstar_4",
    name: "Missile",
    location: "Big Pink",
    room: "Big Pink",
    region: "Brinstar",
    image: "/images/230px-MissileBrinstar4.png",
    sourceImageUrl: "/images/thumb/9/91/MissileBrinstar4.png/230px-MissileBrinstar4.png",
    imageName: "230px-MissileBrinstar4.png",
    nickname: "Missile (Behind the Grapple blocks)",
    type: "collectible"
  },
  // 24. Missile (Green Hill pipe)
  {
    id: "m_brinstar_6",
    name: "Missile",
    location: "Green Hill Zone",
    room: "Green Hill Zone",
    region: "Brinstar",
    image: "/images/230px-MissileBrinstar6.png",
    sourceImageUrl: "/images/thumb/6/62/MissileBrinstar6.png/230px-MissileBrinstar6.png",
    imageName: "230px-MissileBrinstar6.png",
    nickname: "Missile (Green Hill pipe)",
    type: "collectible"
  },
  // 25. Missile (Main Street)
  {
    id: "m_maridia_1",
    name: "Missile",
    location: "Main Street",
    room: "Main Street",
    region: "Maridia",
    image: "/images/230px-MissileMaridia1.png",
    sourceImageUrl: "/images/thumb/6/64/MissileMaridia1.png/230px-MissileMaridia1.png",
    imageName: "230px-MissileMaridia1.png",
    type: "collectible"
  },
  // 26. Missile (Mama Turtle)
  {
    id: "m_maridia_8",
    name: "Missile",
    location: "Mama Turtle Room",
    room: "Mama Turtle Room",
    region: "Maridia",
    image: "/images/230px-MissileMaridia8.png",
    sourceImageUrl: "/images/thumb/b/b7/MissileMaridia8.png/230px-MissileMaridia8.png",
    imageName: "230px-MissileMaridia8.png",
    nickname: "Missile (Mama Turtle)",
    type: "collectible"
  },
  // 27. Missile (Hidden in right side of Maridian beach)
  {
    id: "m_maridia_4",
    name: "Missile",
    location: "Pseudo Plasma Spark Room",
    room: "Pseudo Plasma Spark Room",
    region: "Maridia",
    image: "/images/230px-MissileMaridia4.png",
    sourceImageUrl: "/images/thumb/b/b4/MissileMaridia4.png/230px-MissileMaridia4.png",
    imageName: "230px-MissileMaridia4.png",
    type: "collectible"
  },
  // 28. Missile (Same location as above super missile)
  {
    id: "m_maridia_5",
    name: "Missile",
    location: "Watering Hole",
    room: "Watering Hole",
    region: "Maridia",
    image: "/images/230px-MissileMaridia5.png",
    sourceImageUrl: "/images/thumb/f/fa/MissileMaridia5.png/230px-MissileMaridia5.png",
    imageName: "230px-MissileMaridia5.png",
    type: "collectible"
  },
  // 29. Missile (Draygon)
  {
    id: "m_maridia_draygon",
    name: "Missile",
    location: "The Precious Room",
    room: "The Precious Room",
    region: "Maridia",
    image: "/images/230px-MissileMaridia3.png",
    sourceImageUrl: "/images/thumb/9/91/MissileMaridia3.png/230px-MissileMaridia3.png",
    imageName: "230px-MissileMaridia3.png",
    nickname: "Missile (Draygon)",
    type: "collectible"
  },
  // 30. Missile (East Sand Hole)
  {
    id: "m_maridia_6",
    name: "Missile",
    location: "East Sand Hole",
    room: "East Sand Hole",
    region: "Maridia",
    image: "/images/230px-MissileMaridia6.png",
    sourceImageUrl: "/images/thumb/8/89/MissileMaridia6.png/230px-MissileMaridia6.png",
    imageName: "230px-MissileMaridia6.png",
    type: "collectible"
  },
  // 31. Missile (Aqueduct)
  {
    id: "m_maridia_2",
    name: "Missile",
    location: "Aqueduct",
    room: "Aqueduct",
    region: "Maridia",
    image: "/images/230px-MissileMaridia2.png",
    sourceImageUrl: "/images/thumb/7/77/MissileMaridia2.png/230px-MissileMaridia2.png",
    imageName: "230px-MissileMaridia2.png",
    type: "collectible"
  },
  // 32. Missile (West Sand Hole)
  {
    id: "m_maridia_7",
    name: "Missile",
    location: "West Sand Hole",
    room: "West Sand Hole",
    region: "Maridia",
    image: "/images/230px-MissileMaridia7.png",
    sourceImageUrl: "/images/thumb/2/2a/MissileMaridia7.png/230px-MissileMaridia7.png",
    imageName: "230px-MissileMaridia7.png",
    type: "collectible"
  },
  // 33. Missile (Left over in Kraid's Lair)
  {
    id: "m_brinstar_12",
    name: "Missile",
    location: "Warehouse Keyhunter Room",
    room: "Warehouse Keyhunter Room",
    region: "Brinstar",
    image: "/images/230px-MissileBrinstar12.png",
    sourceImageUrl: "/images/thumb/5/54/MissileBrinstar12.png/230px-MissileBrinstar12.png",
    imageName: "230px-MissileBrinstar12.png",
    nickname: "Missile (Kraid's Lair, with Power Bomb)",
    type: "collectible"
  },
  // 34. Missile (Lower route after Ice Beam)
  {
    id: "m_norfair_6",
    name: "Missile",
    location: "Crumble Shaft",
    room: "Crumble Shaft",
    region: "Norfair",
    image: "/images/230px-MissileNorfair6.png",
    sourceImageUrl: "/images/thumb/a/a2/MissileNorfair6.png/230px-MissileNorfair6.png",
    imageName: "230px-MissileNorfair6.png",
    type: "collectible"
  },
  // 35. Missile (Golden Torizo)
  {
    id: "m_norfair_12",
    name: "Missile",
    location: "Golden Torizo's Room",
    room: "Golden Torizo's Room",
    region: "Norfair",
    image: "/images/230px-MissileNorfair12.png",
    sourceImageUrl: "/images/thumb/3/3b/MissileNorfair12.png/230px-MissileNorfair12.png",
    imageName: "230px-MissileNorfair12.png",
    nickname: "Missile (Golden Torizo)",
    type: "collectible"
  },
  // 36. Missile (Mickey Mouse)
  {
    id: "m_norfair_13",
    name: "Missile",
    location: "Mickey Mouse Room",
    room: "Mickey Mouse Room",
    region: "Norfair",
    image: "/images/230px-MissileNorfair13.png",
    sourceImageUrl: "/images/thumb/d/d3/MissileNorfair13.png/230px-MissileNorfair13.png",
    imageName: "230px-MissileNorfair13.png",
    type: "collectible"
  },
  // 37. Missile (In front of pipe maze)
  {
    id: "m_norfair_14",
    name: "Missile",
    location: "Lower Norfair Spring Ball Maze Room",
    room: "Lower Norfair Spring Ball Maze Room",
    region: "Norfair",
    image: "/images/230px-MissileNorfair14.png",
    sourceImageUrl: "/images/thumb/c/ca/MissileNorfair14.png/230px-MissileNorfair14.png",
    imageName: "230px-MissileNorfair14.png",
    type: "collectible"
  },
  // 38. Missile (Hidden left of Three Muskateers)
  {
    id: "m_norfair_15",
    name: "Missile",
    location: "Three Muskateers' Room",
    room: "Three Muskateers' Room",
    region: "Norfair",
    image: "/images/230px-MissileNorfair15.png",
    sourceImageUrl: "/images/thumb/0/0b/MissileNorfair15.png/230px-MissileNorfair15.png",
    imageName: "230px-MissileNorfair15.png",
    type: "collectible"
  },
  // 39. Missile (Top left green door in Bubble Mountain)
  {
    id: "m_norfair_4",
    name: "Missile",
    location: "Green Bubbles Missile Room",
    room: "Green Bubbles Missile Room",
    region: "Norfair",
    image: "/images/230px-MissileNorfair4.png",
    sourceImageUrl: "/images/thumb/a/a3/MissileNorfair4.png/230px-MissileNorfair4.png",
    imageName: "230px-MissileNorfair4.png",
    type: "collectible"
  },
  // 40. Missile (Hidden inside the sphere closest to the previous Reserve Tank)
  {
    id: "m_norfair_5",
    name: "Missile",
    location: "Norfair Reserve Tank Room",
    room: "Norfair Reserve Tank Room",
    region: "Norfair",
    image: "/images/230px-MissileNorfair5.png",
    sourceImageUrl: "/images/thumb/5/58/MissileNorfair5.png/230px-MissileNorfair5.png",
    imageName: "230px-MissileNorfair5.png",
    type: "collectible"
  },
  // 41. Missile (Bubble Mountain), bottom right corner
  {
    id: "m_norfair_2",
    name: "Missile",
    location: "Bubble Mountain",
    room: "Bubble Mountain",
    region: "Norfair",
    image: "/images/230px-MissileNorfair2.png",
    sourceImageUrl: "/images/thumb/4/43/MissileNorfair2.png/230px-MissileNorfair2.png",
    imageName: "230px-MissileNorfair2.png",
    type: "collectible"
  },
  // 42. Missile (To the right of the above location)
  {
    id: "m_brinstar_2",
    name: "Missile",
    location: "Blue Brinstar Energy Tank Room",
    room: "Blue Brinstar Energy Tank Room",
    region: "Brinstar",
    image: "/images/230px-MissileBrinstar2.png",
    sourceImageUrl: "/images/thumb/8/8b/MissileBrinstar2.png/230px-MissileBrinstar2.png",
    imageName: "230px-MissileBrinstar2.png",
    type: "collectible"
  },
  // 43-44. Missile x2 (Above the above location, up the shaft)
  {
    id: "m_brinstar_9",
    name: "Missile",
    location: "Blue Brinstar Double Missile Room",
    room: "Blue Brinstar Double Missile Room",
    region: "Brinstar",
    image: "/images/230px-MissileBrinstar9.png",
    sourceImageUrl: "/images/thumb/c/ce/MissileBrinstar9.png/230px-MissileBrinstar9.png",
    imageName: "230px-MissileBrinstar9.png",
    nickname: "Missile x2 (Past invisible bridge)",
    type: "collectible"
  },
  {
    id: "m_brinstar_10",
    name: "Missile",
    location: "Blue Brinstar Double Missile Room",
    room: "Blue Brinstar Double Missile Room",
    region: "Brinstar",
    image: "/images/230px-MissileBrinstar9.png",
    sourceImageUrl: "/images/thumb/c/ce/MissileBrinstar9.png/230px-MissileBrinstar9.png",
    imageName: "230px-MissileBrinstar9.png",
    nickname: "Missile x2 (Past invisible bridge)",
    type: "collectible"
  },
  // 45. Missile (Below old Mother Brain tank)
  {
    id: "m_crateria_3",
    name: "Missile",
    location: "Pit Room",
    room: "Pit Room",
    region: "Crateria",
    image: "/images/230px-MissileCrateria3.png",
    sourceImageUrl: "/images/thumb/0/0b/MissileCrateria3.png/230px-MissileCrateria3.png",
    imageName: "230px-MissileCrateria3.png",
    type: "collectible"
  },
  // 46. Missile (Final)
  {
    id: "m_crateria_1",
    name: "Missile",
    location: "Final Missile",
    room: "The Final Missile",
    region: "Crateria",
    image: "/images/230px-MissileCrateria1.png",
    sourceImageUrl: "/images/thumb/2/2d/MissileCrateria1.png/230px-MissileCrateria1.png",
    imageName: "230px-MissileCrateria1.png",
    nickname: "Final Missile",
    type: "collectible"
  }
];

// Major upgrades and abilities
export const majorUpgrades: Item[] = [
  {
    id: "morph_ball",
    name: "Morph Ball",
    location: "Morphing Ball Room",
    room: "Morphing Ball Room",
    region: "Crateria",
    image: "/images/items_morphball.png",
    sourceImageUrl: "/images/items_morphball.png",
    imageName: "items_morphball.png",
    type: "upgrade"
  },
  {
    id: "bombs",
    name: "Bombs",
    location: "Bomb Torizo Room",
    room: "Bomb Torizo Room", 
    region: "Crateria",
    image: "/images/items_bombs.png",
    sourceImageUrl: "/images/items_bombs.png",
    imageName: "items_bombs.png",
    type: "upgrade"
  },
  {
    id: "charge_beam",
    name: "Charge Beam",
    location: "Charge Beam Room",
    room: "Charge Beam Room",
    region: "Brinstar",
    image: "/images/beams_charge.png",
    sourceImageUrl: "/images/beams_charge.png",
    imageName: "beams_charge.png",
    type: "upgrade"
  },
  {
    id: "spazer",
    name: "Spazer",
    location: "Spazer Beam Room",
    room: "Spazer Beam Room",
    region: "Brinstar",
    image: "/images/beams_spazer.png",
    sourceImageUrl: "/images/beams_spazer.png",
    imageName: "beams_spazer.png",
    type: "upgrade"
  },
  {
    id: "varia_suit",
    name: "Varia Suit",
    location: "Varia Suit Room",
    room: "Varia Suit Room",
    region: "Brinstar",
    image: "/images/items_varia_suit.png",
    sourceImageUrl: "/images/items_varia_suit.png",
    imageName: "items_varia_suit.png",
    type: "upgrade"
  },
  {
    id: "hi_jump_boots",
    name: "Hi-Jump Boots",
    location: "Hi Jump Boots Room",
    room: "Hi Jump Boots Room",
    region: "Norfair",
    image: "/images/items_hi_jump.png",
    sourceImageUrl: "/images/items_hi_jump.png",
    imageName: "items_hi_jump.png",
    type: "upgrade"
  },
  {
    id: "speed_booster",
    name: "Speed Booster",
    location: "Speed Booster Room",
    room: "Speed Booster Room",
    region: "Norfair",
    image: "/images/items_speedbooster.png",
    sourceImageUrl: "/images/items_speedbooster.png",
    imageName: "items_speedbooster.png",
    type: "upgrade"
  },
  {
    id: "wave_beam",
    name: "Wave Beam",
    location: "Wave Beam Room",
    room: "Wave Beam Room",
    region: "Norfair",
    image: "/images/beams_wave.png",
    sourceImageUrl: "/images/beams_wave.png",
    imageName: "beams_wave.png",
    type: "upgrade"
  },
  {
    id: "grappling_beam",
    name: "Grappling Beam",
    location: "Grappling Beam Room",
    room: "Grappling Beam Room",
    region: "Norfair",
    image: "/images/items_grappling_beam.png",
    sourceImageUrl: "/images/items_grappling_beam.png",
    imageName: "items_grappling_beam.png",
    type: "upgrade"
  },
  {
    id: "gravity_suit",
    name: "Gravity Suit",
    location: "Gravity Suit Room",
    room: "Gravity Suit Room",
    region: "Wrecked Ship",
    image: "/images/items_gravity_suit.png",
    sourceImageUrl: "/images/items_gravity_suit.png",
    imageName: "items_gravity_suit.png",
    type: "upgrade"
  },
  {
    id: "space_jump",
    name: "Space Jump",
    location: "Space Jump Room",
    room: "Space Jump Room",
    region: "Maridia",
    image: "/images/items_space_jump.png",
    sourceImageUrl: "/images/items_space_jump.png",
    imageName: "items_space_jump.png",
    type: "upgrade"
  },
  {
    id: "spring_ball",
    name: "Spring Ball",
    location: "Spring Ball Room",
    room: "Spring Ball Room",
    region: "Maridia",
    image: "/images/items_spring_ball.png",
    sourceImageUrl: "/images/items_spring_ball.png",
    imageName: "items_spring_ball.png",
    type: "upgrade"
  },
  {
    id: "plasma_beam",
    name: "Plasma Beam",
    location: "Plasma Beam Room",
    room: "Plasma Beam Room",
    region: "Maridia",
    image: "/images/beams_plasma.png",
    sourceImageUrl: "/images/beams_plasma.png",
    imageName: "beams_plasma.png",
    type: "upgrade"
  },
  {
    id: "ice_beam",
    name: "Ice Beam",
    location: "Ice Beam Room",
    room: "Ice Beam Room",
    region: "Norfair",
    image: "/images/beams_ice.png",
    sourceImageUrl: "/images/beams_ice.png",
    imageName: "beams_ice.png",
    type: "upgrade"
  },
  {
    id: "screw_attack",
    name: "Screw Attack",
    location: "Screw Attack Room",
    room: "Screw Attack Room",
    region: "Norfair",
    image: "/images/items_screw_attackl.png",
    sourceImageUrl: "/images/items_screw_attackl.png",
    imageName: "items_screw_attackl.png",
    type: "upgrade"
  },
  {
    id: "x_ray_scope",
    name: "X-Ray Scope",
    location: "X-Ray Scope Room",
    room: "X-Ray Scope Room",
    region: "Brinstar",
    image: "/images/items_xray.png",
    sourceImageUrl: "/images/items_xray.png",
    imageName: "items_xray.png",
    type: "upgrade"
  }
];

// Major bosses
export const bosses: Item[] = [
  {
    id: "kraid",
    name: "Kraid",
    location: "Kraid's Lair",
    room: "Kraid's Room",
    region: "Brinstar",
    image: "/images/bosses_kraid.png",
    sourceImageUrl: "/images/bosses_kraid.png",
    imageName: "bosses_kraid.png",
    type: "boss"
  },
  {
    id: "phantoon",
    name: "Phantoon",
    location: "Wrecked Ship",
    room: "Phantoon's Room",
    region: "Wrecked Ship",
    image: "/images/bosses_phantoon.png",
    sourceImageUrl: "/images/bosses_phantoon.png",
    imageName: "bosses_phantoon.png",
    type: "boss"
  },
  {
    id: "draygon",
    name: "Draygon",
    location: "Maridia",
    room: "Draygon's Room",
    region: "Maridia",
    image: "/images/bosses_draygon.png",
    sourceImageUrl: "/images/bosses_draygon.png",
    imageName: "bosses_draygon.png",
    type: "boss"
  },
  {
    id: "ridley",
    name: "Ridley",
    location: "Lower Norfair",
    room: "Ridley's Room",
    region: "Norfair",
    image: "/images/bosses_ridley.png",
    sourceImageUrl: "/images/bosses_ridley.png",
    imageName: "bosses_ridley.png",
    type: "boss"
  },
  {
    id: "mother_brain",
    name: "Mother Brain",
    location: "Tourian",
    room: "Mother Brain's Room",
    region: "Tourian",
    image: "/images/bosses_mother_brain.png",
    sourceImageUrl: "/images/bosses_mother_brain.png",
    imageName: "bosses_mother_brain.png",
    type: "boss"
  },
  {
    id: "bomb_torizo",
    name: "Bomb Torizo",
    location: "Crateria",
    room: "Bomb Torizo Room",
    region: "Crateria",
    image: "/images/bosses_bomb_torizo.png",
    sourceImageUrl: "/images/bosses_bomb_torizo.png",
    imageName: "bosses_bomb_torizo.png",
    type: "boss"
  },
  {
    id: "spore_spawn",
    name: "Spore Spawn",
    location: "Brinstar",
    room: "Spore Spawn's Room",
    region: "Brinstar",
    image: "/images/bosses_spore_spwan.png",
    sourceImageUrl: "/images/bosses_spore_spwan.png",
    imageName: "bosses_spore_spwan.png",
    type: "boss"
  },
  {
    id: "crocomire",
    name: "Crocomire",
    location: "Norfair",
    room: "Crocomire's Room",
    region: "Norfair",
    image: "/images/bosses_crocomire.png",
    sourceImageUrl: "/images/bosses_crocomire.png",
    imageName: "bosses_crocomire.png",
    type: "boss"
  },
  {
    id: "botwoon",
    name: "Botwoon",
    location: "Maridia",
    room: "Botwoon's Room",
    region: "Maridia",
    image: "/images/bosses_botwoon.png",
    sourceImageUrl: "/images/bosses_botwoon.png",
    imageName: "bosses_botwoon.png",
    type: "boss"
  },
  {
    id: "golden_torizo",
    name: "Golden Torizo",
    location: "Norfair",
    room: "Golden Torizo's Room",
    region: "Norfair",
    image: "/images/bosses_gold_torizo.png",
    sourceImageUrl: "/images/bosses_gold_torizo.png",
    imageName: "bosses_gold_torizo.png",
    type: "boss"
  }
];

// Route data based on the guide.html - EXACT sequence matching the HTML list
export const routeOrder: string[] = [
  // Morphing Ball
  "morph_ball",
  // Missile (Awakening)
  "m_brinstar_1", 
  // Bombs
  "bombs",
  // Energy Tank (Terminator)
  "et_crateria_1",
  // Reserve Tank (In the hands of the Chozo)
  "rt_brinstar_1",
  // Missile x2 (To the right of Early Supers)
  "m_brinstar_7",
  "m_brinstar_8",
  // Early Super Missile
  "sm_brinstar_2",
  // Missile (Below the bridge)
  "m_brinstar_3",
  // Missile (Charge Beam)
  "m_brinstar_5",
  // Charge Beam
  "charge_beam",
  // Missile (Green Hill pipe)
  "m_brinstar_6",
  // Spazer
  "spazer",
  // Kraid
  "kraid",
  // Varia Suit
  "varia_suit",
  // Energy Tank (Kraid)
  "et_brinstar_1",
  // Energy Tank (Hi-Jump Boots)
  "et_norfair_1",
  // Hi-Jump Boots
  "hi_jump_boots",
  // Missile (Hi-Jump Boots)
  "m_norfair_1",
  // Missile (In center Cathedral lava pit)
  "m_norfair_10",
  // Missile (Hidden in ceiling right before Speed Booster door)
  "m_norfair_3",
  // Speed Booster
  "speed_booster",
  // Missile (Wave Beam)
  "m_norfair_wave_beam",
  // Wave Beam
  "wave_beam",
  // Energy Tank (Crocomire)
  "et_norfair_2",
  // Power Bomb (Red door directly left after Crocomire)
  "pb_norfair_1",
  // Missile (Grappling Beam)
  "m_norfair_grappling_beam",
  // Grappling Beam
  "grappling_beam",
  // Missile (Lava tide)
  "m_norfair_7",
  // Missile (Next to green gate) in Crocomire Escape
  "m_norfair_8",
  // Power Bomb (Alpha), the any% pack
  "pb_brinstar_1",
  // Missile (Hidden behind Power Bomb (Alpha))
  "m_brinstar_11",
  // Power Bomb (Beta), Green door left of elevator
  "pb_brinstar_2",
  // Missile (Moat)
  "m_crateria_2",
  // Missile (Hidden to the left of the main Wrecked Ship shaft)
  "m_wrecked_ship_1",
  // Phantoon
  "phantoon",
  // Super Missile (Wrecked Ship East), past the robots
  "sm_wrecked_ship_2",
  // Super Missile (Wrecked Ship West)
  "sm_wrecked_ship_1",
  // Energy Tank (Statue above water, past all the spikes)
  "et_wrecked_ship_1",
  // Missile (Right of attic)
  "m_wrecked_ship_2",
  // Missile (Hidden in highest point of the mountain to the left)
  "m_crateria_4",
  // Missile (Hidden in ground maze to the left)
  "m_crateria_5",
  // Missile (Gravity Suit)
  "m_wrecked_ship_gravity_suit",
  // Reserve Tank (Gravity Suit)
  "rt_wrecked_ship_1",
  // Gravity Suit
  "gravity_suit",
  // Missile (Bottom left of ocean)
  "m_crateria_6",
  // Power Bomb (Crateria), top right of Landing Site
  "pb_crateria_1",
  // Energy Tank (Gauntlet)
  "et_crateria_2",
  // Missile x2 (Crumble shaft after Gauntlet)
  "m_crateria_7",
  "m_crateria_8",
  // Energy Tank (Etecoon)
  "et_brinstar_2",
  // Super Missile (Etecoon), green door to the left
  "sm_brinstar_3",
  // Power Bomb (Etecoon)
  "pb_brinstar_4",
  // Missile (Behind the Grapple blocks)
  "m_brinstar_4",
  // Power Bomb (Hidden behind/below the above item's location)
  "pb_brinstar_5",
  // Energy Tank (Behind blue gate behind Sidehoppers)
  "et_brinstar_4",
  // Super Missile (Spore Spawn)
  "sm_brinstar_1",
  // Energy Tank (Behind/below Charge Beam's location)
  "et_brinstar_5",
  // Missile (Main Street)
  "m_maridia_1",
  // Energy Tank (Mama Turtle)
  "et_maridia_2",
  // Missile (Mama Turtle)
  "m_maridia_8",
  // Super Missile (Main Street), "Crab Supers"
  "sm_maridia_1",
  // Missile (Hidden in right side of Maridian beach)
  "m_maridia_4",
  // Super Missile (Hidden in sand pit below a Choot)
  "sm_maridia_3",
  // Missile (Same location as above)
  "m_maridia_5",
  // Botwoon
  "botwoon",
  // Energy Tank (Botwoon)
  "et_maridia_1",
  // Missile (Draygon)
  "m_maridia_draygon",
  // Draygon
  "draygon",
  // Space Jump
  "space_jump",
  // Missile (East Sand Hole), drop down through the right sand pit
  "m_maridia_6",
  // Power Bomb (East Sand Hole), same location as above
  "pb_maridia_1",
  // Spring Ball
  "spring_ball",
  // Plasma Beam
  "plasma_beam",
  // Missile (Aqueduct), top right pipes of Aqueduct
  "m_maridia_2",
  // Super Missile (Aqueduct), same location as above
  "sm_maridia_2",
  // Reserve Tank (West Sand Hole)
  "rt_maridia_1",
  // Missile (West Sand Hole), drop down through the left sand pit this time
  "m_maridia_7",
  // Missile (Left over in Kraid's Lair, accessed with a Power Bomb)
  "m_brinstar_12",
  // Ice Beam
  "ice_beam",
  // Missile ("Lower route" after Ice Beam)
  "m_norfair_6",
  // Missile (Golden Torizo) - watch out for that floor too
  "m_norfair_12",
  // Super Missile (Golden Torizo)
  "sm_norfair_1",
  // Golden Torizo
  "golden_torizo",
  // Screw Attack
  "screw_attack",
  // Missile (Mickey Mouse)
  "m_norfair_13",
  // Power Bomb of shame
  "pb_norfair_2",
  // Ridley
  "ridley",
  // Energy Tank (Ridley)
  "et_norfair_4",
  // Energy Tank (Lower Norfair Fireflea Room)
  "et_norfair_3",
  // Missile (In front of pipe maze)
  "m_norfair_14",
  // Power Bomb (Below the door after pipe maze)
  "pb_norfair_3",
  // Missile (Hidden left of "Three Muskateers")
  "m_norfair_15",
  // Missile (Top left green door in Bubble Mountain)
  "m_norfair_4",
  // Reserve Tank (Norfair)
  "rt_norfair_1",
  // Missile (Hidden inside the sphere closest to the previous Reserve Tank)
  "m_norfair_5",
  // Missile (Bubble Mountain), bottom right corner
  "m_norfair_2",
  // X-Ray Scope
  "x_ray_scope",
  // Power Bomb (Retro Brinstar, above Green Hill)
  "pb_brinstar_3",
  // Energy Tank (Ceiling right past Construction Zone)
  "et_brinstar_3",
  // Missile (To the right of the above location)
  "m_brinstar_2",
  // Missile x2 (Above the above location, up the shaft)
  "m_brinstar_9",
  "m_brinstar_10",
  // Missile (Below old Mother Brain tank)
  "m_crateria_3",
  // Super Missile (Crateria), hidden right of climb
  "sm_crateria_1",
  // Missile (Final), first left Parlor door after climb
  "m_crateria_1",
  // Mother Brain
  "mother_brain"
];

export const allItems = [...energyTanks, ...superMissiles, ...powerBombs, ...reserveTanks, ...missiles, ...majorUpgrades, ...bosses];