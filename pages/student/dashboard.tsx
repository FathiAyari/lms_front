import { useSession } from 'next-auth/react'
import router from 'next/router'
import React, { useEffect } from 'react'
import { signOut } from 'next-auth/react'
const StudentDashboard = () => {
    const { data: session, status } = useSession()

    useEffect(() => {
        if (status === 'authenticated') {
            if (session?.user.role !== 3) {
                router.push('/login')
            }
        } else {
            router.push('/login')
        }
    }, [session, status])

    return (
        <button
            onClick={() => {
                signOut()
            }}
        >
            Logout
        </button>
    )
}

export default StudentDashboard
