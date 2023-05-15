import LayoutUser from '@/components/layoutUser'
import { Box, Card, CardBody, CardHeader, Heading, SimpleGrid, Stack, StackDivider,Tab,TabList,TabPanel,TabPanels,Tabs,Text, useColorModeValue} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import React, { useState } from 'react'

const Quiz = () => {
   const colors = useColorModeValue(
    ['red.50',  'blue.50'],
    ['red.900', 'blue.900'],
  )
  const [tabIndex, setTabIndex] = useState(0)
  const bg = colors[tabIndex]
const  router =useRouter()
  return (
      
    <Box w={"100%"} p={6}>
      <Heading textAlign={"center"} py={16}>Mes Quiz</Heading>
      <Tabs isFitted variant='enclosed' onChange={(index) => setTabIndex(index)} bg={bg} >
  <TabList mb='1em' >
    <Tab >Quiz</Tab>
    <Tab >Quiz Terminer</Tab>
  </TabList>
  <TabPanels overflow={"auto"}>
    <TabPanel>
<SimpleGrid  spacing={4} columns={[2, null, 4]} pb={16}>
                    <Card onClick={()=>router.push("/user/quizDetail")}>
  <CardHeader>
    <Heading size='md'>Cour name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Quiz
        </Heading>
        <Text pt='2' fontSize='sm'>
         Quiz name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Date
        </Heading>
        <Text pt='2' fontSize='sm'>
        89/9977/34 12:30
        </Text>
      </Box>
    </Stack>
  </CardBody>
                    </Card><Card>
  <CardHeader>
    <Heading size='md'>Cour name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Quiz
        </Heading>
        <Text pt='2' fontSize='sm'>
         Quiz name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Date
        </Heading>
        <Text pt='2' fontSize='sm'>
        89/9977/34 12:30
        </Text>
      </Box>
    </Stack>
  </CardBody>
                    </Card><Card>
  <CardHeader>
    <Heading size='md'>Cour name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Quiz
        </Heading>
        <Text pt='2' fontSize='sm'>
         Quiz name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Date
        </Heading>
        <Text pt='2' fontSize='sm'>
        89/9977/34 12:30
        </Text>
      </Box>
    </Stack>
  </CardBody>
                    </Card><Card>
  <CardHeader>
    <Heading size='md'>Cour name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Quiz
        </Heading>
        <Text pt='2' fontSize='sm'>
         Quiz name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Date
        </Heading>
        <Text pt='2' fontSize='sm'>
        89/9977/34 12:30
        </Text>
      </Box>
    </Stack>
  </CardBody>
                    </Card><Card>
  <CardHeader>
    <Heading size='md'>Cour name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Quiz
        </Heading>
        <Text pt='2' fontSize='sm'>
         Quiz name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Date
        </Heading>
        <Text pt='2' fontSize='sm'>
        89/9977/34 12:30
        </Text>
      </Box>
    </Stack>
  </CardBody>
                    </Card><Card>
  <CardHeader>
    <Heading size='md'>Cour name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Quiz
        </Heading>
        <Text pt='2' fontSize='sm'>
         Quiz name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Date
        </Heading>
        <Text pt='2' fontSize='sm'>
        89/9977/34 12:30
        </Text>
      </Box>
    </Stack>
  </CardBody>
                    </Card><Card>
  <CardHeader>
    <Heading size='md'>Cour name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Quiz
        </Heading>
        <Text pt='2' fontSize='sm'>
         Quiz name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Date
        </Heading>
        <Text pt='2' fontSize='sm'>
        89/9977/34 12:30
        </Text>
      </Box>
    </Stack>
  </CardBody>
                    </Card><Card>
  <CardHeader>
    <Heading size='md'>Cour name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Quiz
        </Heading>
        <Text pt='2' fontSize='sm'>
         Quiz name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Date
        </Heading>
        <Text pt='2' fontSize='sm'>
        89/9977/34 12:30
        </Text>
      </Box>
    </Stack>
  </CardBody>
                    </Card><Card>
  <CardHeader>
    <Heading size='md'>Cour name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Quiz
        </Heading>
        <Text pt='2' fontSize='sm'>
         Quiz name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Date
        </Heading>
        <Text pt='2' fontSize='sm'>
        89/9977/34 12:30
        </Text>
      </Box>
    </Stack>
  </CardBody>
                    </Card><Card>
  <CardHeader>
    <Heading size='md'>Cour name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Quiz
        </Heading>
        <Text pt='2' fontSize='sm'>
         Quiz name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Date
        </Heading>
        <Text pt='2' fontSize='sm'>
        89/9977/34 12:30
        </Text>
      </Box>
    </Stack>
  </CardBody>
                    </Card><Card>
  <CardHeader>
    <Heading size='md'>Cour name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Quiz
        </Heading>
        <Text pt='2' fontSize='sm'>
         Quiz name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Date
        </Heading>
        <Text pt='2' fontSize='sm'>
        89/9977/34 12:30
        </Text>
      </Box>
    </Stack>
  </CardBody>
                    </Card>
               
               
                </SimpleGrid>
    </TabPanel>
    <TabPanel>
<SimpleGrid  spacing={4} columns={[2, null, 4]} pb={16}>
                    <Card>
  <CardHeader>
    <Heading size='md'>Quiz Name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Cour
        </Heading>
        <Text pt='2' fontSize='sm'>
         Cour name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Note en %
        </Heading>
        <Text pt='2' fontSize='sm'>
      90 %
        </Text>
      </Box>
    </Stack>
  </CardBody>
              </Card>   <Card>
  <CardHeader>
    <Heading size='md'>Quiz Name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Cour
        </Heading>
        <Text pt='2' fontSize='sm'>
         Cour name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Note en %
        </Heading>
        <Text pt='2' fontSize='sm'>
      90 %
        </Text>
      </Box>
    </Stack>
  </CardBody>
              </Card>   <Card>
  <CardHeader>
    <Heading size='md'>Quiz Name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Cour
        </Heading>
        <Text pt='2' fontSize='sm'>
         Cour name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Note en %
        </Heading>
        <Text pt='2' fontSize='sm'>
      90 %
        </Text>
      </Box>
    </Stack>
  </CardBody>
              </Card>   <Card>
  <CardHeader>
    <Heading size='md'>Quiz Name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Cour
        </Heading>
        <Text pt='2' fontSize='sm'>
         Cour name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Note en %
        </Heading>
        <Text pt='2' fontSize='sm'>
      90 %
        </Text>
      </Box>
    </Stack>
  </CardBody>
              </Card>   <Card>
  <CardHeader>
    <Heading size='md'>Quiz Name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Cour
        </Heading>
        <Text pt='2' fontSize='sm'>
         Cour name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Note en %
        </Heading>
        <Text pt='2' fontSize='sm'>
      90 %
        </Text>
      </Box>
    </Stack>
  </CardBody>
              </Card>   <Card>
  <CardHeader>
    <Heading size='md'>Quiz Name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Cour
        </Heading>
        <Text pt='2' fontSize='sm'>
         Cour name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Note en %
        </Heading>
        <Text pt='2' fontSize='sm'>
      90 %
        </Text>
      </Box>
    </Stack>
  </CardBody>
              </Card>   <Card>
  <CardHeader>
    <Heading size='md'>Quiz Name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Cour
        </Heading>
        <Text pt='2' fontSize='sm'>
         Cour name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Note en %
        </Heading>
        <Text pt='2' fontSize='sm'>
      90 %
        </Text>
      </Box>
    </Stack>
  </CardBody>
              </Card>   <Card>
  <CardHeader>
    <Heading size='md'>Quiz Name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Cour
        </Heading>
        <Text pt='2' fontSize='sm'>
         Cour name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Note en %
        </Heading>
        <Text pt='2' fontSize='sm'>
      90 %
        </Text>
      </Box>
    </Stack>
  </CardBody>
              </Card>   <Card>
  <CardHeader>
    <Heading size='md'>Quiz Name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Cour
        </Heading>
        <Text pt='2' fontSize='sm'>
         Cour name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Note en %
        </Heading>
        <Text pt='2' fontSize='sm'>
      90 %
        </Text>
      </Box>
    </Stack>
  </CardBody>
              </Card>   <Card>
  <CardHeader>
    <Heading size='md'>Quiz Name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Cour
        </Heading>
        <Text pt='2' fontSize='sm'>
         Cour name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Note en %
        </Heading>
        <Text pt='2' fontSize='sm'>
      90 %
        </Text>
      </Box>
    </Stack>
  </CardBody>
              </Card>   <Card>
  <CardHeader>
    <Heading size='md'>Quiz Name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Cour
        </Heading>
        <Text pt='2' fontSize='sm'>
         Cour name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Note en %
        </Heading>
        <Text pt='2' fontSize='sm'>
      90 %
        </Text>
      </Box>
    </Stack>
  </CardBody>
              </Card>   <Card>
  <CardHeader>
    <Heading size='md'>Quiz Name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Cour
        </Heading>
        <Text pt='2' fontSize='sm'>
         Cour name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Note en %
        </Heading>
        <Text pt='2' fontSize='sm'>
      90 %
        </Text>
      </Box>
    </Stack>
  </CardBody>
              </Card>   <Card>
  <CardHeader>
    <Heading size='md'>Quiz Name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Cour
        </Heading>
        <Text pt='2' fontSize='sm'>
         Cour name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Note en %
        </Heading>
        <Text pt='2' fontSize='sm'>
      90 %
        </Text>
      </Box>
    </Stack>
  </CardBody>
              </Card>   <Card>
  <CardHeader>
    <Heading size='md'>Quiz Name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Cour
        </Heading>
        <Text pt='2' fontSize='sm'>
         Cour name
        </Text>
      </Box>
     
      <Box>
        <Heading size='xs' textTransform='uppercase'>
Note en %
        </Heading>
        <Text pt='2' fontSize='sm'>
      90 %
        </Text>
      </Box>
    </Stack>
  </CardBody>
              </Card>

            
               
               
                </SimpleGrid>
    </TabPanel>
  </TabPanels>
</Tabs>
         
      
</Box>
  )
}

export default Quiz
Quiz.Layout = LayoutUser