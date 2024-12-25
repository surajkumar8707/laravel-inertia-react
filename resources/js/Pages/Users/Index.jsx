import { Link } from '@inertiajs/react';
import React, { useState, useEffect } from 'react'

export default function Index({ users }) {
    console.log(users);

    return (
        <>
        <div>
            <Link className='btn btn-primary' href='/users/create'>Add User</Link>
        </div>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.data?.map((item, key) => {
                        return (
                            <tr key={key}>
                                <td>{key + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{new Date(item.created_at).toLocaleString()}</td>
                                <td>
                                    <Link preserveScroll href={`/users/${item.id}/edit`}>Edit</Link>
                                    <Link preserveScroll href={`/users/${item.id}`}>Show</Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

            <div className="p-12 px-4">
                {users?.links?.map((link) =>
                    link.url ?
                        (<Link
                            className={`p-1 mx-1 ${link.active ? "text-blue-500 font-bold" : ''}`}
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            key={link.label}
                            href={link.url}
                        />)
                        :
                        (<span
                            className="p-1 mx-1 text-slate-300"
                            dangerouslySetInnerHTML={{ __html: link.label }}
                            key={link.label}
                        ></span>)
                )}
            </div>
            {/* <div className="container text-center">
                <ul className="pagination">
                    <li className="disabled"><a href="">«</a></li>
                    <li className="active"><a href="index.html">1</a></li>
                    <li><a href="videos2.html">2</a></li>
                    <li><a href="videos2.html">»</a></li>
                </ul>
            </div> */}
        </>
    )
}
