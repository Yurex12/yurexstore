import { HiColorSwatch } from 'react-icons/hi';
import FormInput from '../componenets/FormInput';

import googleIcon from '../assets/google.svg';

export default function SignUp() {
  return (
    <>
      <div className='flex min-h-screen flex-1 flex-col px-6 py-7 lg:px-8 bg-white'>
        <div>
          <div className='flex items-center justify-center'>
            <HiColorSwatch className='text-5xl text-brandBrown ' />
          </div>
          <h2 className='mt-4 text-center text-2xl font-semibold leading-9 tracking-tight text-brandBlack'>
            Sign up to get started
          </h2>
        </div>

        <div className='mt-5 sm:mx-auto sm:w-full sm:max-w-sm'>
          <form className='space-y-6' action='#' method='POST'>
            <FormInput label='Username' error=''>
              <input
                id='username'
                name='username'
                type='text'
                autoComplete='username'
                required
                className='px-2 block w-full rounded-md border-0 py-1.5 text-brandBlack shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandBrown sm:text-sm sm:leading-6'
              />
            </FormInput>
            <FormInput label='Email' error=''>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='px-2 block w-full rounded-md border-0 py-1.5 text-brandBlack shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandBrown sm:text-sm sm:leading-6'
              />
            </FormInput>
            <FormInput label='Password' error=''>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='password'
                required
                className='px-2 block w-full rounded-md border-0 py-1.5 text-brandBlack shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandBrown sm:text-sm sm:leading-6'
              />
            </FormInput>
            <FormInput label='Confirm Password' error=''>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='password'
                required
                className='px-2 block w-full rounded-md border-0 py-1.5 text-brandBlack shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brandBrown sm:text-sm sm:leading-6'
              />
            </FormInput>

            <div>
              <button
                type='submit'
                className='flex w-full justify-center rounded-md bg-brandBrown px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-brandBrown/95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brandBrown'
              >
                Sign in
              </button>
            </div>
          </form>

          <div className='mt-5'>
            <div className='flex items-center justify-center gap-x-4'>
              <div className='border-b-2 flex-1 rounded-full'></div>
              <span>or</span>
              <div className='border-b-2 flex-1 rounded-full'></div>
            </div>

            <div className='flex items-center justify-center mt-8 gap-x-3 border-2 py-2 rounded-md border-brandBrown/60'>
              <img src={googleIcon} alt='google' />
              <p className='text-sm'>Sign up with Google</p>
            </div>
          </div>

          <p className='mt-8 text-center text-sm text-gray-500'>
            Already have an account?{' '}
            <a
              href='#'
              className='font-semibold leading-6 text-brandBrown hover:text-brandBrown/85 '
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
