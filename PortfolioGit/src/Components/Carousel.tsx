import { useState } from "react"; // Importing useState hook for managing component state
import { useEffect } from "react"; // Importing useEffect hook for side effects
import { Image } from "@mantine/core"; // Importing Image component from Mantine for displaying images
import useFetch from "../useFetch";

// Defining the interface for Carousel props

interface CarouselImage {
  imageUrl: string[];
}

interface CarouselData {
  id: number;
  images: CarouselImage[];
}

// Carousel functional component
function Carousel() {
 // const [data] = useFetch('http://localhost:5260/Carousel')
// Use fetch without modifying the hook
const [data] = useFetch(`https://localhost:44368/api/Home/carousel/7`);
console.log("Fetched Data:", data);

// Type the data after fetching
const carouselData = data as CarouselData | undefined; // Ensure correct typing

const images = carouselData?.images.flatMap(img => img.imageUrl) || [];
  //const images = data.map((item) => Object.values(item)[1]);
//Map function creates a new array by looping over each item in the given array (in this case data)
//and applying a given function (everything after =>) to each entry
//item is essentially just a variable to represent each array entry (like a function argument)
//Object.values(item) extracts just the values of the data array (ignoring keys)
//[1] means I'm extracting the second value and not the first. In this case, I know the array has two values
// 'key' and 'value' (key in this case is my own given value and not actually the assigned key ID)
//So in conclusion, the above line extracts the second value from the data array and creates a new array with just those values

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
    < >
    
    <Image
      radius="500px" // Styling: setting the border radius of the image
      h={500} // Styling: setting the height of the image
      w="auto" // Styling: automatic width to maintain aspect ratio
      fit="contain" // Ensures the image fits within the given dimensions
      src={selectedImage} // Source of the image to display
      onClick={handleImageClick} // Attach the click handler to change the image
    />
    </>
  );
}

export default Carousel; // Exporting the Carousel component for use in other parts of the application
