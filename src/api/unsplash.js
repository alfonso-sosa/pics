import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID 7c666212219a9abdadbfc7ac2d7f52128a6cfea3c607571715131f98f2e21f02'
  }
});
