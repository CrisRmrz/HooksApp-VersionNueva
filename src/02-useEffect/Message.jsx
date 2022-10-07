import React from 'react'
import { useEffect } from 'react'

export const Message = () => {

    useEffect(() => {
      
        console.log( 'Componente montado' )
    
      return () => {
        console.log( 'Componente desmontado' )
      }
    }, [])
    

  return (
    <>

        <h1> Usuario ya existe </h1>

    </>
  )
}
