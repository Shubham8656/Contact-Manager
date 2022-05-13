import ContactCard from '../ContactCard/ContactCard';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function ContactList(props) {
    const contacts = useSelector(state => state);
    const [key, setKey] = useState('')
    const [searchContact, setSearchContact] = useState(contacts)
    let ContactList = contacts.map(contact => {
        if(key.length>0){
            if(contact.name.toLowerCase().includes(key.toLowerCase())){
                console.log('contacts',contacts)
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

    const setSearchKey = (e) => {
        setKey(e.target.value)
    }
    return (
        <div className="ui container">
            <div className="ui clearing segment">
                <div className="ui right floated header">
                    <Link to={'/newcontact'}><button className="ui green button">Add Contact</button></Link>
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
                        contacts.length ? ContactList : <div>No Contacts</div>
                }
            </div>
        </div>
    );
}

export default ContactList;
