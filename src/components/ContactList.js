import React from 'react';
import ContactCard from './ContactCard';
import {Link} from 'react-router-dom';
import "bootstrap-icons/font/bootstrap-icons.css";

const ContactList = (props) => {
    const deleteContactHandler = (id)=> props.getContactId(id);
    let renderContacts = props.contacts.map((contacts) =>{
        return(
            <ContactCard
             contacts = {contacts}
             clickHandler = {deleteContactHandler}
             key = {contacts.id}
            />
        );
    });
    return <div>
                <div className="card-header" style={{textAlign: "center"}} >
                    <div className='row'>
                        <div className='col'><h3>Contact List</h3></div>
                        <Link to='/add' className='col-2'>
                            <button to="/add" className='btn btn-primary'>Add Contacts</button>
                        </Link>
                        
                    </div>
                </div>
                <div>{renderContacts}</div>
            </div>
}


export default ContactList;