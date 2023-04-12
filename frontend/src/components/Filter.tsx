import React from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { search } from '../types'

export default function Filter({searchType,searchValue,setSearch}:search) {
  return (
    <div className=' text-white w-full flex gap-4 pt-3'>
        <SearchRoundedIcon/>
      <input 
        type="text"
        placeholder={'Search for '+searchType}
        className=' bg-transparent outline-none'
        onChange={(e)=>{
          setSearch(e.target.value)
        }}
     />
    </div>
  )
}
