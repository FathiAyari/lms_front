import { useSession } from 'next-auth/react'
import router from 'next/router'
import React, { useEffect } from 'react'
import { signOut } from 'next-auth/react'
import AdminLayout from '@/components/Layout/admin/admin-layout'
import LayoutAdmin from '@/components/layoutAdmin'
const AdminDashboard = () => {
    const { data: session, status } = useSession()
    const loading = status === 'loading'
    useEffect(() => {
        if (loading) return // Do nothing while loading

        if (status === 'authenticated') {
            if (session?.user.role !== 1) {
                router.push('/login')
            }
        } else {
            router.push('/login')
        }
    }, [session, status])

    return (
        <LayoutAdmin>
            <button
                onClick={() => {
                    signOut()
                }}
            >
                Logout
            </button>
        </LayoutAdmin>
    )
}

export default AdminDashboard
