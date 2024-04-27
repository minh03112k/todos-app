'use client';

import { Input } from '@nextui-org/input';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Checkbox } from '@nextui-org/checkbox';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { useLoginForm } from '@/hooks/authCustomHooks';
import { AxiosError } from 'axios';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    errors: formErrors,
    onSubmit, isPending,
    error: requestError,
    isError,
  } = useLoginForm();

  return (
    <form className='' onSubmit={handleSubmit(onSubmit)}>
      <div className='text-center mb-8 text-base leading-6'>
        <h1 className='text-3xl font-medium text-[#622A75] mb-4'>
          Sign in to Todos App
        </h1>
        Don&apos;t have an account?{' '}
        <Link className='text-[#3F3FDF]' href='#' underline='always'>
          Sign up now
        </Link>
      </div>
      <div className='flex w-full flex-col flex-wrap md:flex-nowrap gap-8'>
        <Input
          startContent={<AiOutlineUser />}
          isRequired
          variant='underlined'
          type='username'
          placeholder='Username'
          {...register("username", { required: true })}
        />
        <Input
          startContent={<RiLockPasswordLine />}
          isRequired
          variant='underlined'
          type='password'
          {...register("password")}
          placeholder='Password'
          isInvalid={!!formErrors.password}
          errorMessage={formErrors.password?.message}
        />
        <Checkbox size='sm'>Remember me for 2 weeks</Checkbox>
        <Button isLoading={isPending} color='secondary' type='submit'>
          Sign in
        </Button>

        {isError && <p className='text-danger text-small'>{requestError instanceof AxiosError ? requestError?.response?.data?.message : requestError?.message}</p>}

        <Link
          href='#'
          underline='always'
          className='self-center text-[#3F3FDF]'
        >
          Forgot your password?
        </Link>
      </div>
    </form>
  );
}
