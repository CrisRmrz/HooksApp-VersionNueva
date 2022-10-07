import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useForm } from '../hooks/useForm';

export const SimpleFormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    useEffect(() => {

        //console.log( username, email )

    }, [username, email])



    return (
        <>

            <h1>SimpleFormWithCustomHook</h1>

            <hr />

            <input
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={username}
                onChange={onInputChange}
            />

            <input
                type="email"
                className='form-control mt-2'
                placeholder='Email'
                name='email'
                value={email}
                onChange={onInputChange}
            />

            <input
                type="password"
                className='form-control mt-2'
                placeholder='Password'
                name='password'
                value={password}
                onChange={onInputChange}
            />

            <button onClick={ onResetForm } className='btn btn-primary mt-2' > Borrar </button>

        </>
    )
}
