'use client';

import { Input } from '@nextui-org/input';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
import { Checkbox } from '@nextui-org/checkbox';
import { Button } from '@nextui-org/button';
import { Link } from '@nextui-org/link';
import { useState } from 'react';
import { useMutateLoginUser } from '@/hooks/auth';

export default function LoginForm() {
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });

  const { mutate, isPending, error, isError } = useMutateLoginUser();

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLoginForm({ ...loginForm, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    mutate(loginForm);
  };

  return (
    <form className=''>
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
          name='username'
          placeholder='Username'
          onChange={handleChange}
        />
        <Input
          startContent={<RiLockPasswordLine />}
          isRequired
          variant='underlined'
          type='password'
          name='password'
          placeholder='Password'
          onChange={handleChange}
        />
        <Checkbox size='sm'>Remember me for 2 weeks</Checkbox>
        <Button isLoading={isPending} color='secondary' onClick={handleSubmit}>
          Sign in
        </Button>

        {isError && <p className='text-danger text-small'>{error.message}</p>}

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
