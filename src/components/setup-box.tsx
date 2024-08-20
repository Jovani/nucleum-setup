import { Box, Grid, GridItem, Text, Highlight } from "@chakra-ui/react";
import { BaseSetup } from "./base-setup";
import { CardSetup } from "./card-setup";
import { useEffect, useState } from "react";
import { expansions } from "../assets/expansions";
import { Expansion, Card as NucleumCard } from "../assets/expansions/card-sets.interface";

interface SetupBoxProps {
    selectedPlayerCount: number;
    selectedExpansion: string;
}

export const SetupBox = ({ selectedPlayerCount, selectedExpansion }: SetupBoxProps) => {
    const [expansion, setExpansion] = useState<Expansion>();
    const [cards, setCards] = useState<NucleumCard[]>([]);

    useEffect(() => {
        const expansion = expansions.find((cardSet) => cardSet.key === selectedExpansion);

        if (!expansion) {
            return;
        }

        setExpansion(expansion);
    }, [selectedExpansion, selectedPlayerCount])

    useEffect(() => {
        if (!expansion) {
            return;
        }

        setCards(expansion.cards
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            .slice(0, 4));
    }, [expansion])

    if (selectedPlayerCount === 0 || selectedExpansion === '' || !expansion || cards.length === 0) {
        return null;
    }

    return (
        <>
            <Box py={5}>
                <Text>
                    <Highlight query={['2', '3', '4']} styles={{ fontWeight: 800 }}>
                        {`Showing setup for ${selectedPlayerCount} players:`}
                    </Highlight>
                </Text>
                <Text pt='2'>Selected Setup Cards:</Text>
                <Text fontSize='sm' color='red'>
                    {cards.map(card => card.key).join(', ')}
                </Text>
            </Box>
            <Box>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} flex='1'>
                    <GridItem>
                        <CardSetup selectedPlayerCount={selectedPlayerCount} cards={cards} />
                    </GridItem>

                    <GridItem>
                        <BaseSetup selectedPlayerCount={selectedPlayerCount} expansion={expansion} />
                    </GridItem>
                </Grid>
            </Box>
        </>
    );
}