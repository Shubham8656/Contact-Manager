import avatar from '../../Image/Avatar.jpg';
import React from "react";
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/Action/action';
import { Link } from 'react-router-dom';

export default function ContactCard(props) {
    const dispatch = useDispatch();
    const { id, name, email } = props.contact;

    const removeContact = (id) => {
        dispatch(deleteContact(id));
    }
    return (
        <div className="ui item">
            <img className="ui avatar image" src={avatar} alt='avatar'/>
            <div className="content">
                <div className="header">
                    {name}
                </div>
                <div>
                    {email}
                </div>
            </div>

            <i className="trash alternate outline red big icon" style={{ float: 'right' }} onClick={() => removeContact(id)}></i>
            <Link to={`/${id}`}><i className="edit alternate outline black big icon" style={{ float: 'right' }} ></i></Link>
        </div>
    )
}