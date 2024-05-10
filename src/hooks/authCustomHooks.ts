import { authApi } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { redirect } from 'next/navigation';

export const useMutateLoginUser = () => {
  const mutationLoginUser = async (props: ILoginForm) =>{
    return await authApi.login(props);
  }

  return useMutation({
    mutationFn: mutationLoginUser,
    onSuccess: () => {
      redirect('/')
    }
  })
}

export const useLoginForm = () => {
  const schema = yup.object({
    username: yup.string().required(),
    password: yup.string().min(6).required(),
  }).required();

  const { mutate: login, isPending, error, isError, data: loginRes, isSuccess } = useMutateLoginUser();

  const { register, handleSubmit, formState: { errors: validationErrors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: ILoginForm) => login(data);

  return { register, handleSubmit, errors: validationErrors, onSubmit, isPending, error, isError, loginRes, isSuccess };
};