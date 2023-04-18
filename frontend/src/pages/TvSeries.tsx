import React,{useEffect, useState} from 'react'
import rawData from '../data.json' 
import RegularCard from '../components/RegularCard';

export default function TvSeries() {
    
    const [data, setData] = useState(rawData)

    useEffect(()=>{
        setData(data.filter((movie)=>(movie.category==='TV Series')))
    },[])

  return (
    <div className='page-container' >
        <div className="regular-veiw">
            <p  className=' section-title text-left'>Movies</p>
            <div className='regular-container mt-4'>
                <RegularCard data= {data}/>
            </div>
        </div>
    </div>
  )
}
