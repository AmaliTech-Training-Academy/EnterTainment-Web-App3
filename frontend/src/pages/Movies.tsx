import React,{useEffect, useState} from 'react'
import rawData from './../data.json' 
import Filter from '../components/Filter'
import MovieCard from '../components/MovieCard';
import { movie } from '../dataTypes';


export default function Movies() {
    
    const [search, setSearch] = useState<string>('')
    const [data, setData] = useState(rawData)

    useEffect(()=>{
        setData(data.filter((movie)=>(movie.category==='Movie')))
    },[])


    function toggleBookmark(movie:movie) {
        let ind = data.indexOf(movie)
        data[ind].isBookmarked=!data[ind].isBookmarked
        setData([...data])
    }

    function filter (){
        return data.filter((movie)=>movie.title.toLowerCase().includes(search.toLowerCase()))
    }


  return (
    <div className=' bg-teal-blue max-w-[1440px] mx-auto min-h-screen text-white flex flex-col gap-6 items-stretch px-4 tablet:px-6 mini-pc:px-12' >
        <div  className=' text-xl text-left mini-pc:text-3xl'>Movies</div>
        <div className=' grid grid-cols-2 gap-4 tablet:grid-cols-3 mini-pc:grid-cols-4'>
            {
                filter().map((movie,ind)=>(
                    <MovieCard movie={movie} ind={ind} toggleBookmark={toggleBookmark} page='movies'/>
                ))
            }
        </div>
    </div>
  )
}
