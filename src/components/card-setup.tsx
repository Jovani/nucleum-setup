import {
  Card,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Text,
  Image,
  Flex,
} from '@chakra-ui/react';
import { Card as NucleumCard } from '../assets/expansions/card-sets.interface';
import { useEffect, useState } from 'react';
import { City } from '../assets/expansions/base-game.enum';
import CityDisplay from './CityDisplay';

interface CardSetupProps {
  selectedPlayerCount: number;
  selectedAutomasCount: number;
  cards: NucleumCard[];
  showBoatSetup: boolean;
}

const InfoBox = ({
  src,
  alt,
  boxSize,
  children,
}: {
  src: string;
  alt: string;
  boxSize: string;
  children: React.ReactNode;
}) => (
  <Box display="flex" alignItems="center">
    <Image boxSize={boxSize} src={src} alt={alt} />
    <Box ml={4}>{children}</Box>
  </Box>
);

const AutomaBox = ({
  number,
  card,
  playerCount,
}: {
  number: number;
  card: NucleumCard;
  playerCount: number;
}) => (
  <Box display="flex" alignItems="center" ml={number > 1 ? 3 : 0}>
    <Box
      width="50px"
      height="50px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="green.400"
      position="relative"
      mr={2}
    >
      <Image
        src="images/cinema_movie_film_automatic_robot_icon_209542.webp"
        boxSize="40px"
      />
      <Text
        position="absolute"
        bottom="2px"
        right="2px"
        fontSize="xs"
        color="white"
        fontWeight={800}
      >
        {number}
      </Text>
    </Box>
    <Box>
      <Text pt="2" fontSize="sm">
        <CityDisplay city={card.publicBuilding} playerCount={playerCount} />
      </Text>
    </Box>
  </Box>
);

export const CardSetup = ({
  selectedPlayerCount,
  selectedAutomasCount,
  cards,
  showBoatSetup,
}: CardSetupProps) => {
  const [noBuildingsCities, setNoBuildingsCities] = useState<City[]>([]);
  const [noMinesCities, setNoMinesCities] = useState<City[]>([]);
  const [boatSpaces, setBoatSpaces] = useState<number[]>([]);

  const playerCount =
    selectedPlayerCount +
    (selectedPlayerCount === 1 ? selectedAutomasCount : 0);

  useEffect(() => {
    if (cards.length === 0) return;

    const { noBuildings, noMines, boats } = cards[0];

    setNoBuildingsCities(
      playerCount <= 2
        ? noBuildings[2]
        : [...noBuildings[2], ...(noBuildings[3] || [])],
    );
    setNoMinesCities(
      playerCount <= 2 ? noMines[2] : [...noMines[2], ...(noMines[3] || [])],
    );
    if (boats) {
      setBoatSpaces(playerCount <= 2 ? boats[2] : boats[3]);
    }
  }, [playerCount, cards]);

  if (cards.length === 0) return null;

  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} align={'center'}>
          <InfoBox
            src="images/qmark.png"
            alt="Neutral Urban Buildings"
            boxSize="40px"
          >
            {cards
              .slice(0,4)
              .sort((a, b) =>
                a.publicBuilding && b.publicBuilding
                  ? a.publicBuilding.name.localeCompare(b.publicBuilding.name)
                  : 0,
              )
              .filter((card, index) => {
                const isLastCard = index === cards.length - 1;
                return (
                  (playerCount !== 1 || !isLastCard) &&
                  ((playerCount <= 2 && card.publicBuilding) ||
                    (playerCount > 2 &&
                      (card.publicBuilding3Plus || card.publicBuilding)))
                );
              })
              .map((card) => (
                <Box key={card.key}>
                  <Text fontSize="sm">
                    <CityDisplay
                      city={
                        playerCount >= 3 && card.publicBuilding3Plus
                          ? card.publicBuilding3Plus
                          : card.publicBuilding
                      }
                      playerCount={playerCount}
                    />
                  </Text>
                </Box>
              ))}
          </InfoBox>

          <InfoBox
            src="images/nucleumrad.jpeg"
            alt="Neutral Urban Buildings"
            boxSize="50px"
          >
            <Text pt="2" fontSize="sm">
              <CityDisplay
                city={cards[0].nucleumToken}
                playerCount={playerCount}
              />
            </Text>
          </InfoBox>

          {playerCount !== 4 && (
            <InfoBox
              src="images/warning2.jpg"
              alt="Neutral Urban Buildings"
              boxSize="60px"
            >
              {noBuildingsCities
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((city, index) => (
                  <CityDisplay
                    key={index}
                    city={city}
                    playerCount={playerCount}
                  />
                ))}
            </InfoBox>
          )}
          {playerCount !== 4 && (
            <InfoBox src="images/warning shape.png" alt="mines" boxSize="50px">
              {noMinesCities
                .slice()
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((city, index) => (
                  <CityDisplay
                    key={index}
                    city={city}
                    playerCount={playerCount}
                  />
                ))}
            </InfoBox>
          )}

          {showBoatSetup && (
            <InfoBox src="images/ship.png" alt="mines" boxSize="40px">
              <Flex>
                {boatSpaces.map((space, index) => (
                  <Box
                    key={index}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="24px"
                    height="24px"
                    borderRadius="50%"
                    border="1px solid blue"
                    margin="0 4px"
                    backgroundColor="lightblue"
                  >
                    <Text fontSize="sm">{space}</Text>
                  </Box>
                ))}
              </Flex>
            </InfoBox>
          )}

          {playerCount === 1 && (
            <Box display="flex" alignItems="center">
              {cards
                .slice(-3) // Get the last three cards
                .filter((card) => card.publicBuilding) // Filter out cards without a value for city
                .slice(0, selectedAutomasCount) // Take the first selectedAutomasCount cards from the filtered list
                .map((card, index) => (
                  <AutomaBox
                    key={index}
                    number={index + 1}
                    card={card}
                    playerCount={playerCount}
                  />
                ))}
            </Box>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
