import { useState } from "react"; // Importing useState hook for managing component state
import { useEffect } from "react"; // Importing useEffect hook for side effects
import { Image } from "@mantine/core"; // Importing Image component from Mantine for displaying images

// Defining the interface for Carousel props
interface CarouselProps {
  images: string[]; // An array of image URLs to display in the carousel
}

// Carousel functional component
function Carousel({ images }: CarouselProps) {
  // State to track the currently selected image
  const [selectedImage, setSelectedImage] = useState(images[0]);

  // State to track the current position of the image in the array
  let [imagePosition, setImagePosition] = useState(0);

  // Function to handle image click events
  const handleImageClick = () => {
    if (imagePosition < images.length - 1) {
      // If not at the last image, move to the next one
      imagePosition++; // Increment image position
      setImagePosition(imagePosition); // Update state with new position
      setSelectedImage(images[imagePosition]); // Set the selected image
      console.log(imagePosition); // Log the current position
    } else {
      // If at the last image, reset to the first image
      imagePosition = 0;
      setSelectedImage(images[0]); // Reset the selected image
    }
  };

  // useEffect to automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(handleImageClick, 3000); // Set an interval to call handleImageClick every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval when the component unmounts or dependencies change
  }, [imagePosition, images]); // Dependencies include imagePosition and images array

  // Returning the Image component with the selected image
  return (
    <Image
      radius="500px" // Styling: setting the border radius of the image
      h={500} // Styling: setting the height of the image
      w="auto" // Styling: automatic width to maintain aspect ratio
      fit="contain" // Ensures the image fits within the given dimensions
      src={selectedImage} // Source of the image to display
      onClick={handleImageClick} // Attach the click handler to change the image
    />
  );
}

export default Carousel; // Exporting the Carousel component for use in other parts of the application
