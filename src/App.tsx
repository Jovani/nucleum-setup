import { useState } from 'react';
import './App.css';
import { Box, ButtonGroup, Heading, Image } from '@chakra-ui/react';
import { ExpansionButton, PlayerCountButton, SetupBox } from './components';
import { expansions } from './assets/expansions';

const PlayerCountButtons = ({
  selectedPlayerCount,
  setPlayerCount,
  options,
}: {
  selectedPlayerCount: number;
  setPlayerCount: React.Dispatch<React.SetStateAction<number>>;
  options: number[];
}) => (
  <ButtonGroup ml={2}>
    {options.map((option) => (
      <PlayerCountButton
        key={option}
        selectedPlayerCount={selectedPlayerCount}
        playerCountOption={option}
        setPlayerCount={setPlayerCount}
      />
    ))}
  </ButtonGroup>
);

function App() {
  const [playerCount, setPlayerCount] = useState(2);
  const [automasCount, setAutomasCount] = useState(1);
  const [expansion, setExpansion] = useState('');

  const resetGame = () => {
    setPlayerCount(2);
    setAutomasCount(1);
    setExpansion('');
  };

  return (
    <>
      <Box>
        <Heading>Nucleum Setup</Heading>
      </Box>

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        py={5}
        flexDirection="row"
      >
        <Image
          boxSize="40px"
          src="images/meeples.png"
          alt="Player Count & Expansion Options"
          filter="invert(50%) sepia(100%) saturate(500%) hue-rotate(90deg) brightness(50%)"
        />
        <PlayerCountButtons
          selectedPlayerCount={playerCount}
          setPlayerCount={setPlayerCount}
          options={[1, 2, 3, 4]}
        />
      </Box>

      {playerCount === 1 && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
          py={0}
        >
          <Image
            boxSize="40px"
            src="images/cinema_movie_film_automatic_robot_icon_209542.webp"
            alt="Player Count & Expansion Options"
          />
          <PlayerCountButtons
            selectedPlayerCount={automasCount}
            setPlayerCount={setAutomasCount}
            options={[1, 2]}
          />
        </Box>
      )}

      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        width="100%"
        py={5}
        mb={2}
      >
        <ButtonGroup>
          {expansions.map(({ name, key }) => (
            <ExpansionButton
              key={key}
              selectedExpansion={expansion}
              expansionOptionKey={key}
              expansionOptionName={name}
              setExpansion={setExpansion}
            />
          ))}
        </ButtonGroup>
      </Box>

      <SetupBox
        selectedPlayerCount={playerCount}
        selectedAutomasCount={automasCount}
        selectedExpansion={expansion}
        resetGame={resetGame}
      />
    </>
  );
}

export default App;
