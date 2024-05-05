import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { INewTask } from '@/interfaces/task.interface';
import { useMutation } from '@tanstack/react-query';
import { taskApi } from '@/api/tasks';

export const useMutateCreateNewTask = () => {
  const mutationCreateNewTask = async (props: INewTask) => {
    return await taskApi.createTask(props);
  };

  return useMutation({
    mutationFn: mutationCreateNewTask,
  });
};

export const useCreateTaskForm = () => {
  const schema = yup.object({
    title: yup.string().required(),
    tag: yup.string().required(),
    body: yup.string().required(),
  }).required();

  const { mutate: createNewTask, isPending, error, isError, isSuccess } = useMutateCreateNewTask();

  const { register, handleSubmit, reset, formState: { errors: validationErrors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: INewTask) => {
    createNewTask(data);
    if (isSuccess) reset();
  };

  const handleCancel = () => {
    reset();
  }

  return { register, handleSubmit, handleCancel, errors: validationErrors, onSubmit, isPending, error, isError, isSuccess };
};