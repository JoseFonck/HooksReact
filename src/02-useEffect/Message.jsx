import { useState, useEffect } from 'react'




export const Message = () => {

    const [coords, setCoords] = useState()



    useEffect(() => {
      
        const onMouseMove = ({x,y}) => {
            const coords = {x,y}
            
            setCoords(coords)
        }
    
        window.addEventListener('mousemove', onMouseMove)
      return () => {
        window.removeEventListener('mousemove', onMouseMove)
      }
    }, [])
    

  return (
    <>
        <h3>Usuario ya existente</h3>
        {/* {JSON.stringify(coords)} */}
        <pre>{JSON.stringify(coords, null, 2)}</pre>
    </>
  )
}
