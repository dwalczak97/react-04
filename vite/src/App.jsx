import { useState, useEffect } from 'react'
import SearchBar from "./components/searchBar.jsx"
import './App.css'
// import fetchPhoto from "./components/unsplash-api.js"
import axios from 'axios'
import ImageGallery from "./components/imageGallery.jsx"

const useImage = () => {

  const [ imageList, setImageList] = useState([]);

  useEffect(() =>{
    const getImageList = async ()=>{
      try {
        const image = await axios.get("https://rickandmortyapi.com/api/character")
          
          // params:{
          //   query: query,
          //   per_page: 15,
          // }
        
        console.log(image.data)
        setImageList(image.data.results)
      } catch (error){
        console.log("błąd")
      }}
    
getImageList();
  }, []);

  return [imageList]
  
};

// żle bo moje api ma pytac na buttonie

function App() {
  const { imageList } = useImage();

  return (
    <>
    <SearchBar/>
    {/* <ImageGallery img={imageList}/> */}
    

    </>
  )
}

export default App
