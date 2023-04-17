import React,{useEffect, useState} from 'react'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import rawData from '../data.json' 
import Filter from '../components/Filter'
import { movie } from '../dataTypes';
export default function TvSeries() {
    
    const [search, setSearch] = useState<string>('')
    const [data, setData] = useState(rawData)

    useEffect(()=>{
        setData(data.filter((movie)=>(movie.category==='TV Series')))
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
        <Filter searchType='TV series' searchValue={search} setSearch={setSearch}/>
        <div  className=' text-xl text-left mini-pc:text-3xl'>TV Series</div>
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
                                <span className='flex gap-1'>
                                    <span>&bull;</span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.75" fillRule="evenodd" clipRule="evenodd" d="M5.448 2.68865H12V12H0V2.68865H2.952L1.332 0.72163L2.268 0.0174588L4.2 2.3453L6.132 0L7.068 0.72163L5.448 2.68865ZM1.2 3.85257V10.8361H7.2V3.85257H1.2ZM10.2 8.50824H9V7.34433H10.2V8.50824ZM9 6.18041H10.2V5.01649H9V6.18041Z" fill="white"/>
                                    </svg>
                                    {movie.category}
                                </span>
                                <span className='flex gap-1'>
                                    <span>&bull;</span> 
                                    {movie.rating}
                                </span>
                            </div>
                            <div className=' text-left text-sm font-medium mini-pc:text-lg'>{movie.title}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
