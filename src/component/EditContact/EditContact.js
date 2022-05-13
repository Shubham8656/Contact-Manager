import { useEffect, useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams, useNavigate} from "react-router-dom";
// import { useHistory} from "react-router";
import { editContact } from "../../redux/Action/action";

function EditContact(props) {
    const [contact, setContact] = useState({ id: 0, name: '', email: '' });
    const [nameError, setNameError] = useState({ isError: false, erroMsg: '' })
    const [emailError, setEmailError] = useState({ isError: false, erroMsg: '' })
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = useParams(); 
    
    useEffect(() => {
        console.log(id)
        var editcontact = contacts.find(contact => contact.id === id.id)
        console.log('edit', editcontact)
        setContact(editcontact)
    }, [])
    let onChangeName = (e) => {
        setContact({ ...contact, name: e.target.value })
    }
    let onChangeEmail = (e) => {
        setContact({ ...contact, email: e.target.value })
    }
    const validateContact = () => {
        var isvalidate = true;
        if (contact.name === '') {
            setNameError({ isError: true, erroMsg: 'Name is Required!' })
            isvalidate = false;
        }
        else {
            setNameError({ isError: false, erroMsg: '' })
        }
        if (contact.email === '') {
            setEmailError({ isError: true, erroMsg: 'Email is Required!' })
            isvalidate = false
        }
        else {
            setEmailError({ isError: false, erroMsg: '' })
        }
        return isvalidate;
    }
    let editcontact = (e) => {
        e.preventDefault();
        let isValidate = validateContact();
        if (!isValidate)
            return
        dispatch(editContact(contact))
        setContact({ id: 0, name: '', email: '' })
        navigate("/");
    }
    return (
        <div className="ui container">
            <div className="ui header">Update Contact</div>
            <form className="ui form" >
                <div className="field">
                    <label>Name</label>
                    <input type='text' placeholder='Enter your name' value={contact.name} onChange={onChangeName} />
                    <div style={{color:'red'}}>{nameError.isError? nameError.erroMsg : ''}</div>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type='text' placeholder='Enter your email' value={contact.email} onChange={onChangeEmail} />
                    <div style={{color:'red'}}>{emailError.isError? nameError.erroMsg : ''}</div>
                </div>
                <button className="ui blue button" onClick={editcontact}>Save</button>
            </form>
        </div>
    );
}

export default EditContact;
