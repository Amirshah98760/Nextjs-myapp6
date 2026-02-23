"use client"
import {useEffect} from 'react'
import { useSearchParams } from 'next/navigation'

const clientComp = () => {
 const searchParams = useSearchParams();
 const name = searchParams.get("name");
 console.log(name)


    const dataFetch = async () => {
        const res = await fetch(`https://api.genderize.io/?name=${name}`);
        const data = await res.json();
        console.log(data);
    }

    useEffect(() => {
        dataFetch();
    }, []);




  return (
    <div className='flex h-screen items-center justify-center'>
        <h1 className='text-2xl font-bold'>clientComp</h1>
        
    </div>
  )
}

export default clientComp