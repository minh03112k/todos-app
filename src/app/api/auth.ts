import axios from '../config/appConfig';
import { AppSettings } from './api.settings';

export default {
  login(params: {username: string, password: string}) {
    return axios.post(AppSettings.API_LOGIN, params);
  }
}