import React, { useContext, useState } from 'react'
import axios from 'axios'
import UserContext from "./UserContext";
function RegisterAndLoginForm() {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const {setUsername:setLogggedInUsername,setId}=useContext(UserContext);
    const[isLoginOrRegister,setIsLoginOrRegister]=useState('register');
   async function handleSubmit(ev){
    ev.preventDefault();
    const url=isLoginOrRegister==='register' ? 'register' : 'login';
     const {data}=await axios.post(url,{username,password});
     setLogggedInUsername(username);
     setId(data.id);
 }
  return (
   
    <div className="bg-blue-50 h-screen flex items-center">

    <form className='w-64 mx-auto' onSubmit={handleSubmit}>

    <input value={username} onChange={ev=>setUsername(ev.target.value)} type="text" placeholder='username' className='block w-full rounded-sm mb-2 p-2 border '/>
    <input value={password} onChange={ev=>setPassword(ev.target.value)} type="password" placeholder='password'  className='block w-full rounded-sm mb-2 p-2 border '/>
    <button className='bg-blue-500 text-white block w-full rounded-sm p-2'>
    
    {isLoginOrRegister ==="register" ? "Register":"Login"}
    </button>
    <div className='text-center mt-2'>
    {
      isLoginOrRegister ==="register" && (
      <div>
    Aready member ?
      
    <button onClick={()=>setIsLoginOrRegister('login')}>
    Login here
    </button>
    </div> 
    
    
      )}
          {
            isLoginOrRegister === "login" && (

               <div>
               Don't Have an account ?
               <button onClick={()=>setIsLoginOrRegister('register')}>Register Here </button>
               
               
               </div>

            )}
     </div>
    </form>
    </div>
  )
}

export default RegisterAndLoginForm