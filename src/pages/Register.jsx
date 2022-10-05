import React from 'react'

const Register = () => {
  return (
    <>
    <div className='registerPage' style={{width:"100vw",height:"100vh", display:"flex",alignItems:"center",justifyContent:"center",  background:  "linear-gradient(rgba(255, 255, 255, 0.45),rgba(0, 0, 0, 0.45)),url(https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg)",backgroundSize:"cover"}}>

     <div style={{width:"480px",minHeight:"350px",maxHeight:"100vh",backgroundColor:"#fff",padding:"20px"}}>

       <h1>CREATE AN ACCOUNT</h1>
       <div style={{display:"flex",flexWrap:"wrap",}}> 
         <input style={{padding:"8px 10px",width:"200px",border:"1px solid grey",margin:"10px 5px"}} type="text" name="" id="" placeholder='first name' />
         <input style={{padding:"8px 10px",width:"200px",border:"1px solid grey",margin:"10px 5px"}} type="text" name="" id="" placeholder='last name' />
         <input style={{padding:"8px 10px",width:"200px",border:"1px solid grey",margin:"10px 5px"}} type="text" name="" id="" placeholder='username'/>
         <input style={{padding:"8px 10px",width:"200px",border:"1px solid grey",margin:"10px 5px"}}  type="text" name="" id="" placeholder='email'/>
         <input style={{padding:"8px 10px",width:"200px",border:"1px solid grey",margin:"10px 5px"}} type="text" name="" id="" placeholder='password' />
         <input style={{padding:"8px 10px",width:"200px",border:"1px solid grey",margin:"10px 5px"}} type="text" name="" id="" placeholder='re password'/>
       </div>

       <p>
         by creating an acoount i constent to processing of my personal data in according with the
         <strong>privecy and policy</strong>
       </p>

       <button style={{width:"200px",height:"50px",backgroundColor:"teal",border:"none",color:"white",cursor:"pointer"}}>CREATE</button>

     </div>
    </div>
    </>
  )
}

export default Register