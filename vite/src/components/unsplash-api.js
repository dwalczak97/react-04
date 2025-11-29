import axios from "axios"

axios.defaults.baseURL = "https://api.unsplash.com/photos/?ab2-XHdLJySYjnDJEpkdyhr8vMOkgOfxSVBDrY89JGw"


export const fetchPhoto = async () => {
    const resp = await axios.get('/photos')
    return resp.data.results
    console.log(resp.data.results)
}