import { Button } from '@chakra-ui/react';

interface ExpansionButtonProps {
  selectedExpansion: string;
  expansionOptionKey: string;
  expansionOptionName: string;
  setExpansion: React.Dispatch<React.SetStateAction<string>>;
}

export const ExpansionButton = ({
  selectedExpansion,
  expansionOptionKey,
  expansionOptionName,
  setExpansion,
}: ExpansionButtonProps) => (
  <Button
    size={{ base: 'md', md: 'lg' }}
    colorScheme="green"
    variant={selectedExpansion === expansionOptionKey ? 'solid' : 'outline'}
    onClick={() => setExpansion(expansionOptionKey)}
  >
    {expansionOptionName}
  </Button>
);
