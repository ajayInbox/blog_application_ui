import React, { useRef } from 'react'
import Inputbox from './inputbox'
import toast, { Toaster } from 'react-hot-toast'
import Navbar from './navbar'
import { Link, Navigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { RegisterReq } from '../types'
import { registerApi } from '../api-v2'

type FormDataType = {
    [key : string]: FormDataEntryValue
}

export default function SignUp() {

    const authRef = useRef<HTMLFormElement | null>(null)

    const mutation = useMutation({
        mutationFn: (body: RegisterReq) => registerApi(body)
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

        const {fullName, email, password} = formData
        if(fullName.toString().length<3){
            toast.error("full name is invalid")
        }
        else if(!email.toString().match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")){
            toast.error("Email is invalid")
        }
        else if(password.toString().length<8){
            toast.error("Password is Invalid")
        }
        else{
            console.log(formData)
            mutation.mutate({"handleName":fullName.toString(), "email":email.toString(), "password":password.toString()})
        }
    }

    if(mutation.isSuccess){
        console.log(mutation.data)
        return(
            <Navigate to={"/signin"}/>
        )
    }

    if(mutation.isError){
        console.log(mutation.error)
    }

    return (
        <>
        <Navbar/>
        <section className='h-cover flex items-center justify-center'>
            <Toaster/>
            <form ref={authRef} className="w-[80%] max-w-[400px]">
                <h1 className='text-4xl font-gelasio capitalize text-center mb-24'>
                    Register
                </h1>
                <Inputbox
                        name='fullName'
                        type='text'
                        placeholder='Full Name'
                        icon='fi-rr-user'
                        />
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
                    Sign Up
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
                        Already a member ? 
                        <Link to={"/signin"} className='text-black text-xl underline ml-1'>
                            Sign In
                        </Link>
                    </p>
            </form>
        </section>
        </>
    )
}
