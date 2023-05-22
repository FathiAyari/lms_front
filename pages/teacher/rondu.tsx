import LayoutTeacher from '@/components/layoutTeacher'
import { fetcher } from '@/lib/fetcher'
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Select,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    useDisclosure,
} from '@chakra-ui/react'
import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BiBullseye, BiPencil } from 'react-icons/bi'
import { BsPlus } from 'react-icons/bs'
import { MdDeleteOutline } from 'react-icons/md'
import { TbListDetails } from 'react-icons/tb'
import useSWR, { mutate } from 'swr'

const Rondu = () => {
    const router = useRouter()

    const { data } = useSWR(
        process.env.NEXT_PUBLIC_BACK_URL +
            `/api/teacher_exam_results/${parseInt(
                router?.query.devId as string
            )}`,
        fetcher
    )

    console.log(data)

    return (
        <Box p={16}>
            <Heading textAlign={'center'} py={16}>
                Rondu
            </Heading>

            <Table variant="striped" colorScheme="gray" bg={'white'}>
                <Thead>
                    <Tr>
                        <Th>user Name</Th>
                        <Th>exam Name</Th>
                        <Th>Creation Date</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {data?.map((item: any) => (
                        <Tr key={item.id}>
                            <Td>{item.user.full_name}</Td>
                            <Td>{item.exam.title}</Td>
                            <Td>
                                {format(
                                    new Date(item.dueDate),
                                    'yyyy-MM-dd HH:mm'
                                )}
                            </Td>
                            <Td>
                                <IconButton
                                    aria-label="View assignment"
                                    icon={<AiOutlineEye />}
                                    variant="ghost"
                                    onClick={() =>
                                        router.push(
                                            `/teacher/ronduDetail?ronduId=${item?.id}`
                                        )
                                    }
                                />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    )
}

export default Rondu
Rondu.Layout = LayoutTeacher
