import { useState, useEffect } from 'react'
import SearchBar from "./components/searchBar.jsx"
import './App.css'
import fetchPhoto from "../unsplash-api"

const useImage = () => {

  const [ imageList, setImageList] = useState([]);

  useEffect(() =>{
    const getImageList = async ()=>{
      try {
        const image = await fetchPhoto();
        setImageList(image)
      } catch (error){
        console.log(error)
      } finally {
        console.log(imageList)
      }}
getImageList();
  }, []);
  return{imageList}
};



function App() {
  const { imageList } = useImage;

  return (
    <>
    <SearchBar/>
    

    </>
  )
}

export default App
