 const response = await fetch(base_Url)
    const responseJson = await response.json()
    console.log(responseJson)


    {
        currentPost && currentPost.map((data) =>{
          return(
            <CrytoList
             key={data.id} data = {data}
             
             />
          )
        })
      }


      /**
       *    <img src={data.image} alt="" />
            <p><span className='name'>{data.name}</span></p>
            <p><span className='symbol'><strong>{data.symbol}</strong></span></p>
            <p><span className='price'>${data.current_price}</span></p>
       */


             