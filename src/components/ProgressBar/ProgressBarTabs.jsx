import React, { useState } from "react";
import {
    Box,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Button,
    Text,
} from "@chakra-ui/react";

/**
 * A tab-based progress bar. Each Tab is locked until the previous is complete.
 * You can store user progress in local state or in Firestore.
 */
const ProgressBarTabs = ({ tabContents }) => {
    // e.g. tabContents = [
    //   { title: "Topic 1", content: <LektionenTemplate ... />, isCompleted: false },
    //   { title: "Topic 2", content: <LektionenTemplate ... />, isCompleted: false },
    // ]
    const [activeIndex, setActiveIndex] = useState(0);
    const [completionState, setCompletionState] = useState(
        tabContents.map(() => false)
    );

    const handleCompleteTab = (tabIndex) => {
        const updated = [...completionState];
        updated[tabIndex] = true;
        setCompletionState(updated);
    };

    const handleTabChange = (index) => {
        // Only allow switching if all previous tabs are completed
        let canSwitch = true;
        for (let i = 0; i < index; i++) {
            if (!completionState[i]) {
                canSwitch = false;
                break;
            }
        }
        if (canSwitch) {
            setActiveIndex(index);
        }
    };

    return (
        <Box>
            <Tabs
                index={activeIndex}
                onChange={handleTabChange}
                isFitted
                variant="line"
            >
                <TabList>
                    {tabContents.map((tab, idx) => (
                        <Tab key={idx} isDisabled={idx > 0 && !completionState[idx - 1]}>
                            {tab.title}
                            {completionState[idx] && (
                                <Text as="span" ml={2} color="green.500">
                                    ✓
                                </Text>
                            )}
                        </Tab>
                    ))}
                </TabList>

                <TabPanels>
                    {tabContents.map((tab, idx) => (
                        <TabPanel key={idx}>
                            {tab.content}

                            {/* Example button to mark this tab as completed */}
                            {!completionState[idx] && (
                                <Button
                                    mt={4}
                                    colorScheme="green"
                                    onClick={() => handleCompleteTab(idx)}
                                >
                                    Mark as Complete
                                </Button>
                            )}
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        </Box>
    );
};

export default ProgressBarTabs;
