import React from 'react'

export const CrytoList = ({data}) => {
    // console.log(data)
  return (
    <div className='cryto'>
        <div className='cryto__list'>
            <img src={data.image} alt="" />
            <p><span className='name'>{data.name}</span></p>
            <p><span className='symbol'><strong>{data.symbol}</strong></span></p>
            <p><span className='price'>${data.current_price}</span></p>
        </div>
    </div>
  )
}
