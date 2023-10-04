import React, { useEffect, useState } from 'react'
import '../Styles/Read.css'
import {Table,Button} from 'semantic-ui-react'
import axios from 'axios'
import { API_URL } from '../Constants/URL';
import {useNavigate} from 'react-router-dom'

const Read = () => {
  const [apiData,setAPIData] = useState([]);
  const navigate=useNavigate();

  const updateUser=({name,email,id})=>{
    localStorage.setItem('ID',id)
    localStorage.setItem('name',name)
    localStorage.setItem('email',email) 
    navigate('/update')

  }

  const deleteUser=async(id)=>{
   await axios.delete(API_URL+id)
   callGetAPI();
  }

  const callGetAPI=async()=>{
    const res=await axios.get(API_URL);
    setAPIData(res.data);
  }

  useEffect(()=>{
    callGetAPI();
  },[]);
  return (
    <section id="read">
    <div className='table'>
    <Table singleLine>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
                <Table.HeaderCell>Delete</Table.HeaderCell>
                <Table.HeaderCell>Update</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
        <Table.Body>
            {apiData.map(data=>(
                <Table.Row key={data.id}>
                <Table.Cell>{data.name}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell><Button onClick={()=>deleteUser(data.id)}>Delete</Button></Table.Cell>
                <Table.Cell><Button onClick={()=>updateUser(data)}>Update</Button></Table.Cell>
                 </Table.Row>
                 ))}
             </Table.Body>
         </Table>
         </div>
         </section>
  )
}

export default Read