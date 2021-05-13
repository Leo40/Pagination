import React, { useState } from 'react';
import './Modal.css'

const showUserInfo = (currentUser, closeModal) => {
    const { id, first_name, last_name, email } = currentUser;
    return (
    <>
    <div className='header'>
        Profile
    </div>
    <div>
        <div>
        <img src={currentUser.avatar} className="modal-img"></img>
        </div>
        <div className='modal-user-info-container'>
        <div className='modal-left-column'>
            ID:
            <br/>
            First Name:
            <br/>
            Last Name:
            <br/>
            Email: 
            <br/>                     
        </div>
        <div className='modal-right-column'>                                         
            {id}
            <br/>
            {first_name}
            <br/>
            {last_name}
            <br/>
            {email}
            <br/>
        </div>
        </div>  
        <button className='modal-button' onClick={closeModal}>Close</button>
    </div>    
    </>
    )
}

function Modal({trigger, currentUser, closeModal}) {

    return (trigger) ? (
        <div className='modal'>
            <div className='modal-inner'>
                { showUserInfo(currentUser, closeModal) }
            </div>
        </div>
    ) : "";
} 

export default Modal
