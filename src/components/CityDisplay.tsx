import { Box, Text } from '@chakra-ui/react';
import { City } from '../assets/expansions/base-game.enum';

interface CityDisplayProps {
  city: City | undefined;
  playerCount: number;
}

const CityDisplay: React.FC<CityDisplayProps> = ({ city, playerCount }) => {
  const numberId = city?.numberIds[playerCount - 1]; // Assuming playerCount is 1-based

  return (
    <Box>
      <Text fontSize="sm">
        {city?.name} ({numberId})
      </Text>
    </Box>
  );
};

export default CityDisplay;
