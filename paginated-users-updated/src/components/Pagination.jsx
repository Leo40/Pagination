import React from 'react'

const Pagination = ({ numberOfPages, pageChanged, currentPage }) => {
    const pageNavigators = [];

    for(let i = 1; i <= numberOfPages; i++) {
        pageNavigators.push(i);
    }
    
    pageNavigators.unshift("<<", "<");
    pageNavigators.push(">", ">>");

    const setNextPage = (pageNavigator) => {    
        if(pageNavigator === '<<'){
          pageChanged(1);
        }
    
        else if(pageNavigator === '<'){
          if(currentPage > 1){
          pageChanged(currentPage - 1);
          }
          
          else{
            pageChanged(1);
          }
        }
    
        else if(pageNavigator === '>'){
          if(currentPage < numberOfPages){
          pageChanged(currentPage + 1);
          }
          
          else{
            pageChanged(numberOfPages);
          }
        }
    
        else if(pageNavigator === '>>'){      
          pageChanged(numberOfPages);
        }
    
        else{
          pageChanged(pageNavigator);    
        }
      }

    return (
        <nav>
            <div>
                {pageNavigators.map(pageNavigator => (                      
                    <a href="!#" onClick={() => {setNextPage(pageNavigator)}}> {pageNavigator} </a>                    
                ))}
            </div>
        </nav>
    )
}

export default Pagination;