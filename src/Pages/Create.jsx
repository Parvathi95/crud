import React, { useState } from 'react'
import '../Styles/Create.css'
import {API_URL} from '../Constants/URL'
import {Form,Button} from 'semantic-ui-react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const Create = () => {
    const [name,setName]=useState('');
   const [email,setEmail] =useState('');
   const navigate=useNavigate();

   const postData=async()=>{
    await axios.post(API_URL,{
        name,
        email
    })
    navigate('/read')
   }
  return (
    <div className='page'>
    <Form className='form'>
        <h3>Create Data</h3>
        <Form.Field>
            <label>Name:</label>
            <input value={name} onChange={event=>setName(event.target.value)} type="text" placeholder='Enter Name'/>
        </Form.Field>
        <Form.Field>
            <label>Email:</label>
            <input value={email} onChange={event=>setEmail(event.target.value)} type="email" placeholder='Enter email'/>
        </Form.Field>
        <Button onClick={postData} className='button'>Create</Button>
        
    </Form>
    </div>
  )
}

export default Create