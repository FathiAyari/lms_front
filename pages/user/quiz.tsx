import CardQuiz from '@/components/CardCour/CardQuiz'
import LayoutUser from '@/components/layoutUser'
import { fetcher } from '@/lib/fetcher'
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Heading,
    SimpleGrid,
    Stack,
    StackDivider,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

import React, { useState } from 'react'
import useSWR from 'swr'

const Quiz = () => {
    const { data: session } = useSession()

    const colors = useColorModeValue(
        ['red.50', 'blue.50'],
        ['red.900', 'blue.900']
    )
    const [tabIndex, setTabIndex] = useState(0)
    const bg = colors[tabIndex]
    const router = useRouter()
    const { data } = useSWR(
        session?.user.id
            ? 'http://192.168.137.200:8000/api/student_qcm/' + session.user.id
            : null,
        fetcher
    )
    const { data: doneQuiz } = useSWR(
        session?.user.id
            ? 'http://192.168.137.200:8000/api/student_qcm_passed/' +
                  session.user.id
            : null,
        fetcher
    )

    return (
        <Box w={'100%'} p={6}>
            <Heading textAlign={'center'} py={16}>
                Mes Quiz
            </Heading>
            <Tabs
                isFitted
                variant="enclosed"
                onChange={(index) => setTabIndex(index)}
                bg={bg}
            >
                <TabList mb="1em">
                    <Tab>Quiz</Tab>
                    <Tab>Quiz Terminer</Tab>
                </TabList>
                <TabPanels overflow={'auto'}>
                    <TabPanel>
                        <SimpleGrid spacing={4} columns={[2, null, 4]} pb={16}>
                            {data?.map((item, key) => (
                                <CardQuiz
                                    item={item}
                                    key={key}
                                    subscribe={true}
                                />
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid spacing={4} columns={[2, null, 4]} pb={16}>
                            {doneQuiz?.map((item, key) => (
                                <Card key={key}>
                                    <CardHeader>
                                        <Heading size="md">
                                            {item.qcm.name}
                                        </Heading>
                                    </CardHeader>

                                    <CardBody>
                                        <Stack
                                            divider={<StackDivider />}
                                            spacing="4"
                                        >
                                            <Box>
                                                <Heading
                                                    size="xs"
                                                    textTransform="uppercase"
                                                >
                                                    Cour
                                                </Heading>
                                                <Text pt="2" fontSize="sm">
                                                    {item.qcm.course.title}
                                                </Text>
                                            </Box>

                                            <Box>
                                                <Heading
                                                    size="xs"
                                                    textTransform="uppercase"
                                                >
                                                    Note
                                                </Heading>
                                                <Text pt="2" fontSize="sm">
                                                    {item.note} %
                                                </Text>
                                            </Box>
                                        </Stack>
                                    </CardBody>
                                </Card>
                            ))}
                        </SimpleGrid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default Quiz
Quiz.Layout = LayoutUser
