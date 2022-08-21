import React from 'react'

export const CrytoList = ({data}) => {
    console.log(data)
  return (
    <div className='cryto'>
        <div className='cryto__list'>
            <img src={data.image} alt="" />
        </div>
    </div>
  )
}
