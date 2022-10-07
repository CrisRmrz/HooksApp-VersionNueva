import React from 'react'
import { useRef } from 'react'

export const FocusScreen = () => {

    const inputRef = useRef( null );

    const onFocusClick = () => {
        inputRef.current.focus();
    }

  return (
    <div>

        <h1>FocusScreen</h1>
        <hr />

        <input
        ref={ inputRef }
            type="text" 
            placeholder='Ingrese su nombre'
            className='form-control'
        />

        <button onClick={ onFocusClick } className='btn btn-primary mt-2'>Set focus</button>

    </div>
  )
}
