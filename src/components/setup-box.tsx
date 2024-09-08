import { Box, Grid, GridItem, Text, Highlight, Button } from '@chakra-ui/react';
import { BaseSetup } from './base-setup';
import { CardSetup } from './card-setup';
import { useEffect, useState } from 'react';
import { expansions } from '../assets/expansions';
import {
  Expansion,
  Card as NucleumCard,
} from '../assets/expansions/card-sets.interface';

interface SetupBoxProps {
  selectedPlayerCount: number;
  selectedAutomasCount: number;
  selectedExpansion: string;
  resetGame: () => void;
}

const SetupInfo = ({
  selectedPlayerCount,
  cards,
}: {
  selectedPlayerCount: number;
  cards: NucleumCard[];
}) => (
  <Box py={5}>
    <Text>
      <Highlight query={['1', '2', '3', '4']} styles={{ fontWeight: 800 }}>
        {`Showing setup for ${selectedPlayerCount} players.`}
      </Highlight>
    </Text>
    <Text pt="2">Selected Setup Cards:</Text>
    <Text fontSize="sm" color="red">
      {cards.map((card) => card.key).join(', ')}
    </Text>
  </Box>
);

export const SetupBox = ({
  selectedPlayerCount,
  selectedAutomasCount,
  selectedExpansion,
  resetGame,
}: SetupBoxProps) => {
  const [expansion, setExpansion] = useState<Expansion>();
  const [cards, setCards] = useState<NucleumCard[]>([]);

  useEffect(() => {
    const foundExpansion = expansions.find(
      (cardSet) => cardSet.key === selectedExpansion,
    );

    if (foundExpansion) {
      setExpansion(foundExpansion);
    }
  }, [selectedExpansion]);

  useEffect(() => {
    if (expansion) {
      const numberOfCards =
        selectedPlayerCount === 1 ? (selectedAutomasCount === 1 ? 6 : 7) : 4;
      setCards(
        expansion.cards
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
          .slice(0, numberOfCards),
      );
    }
  }, [expansion, selectedAutomasCount, selectedPlayerCount]);

  if (
    selectedPlayerCount === 0 ||
    selectedExpansion === '' ||
    !expansion ||
    cards.length === 0
  ) {
    return null;
  }

  return (
    <>
      <Box>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
          flex="1"
        >
          <GridItem pt={2}>
            <CardSetup
              selectedPlayerCount={selectedPlayerCount}
              selectedAutomasCount={selectedAutomasCount}
              cards={cards}
              showBoatSetup={expansion.key === 'aus'}
            />
          </GridItem>

          <GridItem pt={2}>
            <BaseSetup
              selectedPlayerCount={selectedPlayerCount}
              expansion={expansion}
            />
          </GridItem>
        </Grid>
      </Box>
      <SetupInfo selectedPlayerCount={selectedPlayerCount} cards={cards} />
      <Box py={10}>
        <Button size="lg" colorScheme="red" onClick={resetGame}>
          New Game
        </Button>
      </Box>
    </>
  );
};
