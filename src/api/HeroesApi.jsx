import axios from 'axios';

const baseURL = 'https://api-superheroes-fimlm.herokuapp.com';

const heroesApi = axios.create({ baseURL });

export default heroesApi;