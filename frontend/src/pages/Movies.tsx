import React,{useEffect, useState} from 'react'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import rawData from './../data.json' 
import Filter from '../components/Filter'
import { data, movie } from '../dataTypes';
export default function Movies() {
    
    const [search, setSearch] = useState('')
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
    <div className=' bg-teal-blue max-w-[1440px] mx-auto min-h-screen text-white flex flex-col gap-6 items-stretch px-4' >
        <Filter searchType='movies' searchValue={search} setSearch={setSearch}/>
        <div  className=' text-xl text-left'>Movies</div>
        <div className=' grid grid-cols-2 gap-4 tablet:grid-cols-3 mini-pc:grid-cols-4'>
            {
                filter().map((movie,ind)=>(
                    <div key={movie.title+ind} className=' flex flex-col gap-2'>
                        <div className=' mt-[-24px]'>
                            <div className=' relative top-[27%] left-[77%] flex justify-center items-center w-8 h-8 bg-[rgba(0,0,0,.5)] hover:cursor-pointer rounded-full tablet:top-[27%] tablet:left-[79%]'
                            onClick={()=>{
                               toggleBookmark(movie)
                            }}>
                                {(movie.isBookmarked)?(<BookmarkOutlinedIcon/>):(<BookmarkBorderOutlinedIcon/>)}
                            </div>
                            <img  className=' rounded-lg' src={movie.thumbnail.regular.small} alt={movie.title} />
                        </div>
                        <div>
                            <div className=' self-start flex gap-3 text-xs font-light'>
                                <span>{movie.year}</span>
                                <span>{movie.category}</span>
                                <span>{movie.rating}</span>
                            </div>
                            <div className=' text-left text-sm font-medium'>{movie.title}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
