import React from 'react'
import {Link,useNavigate} from "react-router-dom"
import {eFunc} from "../action/loginReducer"
import {useDispatch,useSelector} from "react-redux"
import axios from "axios"

const Register = () => {
  const navigt=useNavigate();
  const data=useSelector(state=>state.login.value)
const dispach=useDispatch();
  const loginEmit=(evnt)=>{

dispach(eFunc({name:evnt.target.name,value:evnt.target.value}))
  }


const login=()=>{

  axios.post('https://veera-backend.herokuapp.com/auth/login',data).then(Response=>{
  if(Response.data.message)
  {
    alert({message:"invalid login"})
  }else{
    const{token,username}=Response.data

    localStorage.setItem("token",token)
    localStorage.setItem("username",username)
    navigt('/')
  }

  
  })

}
   

  return (
    <>
    <div className='registerPage' style={{width:"100vw",height:"100vh", display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",  background:  "linear-gradient(rgba(255, 255, 255, 0.45),rgba(0, 0, 0, 0.45)),url(https://images.pexels.com/photos/194096/pexels-photo-194096.jpeg)",backgroundSize:"cover"}}>

     <div style={{width:"480px",minHeight:"350px",maxHeight:"100vh",backgroundColor:"#fff",padding:"20px"}}>

       <h1>login</h1>
       <div> 
         <input onChange={loginEmit} style={{padding:"8px 10px",width:"300px",border:"1px solid grey",margin:"10px 5px"}}  type="text" name="username" id="username" placeholder='username'/>
         <input onChange={loginEmit} style={{padding:"8px 10px",width:"300px",border:"1px solid grey",margin:"10px 5px"}} type="text" name="password" id="password" placeholder='password' />
          </div>
        

       <button onClick={login} style={{width:"200px",height:"50px",margin:"20px 0px",backgroundColor:"teal",border:"none",color:"white",cursor:"pointer"}}>LOGIN</button>

      <br/>
       <Link style={{textDecoration:"none"}} to='/'>forget you password ??</Link>
         <br/>
         <p><Link style={{textDecoration:"none"}} to='/register'>create a account</Link></p>
     </div>
    </div>
    </>
  )
}

export default Register