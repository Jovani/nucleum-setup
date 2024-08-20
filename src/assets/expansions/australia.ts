import { Cities } from './australia.enum';
import { Expansion } from './card-sets.interface';

export const australia: Expansion = {
    name: 'Australia',
    key: 'aus',
    victoryPointTarget: 75,
    baseSetupCounts: {
        2: {
            silverContracts: 8,
            goldContracts: 12,
            actionTiles: 10
        },
        3: {
            silverContracts: 11,
            goldContracts: 14,
            actionTiles: 15
        },
        4: {
            silverContracts: 14,
            goldContracts: 18,
            actionTiles: 25
        },
    },
    cards: [
        {
            key: 'AUS1',
            publicBuilding: Cities.Brisbane,
            nucleumToken: Cities.Geelong,
            boats: {
                2: [1, 2, 3],
                3: [1, 2]
            },
            noBuildings: [
                Cities.GoldCoast,
                Cities.Sydney,
                Cities.Hobart,
                Cities.Adelaide
            ],
            noMines: {
                2: [
                    Cities.MountThorley,
                    Cities.Toongi,
                ],
                3: [
                    Cities.Wooltana
                ]
            }
        },
        {
            key: 'AUS2',
            publicBuilding: Cities.Brisbane,
            nucleumToken: Cities.Toowoomba,
            boats: {
                2: [1, 2, 3],
                3: [1, 3]
            },
            noBuildings: [
                Cities.Newcastle,
                Cities.PortPirie,
                Cities.Melbourne,
                Cities.Wollongong
            ],
            noMines: {
                2: [
                    Cities.MountThorley,
                    Cities.RadiumHill
                ],
                3: [
                    Cities.Wooltana
                ]
            }
        },
        {
            key: 'AUS3',
            publicBuilding: Cities.GoldCoast,
            nucleumToken: Cities.LucasHeights,
            boats: {
                2: [1, 2, 4],
                3: [1, 4]
            },
            noBuildings: [
                Cities.Melbourne,
                Cities.Melbourne,
                Cities.Geelong,
                Cities.Toowoomba
            ],
            noMines: {
                2: [
                    Cities.Adelaide,
                    Cities.BrokenHill,
                ],
                3: [
                    Cities.Wooltana
                ]
            }
        },
        {
            key: 'AUS4',
            publicBuilding: Cities.Sydney,
            nucleumToken: Cities.Mildura,
            boats: {
                2: [1, 2, 3],
                3: [1, 5]
            },
            noBuildings: [
                Cities.Adelaide,
                Cities.Brisbane,
                Cities.WaggaWagga,
                Cities.Launceston
            ],
            noMines: {
                2: [
                    Cities.RadiumHill,
                ],
                3: [
                    Cities.Wooltana
                ]
            }
        },
        {
            key: 'AUS5',
            publicBuilding: Cities.Sydney,
            nucleumToken: Cities.Geelong,
            boats: {
                2: [2, 3, 4],
                3: [4, 5]
            },
            noBuildings: [
                Cities.GoldCoast,
                Cities.Geelong,
                Cities.Newcastle,
                Cities.Brisbane
            ],
            noMines: {
                2: [
                    Cities.OlympicDam,
                    Cities.MountThorley,
                    Cities.BrokenHill,
                ],
                3: []
            }
        },
        {
            key: 'AUS6',
            publicBuilding: Cities.Wollongong,
            nucleumToken: Cities.Toowoomba,
            boats: {
                2: [2, 3, 4],
                3: [2, 4]
            },
            noBuildings: [
                Cities.Hobart,
                Cities.Sydney,
                Cities.Sydney,
                Cities.Adelaide
            ],
            noMines: {
                2: [
                    Cities.OlympicDam,
                    Cities.Latrobe,
                ],
                3: [
                    Cities.Wooltana
                ]
            }
        },
        {
            key: 'AUS7',
            publicBuilding: Cities.Melbourne,
            nucleumToken: Cities.LucasHeights,
            boats: {
                2: [1, 2, 4],
                3: [2, 5]
            },
            noBuildings: [
                Cities.Sydney,
                Cities.Brisbane,
                Cities.PortPirie,
                Cities.WaggaWagga
            ],
            noMines: {
                2: [
                    Cities.Adelaide,
                    Cities.Toongi,
                    Cities.OlympicDam,
                ],
                3: []
            }
        },
        {
            key: 'AUS8',
            publicBuilding: Cities.Melbourne,
            nucleumToken: Cities.Mildura,
            boats: {
                2: [1, 3, 4],
                3: [1, 3]
            },
            noBuildings: [
                Cities.Adelaide,
                Cities.Brisbane,
                Cities.Hobart,
                Cities.Toowoomba
            ],
            noMines: {
                2: [
                    Cities.Latrobe,
                    Cities.Toongi,
                    Cities.OlympicDam,
                ],
                3: []
            }
        },
        {
            key: 'AUS9',
            publicBuilding: Cities.Adelaide,
            nucleumToken: Cities.Mildura,
            boats: {
                2: [1, 2, 4],
                3: [4, 5]
            },
            noBuildings: [
                Cities.GoldCoast,
                Cities.Wollongong,
                Cities.Launceston,
                Cities.Toowoomba
            ],
            noMines: {
                2: [
                    Cities.BrokenHill,
                    Cities.Toongi,
                ],
                3: []
            }
        },
        {
            key: 'AUS10',
            publicBuilding: Cities.WaggaWagga,
            nucleumToken: Cities.Toowoomba,
            boats: {
                2: [1, 2, 4],
                3: [1, 5]
            },
            noBuildings: [
                Cities.PortPirie,
                Cities.Sydney,
                Cities.Newcastle,
                Cities.Adelaide
            ],
            noMines: {
                2: [
                    Cities.RadiumHill,
                    Cities.Toongi,
                    Cities.Latrobe
                ],
                3: []
            }
        },
        {
            key: 'AUS11',
            publicBuilding: Cities.PortPirie,
            nucleumToken: Cities.LucasHeights,
            boats: {
                2: [1, 3, 4],
                3: [3, 4]
            },
            noBuildings: [
                Cities.Latrobe,
                Cities.Sydney,
                Cities.Brisbane,
                Cities.Brisbane
            ],
            noMines: {
                2: [
                    Cities.MountThorley,
                    Cities.MountThorley,
                    Cities.RadiumHill
                ],
                3: []
            }
        },
        {
            key: 'AUS12',
            publicBuilding: Cities.Newcastle,
            nucleumToken: Cities.Mildura,
            boats: {
                2: [2, 3, 4],
                3: [2, 3]
            },
            noBuildings: [
                Cities.Latrobe,
                Cities.Geelong,
                Cities.Wollongong,
                Cities.WaggaWagga
            ],
            noMines: {
            2: [
                Cities.RadiumHill,
                Cities.ToongiCoal
            ],
            3: [
                Cities.Wooltana
            ]}
        },
        {
            key: 'AUS13',
            publicBuilding: '',
            nucleumToken: Cities.Geelong,
            boats: {
                2: [2, 3, 4],
                3: [3, 5]
            },
            noBuildings: [
                Cities.GoldCoast,
                Cities.Melbourne,
                Cities.Hobart,
                Cities.Newcastle
            ],
            noMines: {
                2: [
                    Cities.RadiumHill,
                    Cities.ToongiCoal,
                    Cities.OlympicDam
                ],
                3: []
            }
        }
    ]
}