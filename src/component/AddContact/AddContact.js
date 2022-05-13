import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,useNavigate } from "react-router-dom";
import { addToContact } from "../../redux/Action/action";

function AddContact(props) {
    const [contact, setContact] = useState({id:0,name:'',email:''});
    const contacts = useSelector(state=>state);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    let onChangeName = (e)=>{
        setContact({...contact,name:e.target.value})
    }
    let onChangeEmail = (e)=>{
        setContact({...contact,email:e.target.value})
    }
    let addcontact = (e) =>{
        e.preventDefault();
        const newContact = {
            ...contact,
            id:contacts.length,
            
        }
        console.log(newContact)
        dispatch(addToContact(newContact))
        setContact({id:0,name:'',email:''})
        navigate('/')
    }
    return (
        <div className="ui container">
            <div className="ui header">Add Contact</div>
            <form className="ui form" >
                <div className="field">
                    <label>Name</label>
                    <input type='text' placeholder='Enter your name' value={contact.name} onChange={onChangeName}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type='text' placeholder='Enter your email' value={contact.email} onChange={onChangeEmail}/>
                </div>
                <button className="ui blue button" onClick={addcontact}>Submit</button>
            </form>
        </div>
    );
}

export default AddContact;
