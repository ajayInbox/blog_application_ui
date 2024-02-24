import { useState } from "react"

type InputboxProps = {
    name: string,
    type: string,
    id?: string,
    value?: any,
    placeholder: string,
    icon: string
}

export default function Inputbox({name, type, id, value, placeholder, icon}: InputboxProps) {

    const[showPassword, setShowPassword] = useState(false)

  return (
    <div className='relative w-full mb-4'>
        <input
            type={type === "password" ? showPassword ? "text" : "password" : type}
            name={name}
            defaultValue={value}
            id={id}
            placeholder={placeholder}
            className="input-box"/>



        {
            // type === "password" && (
                
            // )
        }
    </div>
  )
}
