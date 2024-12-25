import React, { useState, useEffect } from 'react';
import { useForm } from '@inertiajs/react';

export default function Edit({user}) {
    const initialValue = {
        name: user.name,
        email: user.email,
    };
    const { data, setData, put, errors, processing } = useForm(initialValue);

    // handleChange function
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value); // Dynamically sets the data based on input name
    };

    const submit = (e) => {
        e.preventDefault();
        put(`/users/${user.id}`);
    }

    return (
        <>
            <h2 className='title'>Edit User</h2>
            <div className="w-1/2 mx-auto">
                <form onSubmit={submit}>
                    <div className="form-group mb-6">
                        <label htmlFor="name">Name *</label>
                        <input className={errors.name && '!ring-1'} type="text" id="name" name="name" value={data.name} onChange={handleChange} placeholder="Your name.." />
                        {errors.name && <div>{errors.name}</div>}
                    </div>

                    <div className="form-group mb-6">
                        <label htmlFor="email">Email *</label>
                        <input className={errors.email && '!ring-red-500'} type="email" id="email" name="email" value={data.email} onChange={handleChange} placeholder="email@example.com" />
                        {errors.email && <div>{errors.email}</div>}
                    </div>

                    <div className="form-group mb-6">
                        <label htmlFor="password">Password *</label>
                        <input className={errors.password && '!ring-red-500'} type="password" id="password" name="password" value={data.password} onChange={handleChange} />
                        {errors.password && <div>{errors.password}</div>}
                    </div>
                    <button type='submit' disabled={processing} className='primary-btn'>Save</button>
                </form>
            </div>
        </>
    )
}
