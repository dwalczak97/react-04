import axios from "axios"
axios.defaults.baseURL = 'https://api.unsplash.com/photos/?client_id=ab2-XHdLJySYjnDJEpkdyhr8vMOkgOfxSVBDrY89JGw'
 const fetchPhoto = async (query) => {
    const resp = await axios.get('/search/photos', {
        params: {
            q: query
        }
    })

    return resp.data.hits;
    
}

export default fetchPhoto;


