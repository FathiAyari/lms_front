import 'next-auth'

declare module 'next-auth' {
    interface User {
        full_name: string
        email: string
        mobile_no: string
        address: string
        interested_categories: Array
        role: number
    }

    interface Session {
        user: User
        expires: string
    }
}

declare module 'next-auth/jwt' {
    /** Returned by the jwt callback and getToken, when using JWT sessions */
    interface JWT {
        name?: string | null
        email?: string | null
    }
}
