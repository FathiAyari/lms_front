import React from 'react'

const MessageItem = ({ user, message, isMe }) => {
    return (
        <div
            className={
                'p-3 rounded-lg ' +
                (isMe ? 'col-start-6 col-end-13 ' : 'col-start-1 col-end-8')
            }
        >
            <div
                className={
                    'flex flex-row items-center ' + (isMe ? 'justify-end' : '')
                }
            >
                {!isMe && (
                    <div
                        className={
                            'flex items-center justify-center bg-indigo-500 h-10 w-10 rounded-full flex-shrink-0'
                        }
                    >
                        {user.full_name[0]}
                    </div>
                )}
                <div
                    className={
                        'relative ml-3 text-sm py-2 px-4 shadow rounded-xl flex-1' +
                        (isMe ? 'bg-indigo-100' : 'bg-white')
                    }
                >
                    <div>{message}</div>
                </div>
                {isMe && (
                    <div
                        className={
                            'flex items-center justify-center bg-indigo-500 h-10 w-10 rounded-full flex-shrink-0'
                        }
                    >
                        {user.full_name[0]}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MessageItem
