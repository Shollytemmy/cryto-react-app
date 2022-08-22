import React from 'react'

export const CrytoCard = (props) => {
    console.log(props)
  return (
    <div className='cryto_card' > 
        <img src={props.image} alt="" />
        <p className='symbol'>{props.symbols}</p>
        <p className='price'>${props.price}</p>
    </div>
  )
}
