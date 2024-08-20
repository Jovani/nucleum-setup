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
            key: 'AUS10',
            publicBuilding: 'Wagga Wagga',
            nucleumToken: 'Toowoomba',
            boats: {
                2: [1, 2, 4],
                3: [1, 5]
            },
            noBuildings: [
                'Port Pirie',
                'Sydney',
                'Newcastle',
                'Adelaide',
            ],
            noMines: {
                2: [
                    'Radium Hill',
                    'Tonngi',
                    'Latrobe',
                ],
                3: []
            }
        },
        {
            key: 'AUS11',
            publicBuilding: 'Port Pirie',
            nucleumToken: 'Lucas Heights',
            boats: {
                2: [1, 3, 4],
                3: [3, 4]
            },
            noBuildings: [
                'Latrobe',
                'Sydney',
                'Brisbane',
                'Brisbane',
            ],
            noMines: {
                2: [
                    'Mount Thorley',
                    'Mount Thorley',
                    'Radium Hill'
                ],
                3: []
            }
        },
        {
            key: 'AUS12',
            publicBuilding: 'Newcastle',
            nucleumToken: 'Mildura',
            boats: {
                2: [2, 3, 4],
                3: [2, 3]
            },
            noBuildings: [
                'Latrobe',
                'Geolong',
                'Wollongong',
                'Wagga Wagga',
            ],
            noMines: {
            2: [
                'Radium Hill',
                'Toongi (Coal)',
            ],
            3: [
                'Wooltana'
            ]}
        },
        {
            key: 'AUS13',
            publicBuilding: '',
            nucleumToken: 'Geelong',
            boats: {
                2: [2, 3, 4],
                3: [3, 5]
            },
            noBuildings: [
                'Gold Coast',
                'Melbourne',
                'Hobart',
                'Newcastle',
            ],
            noMines: {
                2: [
                    'Radium Hill',
                    'Toongi (Coal)',
                    'Olympic Dam'
                ],
                3: []
            }
        }
    ]
}