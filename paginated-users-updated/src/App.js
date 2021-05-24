import React, { useEffect, useState } from 'react';
import Users from './components/Users';
import Pagination from './components/Pagination'
import './App.css';
import Modal from './components/Modal'

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [userClicked, setUserClicked] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [numberOfPages, setNumberOfPages] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);    
      const url = `https://reqres.in/api/users?page=${currentPage}?&per_page=2`;    
      const response = await fetch(url);
      const jsonResponse = await response.json();
      setUsers(jsonResponse.data);      
      setNumberOfPages(jsonResponse.total_pages);
      setLoading(false);      
    }

    fetchUsers();
  }, [currentPage]);

  //Set current page
  const pageChanged = (nextPage) => {
    setCurrentPage(nextPage);
  }

  //Show Modal
  const displayModal = (user) => {      
    setUserClicked(true);
    setCurrentUser(user);
  }

  //Hide Modal
  const closeModal = () => {
    setUserClicked(false);
  }
 
  return (
    <div id={users.id} className='container'>
      <Users users={users} loading={loading} displayModal={displayModal}/>      
      <Pagination numberOfPages={numberOfPages} pageChanged={pageChanged} currentPage/>
      <Modal userClicked={userClicked} currentUser={currentUser} displayModal={displayModal} closeModal={closeModal}/>              
    </div>
  )
}

export default App

