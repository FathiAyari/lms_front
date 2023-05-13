import { Box, HStack } from '@chakra-ui/react'
import React, { FC } from 'react'
import AdminSideBar from './Sidebar'
interface Props {
    children: React.ReactNode
}
const LayoutAdmin: FC<Props> = ({ children }) => {
    return (
        <HStack>
            <AdminSideBar />
            <Box pl={'250px'}>{children}</Box>
        </HStack>
    )
}

export default LayoutAdmin
