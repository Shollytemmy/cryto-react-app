import React from 'react'
import { CrytoCard } from './CrytoCard'

export const CrytoList = ({crytoData}) => {
    console.log(crytoData)
  return (
    <div className='cryto_list'>
      {
        crytoData && crytoData.map((data) => {
          return(
            <CrytoCard
            image = {data.image}
            symbols ={data.symbol}
            price = {data.current_price}
             />
          )
        })

      }
       
         
       
    </div>
  )
}
