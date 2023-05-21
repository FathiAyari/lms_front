import React, { useState } from 'react'
import { mutate } from 'swr'

const AddMessage = ({ senderId, reciverId }: any) => {
    const [message, setMessage] = useState<string>()
    const [loading, setLoading] = useState<boolean>(false)

    const onSubmit = async () => {
        setLoading(true)
        await fetch('http://192.168.137.200:8000/api/add_chat', {
            method: 'POST',
            body: JSON.stringify({
                message,
                sender: senderId,
                receiver: reciverId,
            }),
            headers: { 'Content-Type': 'application/json' },
        })
        await mutate(
            `http://192.168.137.200:8000/api/get_chats/${senderId}/${reciverId}`
        )
        setMessage('')
        setLoading(false)
    }

    return (
        <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4">
            <div></div>
            <div className="flex-grow ml-4">
                <div className="relative w-full">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                    />
                </div>
            </div>
            <div className="ml-4">
                <button
                    disabled={loading || !reciverId}
                    className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
                    onClick={onSubmit}
                >
                    <span>Send</span>
                    <span className="ml-2">
                        <svg
                            className="w-4 h-4 transform rotate-45 -mt-px"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            ></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    )
}

export default AddMessage
