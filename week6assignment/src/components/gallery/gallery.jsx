import { useState, useEffect} from "react" 
export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      let response = await fetch(
        "https://week-6-api.vercel.app/api/images"
      );
      let data = await response.json();
      setImages(data);
    }
    fetchImages();
  }, []);

  return (
    <div>
      <h1>Images</h1>
      <ul>
        {images.map((image) => (
          <ul key={image.id}>{image.title}&gt;{image.url}&gt;{image.alt}</ul>
        ))}
      </ul>
    </div>
  );
}
