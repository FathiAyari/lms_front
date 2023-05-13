import React, { ReactNode } from 'react'
import {
    IconButton,
    Box,
    CloseButton,
    Flex,
    Icon,
    useColorModeValue,
    Link,
    Drawer,
    DrawerContent,
    Text,
    useDisclosure,
    BoxProps,
    FlexProps,
    Button,
} from '@chakra-ui/react'

import { AiOutlineHome, AiOutlineMenu, AiOutlineLogout } from 'react-icons/ai'
import { IoIosSchool } from 'react-icons/io'
import { GiTeacher } from 'react-icons/gi'
import { ImBooks } from 'react-icons/im'
import IconType from 'react-icons'
import { ReactText } from 'react'
import { useRouter } from 'next/router'

interface LinkItemProps {
    name: string
    icon: IconType
    url: string
}
const LinkItems: Array<LinkItemProps> = [
    { name: 'Accueil', icon: AiOutlineHome, url: 'dashboard' },
    { name: 'Etudiantes', icon: IoIosSchool, url: 'studenttest' },
    { name: 'Enseignants', icon: GiTeacher, url: 'teacher' },
    { name: 'Cours', icon: ImBooks, url: 'cours' },
    { name: 'Deconnecter', icon: AiOutlineLogout, url: 'logout' },
]

export default function AdminSideBar() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
            <SidebarContent
                onClose={() => onClose}
                display={{ base: 'none', md: 'block' }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <SidebarContent onClose={onClose} />
                </DrawerContent>
            </Drawer>
            {/* mobilenav */}
            <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
        </Box>
    )
}

interface SidebarProps extends BoxProps {
    onClose: () => void
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            bg={useColorModeValue('white', 'gray.900')}
            borderRight="1px"
            borderRightColor={useColorModeValue('gray.200', 'gray.700')}
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            {...rest}
            p={4}
        >
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Flex alignItems="center">
                    <Text
                        fontSize="2xl"
                        fontFamily="monospace"
                        fontWeight="bold"
                    >
                        LMS
                    </Text>
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: 'white',
                        }}
                        as={IoIosSchool}
                    />
                </Flex>

                <CloseButton
                    display={{ base: 'flex', md: 'none' }}
                    onClick={onClose}
                />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem key={link.name} icon={link.icon} url={link.url}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    )
}

interface NavItemProps extends FlexProps {
    icon: IconType
    children: ReactText
    url: string
}
const NavItem = ({ icon, children, url, ...rest }: NavItemProps) => {
    const router = useRouter()
    return (
        <Button
            w={'100%'}
            my={2}
            onClick={() => router.push(`${url}`)}
            style={{ textDecoration: 'none' }}
            leftIcon={icon}
            align="center"
            p={6}
            borderRadius="lg"
            role="group"
            bg={'pink.500'}
            cursor="pointer"
            _hover={{
                bg: 'pink.400',
                color: 'white',
            }}
        >
            {children}
        </Button>
    )
}

interface MobileProps extends FlexProps {
    onOpen: () => void
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 24 }}
            height="20"
            alignItems="center"
            bg={useColorModeValue('white', 'gray.900')}
            borderBottomWidth="1px"
            borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
            justifyContent="flex-start"
            {...rest}
        >
            <IconButton
                variant="outline"
                onClick={onOpen}
                aria-label="open menu"
                icon={<AiOutlineMenu />}
            />
            <Text
                fontSize="2xl"
                ml="8"
                fontFamily="monospace"
                fontWeight="bold"
            >
                LMS
            </Text>
            <Icon
                mr="4"
                fontSize="16"
                _groupHover={{
                    color: 'white',
                }}
                as={IoIosSchool}
            />
        </Flex>
    )
}
