import { Box, HStack } from '@chakra-ui/react'
import React, { FC } from 'react'

import { Flex, Text, IconButton } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import Sidebar from './Sidebar'
interface Props {
    children: React.ReactNode
}
const LayoutAdmin: FC<Props> = ({ children }) => {
    return (
        <Flex w="100%" bg={'gray.100'} h={'100vh'}>
            <Sidebar />
            <Box w={'100%'} px={'200px'} h={'100vh'} overflow={'auto'}>
                {children}
            </Box>
        </Flex>
    )
}

export default LayoutAdmin
