"use client"
import {useEffect, useState} from 'react'
import { useSearchParams } from 'next/navigation'

const clientComp = () => {
    const [loading, setLoading] = useState(true);
    const [userInfo , setUserInfo] = useState({});
 const searchParams = useSearchParams();
 const name = searchParams.get("name");
 console.log(name)


 

    // useEffect(() => {
    //        const dataFetch = async () => {
    //     const res = await fetch(`https://api.genderize.io/?name=${name}`);
    //     const data = await res.json();
    //     console.log(data);
    //     setUserInfo(data);
    // }
    //     dataFetch();
    // }, []);


  useEffect(() => {
  const fetchData = async () => {
    await new Promise((res) => setTimeout(res, 4000));
    setLoading(false);
  };

  fetchData();
}, []);



  return (
    <div className='flex h-screen items-center justify-center flex-col gap-2'>
        <h1 className='text-2xl font-bold'>clientComp</h1>
        <p className='text-lg font-semibold'>{userInfo.name}</p>
        <p className='text-lg font-semibold'>{userInfo.gender}</p>
        <p className='text-lg font-semibold'>{userInfo.probability}</p>

        {/* <div className="bg-gradient-to-br from-blue-500 to-purple-600 h-4 w-full"></div> */}
    </div>
  )
}

export default clientComp