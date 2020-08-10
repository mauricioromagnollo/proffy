import axios from 'axios';

// Store in a dotenv file
const MOBILE_EXPO_IP='192.168.x.x';
const SERVER_PORT=3333
// ------------------------

const api = axios.create({
  baseURL: `http://${MOBILE_EXPO_IP}:${SERVER_PORT}`
});

export default api;
