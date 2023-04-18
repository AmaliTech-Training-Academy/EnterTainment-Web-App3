import React,{useEffect, useState} from 'react'
import rawData from './../data.json' 
import RegularCard from '../components/RegularCard';


export default function Movies() {
    
    const [data, setData] = useState(rawData)

    useEffect(()=>{
        setData(data.filter((movie)=>(movie.category==='Movie')))
    },[])


  return (
    <div className='page-container' >
        <div className="regular-veiw">
            <div  className=' section-title text-left'>Movies</div>
            <div className='regular-container mt-4'>
                <RegularCard data= {data}/>
            </div>
        </div>
    </div>
  )
}
