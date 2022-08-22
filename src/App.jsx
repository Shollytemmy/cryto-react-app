import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import { CrytoList } from './components/CrytoList'
import { Pagination } from './components/Pagination'

function App() {
  const [crytoData, setCrytoData] = useState([])
  const [postsPerPage, setPostsPerPage] = useState(8)
  const [currentPage, setCurrentPage] = useState(1)


  const lastPostsIdx = currentPage * postsPerPage
  const firstPostIdx = lastPostsIdx - postsPerPage
  const currentPost = crytoData.slice(firstPostIdx, lastPostsIdx)
  // console.log(crytoData)

  const fetchCoin = () =>{
    const base_Url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

 fetch(base_Url)
 .then((response) => response.json())
 .then((data) =>setCrytoData(data))

  }

  useEffect(() => {
    fetchCoin()


  }, [])

  return (
    
      
      <div className=''>
        <h1>CrytoCurrency App</h1>
        <CrytoList crytoData = {currentPost} />
        <Pagination
      totalPost = {crytoData.length}
     postsPerPage = {postsPerPage}
     setCurrentPage = {setCurrentPage}
      
      />
      </div>
  )
}

export default App
