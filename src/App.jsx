import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const fetchCoin = async() =>{
    const base_Url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'

    const response = await fetch(base_Url)
    const responseJson = await response.json()
    console.log(responseJson)

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
