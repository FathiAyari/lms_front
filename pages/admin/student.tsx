import LayoutAdmin from '@/components/layoutAdmin'
import { fetcher } from '@/lib/fetcher'
import {
    Box,
    Button,
    Heading,
    IconButton,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Table,
    Tabs,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
    useColorModeValue,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    useDisclosure,
    InputRightElement,
    FormErrorMessage,
    Stack,
    InputGroup,
} from '@chakra-ui/react'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/router'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'
import { MdDeleteOutline } from 'react-icons/md'
import useSWR, { mutate } from 'swr'
import * as yup from 'yup'

const schema = yup.object().shape({
    email: yup.string().required("l'email est un champ obligatoire"),
    address: yup.string().required("l'addresse est un champ obligatoire"),
    mobile_no: yup.string().required('le gsm est un champ obligatoire'),
    role: yup.string().required('le type est un champ obligatoire'),
    password: yup.string().required('le mot de passe est un champ obligatoire'),
    full_name: yup.string().required('le nom est un champ obligatoire'),
})

const Student = () => {
    const { data: users } = useSWR(
        process.env.NEXT_PUBLIC_BACK_URL + `/api/user_list/student`,
        fetcher
    )
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const colors = useColorModeValue(
        ['red.50', 'blue.50'],
        ['red.900', 'blue.900']
    )
    const [tabIndex, setTabIndex] = useState(0)
    const bg = colors[tabIndex]
    const router = useRouter()

    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })
    console.log(errors)
    const onSubmit = async (data) => {
        await fetch(process.env.NEXT_PUBLIC_BACK_URL + '/api/register', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' },
        })
        await mutate(process.env.NEXT_PUBLIC_BACK_URL + `/api/user_list/user`)
        onClose()
    }
    const confirmUser = async (id) => {
        await fetch(
            process.env.NEXT_PUBLIC_BACK_URL + '/api/confirm_account/' + id,
            {
                method: 'PUT',

                headers: { 'Content-Type': 'application/json' },
            }
        )
        await mutate(
            process.env.NEXT_PUBLIC_BACK_URL + `/api/user_list/student`
        )
    }
    const deleteUser = (id) => {
        fetch(process.env.NEXT_PUBLIC_BACK_URL + '/api/delete_account/' + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        mutate(process.env.NEXT_PUBLIC_BACK_URL + `/api/user_list/student`)
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Box w={'100%'} p={6}>
            <Heading textAlign={'center'} py={16}>
                All Student
            </Heading>{' '}
            <Box
                display={'flex'}
                w={'100%'}
                alignItems={'end'}
                justifyContent={'end'}
                p={6}
            >
                {' '}
                <Button
                    onClick={onOpen}
                    rightIcon={<BsPlus />}
                    colorScheme="blue"
                    variant="outline"
                >
                    Ajouter
                </Button>
            </Box>
            <Tabs
                isFitted
                variant="enclosed"
                onChange={(index) => setTabIndex(index)}
                bg={bg}
            >
                <TabList mb="1em">
                    <Tab>New Users</Tab>
                    <Tab>Users Accepted</Tab>
                </TabList>
                <TabPanels overflow={'auto'}>
                    <TabPanel>
                        <Table
                            variant="striped"
                            colorScheme="gray"
                            bg={'white'}
                        >
                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Email</Th>
                                    <Th>Action</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {users
                                    ?.filter((e) => !e.is_confirmed)
                                    .map((item: any) => (
                                        <Tr key={item.id}>
                                            <Td>{item.full_name}</Td>
                                            <Td>{item.email}</Td>
                                            <Td>
                                                <IconButton
                                                    aria-label="View assignment"
                                                    icon={
                                                        <AiOutlineCheckCircle />
                                                    }
                                                    variant="ghost"
                                                    onClick={() =>
                                                        confirmUser(item.id)
                                                    }
                                                />
                                                <IconButton
                                                    aria-label="View assignment"
                                                    icon={<MdDeleteOutline />}
                                                    variant="ghost"
                                                    onClick={() =>
                                                        deleteUser(item.id)
                                                    }
                                                />
                                            </Td>
                                        </Tr>
                                    ))}
                            </Tbody>
                        </Table>
                    </TabPanel>
                    <TabPanel>
                        <Table
                            variant="striped"
                            colorScheme="gray"
                            bg={'white'}
                        >
                            <Thead>
                                <Tr>
                                    <Th>Name</Th>
                                    <Th>Email</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {users
                                    ?.filter((e) => e.is_confirmed)
                                    .map((item: any) => (
                                        <Tr key={item.id}>
                                            <Td>{item.full_name}</Td>
                                            <Td>{item.email}</Td>
                                        </Tr>
                                    ))}
                            </Tbody>
                        </Table>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Ajouter Cours</ModalHeader>
                    <ModalCloseButton />

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ModalBody pb={6}>
                            <Stack spacing={2}>
                                <Box>
                                    <FormControl isRequired>
                                        <Input
                                            {...register('full_name')}
                                            placeholder="Nom et prénom"
                                            bg={'gray.100'}
                                            border={0}
                                            color={'gray.500'}
                                            _placeholder={{
                                                color: 'gray.500',
                                            }}
                                        />
                                        <FormErrorMessage>
                                            {
                                                errors.full_name
                                                    ?.message as string
                                            }
                                        </FormErrorMessage>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl isRequired>
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
                                            {errors.email?.message as string}
                                        </FormErrorMessage>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl isRequired>
                                        <Input
                                            {...register('mobile_no')}
                                            placeholder="+216 (___) __-___-___"
                                            bg={'gray.100'}
                                            border={0}
                                            color={'gray.500'}
                                            _placeholder={{
                                                color: 'gray.500',
                                            }}
                                        />
                                        <FormErrorMessage>
                                            {
                                                errors.mobile_no
                                                    ?.message as string
                                            }
                                        </FormErrorMessage>
                                    </FormControl>
                                </Box>
                                <Box>
                                    <FormControl isRequired>
                                        <Input
                                            placeholder="Adresse"
                                            {...register('address')}
                                            bg={'gray.100'}
                                            border={0}
                                            color={'gray.500'}
                                            _placeholder={{
                                                color: 'gray.500',
                                            }}
                                        />
                                        <FormErrorMessage>
                                            {errors.address?.message as string}
                                        </FormErrorMessage>
                                    </FormControl>
                                </Box>

                                <FormControl isRequired>
                                    <InputGroup>
                                        <Select
                                            {...register('role')}
                                            bg={'gray.100'}
                                            border={0}
                                            color={'gray.500'}
                                            _placeholder={{
                                                color: 'gray.500',
                                            }}
                                            placeholder="Selectioner le type"
                                        >
                                            <option value="3">
                                                Etudiant(e)
                                            </option>
                                        </Select>
                                    </InputGroup>
                                    <FormErrorMessage>
                                        {errors.role?.message as string}
                                    </FormErrorMessage>
                                </FormControl>

                                <FormControl isRequired>
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
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
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
                                        {errors.password?.message as string}
                                    </FormErrorMessage>
                                </FormControl>
                            </Stack>
                        </ModalBody>

                        <ModalFooter>
                            <Button type="submit" colorScheme="blue" mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </form>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default Student
Student.Layout = LayoutAdmin
