import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div style={{backgroundColor:"teal",display:"flex",minHeight:"300px",flexWrap:"wrap",color:"white"}} >
      <div style={{ flex: "1",padding:"20px" }}>

        
        <p>Hi, I'm Avinash kumar, I'd really describe myself as a person with a versatile skill-set, a lot of integrity and a willingness to go the extra mile to satisfy a customer. I am a software engineer with extensive knowledge in Javascript, SQL, HTML, CSS, Vanilla JS, React JS(UI/UX library), Next JS(React JS framework), and Node JS(server-side).</p>
        <div> <FacebookIcon /> <InstagramIcon /> <LinkedInIcon /> <InstagramIcon /> </div>
      </div>


      <div style={{ flex: "1",padding:"20px"}}>
      <h3 style={{display:"block" }}>usefull links</h3>
        <div style={{display:"flex",flexWrap:"wrap"}}> 
        
        <a href='/' style={{minWidth:"40%",textDecoration:"none",color:"white", height:"30px"}}>home</a>
        <a href='/' style={{minWidth:"40%",textDecoration:"none",color:"white", height:"30px"}}>login</a>
        <a href='/' style={{minWidth:"40%",textDecoration:"none",color:"white", height:"30px"}}>resister</a>
        <a href='/' style={{minWidth:"40%",textDecoration:"none",color:"white", height:"30px"}}>cart</a>
        <a href='/' style={{minWidth:"40%",textDecoration:"none",color:"white", height:"30px"}}>products</a>
        <a href='/' style={{minWidth:"40%",textDecoration:"none",color:"white", height:"30px"}}>cars</a>
        <a href='/' style={{minWidth:"40%",textDecoration:"none",color:"white", height:"30px"}}>tata</a>
        <a href='/' style={{minWidth:"40%",textDecoration:"none",color:"white", height:"30px"}}>mahindra</a>
        <a href='/' style={{minWidth:"40%",textDecoration:"none",color:"white", height:"30px"}}>swraj</a>
        <a href='/' style={{minWidth:"40%",textDecoration:"none",color:"white", height:"30px"}}>bajaj</a>
  
        </div>
      </div>





      <div style={{ flex: "1" ,padding:"20px" }}>

        <h1>contact</h1>
        <p>7991106305</p>
        <p>avinashveera@gmail.vcom</p>
        <p>jagsishipu</p>
        <p>bhojpur bihar</p>

      </div>
    </div>
  )
}

export default Footer