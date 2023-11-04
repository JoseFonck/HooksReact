// import { useEffect, useState } from "react"
// import { Message } from "./Message"
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {

    const {username, email, password, formState, onInputChange, onResetForm} = useForm(
        {
            username: '',
            email: '',
            password: ''
        }
    )

    // const {username, email, password} = formState;


  return (
    <>
        <h1>Form with CustomHook</h1>
        <hr />

        <input type="text"
               placeholder="Username"
               className="form-control" 
               name="username"
               value={username}
               onChange={onInputChange}
        />
        
        <input type="email"
               placeholder="Email"
               className="form-control mt-2" 
               name="email"
               value={email}
               onChange={onInputChange}
        />
        
        <input type="password"
               placeholder="Contraseña"
               className="form-control mt-2" 
               name="password"
               value={password}
               onChange={onInputChange}
        />
        <button onClick={onResetForm} className="btn btn-primary mt-2">Borrar</button>
    
       
    </>
  )
}
