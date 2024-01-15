import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

//postcard is card where we click and go to the complete card info this is samll card present
//in the home page 
function PostCard({
    $id,
    title,
    featuredImage
}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className="w-full bg-gray-500 rounded-xl p-4">
            <div className="w-full justify-center mb-4">
                <img src={appwriteService.getFilePreview(featuredImage)} 
                alt={title} 
                className='rounded-xl'
                />
            </div>
        </div>
        <h1
        className='text-xl font-bold'
        >{title}</h1>
    </Link>
  )
}

export default PostCard