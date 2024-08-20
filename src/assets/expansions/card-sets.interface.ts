export interface Card {
    key: string;
    publicBuilding: string;
    nucleumToken: string;
    boats: {
        2: number[],
        3: number[],
    };
    noBuildings: string[];
    noMines: {
        2: string[],
        3: string[],
    };
}

export interface BaseSetupCounts {
    silverContracts: number;
    goldContracts: number;
    actionTiles: number
}

interface BaseSetupCountsMap {
    [key: number]: BaseSetupCounts
}

export interface Expansion {
    name: string,
    key: string,
    victoryPointTarget: number;
    baseSetupCounts: BaseSetupCountsMap;
    cards: Card[]
}