import React from 'react'   
import ImageCard from './ImageCard'
import '../css/ImageList.css'


const ImageList = (props) => {
    
    const getImages = props.images.map((image)=>{
        return <ImageCard image={image}/>
    })

    return(
        <div className='image-list'>
            {getImages}
        </div>
    )
}

export default ImageList;