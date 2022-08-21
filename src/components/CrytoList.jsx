import React from 'react'

export const CrytoList = ({data}) => {
    console.log(data)
  return (
    <div>
        <div>
            <img src={data.image} alt="" />
        </div>
    </div>
  )
}
