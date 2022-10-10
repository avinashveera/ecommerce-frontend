import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux"
import {eFunc} from "../action/registerReducer"
import axios from "axios"

const Register = () => {
const nagit=useNavigate();
const data=useSelector(state=>state.register.value)


const registerSubmit=
()=>{ 
  console.log(data)
  axios.post("https://veera-backend.herokuapp.com/auth/register",data).then(Response=>{
    
    if(Response.status===200){

      nagit('/login')
  
    }else{

    }
    
  })

}
const dispach=useDispatch();

const dataChange=(evnt)=>{

  dispach(eFunc({name:evnt.target.name,value:evnt.target.value}))

}

  return (
    <>
    <div className='registerPage' style={{width:"100vw",height:"100vh", display:"flex",alignItems:"center",justifyContent:"center",  background:  "linear-gradient(rgba(255, 255, 255, 0.45),rgba(0, 0, 0, 0.45)),url(https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg)",backgroundSize:"cover"}}>

     <div style={{width:"480px",minHeight:"350px",maxHeight:"100vh",backgroundColor:"#fff",padding:"20px"}}>

       <h1>CREATE AN ACCOUNT</h1>
       <div style={{display:"flex",flexWrap:"wrap",}}> 
          <input onChange={dataChange} style={{padding:"8px 10px",width:"200px",border:"1px solid grey",margin:"10px 5px"}} type="text" name="firstname" id="firstname" placeholder='first name' />
         <input onChange={dataChange} style={{padding:"8px 10px",width:"200px",border:"1px solid grey",margin:"10px 5px"}} type="text" name="lastname" id="lastname" placeholder='last name' />
         <input onChange={dataChange} style={{padding:"8px 10px",width:"200px",border:"1px solid grey",margin:"10px 5px"}} type="text" name="username" id="username" placeholder='username'/>
         <input onChange={dataChange} style={{padding:"8px 10px",width:"200px",border:"1px solid grey",margin:"10px 5px"}}  type="text" name="email" id="email" placeholder='email'/>
         <input onChange={dataChange} style={{padding:"8px 10px",width:"200px",border:"1px solid grey",margin:"10px 5px"}} type="text" name="password" id="password" placeholder='password' />
         <input onChange={dataChange} style={{padding:"8px 10px",width:"200px",border:"1px solid grey",margin:"10px 5px"}} type="text" name="repassword" id="repassword" placeholder='re password'/>
       </div>

       <p>
         by creating an acoount i constent to processing of my personal data in according with the
         <strong>privecy and policy</strong>
       </p>

       <button onClick={registerSubmit}  type='submit' style={ {width:"200px",height:"50px",backgroundColor:"teal",border:"none",color:"white",cursor:"pointer"}}>CREATE</button>
         &nbsp; &nbsp; &nbsp;
       <Link style={{textDecoration:"none"}} to='/login'>already hava acoount ? login</Link>
     </div>
    </div>
    </>
  )
}

export default Register