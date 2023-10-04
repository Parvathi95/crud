import React, { useEffect, useState } from 'react'
import {Form,Button} from 'semantic-ui-react'
import axios from 'axios';
import { API_URL } from '../Constants/URL';
import {useNavigate} from 'react-router-dom'

const Update = () => {
  const [name,setName]=useState('');
  const [email,setEmail] =useState('');
  const [id,setId]=useState("");
  const navigate=useNavigate();

  const updateuser=async()=>{
    await axios.put(API_URL +id,{
        name,
        email
    })
    navigate('/read')
   }
 
 
  useEffect(()=>{
    setId(localStorage.getItem('id'));
    setName(localStorage.getItem('name'));
    setEmail(localStorage.getItem('email'));
    
  },[])
  return (
    <div className='page'>
    <Form className='form'>
      <h3>Update Data</h3>
        <Form.Field>
            <label>Name:</label>
            <input value={name} onChange={event=>setName(event.target.value)} type="text" placeholder='Enter Name'/>
        </Form.Field>
        <Form.Field>
            <label>Email:</label>
            <input value={email} onChange={event=>setEmail(event.target.value)} type="email" placeholder='Enter email'/>
        </Form.Field>
        <Button onClick={updateuser} >Update</Button>
        
    </Form>
    </div>
  )
}

export default Update