import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://storage.googleapis.com/aller-structure-task/test_data.json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
