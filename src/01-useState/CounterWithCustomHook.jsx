import { useCounter } from "../hooks/useCounter"


export const CounterWithCustomHook = () => {
    const {counter, increment, decrement, reset} = useCounter()
     

  return (
    <>
        <h1>Counter with CustomHook: {counter}</h1>
        <hr />
        <button onClick={() => increment(2)} >+2</button>
        <button onClick={reset}>Reset</button>
        <button onClick={() => decrement(2)}>-2</button>
    </>
  )
}
