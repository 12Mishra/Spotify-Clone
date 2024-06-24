import React from 'react'
import Navbar from './Navbar'
import AlbumData from './AlbumData'
import { albumsData } from '../assets/assets'
import { songsData   } from '../assets/assets'
const DisplayHome = () => {
  return (
    <>
      <Navbar />
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {albumsData.map((item, index) => (
            <AlbumData 
              key={index} 
              name={item.name} 
              desc={item.desc} 
              id={item.id} 
              image={item.image} 
            />
          ))}
        </div>
      </div>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {songsData.map((item, index) => (
            <AlbumData 
              key={index} 
              name={item.name} 
              desc={item.desc} 
              id={item.id} 
              image={item.image} 
            />
          ))}
        </div>
      </div>
      
    </>
  )
}

export default DisplayHome
