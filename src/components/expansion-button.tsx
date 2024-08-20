import { Button } from "@chakra-ui/react";

interface PlayerCountButtonProps {
    selectedExpansion: string;
    expansionOptionKey: string;
    expansionOptionName: string;
    setExpansion: React.Dispatch<React.SetStateAction<string>>;
}

export const ExpansionButton = ({
    selectedExpansion,
    expansionOptionKey,
    expansionOptionName,
    setExpansion
}: PlayerCountButtonProps) => {
    return (
        <Button
            size='lg'
            colorScheme='green'
            variant={selectedExpansion === expansionOptionKey ? 'solid' : 'outline'} 
            onClick={() => setExpansion(expansionOptionKey)}
        >
            {expansionOptionName}
        </Button>
    );
};
