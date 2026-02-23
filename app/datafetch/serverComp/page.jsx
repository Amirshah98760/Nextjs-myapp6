import React from 'react'

const serverDataFetch = async (props) => {
  const searchParams = await props.searchParams;
  const username = searchParams.name;

 await new Promise((resolve) => setTimeout(resolve, 4000));

    if (!username) {
        return (
        <div className='flex h-screen items-center justify-center' >
            
            <div >
                <p className='text-xl font-normal'>No data found </p>
            </div>
            
            </div>
        )   
    }


  const res = await fetch(`https://api.genderize.io/?name=${username}`);
    const data = await res.json();
    console.log(data);



  return (

   <div className='flex h-screen items-center justify-center'>
     <div>
        <h1 className='text-2xl font-bold mb-2'>server data fetch</h1>
    <p className='text-xl font-normal'>Name: {data.name}</p>
    {/* <p className='text-xl font-normal'>Gender: {data.gender}</p>
    <p className='text-xl font-normal'>Probability: {data.probability}</p> */}

    </div>
   </div>
  )
}

export default serverDataFetch