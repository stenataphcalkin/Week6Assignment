import { useState, useEffect } from "react"; 
import "./gallery.css";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [setCurrentImage] = useState(null);

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch(import.meta.FROG_IMAGES_API);
      const data = await response.json();
      setImages(data);
    }
    fetchImages();
  }, []);

  return (
    <div className="photoGallery">
      <h1>Images</h1>
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setCurrentImage(image)}
          >
                {/*!!!! Need to put thumbnails somewhere in this, revist once everything renders. */}
            <img src={image.url} alt={image.alt}/>
          </button>
        ))}
    </div>
  );
}