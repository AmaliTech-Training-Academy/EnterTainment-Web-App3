import React,{useEffect, useState} from 'react'
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import rawData from './../data.json' 
import Filter from '../components/Filter'
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
                                <span className='flex gap-1'>
                                    <span>&bull;</span>
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.75" fillRule="evenodd" clipRule="evenodd" d="M10.1733 0H1.82667C0.817827 0 0 0.817827 0 1.82667V10.1733C0 11.1822 0.817827 12 1.82667 12H10.1733C10.6578 12 11.1224 11.8075 11.465 11.465C11.8075 11.1224 12 10.6578 12 10.1733V1.82667C12 1.3422 11.8075 0.877585 11.465 0.535018C11.1224 0.192452 10.6578 0 10.1733 0ZM2.4 5.4H1.2V4.2H2.4V5.4ZM2.4 6.6H1.2V7.8H2.4V6.6ZM10.8 5.4H9.6V4.2H10.8V5.4ZM10.8 6.6H9.6V7.8H10.8V6.6ZM10.8 1.644V2.4H9.6V1.2H10.356C10.4738 1.2 10.5867 1.24678 10.67 1.33004C10.7532 1.41331 10.8 1.52624 10.8 1.644ZM2.4 1.2H1.644C1.52624 1.2 1.41331 1.24678 1.33004 1.33004C1.24678 1.41331 1.2 1.52624 1.2 1.644V2.4H2.4V1.2ZM1.2 10.356V9.6H2.4V10.8H1.644C1.52624 10.8 1.41331 10.7532 1.33004 10.67C1.24678 10.5867 1.2 10.4738 1.2 10.356ZM10.356 10.8C10.6012 10.8 10.8 10.6012 10.8 10.356V9.6H9.6V10.8H10.356Z" fill="white"/>
                                    </svg>
                                    {movie.category}
                                </span>
                                <span className='flex gap-1'>
                                    <span>&bull;</span>
                                    {movie.rating}
                                </span>
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
