import React from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch'
import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter( 1 );

  const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

  const { quote, author } = !!data && data[0]; //SI DATA ME DA TRUE ENTONCES ME TIRA LA DATA

  return (
    <>
      <h1>Breaking Bad Quotes</h1>

      <hr />

      {
        (isLoading)
          ? ( <LoadingQuote /> )
          : ( <Quote quote={ quote } author={ author } /> )
      }
      
      <button onClick={ () => increment( 1 ) } className='btn btn-primary' disabled={ isLoading } >
        Next Quote
      </button>


    </>
  )
}
