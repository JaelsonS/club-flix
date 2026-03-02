import axios from 'axios';

// Base da URL da API: https://api.themoviedb.org/3/

//URL da API: movie/now_playing?api_key=60f82ecadab12f17d6d12a0e1bf56ad8&language=pt-PT


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default api;