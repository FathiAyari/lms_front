import LayoutUser from '@/components/layoutUser'
import AddMessage from '@/components/message/AddMessage'
import MessageItem from '@/components/message/MessageItem'
import TeacherButton from '@/components/message/TeacherButton'
import { fetcher } from '@/lib/fetcher'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import useSWR from 'swr'

const ChatBox = () => {
    const router = useRouter()
    const { data: session } = useSession()
    const senderId = session?.user?.id
    const reciverId = router.query.reciverId
    const { data: chats } = useSWR(
        `http://192.168.137.200:8000/api/get_chats/${senderId}/${reciverId}`,
        fetcher
    )
    const { data: students } = useSWR(
        `http://192.168.137.200:8000/api/user_list/student`,
        fetcher
    )
    return (
        <>
            <div className="flex h-screen antialiased text-gray-800">
                <div className="flex flex-row h-full w-full overflow-x-hidden">
                    <div className="flex flex-col flex-auto h-full p-6">
                        <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                            <div className="flex flex-col h-full overflow-x-auto mb-4">
                                <div className="flex flex-col h-full">
                                    <div className="grid grid-cols-12 gap-y-2">
                                        {chats?.map((e, key) => (
                                            <MessageItem
                                                key={key}
                                                user={e.sender}
                                                isMe={e.sender.id === senderId}
                                                message={e.message}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <AddMessage
                                senderId={senderId}
                                reciverId={reciverId}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col py-8 pl-6 pr-2 w-64 bg-white flex-shrink-0">
                        <div className="flex flex-col mt-8">
                            <div className="flex flex-row items-center justify-between text-xs">
                                <span className="font-bold">
                                    List de etudiant
                                </span>
                            </div>
                            <div className="flex flex-col space-y-1 mt-4 -mx-2 h-42 overflow-y-auto">
                                {students
                                    ?.filter((e) => e.id !== senderId)
                                    .map((e, key) => (
                                        <TeacherButton teacher={e} key={key} />
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChatBox
ChatBox.Layout = LayoutUser
