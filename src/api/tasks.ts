import axios from '@/config/appConfig';
import { AppSettings } from '@/api/api.settings';
import { INewTask } from '@/interfaces/task.interface';

export const taskApi = {
  createTask(params: INewTask) {
    return axios.post(AppSettings.API_CREATE_TASK, params);
  },

  getTasks() {
    return axios.get(AppSettings.API_GET_TASKS)
  }
}