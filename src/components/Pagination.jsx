import React from 'react'

export const Pagination = ({totalPost, postsPerPage, setCurrentPage}) => {

    let pages = []
    for(let i = 1; i<= Math.ceil(totalPost / postsPerPage); i++){
        pages.push(i)
        
    }

    console.log(pages)

    
  return (
    <div className='pagination'>
      {
        pages.map((page) => {
          return(
            <button key={`pages_${page}`} onClick={() => setCurrentPage(page)}>{page}</button>
          )
        })
      }
    </div>
  )
}
