import { Button } from "@chakra-ui/react";

interface PlayerCountButtonProps {
    selectedPlayerCount: number;
    playerCountOption: number;
    setPlayerCount: React.Dispatch<React.SetStateAction<number>>;
}

export const PlayerCountButton = ({
    selectedPlayerCount,
    playerCountOption,
    setPlayerCount
}: PlayerCountButtonProps) => {
    return (
        <Button
            size={'lg'}
            colorScheme='orange'
            variant={selectedPlayerCount === playerCountOption ? 'solid' : 'outline'} 
            onClick={() => setPlayerCount(playerCountOption)}
        >
            {playerCountOption}
        </Button>
    );
};
