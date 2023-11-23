import { BASE_URL } from '@/utils/constants';
import axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: false,
  baseURL:BASE_URL
});

export default axiosInstance;