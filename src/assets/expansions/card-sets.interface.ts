import { City } from './base-game.enum';

export interface Card {
  key: string;
  publicBuilding?: City;
  publicBuilding3Plus?: City;
  nucleumToken: City;
  boats?: {
    2: number[];
    3: number[];
  };
  noBuildings: {
    2: City[];
    3?: City[];
  };
  noMines: {
    2: City[];
    3?: City[];
  };
}

export interface BaseSetupCounts {
  silverContracts: number;
  goldContracts: number;
  actionTiles: number;
}

interface BaseSetupCountsMap {
  [key: number]: BaseSetupCounts;
}

export interface Expansion {
  name: string;
  key: string;
  victoryPointTarget: number;
  baseSetupCounts: BaseSetupCountsMap;
  cards: Card[];
}
