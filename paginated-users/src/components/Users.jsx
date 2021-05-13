import React from 'react';

const Users = ({ users, loading, displayModal }) => {
    if(loading) {
        return <h2>Loading...</h2>
    }

    //Dynamically create table rows/cells 
    const renderUser = (user, index) => {
        const { id, first_name, last_name, email } = user;
        
        return(
          <tr key={index} onClick={() => {displayModal(user)}}>
            <td className='user-id'>{id}</td>
            <td>{first_name}</td>
            <td>{last_name}</td>
            <td>{email}</td>
          </tr>
        )
      }

    //User info in Modal
    return <div className="users-table">
        <table>
            <thead>
                <tr>
                <th className='user-id'>ID</th>
                <th>GIVEN NAME</th>
                <th>FAMILY NAME</th>
                <th>EMAIL</th>
                </tr>
            </thead>
            <tbody>
                {users.map(renderUser)}
            </tbody>
        </table>
    </div>
};

export default Users;