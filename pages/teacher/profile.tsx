import LayoutTeacher from '@/components/layoutTeacher'
import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    AvatarBadge,
} from '@chakra-ui/react'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Profile() {
    const router = useRouter()
    const { data: session } = useSession()
    return (
        <Center py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
            >
                   
                    <Avatar >
    <AvatarBadge boxSize='1.25em' bg='green.500' />
  </Avatar>
                
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                    {session?.user?.name}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                    {session?.user?.email}
                </Text>

                <Stack mt={8} direction={'row'} spacing={4}>
                    <Button
                        flex={1}
                        fontSize={'sm'}
                        rounded={'full'}
                        bg={'blue.400'}
                        color={'white'}
                        boxShadow={
                            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                        }
                        _hover={{
                            bg: 'blue.500',
                        }}
                        _focus={{
                            bg: 'blue.500',
                        }}
                        onClick={async () => {
                            await signOut({ redirect: false })
                            router.push('/')
                        }}
                    >
                        se deconnecter
                    </Button>
                </Stack>
            </Box>
        </Center>
    )
}

Profile.Layout = LayoutTeacher
