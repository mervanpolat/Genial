// File: src/components/Quiz/DragAndDropSortQuiz.jsx

import React, { useState } from "react";
import {
    Box,
    Text,
    Button,
    Flex,
    ScaleFade,
    VStack,
} from "@chakra-ui/react";
import { CheckCircleIcon, CloseIcon } from "@chakra-ui/icons";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const CARD_BG = "#f2e8d5";
const BEIGE = "#faf3dc";
const BLUE = "#30628b";
const RED = "#c03b2d";
const GREEN = "#3bb25a";
const YELLOW = "#f0c34e";

/**
 * DragAndDropSortQuiz
 *
 * @param {string} prompt - instructions or question
 * @param {Array<string>} items - initial items to sort (shuffled or not)
 * @param {Array<string>} correctOrder - the correct sorted array
 * @param {Function} onQuizComplete - optional callback when user checks
 *
 * Usage example:
 *  <DragAndDropSortQuiz
 *    prompt="Sortiere die Schritte eines Beweises"
 *    items={["Line 2", "Line 1", "Line 3"]}
 *    correctOrder={["Line 1", "Line 2", "Line 3"]}
 *  />
 */
function DragAndDropSortQuiz({ prompt, items, correctOrder, onQuizComplete }) {
    const [list, setList] = useState(items);
    const [isAnswered, setIsAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);

    // React Beautiful DnD requires this function
    const onDragEnd = (result) => {
        if (!result.destination) return;
        const newArr = Array.from(list);
        const [moved] = newArr.splice(result.source.index, 1);
        newArr.splice(result.destination.index, 0, moved);
        setList(newArr);
    };

    const handleCheck = () => {
        const isMatch = JSON.stringify(list) === JSON.stringify(correctOrder);
        setIsCorrect(isMatch);
        setIsAnswered(true);

        if (onQuizComplete) onQuizComplete();
    };

    return (
        <Box
            p={6}
            borderRadius="md"
            border="2px solid"
            borderColor={BLUE}
            bg={CARD_BG}
            maxW="600px"
            mx="auto"
            mt={6}
            boxShadow="lg"
        >
            <Text fontSize="xl" fontWeight="bold" color="black" mb={2}>
                {prompt}
            </Text>
            <Text fontSize="sm" color="gray.700" mb={4}>
                Ziehe die Elemente in die richtige Reihenfolge.
            </Text>

            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable-list">
                    {(provided) => (
                        <VStack
                            spacing={3}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            align="stretch"
                        >
                            {list.map((item, idx) => (
                                <Draggable key={item} draggableId={item} index={idx}>
                                    {(provided, snapshot) => (
                                        <Box
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            bg={BEIGE}
                                            color="black"
                                            borderRadius="md"
                                            border="2px solid"
                                            borderColor={BLUE}
                                            p={3}
                                            fontWeight="semibold"
                                            textAlign="left"
                                            boxShadow={
                                                snapshot.isDragging ? "0px 0px 10px rgba(0,0,0,0.3)" : "none"
                                            }
                                            _hover={{
                                                bg: snapshot.isDragging ? BEIGE : YELLOW,
                                                borderColor: BLUE,
                                            }}
                                        >
                                            {item}
                                        </Box>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </VStack>
                    )}
                </Droppable>
            </DragDropContext>

            {!isAnswered && (
                <Button
                    mt={4}
                    bg="black"
                    color="white"
                    onClick={handleCheck}
                    _hover={{ bg: "#333333", transform: "scale(1.02)" }}
                    _active={{ transform: "scale(0.98)" }}
                >
                    Überprüfen
                </Button>
            )}

            {isAnswered && (
                <ScaleFade initialScale={0.9} in={isAnswered}>
                    <Flex alignItems="center" mt={4}>
                        {isCorrect ? (
                            <CheckCircleIcon boxSize="1.5em" color={GREEN} mr={2} />
                        ) : (
                            <CloseIcon boxSize="1em" color={RED} mr={2} />
                        )}
                        <Text
                            fontWeight="bold"
                            color={isCorrect ? GREEN : RED}
                            fontSize="lg"
                        >
                            {isCorrect ? "Richtig sortiert!" : "Falsche Reihenfolge!"}
                        </Text>
                    </Flex>
                </ScaleFade>
            )}
        </Box>
    );
}

export default DragAndDropSortQuiz;
