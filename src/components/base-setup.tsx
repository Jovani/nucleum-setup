import { useEffect, useState } from 'react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  Stack,
  StackDivider,
  Box,
  Heading,
  List,
  ListItem,
  Flex,
  ListIcon,
  Text,
  Highlight,
} from '@chakra-ui/react';
import {
  BaseSetupCounts,
  Expansion,
} from '../assets/expansions/card-sets.interface';

interface BaseSetupProps {
  selectedPlayerCount: number;
  expansion: Expansion;
}

export const BaseSetup = ({
  selectedPlayerCount,
  expansion,
}: BaseSetupProps) => {
  const [baseSetup, setBaseSetup] = useState<BaseSetupCounts>();

  useEffect(() => {
    if (!expansion) {
      return;
    }

    setBaseSetup(expansion.baseSetupCounts[selectedPlayerCount]);
  }, [expansion, selectedPlayerCount]);

  return (
    <Card>
      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          {!!baseSetup?.actionTiles && (
            <Box>
              <Heading size="md">Action Tiles Setup</Heading>
              <Text pt="2" fontSize="sm">
                Separate and shuffle together:
              </Text>

              <List>
                <ListItem verticalAlign="middle">
                  <Flex alignItems="center" justifyContent="center">
                    <ListIcon
                      as={CheckCircleIcon}
                      color="green.500"
                      verticalAlign="middle"
                    />
                    <Text fontWeight="800">All</Text>&nbsp;
                    <Text>Starting Action Tiles (tiles with dots)</Text>
                  </Flex>
                </ListItem>

                <ListItem>
                  <Flex alignItems="center" justifyContent="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text fontWeight="800">{baseSetup.actionTiles}</Text>&nbsp;
                    <Text>Standard Action Tiles</Text>
                  </Flex>
                </ListItem>
              </List>

              <Text pt="2" fontSize="sm">
                This forms the Action Tile draw stack. Return all other Action
                Tiles to the box.
              </Text>
            </Box>
          )}

          {!!baseSetup?.silverContracts && !!baseSetup?.goldContracts && (
            <Box>
              <Heading size="md">Contracts Setup</Heading>
              <Text pt="2" fontSize="sm">
                <Highlight query="Starting" styles={{ fontWeight: 800 }}>
                  Give each player one Starting Contract. Separate and shuffle
                  individually:
                </Highlight>
              </Text>

              <List>
                <ListItem verticalAlign="middle">
                  <Flex alignItems="center" justifyContent="center">
                    <ListIcon
                      as={CheckCircleIcon}
                      color="green.500"
                      verticalAlign="middle"
                    />
                    <Text fontWeight="800">{baseSetup.silverContracts}</Text>
                    &nbsp;<Text>Silver Contracts</Text>
                  </Flex>
                </ListItem>

                <ListItem>
                  <Flex alignItems="center" justifyContent="center">
                    <ListIcon as={CheckCircleIcon} color="green.500" />
                    <Text fontWeight="800">{baseSetup.goldContracts}</Text>
                    &nbsp;<Text>Gold Contracts</Text>
                  </Flex>
                </ListItem>
              </List>

              <Text pt="2" fontSize="sm">
                <Highlight query="Purple" styles={{ fontWeight: 800 }}>
                  To form the Silver and Gold contract stacks. Randomly select
                  one of each level of Purple Contract. Return all other
                  Contracts to the box.
                </Highlight>
              </Text>
            </Box>
          )}

          {!!expansion && (
            <Box>
              <Heading size="md">Other Setup</Heading>

              <List>
                <ListItem verticalAlign="middle">
                  <Flex alignItems="center" justifyContent="center">
                    <ListIcon
                      as={CheckCircleIcon}
                      color="green.500"
                      verticalAlign="middle"
                    />
                    <Text>
                      <Highlight
                        query={['70', '75']}
                        styles={{ fontWeight: 800 }}
                      >
                        {`VP Flag token under ${expansion.victoryPointTarget} points`}
                      </Highlight>
                    </Text>
                  </Flex>
                </ListItem>
              </List>
            </Box>
          )}
        </Stack>
      </CardBody>
    </Card>
  );
};
