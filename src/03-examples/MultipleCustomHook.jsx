import { useFetch , useCounter } from '../hooks'

import { LoadingQuote } from './LoadingQuote';
import { Quote } from './Quote';



export const MultipleCustomHook = () => {

  const {counter, increment} = useCounter(1);
  
  const {data,isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

  const { author, quote } = !!data && data[0];
                          //Si la data tiene un valor, entonces toma la data en la pos cero
  // console.log(author, quote)

return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />
  	    
        {
          isLoading
                ? <LoadingQuote />
                : <Quote author={author} quote={quote} />       
        }


        <button 
            onClick={() => increment()} 
            disabled={ isLoading }
            className='btn btn-primary'>
            Next quote
        </button>
    </>
)
}
