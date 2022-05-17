import ContactCard from '../ContactCard/ContactCard';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
// import api from '../../api/contacts';
import axios from 'axios';
function ContactList(props) {
    // const contacts = useSelector(state => state);
    const [contacts, setContacts] = useState([]);
    const [key, setKey] = useState('')
    let ContactList = contacts.map(contact => {
        if(key.length>0){
            if(contact.name.toLowerCase().includes(key.toLowerCase())){
                return (
                    <ContactCard key={contact.id} contact={contact} />
                )
            }
            return null
        }
        return (
            <ContactCard key={contact.id} contact={contact} />
        )
    })
    const fetchContacts = async()=>{
        // const resp = await api.get('/contacts')
        let contactsArr = [];
        const resp = await axios.get('https://contact-manager-648dc-default-rtdb.firebaseio.com/contacts.json')
        let resData = resp.data;
        let keys = Object.keys(resData)
        keys.forEach(key=>{
            let obj = {...resData[key],id:key}
            contactsArr.push(obj)
        })
        return (contactsArr)
    }
    useEffect(()=>{
        const getContacts =async()=>{
            const response = await fetchContacts()
            if(response) setContacts(response)
        }
        getContacts()
    },[]);
    const setSearchKey = (e) => {
        setKey(e.target.value)
    }
    return (
        <div className="ui container">
            <div className="ui clearing segment">
                <div className="ui right floated header">
                    <Link to={'/newcontact'}><button className="ui green button">
                        <i className='user plus icon'></i>Add Contact</button></Link>
                </div>
                <div className="ui left floated header">
                    <h2>Contact List</h2>
                </div>
            </div>
            <div className='ui icon input'>
                <input type={'text'} placeholder='Search contact....' value={key} onChange={setSearchKey} />
                <i className='search icon'></i>
            </div>
            <div className="ui celled list">
                {
                        contacts.length ? ContactList : <div>No Contacts available</div>
                }
            </div>
        </div>
    );
}

export default ContactList;
