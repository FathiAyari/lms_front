import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

const TeacherButton = ({ teacher }) => {
    const { data: session } = useSession()
    const router = useRouter()
    return (
        <button
            onClick={() =>
                router.push(
                    session.user.role.name === 'teacher'
                        ? '/teacher/message/' + teacher.id
                        : '/user/message/' + teacher.id
                )
            }
            className="flex flex-row items-center hover:bg-gray-100 rounded-xl p-2"
        >
            <div className="flex items-center justify-center h-8 w-8 bg-indigo-200 rounded-full">
                {teacher.full_name[0]}
            </div>
            <div className="ml-2 text-sm font-semibold">
                {teacher.full_name}
            </div>
        </button>
    )
}

export default TeacherButton
