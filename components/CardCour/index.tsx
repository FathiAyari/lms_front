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
    ButtonGroup,
    FormControl,
    FormLabel,
    Input,
    RadioGroup,
    Radio,
    Img,
    Select,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { FC, useState } from 'react'
import {
    BsFillCreditCardFill,
    BsFolderMinus,
    BsNodeMinus,
    BsPlus,
} from 'react-icons/bs'
import { FiEye } from 'react-icons/fi'
import Placeholder from 'react-select/dist/declarations/src/components/Placeholder'
import { json } from 'stream/consumers'
import { mutate } from 'swr'

interface Props {
    subscribe: boolean
    item: any
}

const CardCour: FC<Props> = ({ item, subscribe }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const { data: session } = useSession()
    const [step, setStep] = useState(1)
    const [paymentMethod, setPaymentMethod] = useState('')
    const [paymentDetails, setPaymentDetails] = useState('')

    const handleNextStep = () => {
        setStep(step + 1)
    }

    const handlePrevStep = () => {
        setStep(step - 1)
    }
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

    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value)
    }

    const handlePaymentDetailsChange = (event) => {
        setPaymentDetails(event.target.value)
    }
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>S&apos;abonner</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {subscribe ? (
                            `${item?.description}`
                        ) : (
                            <Stack align="center" spacing={4} mt={8}>
                                <Text fontWeight="bold" fontSize="xl">
                                    Step {step}
                                </Text>

                                {step === 1 && (
                                    <div>
                                        <Text>
                                            Step 1: Select Payment Method
                                        </Text>
                                        <form>
                                            <FormControl mb={4}>
                                                <FormLabel>
                                                    Card Number
                                                </FormLabel>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter card number"
                                                />
                                            </FormControl>

                                            <FormControl mb={4}>
                                                <FormLabel>
                                                    Expiration Date
                                                </FormLabel>
                                                <Input
                                                    type="text"
                                                    placeholder="MM/YY"
                                                />
                                            </FormControl>

                                            <FormControl mb={4}>
                                                <FormLabel>CVC</FormLabel>
                                                <Input
                                                    type="text"
                                                    placeholder="Enter CVC"
                                                />
                                            </FormControl>
                                        </form>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div>
                                        <Text>Step 3: Confirm Payment</Text>
                                        {/* Add your payment confirmation component here */}
                                    </div>
                                )}

                                <ButtonGroup mt={4}>
                                    {step > 1 && (
                                        <Button
                                            colorScheme="blue"
                                            onClick={handlePrevStep}
                                        >
                                            Previous
                                        </Button>
                                    )}

                                    {step == 1 && (
                                        <Button
                                            colorScheme="blue"
                                            onClick={handleNextStep}
                                        >
                                            Next
                                        </Button>
                                    )}

                                    {step === 2 && (
                                        <Button
                                            colorScheme="green"
                                            onClick={handleClick}
                                        >
                                            S&apos;abonner
                                        </Button>
                                    )}
                                </ButtonGroup>
                            </Stack>
                        )}{' '}
                    </ModalBody>

                    {subscribe ? (
                        <ModalFooter>
                            <Button colorScheme="pink" mr={3} onClick={onClose}>
                                Close
                            </Button>
                            <Button variant="ghost" onClick={handleClick}>
                                desabonner
                            </Button>
                        </ModalFooter>
                    ) : (
                        ''
                    )}
                </ModalContent>
            </Modal>
            <Card>
                <CardHeader className="flex flex-row justify-between items-center">
                    <Heading size="md">{item.title}</Heading>
                    <Box className="flex flex-col justify-center items-center p-1 text-gray-400">
                        <FiEye />
                        {item.views || 0}
                    </Box>
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
