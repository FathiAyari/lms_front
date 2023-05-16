import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function HomeTeacher() {
    const router=useRouter()

  return (
    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
              justify={'center'}
              alignItems={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'}  spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>
          <Stack direction={'row'} w={"100%"} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={'pink.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'pink.200' }} onClick={()=>router.push("/teacher/dashboard")}>
Go to Dashboard
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>
  );
}