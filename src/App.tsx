import { useState } from 'react'
import './App.css'
import { Box, ButtonGroup, Heading } from '@chakra-ui/react'
import { ExpansionButton, PlayerCountButton, SetupBox } from './components'
import { expansions } from './assets/expansions'

function App() {
    const [playerCount, setPlayerCount] = useState(0)
    const [expansion, setExpansion] = useState('')

    const resetGame = () => {
        setPlayerCount(0);
        setExpansion('');
    }

    return (
        <>
            <Box>
                <Heading>Nucleum Setup</Heading>
            </Box>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='100%'
                py={5}
            >
                Set Player Count & Expansion Options
            </Box>

            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='100%'
                py={0}
            >
                <ButtonGroup>
                    <PlayerCountButton selectedPlayerCount={playerCount} playerCountOption={2} setPlayerCount={setPlayerCount} />
                    <PlayerCountButton selectedPlayerCount={playerCount} playerCountOption={3} setPlayerCount={setPlayerCount} />
                    <PlayerCountButton selectedPlayerCount={playerCount} playerCountOption={4} setPlayerCount={setPlayerCount} />
                </ButtonGroup>
            </Box>

            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='100%'
                py={5}
                mb={2}
            >
                <ButtonGroup>
                    {expansions.map(({ name, key }) => <ExpansionButton
                        key={key}
                        selectedExpansion={expansion}
                        expansionOptionKey={key}
                        expansionOptionName={name}
                        setExpansion={setExpansion}
                    />)}
                </ButtonGroup>
            </Box>

            <SetupBox selectedPlayerCount={playerCount} selectedExpansion={expansion} resetGame={resetGame} />
        </>
    )
}

export default App
