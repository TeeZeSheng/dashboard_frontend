import axios from "axios";

const axiosInstance = axios.create({

    baseURL: 'https://dashboard-backend-e93b.onrender.com/api/v1',
    timeout: 100000000,
    
  });

export default axiosInstance
