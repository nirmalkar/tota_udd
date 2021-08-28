export const game = [
  {
    name: "parrot",
    can_fly: true,
    image_url: new URL(`../../assets/gameImage/parrot.png`, import.meta.url).href,
  },
  {
    name: "bus",
    can_fly: false,
    image_url: new URL(`../../assets/gameImage/bus.png`, import.meta.url).href,
  },
  {
    name: "car",
    can_fly: false,
    image_url: new URL(`../../assets/gameImage/car.png`, import.meta.url).href,
  },
  {
    name: "aircraft",
    can_fly: true,
    image_url: new URL(`../../assets/gameImage/aircraft.png`, import.meta.url).href,
  },
  {
    name: "ghost",
    can_fly: true,
    image_url: new URL(`../../assets/gameImage/ghost.png`, import.meta.url).href,
  },
];
