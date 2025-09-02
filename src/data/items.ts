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

// Selected missile locations (the "bastard missiles" and other commonly missed ones)
export const missiles: Item[] = [
  // Brinstar Missiles
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
  {
    id: "m_brinstar_9",
    name: "Missile",
    location: "Blue Brinstar Double Missile Room",
    room: "Blue Brinstar Double Missile Room",
    region: "Brinstar",
    image: "/images/230px-MissileBrinstar9.png",
    sourceImageUrl: "/images/thumb/c/ce/MissileBrinstar9.png/230px-MissileBrinstar9.png",
    imageName: "230px-MissileBrinstar9.png",
    nickname: "Missile x2 (Above the above location, up the shaft)",
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
    nickname: "Missile x2 (Above the above location, up the shaft)",
    type: "collectible"
  },
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
  {
    id: "m_brinstar_12",
    name: "Missile",
    location: "Warehouse Keyhunter Room",
    room: "Warehouse Keyhunter Room",
    region: "Brinstar",
    image: "/images/230px-MissileBrinstar12.png",
    sourceImageUrl: "/images/thumb/5/54/MissileBrinstar12.png/230px-MissileBrinstar12.png",
    imageName: "230px-MissileBrinstar12.png",
    nickname: "Missile (Left over in Kraid's Lair, accessed with a Power Bomb)",
    type: "collectible"
  },
  // Additional specific missiles mentioned in guide.html
  {
    id: "m_norfair_wave_beam",
    name: "Missile", 
    location: "Wave Beam Room",
    room: "Wave Beam Room",
    region: "Norfair",
    image: "/images/missile_wave_beam.png",
    sourceImageUrl: "/images/missile_wave_beam.png",
    imageName: "missile_wave_beam.png",
    nickname: "Missile (Wave Beam)",
    type: "collectible"
  },
  {
    id: "m_norfair_grappling_beam",
    name: "Missile",
    location: "Grappling Beam Room",
    room: "Grappling Beam Room", 
    region: "Norfair",
    image: "/images/missile_grappling_beam.png",
    sourceImageUrl: "/images/missile_grappling_beam.png",
    imageName: "missile_grappling_beam.png",
    nickname: "Missile (Grappling Beam)",
    type: "collectible"
  },
  {
    id: "m_wrecked_ship_gravity_suit",
    name: "Missile",
    location: "Gravity Suit Room",
    room: "Gravity Suit Room",
    region: "Wrecked Ship",
    image: "/images/missile_gravity_suit.png",
    sourceImageUrl: "/images/missile_gravity_suit.png",
    imageName: "missile_gravity_suit.png",
    nickname: "Missile (Gravity Suit)",
    type: "collectible"
  },
  {
    id: "m_maridia_draygon",
    name: "Missile",
    location: "Draygon's Room",
    room: "Draygon's Room",
    region: "Maridia",
    image: "/images/missile_draygon.png",
    sourceImageUrl: "/images/missile_draygon.png",
    imageName: "missile_draygon.png",
    nickname: "Missile (Draygon)",
    type: "collectible"
  },
  // Crateria Missiles  
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
  },
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
    image: "/images/morph_ball.png",
    sourceImageUrl: "/images/morph_ball.png",
    imageName: "morph_ball.png",
    type: "upgrade"
  },
  {
    id: "bombs",
    name: "Bombs",
    location: "Bomb Torizo Room",
    room: "Bomb Torizo Room", 
    region: "Crateria",
    image: "/images/bombs.png",
    sourceImageUrl: "/images/bombs.png",
    imageName: "bombs.png",
    type: "upgrade"
  },
  {
    id: "charge_beam",
    name: "Charge Beam",
    location: "Charge Beam Room",
    room: "Charge Beam Room",
    region: "Brinstar",
    image: "/images/charge_beam.png",
    sourceImageUrl: "/images/charge_beam.png",
    imageName: "charge_beam.png",
    type: "upgrade"
  },
  {
    id: "spazer",
    name: "Spazer",
    location: "Spazer Beam Room",
    room: "Spazer Beam Room",
    region: "Brinstar",
    image: "/images/spazer.png",
    sourceImageUrl: "/images/spazer.png",
    imageName: "spazer.png",
    type: "upgrade"
  },
  {
    id: "varia_suit",
    name: "Varia Suit",
    location: "Varia Suit Room",
    room: "Varia Suit Room",
    region: "Brinstar",
    image: "/images/varia_suit.png",
    sourceImageUrl: "/images/varia_suit.png",
    imageName: "varia_suit.png",
    type: "upgrade"
  },
  {
    id: "hi_jump_boots",
    name: "Hi-Jump Boots",
    location: "Hi Jump Boots Room",
    room: "Hi Jump Boots Room",
    region: "Norfair",
    image: "/images/hi_jump_boots.png",
    sourceImageUrl: "/images/hi_jump_boots.png",
    imageName: "hi_jump_boots.png",
    type: "upgrade"
  },
  {
    id: "speed_booster",
    name: "Speed Booster",
    location: "Speed Booster Room",
    room: "Speed Booster Room",
    region: "Norfair",
    image: "/images/speed_booster.png",
    sourceImageUrl: "/images/speed_booster.png",
    imageName: "speed_booster.png",
    type: "upgrade"
  },
  {
    id: "wave_beam",
    name: "Wave Beam",
    location: "Wave Beam Room",
    room: "Wave Beam Room",
    region: "Norfair",
    image: "/images/wave_beam.png",
    sourceImageUrl: "/images/wave_beam.png",
    imageName: "wave_beam.png",
    type: "upgrade"
  },
  {
    id: "grappling_beam",
    name: "Grappling Beam",
    location: "Grappling Beam Room",
    room: "Grappling Beam Room",
    region: "Norfair",
    image: "/images/grappling_beam.png",
    sourceImageUrl: "/images/grappling_beam.png",
    imageName: "grappling_beam.png",
    type: "upgrade"
  },
  {
    id: "gravity_suit",
    name: "Gravity Suit",
    location: "Gravity Suit Room",
    room: "Gravity Suit Room",
    region: "Wrecked Ship",
    image: "/images/gravity_suit.png",
    sourceImageUrl: "/images/gravity_suit.png",
    imageName: "gravity_suit.png",
    type: "upgrade"
  },
  {
    id: "space_jump",
    name: "Space Jump",
    location: "Space Jump Room",
    room: "Space Jump Room",
    region: "Maridia",
    image: "/images/space_jump.png",
    sourceImageUrl: "/images/space_jump.png",
    imageName: "space_jump.png",
    type: "upgrade"
  },
  {
    id: "spring_ball",
    name: "Spring Ball",
    location: "Spring Ball Room",
    room: "Spring Ball Room",
    region: "Maridia",
    image: "/images/spring_ball.png",
    sourceImageUrl: "/images/spring_ball.png",
    imageName: "spring_ball.png",
    type: "upgrade"
  },
  {
    id: "plasma_beam",
    name: "Plasma Beam",
    location: "Plasma Beam Room",
    room: "Plasma Beam Room",
    region: "Maridia",
    image: "/images/plasma_beam.png",
    sourceImageUrl: "/images/plasma_beam.png",
    imageName: "plasma_beam.png",
    type: "upgrade"
  },
  {
    id: "ice_beam",
    name: "Ice Beam",
    location: "Ice Beam Room",
    room: "Ice Beam Room",
    region: "Norfair",
    image: "/images/ice_beam.png",
    sourceImageUrl: "/images/ice_beam.png",
    imageName: "ice_beam.png",
    type: "upgrade"
  },
  {
    id: "screw_attack",
    name: "Screw Attack",
    location: "Screw Attack Room",
    room: "Screw Attack Room",
    region: "Norfair",
    image: "/images/screw_attack.png",
    sourceImageUrl: "/images/screw_attack.png",
    imageName: "screw_attack.png",
    type: "upgrade"
  },
  {
    id: "x_ray_scope",
    name: "X-Ray Scope",
    location: "X-Ray Scope Room",
    room: "X-Ray Scope Room",
    region: "Brinstar",
    image: "/images/x_ray_scope.png",
    sourceImageUrl: "/images/x_ray_scope.png",
    imageName: "x_ray_scope.png",
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
    image: "/images/kraid.png",
    sourceImageUrl: "/images/kraid.png",
    imageName: "kraid.png",
    type: "boss"
  },
  {
    id: "phantoon",
    name: "Phantoon",
    location: "Wrecked Ship",
    room: "Phantoon's Room",
    region: "Wrecked Ship",
    image: "/images/phantoon.png",
    sourceImageUrl: "/images/phantoon.png",
    imageName: "phantoon.png",
    type: "boss"
  },
  {
    id: "draygon",
    name: "Draygon",
    location: "Maridia",
    room: "Draygon's Room",
    region: "Maridia",
    image: "/images/draygon.png",
    sourceImageUrl: "/images/draygon.png",
    imageName: "draygon.png",
    type: "boss"
  },
  {
    id: "ridley",
    name: "Ridley",
    location: "Lower Norfair",
    room: "Ridley's Room",
    region: "Norfair",
    image: "/images/ridley.png",
    sourceImageUrl: "/images/ridley.png",
    imageName: "ridley.png",
    type: "boss"
  },
  {
    id: "mother_brain",
    name: "Mother Brain",
    location: "Tourian",
    room: "Mother Brain's Room",
    region: "Tourian",
    image: "/images/mother_brain.png",
    sourceImageUrl: "/images/mother_brain.png",
    imageName: "mother_brain.png",
    type: "boss"
  }
];

// Route data based on the guide.html - EXACT sequence matching the HTML list
export const routeOrder: string[] = [
  // 1. Morphing Ball
  "morph_ball",
  // 2. Missile (Awakening)
  "m_brinstar_1", 
  // 3. Bombs
  "bombs",
  // 4. Energy Tank (Terminator)
  "et_crateria_1",
  // 5. Early Super Missile
  "sm_brinstar_2",
  // 6. Reserve Tank (In the hands of the Chozo)
    "rt_brinstar_1",
  // 7-8. Missile x2 (To the right of Early Supers)
  "m_brinstar_7",
  "m_brinstar_8",
  // 9. Missile (Below the bridge)
  "m_brinstar_3",
  // 10. Charge Beam
  "charge_beam",
  // 11. Spazer
  "spazer",
  // 12. Varia Suit
  "varia_suit",
  // 13. Kraid
  "kraid",
  // 14. Energy Tank (Kraid)
  "et_brinstar_1",
  // 15. Energy Tank (Hi-Jump Boots)
  "et_norfair_1",
  // 16. Hi-Jump Boots
  "hi_jump_boots",
  // 17. Missile (Hi-Jump Boots)
  "m_norfair_1",
  // 18. Missile (In center Cathedral lava pit)
  "m_norfair_10",
  // 19. Missile (Hidden in ceiling right before Speed Booster door)
  "m_norfair_3",
  // 20. Speed Booster
  "speed_booster",
  // 21. Missile (Wave Beam)
  "m_norfair_wave_beam",
  // 22. Wave Beam
  "wave_beam",
  // 23. Energy Tank (Crocomire)
  "et_norfair_2",
  // 24. Power Bomb (Red door directly left after Crocomire)
  "pb_norfair_1",
  // 25. Grappling Beam
  "grappling_beam",
  // 26. Missile (Grappling Beam)
  "m_norfair_grappling_beam",
  // 27. Missile (Lava tide)
  "m_norfair_7",
  // 28. Missile (Next to green gate) in Crocomire Escape
  "m_norfair_8",
  // 29. Missile (Hidden behind Power Bomb (Alpha))
  "m_brinstar_11",
  // 30. Power Bomb (Alpha), the any% pack
  "pb_brinstar_1",
  // 31. Power Bomb (Beta), Green door left of elevator
  "pb_brinstar_2",
  // 32. Missile (Moat)
  "m_crateria_2",
  // 33. Missile (Hidden to the left of the main Wrecked Ship shaft)
  "m_wrecked_ship_1",
  // 34. Super Missile (Wrecked Ship East), past the robots
  "sm_wrecked_ship_2",
  // 35. Super Missile (Wrecked Ship West)
  "sm_wrecked_ship_1",
  // 36. Phantoon
  "phantoon",
  // 37. Energy Tank (Statue above water, past all the spikes)
  "et_wrecked_ship_1",
  // 38. Missile (Right of attic)
  "m_wrecked_ship_2",
  // 39. Missile (Hidden in highest point of the mountain to the left)
  "m_crateria_4",
  // 40. Missile (Hidden in ground maze to the left)
  "m_crateria_5",
  // 41. Missile (Gravity Suit)
  "m_wrecked_ship_gravity_suit",
  // 42. Reserve Tank (Gravity Suit)
  "rt_wrecked_ship_1",
  // 43. Gravity Suit
  "gravity_suit",
  // 44. Missile (Bottom left of ocean)
  "m_crateria_6",
  // 45. Power Bomb (Crateria), top right of Landing Site
  "pb_crateria_1",
  // 46. Energy Tank (Gauntlet)
  "et_crateria_2",
  // 47-48. Missile x2 (Crumble shaft after Gauntlet)
  "m_crateria_7",
  "m_crateria_8",
  // 49. Energy Tank (Etecoon)
  "et_brinstar_2",
  // 50. Super Missile (Etecoon), green door to the left
  "sm_brinstar_3",
  // 51. Power Bomb (Etecoon)
  "pb_brinstar_4",
  // 52. Missile (Behind the Grapple blocks)
  "m_brinstar_4",
  // 53. Power Bomb (Hidden behind/below the above item's location)
  "pb_brinstar_5",
  // 54. Energy Tank (Behind blue gate behind Sidehoppers)
  "et_brinstar_4",
  // 55. Super Missile (Spore Spawn)
  "sm_brinstar_1",
  // 56. Missile (Charge Beam)
  "m_brinstar_5",
  // 57. Energy Tank (Behind/below Charge Beam's location)
  "et_brinstar_5",
  // 58. Missile (Green Hill pipe)
  "m_brinstar_6",
  // 59. Missile (Main Street)
  "m_maridia_1",
  // 60. Energy Tank (Mama Turtle)
  "et_maridia_2",
  // 61. Missile (Mama Turtle)
  "m_maridia_8",
  // 62. Super Missile (Main Street), "Crab Supers"
  "sm_maridia_1",
  // 63. Missile (Hidden in right side of Maridian beach)
  "m_maridia_4",
  // 64. Super Missile (Hidden in sand pit below a Choot)
  "sm_maridia_3",
  // 65. Missile (Same location as above)
  "m_maridia_5",
  // 66. Missile (Draygon)
  "m_maridia_draygon",
  // 67. Draygon
  "draygon",
  // 68. Space Jump
  "space_jump",
  // 69. Energy Tank (Botwoon)
  "et_maridia_1",
  // 70. Missile (East Sand Hole), drop down through the right sand pit
  "m_maridia_6",
  // 71. Power Bomb (East Sand Hole), same location as above
  "pb_maridia_1",
  // 72. Spring Ball
  "spring_ball",
  // 73. Plasma Beam
  "plasma_beam",
  // 74. Missile (Aqueduct), top right pipes of Aqueduct
  "m_maridia_2",
  // 75. Super Missile (Aqueduct), same location as above
  "sm_maridia_2",
  // 76. Reserve Tank (West Sand Hole)
  "rt_maridia_1",
  // 77. Missile (West Sand Hole), drop down through the left sand pit this time
  "m_maridia_7",
  // 78. Missile (Left over in Kraid's Lair, accessed with a Power Bomb)
  "m_brinstar_12",
  // 79. Ice Beam
  "ice_beam",
  // 80. Missile ("Lower route" after Ice Beam)
  "m_norfair_6",
  // 81. Missile (Golden Torizo) - watch out for that floor too
  "m_norfair_12",
  // 82. Super Missile (Golden Torizo)
  "sm_norfair_1",
  // 83. Screw Attack
  "screw_attack",
  // 84. Missile (Mickey Mouse)
  "m_norfair_13",
  // 85. Power Bomb of shame
  "pb_norfair_2",
  // 86. Ridley
  "ridley",
  // 87. Energy Tank (Ridley)
  "et_norfair_4",
  // 88. Energy Tank (Lower Norfair Fireflea Room)
  "et_norfair_3",
  // 89. Missile (In front of pipe maze)
  "m_norfair_14",
  // 90. Power Bomb (Below the door after pipe maze)
  "pb_norfair_3",
  // 91. Missile (Hidden left of "Three Muskateers")
  "m_norfair_15",
  // 92. Missile (Top left green door in Bubble Mountain)
  "m_norfair_4",
  // 93. Reserve Tank (Norfair)
  "rt_norfair_1",
  // 94. Missile (Hidden inside the sphere closest to the previous Reserve Tank)
  "m_norfair_5",
  // 95. Missile (Bubble Mountain), bottom right corner
  "m_norfair_2",
  // 96. X-Ray Scope
  "x_ray_scope",
  // 97. Power Bomb (Retro Brinstar, above Green Hill)
  "pb_brinstar_3",
  // 98. Energy Tank (Ceiling right past Construction Zone)
  "et_brinstar_3",
  // 99. Missile (To the right of the above location)
  "m_brinstar_2",
  // 100-101. Missile x2 (Above the above location, up the shaft)
  "m_brinstar_9",
  "m_brinstar_10",
  // 102. Missile (Below old Mother Brain tank)
  "m_crateria_3",
  // 103. Super Missile (Crateria), hidden right of climb
  "sm_crateria_1",
  // 104. Missile (Final), first left Parlor door after climb
  "m_crateria_1",
  // 105. Mother Brain
  "mother_brain"
];

export const allItems = [...energyTanks, ...superMissiles, ...powerBombs, ...reserveTanks, ...missiles, ...majorUpgrades, ...bosses];