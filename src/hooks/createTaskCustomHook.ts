import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

interface Task {
  title: string;
  tag: string;
  body: string;
}

export const useCreateTaskForm = () => {
  const schema = yup.object({
    title: yup.string().required(),
    tag: yup.string().required(),
    body: yup.string().required(),
  }).required();

  const { register, handleSubmit, formState: { errors: validationErrors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Task) => {
    alert(JSON.stringify(data));
    console.log(data);
  };

  return { register, handleSubmit, errors: validationErrors, onSubmit };
};