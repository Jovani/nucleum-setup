import { Cities } from './base-game.enum';
import { Expansion } from './card-sets.interface';

export const baseGame: Expansion = {
    name: 'Base Game',
    key: 'base',
    victoryPointTarget: 70,
    baseSetupCounts: {
        2: {
            silverContracts: 6,
            goldContracts: 10,
            actionTiles: 10
        },
        3: {
            silverContracts: 9,
            goldContracts: 12,
            actionTiles: 15
        },
        4: {
            silverContracts: 12,
            goldContracts: 16,
            actionTiles: 25
        },
    },
    cards: [
        {
            key: 'S1',
            publicBuilding: Cities.Leipzig,
            nucleumToken: Cities.Grimma,
            noBuildings: {
                2: [
                    Cities.Grimma,
                    Cities.Dresden,
                    Cities.Praha,
                    Cities.Praha
                ],
                3: [
                    Cities.Gorlitz,
                ]
            },
            noMines: {
                2: [
                    Cities.Presnitz,
                    Cities.Joachimsthal,
                ],
                3: [
                    Cities.Karlsbad,
                ]
            }
        },
        {
            key: 'S2',
            publicBuilding: Cities.Leipzig,
            nucleumToken: Cities.Zittau,
            noBuildings: {
                2: [
                    Cities.Marienberg,
                    Cities.Bautzen,
                    Cities.Leipzig,
                    Cities.Praha,
                ]
            },
            noMines: {
                2: [
                    Cities.Aussig,
                    Cities.Joachimsthal,
                    Cities.Brux,
                ]
            }
        },
        {
            key: 'S3',
            publicBuilding: Cities.Grimma,
            nucleumToken: Cities.Zittau,
            noBuildings: {
                2: [
                    Cities.Dresden,
                    Cities.Dresden,
                    Cities.Leipzig,
                    Cities.Leipzig,
                    Cities.Zwickau,
                ]
            },
            noMines: {
                2: [
                    Cities.Presnitz,
                    Cities.Aussig,
                ]
            }
        },
        {
            key: 'S4',
            publicBuilding: Cities.Chemnitz,
            nucleumToken: Cities.Glashutte,
            noBuildings: {
                2: [
                    Cities.Grimma,
                    Cities.Riesa,
                    Cities.Plauen,
                    Cities.Freiberg,
                ],
                3: [
                    Cities.Gorlitz,
                ]
            },
            noMines: {
                2: [
                    Cities.Brux,
                    Cities.Presnitz,
                ]
            }
        },
        {
            key: 'S5',
            publicBuilding: Cities.Freiberg,
            nucleumToken: Cities.Zittau,
            noBuildings: {
                2: [
                    Cities.Riesa,
                    Cities.Freiberg,
                    Cities.Chemnitz,
                ],
                3: [
                    Cities.Chemnitz,
                    Cities.Karlsbad,
                ]
            },
            noMines: {
                2: [
                    Cities.Brux,
                    Cities.Aussig,
                ]
            }
        },
        {
            key: 'S6',
            publicBuilding: Cities.Dresden,
            nucleumToken: Cities.Plauen,
            noBuildings: {
                2: [
                    Cities.Marienberg,
                    Cities.Bautzen,
                    Cities.Grimma,
                    Cities.Riesa,
                    Cities.Zwickau,
                ],
                3: [
                    Cities.Gorlitz,
                ]
            },
            noMines: {
                2: [
                    Cities.Chemnitz,
                    Cities.Joachimsthal,
                ],
                3: [
                    Cities.Karlsbad,
                ]
            }
        },
        {
            key: 'S7',
            publicBuilding: Cities.Bautzen,
            nucleumToken: Cities.Plauen,
            noBuildings: {
                2: [
                    Cities.Dresden,
                    Cities.Grimma,
                ],
                3: [
                    Cities.Karlsbad,
                    Cities.Gorlitz,
                    Cities.Chemnitz,
                ]
            },
            noMines: {
                2: [
                    Cities.Aussig,
                    Cities.Presnitz,
                ],
                3: [
                    Cities.Brux,
                ]
            }
        },
        {
            key: 'S8',
            publicBuilding: Cities.Dresden,
            nucleumToken: Cities.Glashutte,
            noBuildings: {
                2: [
                    Cities.Marienberg,
                    Cities.Praha,
                    Cities.Praha,
                    Cities.Leipzig,
                    Cities.Leipzig,
                ]
            },
            noMines: {
                2: [
                    Cities.Brux,
                    Cities.Joachimsthal,
                ],
                3: [
                    Cities.Karlsbad,
                ]
            }
        },
        {
            key: 'S9',
            publicBuilding: Cities.Marienberg,
            nucleumToken: Cities.Grimma,
            noBuildings: {
                2: [
                    Cities.Bautzen,
                    Cities.Plauen,
                    Cities.Praha,
                    Cities.Freiberg,
                ],
                3: [
                    Cities.Gorlitz,
                ]
            },
            noMines: {
                2: [
                    Cities.Aussig,
                    Cities.Joachimsthal,
                ],
                3: [
                    Cities.Karlsbad,
                ]
            }
        },
        {
            key: 'S10',
            publicBuilding: Cities.Zwickau,
            nucleumToken: Cities.Plauen,
            noBuildings: {
                2: [
                    Cities.Leipzig,
                    Cities.Riesa,
                    Cities.Praha,
                    Cities.Zwickau,
                    Cities.Grimma,
                ]
            },
            noMines: {
                2: [
                    Cities.Aussig,
                    Cities.Joachimsthal,
                    Cities.Presnitz,
                ]
            }
        },
        {
            key: 'S11',
            publicBuilding3Plus: Cities.Karlsbad,
            nucleumToken: Cities.Zittau,
            noBuildings: {
                2: [
                    Cities.Leipzig,
                    Cities.Leipzig,
                    Cities.Dresden,
                    Cities.Dresden,
                    Cities.Marienberg,
                ]
            },
            noMines: {
                2: [
                    Cities.Aussig,
                    Cities.Presnitz,
                    Cities.Brux,
                ]
            }
        },
        {
            key: 'S12',
            publicBuilding: Cities.Praha,
            nucleumToken: Cities.Glashutte,
            noBuildings: {
                2: [
                    Cities.Marienberg,
                    Cities.Chemnitz,
                    Cities.Bautzen,
                    Cities.Riesa,
                ],
                3: [
                    Cities.Karlsbad,
                ]
            },
            noMines: {
                2: [
                    Cities.Aussig,
                    Cities.Presnitz,
                    Cities.Joachimsthal,
                ]
            }
        },
        {
            key: 'S13',
            nucleumToken: Cities.Grimma,
            noBuildings: {
                2: [
                    Cities.Dresden,
                    Cities.Plauen,
                    Cities.Chemnitz,
                    Cities.Freiberg,
                    Cities.Grimma,
                ]
            },
            noMines: {
                2: [
                    Cities.Aussig,
                    Cities.Presnitz,
                ]
            }
        }
    ]
}