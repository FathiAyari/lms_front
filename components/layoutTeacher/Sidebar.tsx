import React, { useEffect, useState } from 'react'
import {
    Flex,
    Text,
    IconButton,
    Divider,
    Avatar,
    Heading,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    Menu,
} from '@chakra-ui/react'

import { FcNext } from 'react-icons/fc'
import { MdLockOutline, MdPersonOutline } from 'react-icons/md'
import {
    MdAutoStories,
    MdHomeFilled,
    MdOutlineCastForEducation,
    MdOutlineMessage,
    MdOutlineQuiz,
} from 'react-icons/md'
import NavItem from './NavItem'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/react'

export default function Sidebar() {
    const router = useRouter()
    const { data: session, status } = useSession()
    const [navSize, changeNavSize] = useState('large')

    useEffect(() => {
        if (status === 'unauthenticated') router.push('/')
    }, [status])

    if (!session) return
    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == 'small' ? '15px' : '30px'}
            w={navSize == 'small' ? '75px' : '200px'}
            flexDir="column"
            bg={'#0b0840'}
            justifyContent="space-between"
        >
            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == 'small' ? 'center' : 'flex-start'}
                as="nav"
            >
                <IconButton
                    aria-label=""
                    background="none"
                    mt={5}
                    _hover={{ background: 'none' }}
                    icon={
                        navSize == 'small' ? (
                            <FcNext />
                        ) : (
                            <FcNext className="rotate-180" />
                        )
                    }
                    onClick={() => {
                        if (navSize == 'small') changeNavSize('large')
                        else changeNavSize('small')
                    }}
                />
                <NavItem
                    navSize={navSize}
                    icon={MdHomeFilled}
                    title="Home"
                    active={
                        router.pathname == '/teacher/dashboard' ? true : false
                    }
                    url="/teacher/dashboard"
                />
                <NavItem
                    navSize={navSize}
                    icon={MdOutlineCastForEducation}
                    title="Cours"
                    active={router.pathname == '/teacher/cours' ? true : false}
                    url="/teacher/cours"
                />
                <NavItem
                    navSize={navSize}
                    icon={MdOutlineQuiz}
                    title="Quiz"
                    active={router.pathname == '/teacher/quiz' ? true : false}
                    url="/teacher/quiz"
                />
                <NavItem
                    navSize={navSize}
                    icon={MdAutoStories}
                    title="Devoirs"
                    active={
                        router.pathname == '/teacher/devoirs' ? true : false
                    }
                    url="/teacher/devoirs"
                />
                <NavItem
                    navSize={navSize}
                    icon={MdOutlineMessage}
                    title="Message"
                    active={
                        router.pathname == '/teacher/message' ? true : false
                    }
                    url="/teacher/message"
                />
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == 'small' ? 'center' : 'flex-start'}
                mb={4}
            >
                <Divider display={navSize == 'small' ? 'none' : 'flex'} />

                <Menu>
                    <MenuButton px={4} py={2} transition="all 0.2s">
                        <Flex mt={4} align="center">
                            {' '}
                            <Avatar size="sm" src="avatar-1.jpg" />
                            <Flex
                                flexDir="column"
                                ml={4}
                                display={navSize == 'small' ? 'none' : 'flex'}
                            >
                                <Heading as="h3" size="sm" textColor={"white"}>
                                    {session.user.name}
                                </Heading>
                                <Text color="gray">Enseignant</Text>
                            </Flex>
                        </Flex>
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            onClick={() => router.push('/teacher/profile')}
                            gap={2}
                        >
                            <MdPersonOutline size={20} /> Profile
                        </MenuItem>
                        <MenuDivider />

                        <MenuItem
                            gap={2}
                            onClick={async () => {
                                await signOut({ redirect: false })
                                router.push('/')
                            }}
                        >
                            <MdLockOutline size={20} />
                            Se deconnecter
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Flex>
        </Flex>
    )
}
