import { useState, useEffect} from "react" 

export default function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://week-6-api.vercel.app/api/images"
      );
      const data = await response.json();
      setImages(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Images</h1>
      <ul>
        {images.map((image) => (
          <li key={image.id}>{image.title}</li>
        ))}
      </ul>
    </div>
  );
}