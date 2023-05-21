import {
    Box,
    Flex,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    Avatar,
    AvatarGroup,
    useBreakpointValue,
    IconProps,
    Icon,
    Select,
    InputGroup,
    InputRightElement,
    IconButton,
    FormErrorMessage,
    FormControl,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
} from '@chakra-ui/react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { SignInOptions, signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Link from 'next/link'
const avatars = [
    {
        name: 'Ryan Florence',
        url: 'https://bit.ly/ryan-florence',
    },
    {
        name: 'Segun Adebayo',
        url: 'https://bit.ly/sage-adebayo',
    },
    {
        name: 'Kent Dodds',
        url: 'https://bit.ly/kent-c-dodds',
    },
    {
        name: 'Prosper Otemuyiwa',
        url: 'https://bit.ly/prosper-baba',
    },
    {
        name: 'Christian Nwamba',
        url: 'https://bit.ly/code-beast',
    },
]

const Login = () => {
    const { data: session, status } = useSession()
    const router = useRouter()
    const authLoading = status === 'loading'
    const schema = yup.object().shape({
        email: yup.string().required("l'email est un champ obligatoire"),
        password: yup
            .string()
            .required('le mot de passe est un champ obligatoire'),
    })
    const [showPassword, setShowPassword] = useState(false)
    const [loading, setLoading] = useState(false)
    const [authError, setAuthError] = useState('')

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (cridentials: SignInOptions) => {
        setLoading(!loading)
        const response = await signIn('credentials', {
            ...cridentials,
            redirect: false,
        })

        if (response?.error) {
            setAuthError(response?.error?.split(':')[1])
            setTimeout(() => {
                setAuthError('')
            }, 3000)
        }
        setLoading(loading)
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    useEffect(() => {
        if (authLoading) return // Do nothing while loading

        if (status === 'authenticated') {
            if (session?.user.role.name === 'teacher') {
                router.push('/teacher/dashboard')
            } else if (session?.user.role.name === 'admin') {
                router.push('/admin/dashboard')
            } else router.push('/home')
        }
    }, [session, status])
    return (
        <Box position={'relative'}>
            <Container
                as={SimpleGrid}
                maxW={'7xl'}
                columns={{ base: 1, md: 2 }}
                spacing={{ base: 10, lg: 32 }}
                py={{ base: 10, sm: 20, lg: 10 }}
            >
                <Stack spacing={{ base: 10, md: 20 }}>
                    <Heading
                        lineHeight={1.1}
                        fontSize={{
                            base: '3xl',
                            sm: '4xl',
                            md: '5xl',
                            lg: '6xl',
                        }}
                    >
                        Enseignant(e) professionnels{' '}
                        <Text
                            as={'span'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            bgClip="text"
                        >
                            &
                        </Text>{' '}
                        Cours intéressants
                    </Heading>
                    <Stack direction={'row'} spacing={4} align={'center'}>
                        <AvatarGroup>
                            {avatars.map((avatar) => (
                                <Avatar
                                    key={avatar.name}
                                    name={avatar.name}
                                    src={avatar.url}
                                    position={'relative'}
                                    zIndex={2}
                                    _before={{
                                        content: '""',
                                        width: 'full',
                                        height: 'full',
                                        rounded: 'full',
                                        transform: 'scale(1.125)',
                                        bgGradient:
                                            'linear(to-bl, red.400,pink.400)',
                                        position: 'absolute',
                                        zIndex: -1,
                                        top: 0,
                                        left: 0,
                                    }}
                                />
                            ))}
                        </AvatarGroup>

                        <Flex
                            align={'center'}
                            justify={'center'}
                            fontFamily={'heading'}
                            fontSize={{ base: 'sm', md: 'lg' }}
                            bg={'gray.800'}
                            color={'white'}
                            rounded={'full'}
                            position={'relative'}
                            _before={{
                                content: '""',
                                width: 'full',
                                height: 'full',
                                rounded: 'full',
                                transform: 'scale(1.125)',
                                bgGradient:
                                    'linear(to-bl, orange.400,yellow.400)',
                                position: 'absolute',
                                zIndex: -1,
                                top: 0,
                                left: 0,
                            }}
                        ></Flex>
                    </Stack>
                </Stack>
                <Stack
                    bg={'gray.50'}
                    rounded={'xl'}
                    p={{ base: 4, sm: 6, md: 8 }}
                    spacing={{ base: 4 }}
                    maxW={{ lg: 'lg' }}
                >
                    <Stack spacing={4}>
                        <Heading
                            color={'gray.800'}
                            lineHeight={1.1}
                            fontSize={{ base: '2xl', sm: '3xl', md: '4xl' }}
                        >
                            Authentifiez
                            <Text
                                as={'span'}
                                bgGradient="linear(to-r, red.400,pink.400)"
                                bgClip="text"
                            >
                                !
                            </Text>
                        </Heading>
                        <Text
                            color={'gray.500'}
                            fontSize={{ base: 'sm', sm: 'md' }}
                        >
                            LMS rend la conception et la création d'expériences
                            de cours accessibles à tous.LMS rend la conception
                            et la création d'expériences de cours accessibles à
                            tous.
                        </Text>
                    </Stack>
                    {authError?.length && (
                        <Alert status="error">
                            <AlertIcon />
                            <Box>
                                <AlertDescription>{authError}</AlertDescription>
                            </Box>
                            <CloseButton
                                alignSelf="flex-start"
                                position="relative"
                                right={-1}
                                onClick={() => {
                                    setAuthError('')
                                }}
                            />
                        </Alert>
                    )}
                    <Box as={'form'} onSubmit={handleSubmit(onSubmit)}>
                        <Stack spacing={2}>
                            <Box>
                                <FormControl isInvalid={errors.email}>
                                    <Input
                                        type="email"
                                        {...register('email', {
                                            required: true,
                                        })}
                                        placeholder="nom@domaine.com"
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                    />
                                    <FormErrorMessage>
                                        {errors.email?.message}
                                    </FormErrorMessage>
                                </FormControl>
                            </Box>

                            <FormControl isInvalid={errors.password}>
                                <InputGroup>
                                    <Input
                                        {...register('password')}
                                        bg={'gray.100'}
                                        border={0}
                                        color={'gray.500'}
                                        _placeholder={{
                                            color: 'gray.500',
                                        }}
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        placeholder="Mot de passe"
                                    />

                                    <InputRightElement>
                                        <IconButton
                                            icon={
                                                showPassword ? (
                                                    <EyeIcon className="fill-red-500" />
                                                ) : (
                                                    <EyeSlashIcon className="fill-cyan-900  " />
                                                )
                                            }
                                            size="sm"
                                            onClick={handleShowPassword}
                                            aria-label={''}
                                            //   colorScheme="green"
                                        />
                                    </InputRightElement>
                                </InputGroup>
                                <FormErrorMessage>
                                    {errors.password?.message}
                                </FormErrorMessage>
                            </FormControl>
                        </Stack>
                        <Button
                            fontFamily={'heading'}
                            type="submit"
                            mt={8}
                            w={'full'}
                            bgGradient="linear(to-r, red.400,pink.400)"
                            color={'white'}
                            _hover={{
                                bgGradient: 'linear(to-r, red.400,pink.400)',
                                boxShadow: 'xl',
                            }}
                        >
                            {loading ? 'Connexion...' : 'Connexion'}
                        </Button>
                        <Box w="full" textAlign="center">
                            <Link href="/register">Cree un compte</Link>
                        </Box>
                    </Box>
                </Stack>
            </Container>
            <Blur
                position={'absolute'}
                top={-10}
                left={-10}
                style={{ filter: 'blur(70px)' }}
            />
        </Box>
    )
}
export default Login

export const Blur = (props: IconProps) => {
    return (
        <Icon
            width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
            zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
            height="560px"
            viewBox="0 0 528 560"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <circle cx="71" cy="61" r="111" fill="#F56565" />
            <circle cx="244" cy="106" r="139" fill="#ED64A6" />
            <circle cy="291" r="139" fill="#ED64A6" />
            <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
            <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
            <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
            <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
        </Icon>
    )
}
