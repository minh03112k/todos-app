import axios from '@/config/appConfig';
import { AppSettings } from './api.settings';

export const authApi = {
  login(params: ILoginForm) {
    return axios.post(AppSettings.API_LOGIN, params);
  }
}