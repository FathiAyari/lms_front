import { useSession } from 'next-auth/react'
import router from 'next/router'
import React, { useEffect } from 'react'
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Divider, HStack, Heading, IconButton, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, SimpleGrid,Stack,StackDivider,Text, useDisclosure } from '@chakra-ui/react'
import { MdAutoStories, MdOutlineCastForEducation, MdOutlineQuiz, MdSearch } from 'react-icons/md'
import { BsPlus } from 'react-icons/bs'
import LayoutUser from '@/components/layoutUser'

const UserDashboard = () => {
    // const { data: session, status } = useSession()
    // const loading = status === 'loading'
    // useEffect(() => {
    //     if (loading) return // Do nothing while loading

    //     if (status === 'authenticated') {
    //         if (session?.user.role !== 1) {
    //             router.push('/login')
    //         }
    //     } else {
    //         router.push('/login')
    //     }
    // }, [session, status])
  const { isOpen, onOpen, onClose } = useDisclosure()

    return (

            <Box w={"100%"} h={"100vh"} display={"flex"} flexDirection={"column"}  >
                <Box pt={16} mb={6} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}><SimpleGrid spacing={4} columns={[2, null, 3]}>
      <div className="h-[200px] w-[200px] bg-white rounded-lg shadow-lg flex flex-col items-center gap-4 p-2">
      <div className="p-4 rounded-full shadow-2xl flex items-center justify-center">
        <MdOutlineCastForEducation size={32} color='#ed64a6'/>
      </div>
      <div className="text-gray-500 font-bold">Tous les Quiz</div>
      <div className="text-black font-bold text-3xl">999</div>
    </div>
       <div className="h-[200px] w-[200px] bg-white rounded-lg shadow-lg flex flex-col items-center gap-4 p-2">
      <div className="p-4 rounded-full shadow-2xl flex items-center justify-center">
        <MdOutlineQuiz size={32} color='#ed64a6'/>
      </div>
      <div className="text-gray-500 font-bold">Tous les cours</div>
      <div className="text-black font-bold text-3xl">999</div>
    </div>   <div className="h-[200px] w-[200px] bg-white rounded-lg shadow-lg flex flex-col items-center gap-4 p-2">
      <div className="p-4 rounded-full shadow-2xl flex items-center justify-center">
        <MdAutoStories size={32} color='#ed64a6'/>
      </div>
      <div className="text-gray-500 font-bold">Tous les devoirs</div>
      <div className="text-black font-bold text-3xl">999</div>
    </div>

                </SimpleGrid>
                <InputGroup mt={6}>

      <Input type="text" placeholder="Search" bg={"white"}/>
                    </InputGroup></Box>
<Divider size="6xl" color={"black"}/>
                <Heading w={"100%"} textAlign={"center"} p={16}>Tous les cours</Heading>
                <SimpleGrid  spacing={4} columns={[2, null, 4]} pb={16}>
              
          <Card>
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
       <HStack justifyContent={"space-between"}><Text pt='2' fontSize='sm'>
        89/9977/34 12:30
                  </Text> <IconButton
                    onClick={onOpen}
  variant='outline'
  colorScheme='pink'
  aria-label='Send email'
  icon={<BsPlus />}/> </HStack> 

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
       <HStack justifyContent={"space-between"}><Text pt='2' fontSize='sm'>
        89/9977/34 12:30
                  </Text> <IconButton
                    onClick={onOpen}
  variant='outline'
  colorScheme='pink'
  aria-label='Send email'
  icon={<BsPlus />}/> </HStack> 

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
       <HStack justifyContent={"space-between"}><Text pt='2' fontSize='sm'>
        89/9977/34 12:30
                  </Text> <IconButton
                    onClick={onOpen}
  variant='outline'
  colorScheme='pink'
  aria-label='Send email'
  icon={<BsPlus />}/> </HStack> 

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
       <HStack justifyContent={"space-between"}><Text pt='2' fontSize='sm'>
        89/9977/34 12:30
                  </Text> <IconButton
                    onClick={onOpen}
  variant='outline'
  colorScheme='pink'
  aria-label='Send email'
  icon={<BsPlus />}/> </HStack> 

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
       <HStack justifyContent={"space-between"}><Text pt='2' fontSize='sm'>
        89/9977/34 12:30
                  </Text> <IconButton
                    onClick={onOpen}
  variant='outline'
  colorScheme='pink'
  aria-label='Send email'
  icon={<BsPlus />}/> </HStack> 

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
       <HStack justifyContent={"space-between"}><Text pt='2' fontSize='sm'>
        89/9977/34 12:30
                  </Text> <IconButton
                    onClick={onOpen}
  variant='outline'
  colorScheme='pink'
  aria-label='Send email'
  icon={<BsPlus />}/> </HStack> 

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
       <HStack justifyContent={"space-between"}><Text pt='2' fontSize='sm'>
        89/9977/34 12:30
                  </Text> <IconButton
                    onClick={onOpen}
  variant='outline'
  colorScheme='pink'
  aria-label='Send email'
  icon={<BsPlus />}/> </HStack> 

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
       <HStack justifyContent={"space-between"}><Text pt='2' fontSize='sm'>
        89/9977/34 12:30
                  </Text> <IconButton
                    onClick={onOpen}
  variant='outline'
  colorScheme='pink'
  aria-label='Send email'
  icon={<BsPlus />}/> </HStack> 

      </Box>
    </Stack>
            </CardBody>
          
          </Card>
         
               
               
        </SimpleGrid>
         <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              Sit nulla est exdeserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor esse quis.

Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='pink' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>s&apos;abonner</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
                
      </Box>
      

    )
}

export default UserDashboard
UserDashboard.Layout = LayoutUser