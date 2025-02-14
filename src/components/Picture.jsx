import React from 'react'
import { picture1, picture2, picture3, picture4, picture5 } from '../assets'
import Carousel from './Carousel'
import { ImageCard } from './ImageCard'
import {ArrowLeft } from './icons'
import { useNavigate } from 'react-router-dom'

function Picture() {
  const navigate = useNavigate();

  const pictures = [

    { 
      Image: picture1, 
      title: 'PEPE\'S YUMMY FOOD', 
      description: "'Hey pretend I said something funny rq'"
    },
    { 
      Image: picture2, 
      title: 'HEY SHAWTY ITS YO BIRTHDAY', 
      description: "That time that we had bottomless drinks...but someone you didnt throw up YAYAY! I love seeing u on ur birthday"
    },   
    { 
      Image: picture3, 
      title: 'SURPRISE SHAWTYYYYY', 
      description: "'hey my brother is going to drop some stuff for you can you pick him up? im in the plane btw'"
    },   
    { 
      Image: picture4, 
      title: 'NAWW COVID ROMANCE', 
      description: "I was so proud of coordinating this photo! You weren't listening to me tho 😡"
    },   
    { 
      Image: picture5, 
      title: 'OUR FIRST (maybe technically second) MEEEET', 
      description: "When we sat under the trees and exchanged gifts and we heard those mfs playing bagpipes smh"
    }
  ]
  return (
  
    <div className="min-h-screen bg-black/20 flex flex-col items-center justify-center">

      <div className="w-[90%] max-w-[400px]">
        <h1 className="text-2xl sm:text-2xl font-bold -mb-4 drop-shadow-lg text-white text-center">
            Here are some great times you were nice to me and not smacking me 😁
          </h1>
        <Carousel>
          {pictures.map(({Image,title,description,index}) => (
            <ImageCard
              key={index}
              imageUrl={Image}
              altText="Placeholder image"
              title={title}
              description={description}
            />
          ))}
        </Carousel>

        <div className="flex justify-center w-full mt-12">
          <button
            className="px-4 py-2 flex justify-center items-center bg-white/20 gap-2 hover:bg-white/30 backdrop-blur-sm text-white text-sm border border-white/50 rounded-lg"
            onClick={() => navigate('/recap')}
          >
            <ArrowLeft /> Previous page
          </button>

        </div>
      </div>
    </div>


  )
}

export default Picture