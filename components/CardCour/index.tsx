import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
    Box,
    Text,
    Card,
    CardHeader,
    Heading,
    CardBody,
    Stack,
    StackDivider,
    HStack,
    IconButton,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
    CardFooter,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { FC } from 'react'
import { BsFolderMinus, BsNodeMinus, BsPlus } from 'react-icons/bs'
import { json } from 'stream/consumers'
import { mutate } from 'swr'

interface Props {
    subscribe: boolean
    item: any
}

const CardCour: FC<Props> = ({ item, subscribe }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { data: session } = useSession()

    const handleClick = async () => {
        const url = subscribe
            ? process.env.NEXT_PUBLIC_BACK_URL + '/api/unsubscribe'
            : process.env.NEXT_PUBLIC_BACK_URL + '/api/subscribe'
        try {
            const response = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify({
                    cours_id: item?.id,
                    user_id: session?.user.id,
                }),
                headers: { 'Content-Type': 'application/json' },
            })
            if (subscribe) {
                await mutate(
                    process.env.NEXT_PUBLIC_BACK_URL +
                        `/api/my-courses/${session?.user.id}`
                )
            } else {
                await mutate(
                    process.env.NEXT_PUBLIC_BACK_URL +
                        `/api/courses/${session?.user.id}`
                )
            }
            onClose()
        } catch (error) {
            console.error('Error uploading file:', error)
        }
    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>S&apos;abonner</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{item?.description}</ModalBody>

                    <ModalFooter>
                        <Button colorScheme="pink" mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant="ghost" onClick={handleClick}>
                            {subscribe ? 'desabonner' : "s'abonner"}
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Card>
                <CardHeader>
                    <Heading size="md">{item.title}</Heading>
                </CardHeader>

                <CardBody>
                    <Stack divider={<StackDivider />} spacing="4">
                        <Box>
                            <Heading size="xs" textTransform="uppercase">
                                Prof
                            </Heading>
                            <Text pt="2" fontSize="sm">
                                {item.user.full_name}
                            </Text>
                        </Box>

                        <Box>
                            <Heading size="xs" textTransform="uppercase">
                                Date
                            </Heading>
                            <HStack justifyContent={'space-between'}>
                                <Text pt="2" fontSize="sm">
                                    {format(
                                        new Date(item?.created_at),
                                        'MM/dd/yyyy HH:mm'
                                    )}
                                </Text>
                                {subscribe ? (
                                    <IconButton
                                        onClick={onOpen}
                                        variant="outline"
                                        colorScheme="pink"
                                        aria-label="desabonner"
                                        icon={<BsFolderMinus />}
                                    />
                                ) : (
                                    <IconButton
                                        onClick={onOpen}
                                        variant="outline"
                                        colorScheme="pink"
                                        aria-label="add"
                                        icon={<BsPlus />}
                                    />
                                )}
                            </HStack>
                        </Box>
                    </Stack>
                </CardBody>
                {subscribe ? (
                    <CardFooter>
                        {' '}
                        <Link href={`/user/courDetail?courId=${item?.id}`}>
                            Consulter <ExternalLinkIcon mx="2px" />
                        </Link>
                    </CardFooter>
                ) : (
                    ''
                )}
            </Card>
        </>
    )
}

export default CardCour
