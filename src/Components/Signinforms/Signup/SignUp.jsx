import React, { useState } from "react";
import './signup.css'
export const SignUp = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
        <div className="main">

        <div className="form2 border justify-center w-400 p-4 mt-44 mx-[400px]">
        <form className=" border">
            <div className='flex space-x-4'>

       
        
        <div className='justify-center p-2  mt-4 mx-1'>
        <h3 className='ml-[14px] absolute -mt-[11px] text-gray-600  bg-white'> First Name</h3>
        <input
        className='border p-1'
        type="text"
        placeholder=""
        />
        </div>
        <div className='justify-center p-2  mt-4 mx-1'>
        <h3 className='ml-[14px] absolute -mt-[12px] text-gray-600 bg-white'> Last Name </h3>
        <input
        className='border p-1'
        type="text"
        placeholder=""
        />
        </div>
        </div>
            <div className='flex space-x-4'>

       
        
        </div>
        <div className="email">
        <div className='justify-center p-2  mt-4 mx-1'>
        <h3 className='ml-[14px] absolute -mt-[11px] bg-white font-semibold'>Email</h3>
        <input
        className='border p-1 w-full h-10'
        type="Email"
        placeholder=""
        />
        </div>
        </div>
        <div className="Wallet Address">
        <div className='justify-center p-2  mt-4 mx-1'>
        <h3 className='ml-[14px] absolute -mt-[11px] bg-white font-semibold'>Password</h3>
        <input
        className='border p-1 w-full h-10'
        type="text"
        placeholder=""
        />
        </div>
        </div>
       <a href='/MyWallet'>
        <button className=' w-32 mt-7 border h-11 bg-[#FFE061] font-poppins p-2 text-xl text-[#0A3749]'> Login</button>
        </a> 
        </form>
    </div>
    </div>

        {/* // <div className="auth-form-container w-full bg-sky-400 flex-col justify-items-center ">
        //     <h2  className="text-2xl">Login</h2>
        //     <form className="login-form flex-col justify-center w-full bg-slate-400" onSubmit={handleSubmit}>
        //         <label htmlFor="email" className="">email</label>
        //         <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
        //         <label htmlFor="password">password</label>
        //         <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
        //         <button type="submit">Log In</button>
        //     </form>
        //     <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        // </div> */}
        </>
    )
}