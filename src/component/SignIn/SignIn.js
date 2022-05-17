import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import auth from "../../firebase"

const SignIn = () => {
    const navigate = useNavigate()
    const SignInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider).then(res => {
            if (res.user.emailVerified) {
                navigate('/')
                window.location.reload()
            }
        })
    }
    return (
        <div className='ui center aligned container'>
           <p className='ui header'> Welcome, User</p>
            <br/>
            <button className="ui centered blue button" onClick={SignInWithGoogle}>
                <i className='google icon'></i>Sign In With Google</button>
        </div>
    )
}
export default SignIn