import React from 'react'

export default function Show({ user }) {
    return (
        <>
            <p className="mb-6">
                <strong>Name : </strong>{user.name}
            </p>

            <p className="mb-6">
                <strong>Email : </strong>{user.email}
            </p>
        </>
    )
}
