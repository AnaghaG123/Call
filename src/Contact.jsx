import React, { useEffect, useState } from 'react'
import { createContact, deleteContact, editContact, getContact } from './Services/allApi'
import Table from 'react-bootstrap/Table';

const Contact = () => {

    const [inputName,setInputName] = useState("")
    const [inputNo,setInputNo] = useState("")
    const [inputEmail,setInputEmail] = useState("")
    const [contactData,setContactData] = useState([])
    const [editData,setEditData] = useState({});
    const [editId,setEditId] = useState(null)

    useEffect(()=>{
        load()
    },[])



    const addContact = async () => {
        if (!inputName || !inputNo || !inputEmail) {
          alert("Please fill in all fields");
          return;
        }
        let reqBody ={
            name:inputName,
            phoneNumber : inputNo,
            email : inputEmail
        }
        let apiResponse = await createContact(reqBody)
        console.log(apiResponse)
        if(apiResponse.status==201){
          alert("Successfully Created")
          load()
          setInputName("");
          setInputNo("");
          setInputEmail("");
          setEditId(null);

        }
        else{
          alert("Something went wrong")
        }

    }
    const load = async () =>{
        let apiResponse = await getContact()
        if(apiResponse.status==200){
          setContactData(apiResponse.data)
    }
    else{
      alert("Something went wrong. Cant access todo data")
    }
    }
    const onDeleteClick = async (id) => {
        let apiResponse = await deleteContact(id)
        if(apiResponse.status==200){
            alert("Successfully Deleted")
            load()
        }else{
            alert("Something went wrong")
        }
    }
    const editClick = (contact) =>{
     

        setInputName(contact.name)
        setInputNo(contact.phoneNumber)
        setInputEmail(contact.email)
        setEditId(contact.id);
    }

    const onEditClick = async () => {

        let reqBody = {
            name:inputName,
            phoneNumber:inputNo,
            email:inputEmail
        }
        let apiResponse = await editContact(editId,reqBody)
        console.log(apiResponse)
        if(apiResponse.status==200){
        alert("Successfully edited")
        load();
        setInputName("")
        setInputNo("")
        setInputEmail("")
        setEditId(null)
      }
      else{
        alert("Error occurred during edit")
      }

    }

  return (
  <>

  <div className='container d-flex flex-column justify-content-center align-items-center w-50'><h1 className='mt-5 mb-5'>ADD CONTACT</h1><div className='bg-secondary w-100 p-5'><input value={inputName} onChange={(e)=>setInputName(e.target.value)} className='mb-5 w-100 form-control' type="text" placeholder='Name'/><input value={inputNo} onChange={(e)=>setInputNo(e.target.value)} className=' mb-5 w-100 form-control' placeholder='Phone Number' type="text" /><input value={inputEmail} onChange={(e)=>setInputEmail(e.target.value)} className='w-100 form-control' placeholder='EMail' type="text" />
  
  {
    editId?<div className='text-center'><button onClick={onEditClick} className='btn btn-warning mt-5 w-50'>Edit</button></div>:<div className='text-center'><button onClick={addContact} className='btn btn-danger mt-5 w-50'>Add</button></div>
  }

  </div></div>
  <div className='container mt-5 w-50'>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>EMail</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          contactData.length>0?<>{
            contactData.map((eachElement,index)=>(
              <tr key={index}>
          <td>{index+1}</td>
          <td>{eachElement.name}</td>
          <td>{eachElement.phoneNumber}</td>
          <td>{eachElement.email}</td>
          <td> <button onClick={()=>onDeleteClick(eachElement.id)} className='btn btn-warning'>Delete</button> <button onClick={()=>editClick(eachElement)} className='btn btn-success'>Update</button> </td>
        </tr>
            ))
          }</>: (
    <tr>
      <td colSpan="5" className='text-center text-dark fw-bold'>NO DATA FOUND</td>
    </tr>
  )
        }

      </tbody>
    </Table></div>

  </>
  )
}

export default Contact