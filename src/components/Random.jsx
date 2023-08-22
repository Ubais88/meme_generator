import Spinner from "./Spinner"
import useGif from "../hooks/useGif"

const Random = () => {
  const {gif , loading , fetchData} = useGif("");

  return (

    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px] '>
      <h1 className=' mt-[15px] text-2xl underline font-bold uppercase'>A Random Gif</h1>

      {
        loading ? (<Spinner/>) : (<img src={gif} alt="GIF" width="450"/>)
      }

      <button 
        className='w-10/12 bg-yellow-500 text-lg py-2 rounded-lg mb-[15px]'
        onClick={() => fetchData()}>
          Generate
      </button>

    </div>
  )
}

export default Random