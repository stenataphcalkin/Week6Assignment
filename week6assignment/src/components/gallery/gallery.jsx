import { useState, useEffect } from "react";
//Need to style, placing for now
import "./gallery.css";

//Create thumbnail hallery
export default function Gallery() {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    async function fetchImages() 
    {
      //REMEMBER TO INCLUDE VITE_ on imports. This will save you so many headaches. PLEASE remember this. 
      const response = await fetch(import.meta.env.VITE_FROG_IMAGES_API);
      const data = await response.json();
      setImages(data);
    }
    fetchImages();
  }, []);

//Display gallery thumbnails
  return (
    <div className="photoGallery">
      <h1>The Frogatorium</h1>
      {/* //Remove the H1 when everything scales, this is just here for my dwindling sanity so I can absolutely scream it in delight as if it is some magical spectacle to behold. */}
      <div tabIndex={0} className="thumbnail-container">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setCurrentImage(image)}
          >
            <img src={image.url} alt={image.alt} />
          </button>
        ))}
      </div>
      {currentImage && (
        //Need to style the below so that it fits width
        //Media query on below images to scale for mobile
  <div className="current-image-container">
    <img src={currentImage.url} alt={currentImage.alt} />
    <p>{currentImage.alt}</p>
  </div>
)}
    </div>
  )
}