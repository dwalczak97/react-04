import { useState, useEffect } from 'react'
import SearchBar from "./components/searchBar.jsx"
import './App.css'
// import fetchPhoto from "./components/unsplash-api.js"
import axios from 'axios'
import ImageGallery from "./components/imageGallery.jsx"


  // const [ imageList, setImageList] = useState([]);


function App() {
  

  return (
    <>
    <SearchBar/>
    {/* <ImageGallery /> */}
    

    </>
  )
}

export default App
