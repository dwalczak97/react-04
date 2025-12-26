import axios from "axios"

const BASE_URL = "https://api.unsplash.com/"
const API_KEY = 'ab2-XHdLJySYjnDJEpkdyhr8vMOkgOfxSVBDrY89JGw';

 const fetchPhoto = async (query) => {
    const resp = await axios.get(BASE_URL, {
      params: {
        key: API_KEY
        q: query,},
    });

    return resp.data.hits;
    
}

export default fetchPhoto;


