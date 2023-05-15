import LayoutUser from '@/components/layoutUser'
import { Box, Card, CardBody, CardHeader, Heading, SimpleGrid, Stack, StackDivider,Text} from '@chakra-ui/react'
import { useRouter } from 'next/router'

import React from 'react'

const Cours = () => {
  const router=useRouter()
  return (


      
    <Box w={"100%"} p={6}>
      <Heading textAlign={"center"} py={16}>Mes Cours</Heading>
         <SimpleGrid  spacing={4} columns={[2, null, 4]} pb={16}>
                    <Card onClick={()=>router.push("/user/courDetail")}>
  <CardHeader>
    <Heading size='md'>Cour name</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
       Prof
        </Heading>
        <Text pt='2' fontSize='sm'>
         Prof name
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
       Prof
        </Heading>
        <Text pt='2' fontSize='sm'>
         Prof name
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
       Prof
        </Heading>
        <Text pt='2' fontSize='sm'>
         Prof name
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
       Prof
        </Heading>
        <Text pt='2' fontSize='sm'>
         Prof name
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
       Prof
        </Heading>
        <Text pt='2' fontSize='sm'>
         Prof name
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
       Prof
        </Heading>
        <Text pt='2' fontSize='sm'>
         Prof name
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
       Prof
        </Heading>
        <Text pt='2' fontSize='sm'>
         Prof name
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
       Prof
        </Heading>
        <Text pt='2' fontSize='sm'>
         Prof name
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
       Prof
        </Heading>
        <Text pt='2' fontSize='sm'>
         Prof name
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
       Prof
        </Heading>
        <Text pt='2' fontSize='sm'>
         Prof name
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
      
</Box>
 
      
  )
}

export default Cours
Cours.Layout = LayoutUser
