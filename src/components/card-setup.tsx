import { Card, CardBody, Stack, StackDivider, Box, Heading, Text } from "@chakra-ui/react";
import { Card as NucleumCard } from "../assets/expansions/card-sets.interface";
import { useEffect, useState } from "react";

interface CardSetupProps {
    selectedPlayerCount: number;
    cards: NucleumCard[];
    showBoatSetup: boolean;
}

export const CardSetup = ({ selectedPlayerCount, cards, showBoatSetup }: CardSetupProps) => {

    const [noBuildingsCities, setNoBuildingsCities] = useState<string[]>([]);
    const [noMinesCities, setNoMinesCities] = useState<string[]>([]);
    const [boatSpaces, setBoatSpaces] = useState<number[]>([]);

    useEffect(() => {
        if (cards.length === 0) {
            return;
        }

        const firstCardBuildings = cards[0].noBuildings;
        const firstCardMines = cards[0].noMines;
        const firstCardBoatSpaces = cards[0].boats;

        setNoBuildingsCities(
            selectedPlayerCount === 2
                ? firstCardBuildings[2]
                : [...firstCardBuildings[2], ...(firstCardBuildings[3] || [])]
        )
        setNoMinesCities(
            selectedPlayerCount === 2
                ? firstCardMines[2]
                : [...firstCardMines[2], ...(firstCardMines[3] || [])]
        )
        if (firstCardBoatSpaces) {
            setBoatSpaces(
                selectedPlayerCount === 2
                    ? firstCardBoatSpaces[2]
                    : firstCardBoatSpaces[3]
            )
        }

    }, [selectedPlayerCount, cards])

    if (cards.length === 0) {
        return null;
    }

    return (
        <Card>
            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                    <Box>
                        <Heading size='md'>
                            Starting Nucleum Token
                        </Heading>
                        <Text pt='2' fontSize='sm'>
                            {cards[0].nucleumToken}
                        </Text>
                    </Box>

                    <Box>
                        <Heading size='md'>
                            Neutral Urban Buildings
                        </Heading>
                        {cards.filter(
                            card => {
                                if (selectedPlayerCount === 2 && card.publicBuilding) {
                                    return true;
                                } else if (selectedPlayerCount > 2 && (card.publicBuilding3Plus || card.publicBuilding)) {
                                    return true;
                                }
                                return false;
                            }
                        ).map(card => (
                            <Box key={card.key}>
                                <Text pt='2' fontSize='sm'>
                                    {
                                        card.publicBuilding3Plus && selectedPlayerCount >= 3
                                            ? card.publicBuilding3Plus
                                            : card.publicBuilding
                                    }
                                </Text>
                            </Box>
                        ))}
                    </Box>

                    <Box>
                        <Heading size='md'>
                            Urban Rubble Tiles
                        </Heading>
                        {noBuildingsCities.map((city, index) => (
                            <Box key={index}>
                                <Text pt='2' fontSize='sm'>
                                    {city}
                                </Text>
                            </Box>
                        ))}
                    </Box>

                    <Box>
                        <Heading size='md'>
                            Mining Rubble Tiles
                        </Heading>
                        {noMinesCities.map((city, index) => (
                            <Box key={index}>
                                <Text pt='2' fontSize='sm'>
                                    {city}
                                </Text>
                            </Box>
                        ))}
                    </Box>

                    {showBoatSetup && (
                        <Box>
                            <Heading size='md'>
                                Neutral Boat Spaces
                            </Heading>
                            {boatSpaces.map((space, index) => (
                                <Box key={index}>
                                    <Text pt='2' fontSize='sm'>
                                        {space}
                                    </Text>
                                </Box>
                            ))}
                        </Box>
                    )}
                </Stack>

            </CardBody>
        </Card>
    );
}