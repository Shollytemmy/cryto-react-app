import React from 'react'

export const Pagination = ({totalPost, postsPerPage, setCurrentPage}) => {

    let pages = []
    for(let i = 0; i<= Math.ceil(totalPost / postsPerPage); i++){
        pages.push(i)
        
    }

    console.log(pages)

    
  return (
    <div className='pagination'>
      {
        pages.map((page) => {
          let pg = page === 0 ? page + 1 : page
          return(
            <button key={`pages_${page}`} onClick={() => setCurrentPage(pg)}>{page}</button>
          )
        })
      }
    </div>
  )
}
