import React from 'react'

const Register = () => {
  return (
    <>
    <div className='registerPage' style={{width:"100vw",height:"100vh", display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",  background:  "linear-gradient(rgba(255, 255, 255, 0.45),rgba(0, 0, 0, 0.45)),url(https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg)",backgroundSize:"cover"}}>

     <div style={{width:"480px",minHeight:"350px",maxHeight:"100vh",backgroundColor:"#fff",padding:"20px"}}>

       <h1>login</h1>
       <div> 
         <input style={{padding:"8px 10px",width:"300px",border:"1px solid grey",margin:"10px 5px"}}  type="text" name="" id="" placeholder='email'/>
         <input style={{padding:"8px 10px",width:"300px",border:"1px solid grey",margin:"10px 5px"}} type="text" name="" id="" placeholder='password' />
          </div>
        

       <button style={{width:"200px",height:"50px",margin:"20px 0px",backgroundColor:"teal",border:"none",color:"white",cursor:"pointer"}}>LOGIN</button>

      <br/>
       <a style={{textDecoration:"none"}} href='/'>forget you password ??</a>
         <br/>
         <p><a style={{textDecoration:"none"}} href='/'>create a account</a></p>
     </div>
    </div>
    </>
  )
}

export default Register