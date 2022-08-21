import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [crytoData, setCrytoData] = useState([])
  console.log(crytoData)

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
    <div className="App">
      <h1>CrytoCurrency App</h1>




    </div>
  )
}

export default App
