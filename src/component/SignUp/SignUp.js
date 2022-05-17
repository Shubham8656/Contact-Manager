// import { async } from "@firebase/util"
import { useState } from "react"
import {createUserWithEmailAndPassword} from 'firebase/auth'
import auth from "../../firebase"

const SignUp=()=>{
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")

    const RegisterUser = async() =>{debugger
        const user = await createUserWithEmailAndPassword(auth,email,password)
        console.log('user',user);
        debugger 
    }
    return(
        <div className='ui container'>
        <div className="ui header">Update Contact</div>
              <form className="ui form" >
                  <div className="field">
                      <label>Email</label>
                      <input type='text' placeholder='Enter your emal' value={email} onChange={(e)=>setEmail(e.target.value)} />
                      {/* <div style={{ color: 'red' }}>{nameError.isError ? nameError.erroMsg : ''}</div> */}
                  </div>
                  <div className="field">
                      <label>Password</label>
                      <input type='text' placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                      {/* <div style={{ color: 'red' }}>{emailError.isError ? emailError.erroMsg : ''}</div> */}
                  </div>
                  <button className="ui blue button" onClick={RegisterUser}>Sign Up</button>
              </form>
        </div>
    )
}
export default SignUp