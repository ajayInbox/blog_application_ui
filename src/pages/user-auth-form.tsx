import { useRef } from 'react'
import Inputbox from '../components/inputbox'
import { Link, useNavigate } from 'react-router-dom'
import { Toaster, toast} from "react-hot-toast"
import Navbar from '../components/navbar'
import { registerApi } from '../api-v2'
import { useMutation } from '@tanstack/react-query'
import { RegisterReq } from '../types'

type FormDataType = {
    [key : string]: FormDataEntryValue
}
    

export default function UserAuthForm({type}: {type: string}) {

    const authRef = useRef<HTMLFormElement | null>(null)
    const navigate = useNavigate()

    const mutation = useMutation({
        mutationFn: (body: RegisterReq) => registerApi(body)
    })

    const {data} = mutation

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
        let toSubmit = true;
        if(fullName){
            if(fullName.toString().length<3){
                toast.error("full name is invalid")
                toSubmit = false
            }
        }
        else if(!email.toString().match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")){
            toast.error("Email is invalid")
            toSubmit = false
        }
        else if(password.toString().length<8){
            toast.error("Password is Invalid")
            toSubmit = false
        }
        
        if(toSubmit && fullName){
            console.log(formData)
            mutation.mutate({handleName:fullName.toString(), email:email.toString(), password:password.toString()})
            
        }
        

        
    }

    if(mutation.isError){
        console.log(mutation.error)
    }
    if(mutation.isSuccess){
        console.log(data)
        navigate("/signin")
    }

  return (
    <>
    <Navbar/>
    <section className='h-cover flex items-center justify-center'>
        <Toaster/>
        <form ref={authRef} className="w-[80%] max-w-[400px]">
            <h1 className='text-4xl font-gelasio capitalize text-center mb-24'>
                {type === "sign-in" ? "Welcome back" : "Register"}
            </h1>

            {
                type !== "sign-in" && (
                    <Inputbox
                    name='fullName'
                    type='text'
                    placeholder='Full Name'
                    icon='fi-rr-user'
                    />
                )

            }
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
                {type.replace("-", " ")}
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

            {
                type === "sign-in" ? (
                    <p className='text-dark-grey text-xl text-center mt-6'>
                        Dont't have an account ? 
                        <Link to={"/signup"} className='text-black text-xl underline ml-1'>
                            Register
                        </Link>
                    </p>
                )
                    : (
                        <p className='text-dark-grey text-xl text-center mt-6'>
                        Already a member ? 
                        <Link to={"/signin"} className='text-black text-xl underline ml-1'>
                            Sign In
                        </Link>
                    </p>
                    )
            }

        </form>
    </section>
    </>
  )
}
