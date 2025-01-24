import { useState } from "react";
import { useEffect } from "react";
import { Image } from "@mantine/core";

interface CarouselProps {
    images: string[];
}

function Carousel({images}:CarouselProps) {
    const [selectedImage, setSelectedImage] = useState(images[0]);
      let [imagePosition, setImagePosition] = useState(0);
      
      const handleImageClick = () => {
        if(imagePosition<images.length-1){
        imagePosition++;
        setImagePosition(imagePosition)
        setSelectedImage(images[imagePosition])
        console.log(imagePosition)
        }
        else{
          imagePosition=0
          setSelectedImage(images[0])
        }
      }
      
      useEffect(() => {
        const interval = setInterval(handleImageClick,3000); 
        return () => clearInterval(interval);
      }, [imagePosition, images]);
     
  return (
    <Image
         radius="500px"
         h={500}
         w="auto"
         fit='contain'
         src={selectedImage}
         onClick={handleImageClick}/>
  )
}

export default Carousel