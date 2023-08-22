import React, { useState } from 'react'
import Spinner from "./Spinner"
import useGif from '../hooks/useGif';

const Tags = () => {
  const [tag , setTag] = useState('')
  const {gif , loading , fetchData} = useGif(tag);

  return (


    <div className='w-1/2 bg-blue-400 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
      <h1 className=' mt-[15px] text-2xl underline font-bold uppercase'>Random {tag} Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} alt="GIF" width="450"/>)
      }

      <input 
        type="text"
        className='w-10/12 text-lg py-2 rounded-lg text-center'
        onChange={(event) => setTag(event.target.value)}
        value={tag} />

      <button 
        className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[15px]'
        onClick={() => fetchData(tag)}>
          Generate
      </button>


    </div>
  )
}

export default Tags