import React, { useState } from 'react'
import './navbar.css'
import Navbar from './navbar'
import axios from "axios" ;
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Login() {
     const history = useNavigate() ; 
    const [pfnumber, setPfnumber] = useState('');
    const [password, setPassword] = useState('');
   
    

    
    const submitHandler = async(e)=>{
         
      e.preventDefault();
         
      try {
       const {data} = await axios.post("http://localhost:4000/api/v1/users/login" , 
        {
             pfnumber, 
             password,
         
        }
        ,{
         headers:{
           "Content-Type": "application/json",
         },
         credentials: 'include',
        }
        )
        
       toast.success(data.message)
        if(data){
          history("/home");
          
        }
    
      }
      catch (error) {
        if(error.response){
          const {data} = error.response ;
          toast.error(data.message);
        }
          
      }
     
    };

    return (
    <>

    <Navbar/>
    <h1 style={{ textAlign: "center" }}>Login Page</h1>  

    <form onSubmit={submitHandler}>
    <div className='form'>

      <input type="text" name="pfnumber" value={pfnumber} onChange={(e)=>{setPfnumber(e.target.value)} } placeholder='PF number' required /><br />
      <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)} } placeholder='Password' required /><br />

      <button type='submit' > Submit</button>
      <h1>OR</h1>
      <Link to="/register"> Register </Link>
      </div>
       
    </form>
    </>
  )
}