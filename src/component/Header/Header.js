import { signOut } from "firebase/auth";
import auth from "../../firebase";

function Header(props) {
    // console.log(props.user);
    const logout = async () => {
        await signOut(auth)
        window.location.reload()
    }
    return (
        <div className="ui clearing segment"  >
            <div className="ui left floated header">
                <h1 className="ui"style={{color:'green'}}> Contact Manager</h1>
            </div>
            <div className="ui right floated header">
                {props.user ? <button className='ui button negative' onClick={logout}>
                    <i className="sign out alternate icon"></i>Log out</button> : null}
                <div style={{color:'gray',fontSize:'80%'}}>{props.user?.displayName}</div>
            </div>
            
        </div>
    );
}

export default Header;
