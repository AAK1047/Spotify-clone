import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({image,name,desc,id}) => {
    const{playwithId}=useContext(PlayerContext)
  return (
    <div>
       <div onClick={()=>playwithId(id)} className='min-w-[180px] px-3 rounded cursor-pointer hover:bg-[#ffffff26 ]'>
      <img className='rounded' src={image} alt="" />
      <p className='font-bold mt-2 mb-1'>{name} </p>
      <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
    </div>
  )
}

export default SongItem