import React from 'react'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const Home = () => {
    const divStyle ={
        backgroundImage:'url("https://t3.ftcdn.net/jpg/06/07/68/80/360_F_607688089_3Wvfd0eQt99pbSFJTmhC9iL1QrhwZkAL.jpg")',
        backgroundRepeat:'no-repeat',
        height:'82vh',
        backgroundSize:'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-start', 
        justifyContent: 'center',
        paddingTop: '100px',

    }
  return (
    <><div style={divStyle}><div style={{width:'500px'}}><p style={{fontSize:"40px",fontWeight:"700",color:"white",textAlign:'center'}}>WELCOME TO CONTACT MANAGER</p><p className='text-light mt-5 mb-5' style={{textAlign:'justify'}}>Contact Manager is your personal assistant for organizing and accessing your connections. This app helps you store, search, and update information with ease. With a clean interface Contact Manager ensures that your relationships are just a click away. Say goodbye to cluttered spreadsheets and hello to seamless contact management.</p><div className='text-center'><button className='btn btn-primary'><Link to='/Contact' style={{color:'white',textDecoration:'none'}}>GET IN</Link></button></div></div></div></>
  )
}

export default Home