import React, { useState } from 'react';

const initialValues = {
  username: '',
  password: '',
  email: '',
};

const SignUp = () => {
  const [formValues, setFormValues] = useState(initialValues);

  const onChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  return (
    <div className='flex flex-col items-center w-5/6'>
      <h1 className='px-4 text-2xl py-8'>Create Your Account</h1>
      <form className='flex flex-col w-4/6 gap-2'>
        <label htmlFor='username'>UserName</label>
        <input
          id='username'
          type='text'
          value={formValues.username}
          onChange={onChange}
          className='border-gray-300 rounded-md border-solid border-2 h-8 shadow-lg'
        />
        <label htmlFor='email' type='text'>
          Email
        </label>
        <input
          id='email'
          value={formValues.email}
          name='email'
          type='text'
          onChange={onChange}
          className='border-gray-300 rounded-md border-solid border-2 h-8 shadow-lg'
        />
        <label htmlFor='password' type='password'>
          Password
        </label>
        <input
          id='password'
          value={formValues.password}
          name='password'
          type='password'
          onChange={onChange}
          className='border-gray-300 rounded-md border-solid border-2 h-8 shadow-lg'
        />
        <button className='py-2 w-24 my-4 bg-white shadow-lg border-gray-300 rounded-md border-solid border-2'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
