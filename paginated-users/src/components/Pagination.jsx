import React from 'react'

const Pagination = ({ usersPerPage, totalUsers, paginateUsers }) => {
    const pageNavigators = [];

    for(let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNavigators.push(i);
    }
    
    pageNavigators.unshift("<<", "<");    
    pageNavigators.push(">", ">>");

    return (
        <nav>
            <div>
                {pageNavigators.map(pageNavigator => (                    
                    <a href="!#" onClick={() => {paginateUsers(pageNavigator)}}> {pageNavigator} </a>                    
                ))}
            </div>
        </nav>
    )
}

export default Pagination;