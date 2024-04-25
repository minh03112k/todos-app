import axios from 'axios';
import { ENV } from "@/config/env";

export default axios.create({
  baseURL: ENV.BASE_URL,
  responseType: 'json',
  timeout: 1200000
});

