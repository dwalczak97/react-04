import axios from "axios"

axios.defaults.baseURL = 'https://api.unsplash.com';
  const API_KEY = 'aMCg-Pgc70Fh4ZPhdk65VnjUyKpVWhniDOpL6tT17es'

const fetchPhoto = async (query = '') => {
    //  const perPage = 9;
    const resp = await axios.get('/search/photos', {
        params: {
            q: query
             },
         headers: {
            Authorization: `Client-ID ${API_KEY}` // Dodaj klucz w nagłówku
          }
    });

    return resp.data;
//   return  query,  resp.data;
};

export default fetchPhoto;


// const accessKey = "aMCg-Pgc70Fh4ZPhdk65VnjUyKpVWhniDOpL6tT17es";
// axios.defaults.baseURL = "https://api.unsplash.com";

// const fetchPhotos = async (query = "", page = 1) => {
//   const perPage = 9;

//   const url = query
//     ? `/search/photos/?client_id=${accessKey}&query=${query}&page=${page}&per_page=${perPage}`
//     : `/photos/?client_id=${accessKey}&page=${page}&per_page=${perPage}`;

//   const response = await axios.get(url);
//   return query ? response.data.results : response.data;
//   console.log(response.data); // pokazuje tablicę 10 obiektów
//   // console.log(response.data[0]);
//   // console.log(response.data[0].urls);
// };

// export default fetchPhotos;

