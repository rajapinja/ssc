import axios from 'axios';

export default axios.create({
  // withCredentials: true,
  baseURL: ' https://skillsquad-backend-app-4a40fef00f69.herokuapp.com',
});
