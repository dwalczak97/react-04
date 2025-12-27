import { useState, useEffect } from 'react'
import SearchBar from "./components/searchBar.jsx"
import './App.css'
import fetchPhoto from "./components/unsplash-api.js"

import ImageGallery from "./components/imageGallery.jsx"


  // const [ imageList, setImageList] = useState([]);


function App() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //  useEffect(() => {
	
  //   fetchPhoto();
  //   console.log(resp.data.hits)
  // }, []);
// useEffect(() => {
//     async function fetchArticles() {
//       try {
//         setLoading(true);
// 				// 2. Używanie funkcji HTTP
// 				const data = await fetchArticlesWithTopic("react");
//         setArticles(data);
//       } catch (error) {
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchArticles();
//   }, []);

// useEffect(() => {
//   async function fetchImage () {
//     try {
//       setLoading(true);
//       const data = await fetchPhoto(query);
//       setImages(data)
//      }
//     catch (error) {
//       setError (true);
//     }
//     finally{
//       setLoading(false);
//     } }
//     fetchImage();
//     console.log(images)
// }, []);
	const handleSearch = async (query) => {
    try {
			setArticles([]);
			setError(false);
      setLoading(true);
      const data = await fetchPhoto(query)
      setImages(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
     console.log(images)
    }
  };
  return (
    <>
     {loading && <p>Loading data, please wait...</p>}
      {error && (
        <p>Whoops, something went wrong! Please try reloading this page!</p>
      )}
    <SearchBar onSearch={handleSearch} />
    {/* <ImageGallery img={images}/> */}
    
{images.length > 0 && <ImageGallery img={images} />}
    </>
  )
}

export default App
