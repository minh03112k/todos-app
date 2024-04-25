import { authApi } from '@/api/auth';
import { useMutation } from '@tanstack/react-query';

export const useMutateLoginUser = () => {
  const mutationLoginUser = async (props: ILoginForm) =>{
    return await authApi.login(props);
  }

  return useMutation({
    mutationFn: mutationLoginUser,
  })
}