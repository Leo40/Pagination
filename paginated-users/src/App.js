import React, { useEffect, useState } from 'react';
import Users from './components/Users';
import Pagination from './components/Pagination'
import './App.css';
import Modal from './components/Modal'
// import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(2);
  const [trigger, setTrigger] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);    
      const urlOne = 'https://reqres.in/api/users?page=1/';
      const urlTwo = 'https://reqres.in/api/users?page=2/';      
      const responseOne = await fetch(urlOne);
      const responseTwo = await fetch(urlTwo);
      const userListOne = await responseOne.json();
      const userListTwo = await responseTwo.json();
      const combinedList = userListOne.data.concat(userListTwo.data);
      setUsers(combinedList);
      setLoading(false);
    }

    fetchUsers();
  }, []);

  //Set the current page
  const paginateUsers = (pageNavigator) => {
    const lastPage = users.length/usersPerPage;
    if(pageNavigator === '<<'){
      setCurrentPage(1);    
    }

    else if(pageNavigator === '<'){
      if(currentPage > 1){
      setCurrentPage(currentPage - 1);
      }
      
      else{
        setCurrentPage(1);
      }
    }

    else if(pageNavigator === '>'){
      if(currentPage < lastPage){
      setCurrentPage(currentPage + 1);
      }
      
      else{
        setCurrentPage(lastPage);
      }
    }

    else if(pageNavigator === '>>'){      
      setCurrentPage(lastPage);
    }

    else{
      setCurrentPage(pageNavigator);    
    }
  }

  //Show the Modal
  const displayModal = (user) => {        
    setTrigger(true);
    setCurrentUser(user);
  }

  //Hide the Modal
  const closeModal = () => {
    setTrigger(false);
  }

  //Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);
  
  console.log(users);
  
  return (
    <div id={users.id} className='container'>
      <Users users={currentUsers} loading={loading} displayModal={displayModal}/>
      <Pagination usersPerPage={usersPerPage} totalUsers={users.length} paginateUsers={paginateUsers}/>
      <Modal trigger={trigger} displayModal={displayModal} currentUser={currentUser} closeModal={closeModal}/>              
    </div>
  )
}

export default App

