import React, { useRef } from 'react'
import Navbar from './navbar'
import toast, { Toaster } from 'react-hot-toast'
import Inputbox from './inputbox'
import { Link, Navigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { AuthenticationReq } from '../types'
import { authApi } from '../api-v2'


type FormDataType = {
    [key : string]: FormDataEntryValue
}

export default function SignIn() {
    
    const authRef = useRef<HTMLFormElement | null>(null)

    const mutation = useMutation({
        mutationFn: (body: AuthenticationReq) => authApi(body)
    })

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()

        let form = new FormData()
        if(authRef.current){
             form = new FormData(authRef.current)
        }
        const formData:FormDataType = {}

        for(const [key , value] of form.entries()){
            formData[key] = value
        }

        const {email, password} = formData

        if(!email.toString().match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")){
            toast.error("Email is invalid")
        }
        else if(password.toString().length<8){
            toast.error("Password is Invalid")
        }
        else{
            console.log(formData)
            mutation.mutate({"email":email.toString(), "password":password.toString()})
        }
    }

    if(mutation.isError){
        console.log(mutation.error)
    }

    if(mutation.isSuccess){
        console.log(mutation.data)
        localStorage.setItem("token", mutation.data.accessToken)
        return(
            <Navigate to={"/"}/>
        )
    }

  return (
    <>
    <Navbar/>
    <section className='h-cover flex items-center justify-center'>
        <Toaster/>
        <form ref={authRef} className="w-[80%] max-w-[400px]">
            <h1 className='text-4xl font-gelasio capitalize text-center mb-24'>
                Welcome Back
            </h1>
            <Inputbox
                    name='email'
                    type='email'
                    placeholder='Email'
                    icon='fi-rr-envelope'
                    />
            <Inputbox
                    name='password'
                    type='password'
                    placeholder='Password'
                    icon='fi-rr-key'
                    />

            <button onClick={(e) => handleSubmit(e)} type='submit' className='btn-dark center mt-14'>
                Sign In
            </button>

            <div className='relative w-full flex items-center gap-2 my-10 opacity-10 uppercase text-black font-bold'>
                <hr className='w-1/2 border-black'/>
                <p>or</p>
                <hr className='w-1/2 border-black'/>
            </div>

            <button className='btn-dark flex items-center justify-center gap-4 w-[90%] center'>
                <i className="fi fi-brands-google w-5"></i>
                Continue with Google
            </button>
                <p className='text-dark-grey text-xl text-center mt-6'>
                    Dont't have an account ? 
                    <Link to={"/signup"} className='text-black text-xl underline ml-1'>
                        Register
                    </Link>
                </p>
        </form>
    </section>
    </>
  )
}
