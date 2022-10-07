import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [ formState, setFormState ] = useState({
        username: 'Cris',
        email: 'cridasfjfjfiorjfa'
    });

    const { username, email } = formState;

    const onInputChange = ( { target } ) => {

        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ] : value
        })

    }

    useEffect(() => {
      
        //console.log( username, email )
    
    }, [ username, email ])



  return (
    <>

        <h1>SimpleForm</h1>

        <hr />

        <input
            type="text"
            className='form-control'
            placeholder='Username'
            name='username'
            value={ username }
            onChange={ onInputChange }
        />

        <input
            type="email"
            className='form-control mt-2' 
            placeholder='Email'
            name='email'
            value={ email }
            onChange={ onInputChange }
        />

        {
            username === 'Cris2' && <Message />
        }

    </>
  )
}
