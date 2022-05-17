import avatar from '../../Image/Avatar.jpg';
import React from "react";
import { Link } from 'react-router-dom';
import api from '../../api/contacts';
export default function ContactCard(props) {
    const { id, name, email } = props.contact;
    const removeContact = (id) => {
        api.delete(`/contacts/${id}.json`).then(res => {
            if (res.status === 200)
                window.location.reload()
        }).catch(err => console.log(err))
    }
    return (
        <div className="ui item">
            <img className="ui avatar image" src={avatar} alt='avatar' />
            <div className="content">
                <div className="header">
                    {name}
                </div>
                <div>
                    {email}
                </div>
            </div>

            <i className="trash alternate outline red big icon" style={{ float: 'right',cursor:'pointer' }} onClick={() => removeContact(id)}></i>
            <Link to={`/${id}`}><i className="edit alternate outline black big icon" style={{ float: 'right' }} ></i></Link>
        </div>
    )
}