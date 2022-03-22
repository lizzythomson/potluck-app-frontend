const Login = () => {
  return (
    <div className='flex flex-col items-center w-5/6'>
      <h1 className='px-4 text-2xl py-8'>Login</h1>
      <form className='flex flex-col w-4/6 gap-2'>
        <label htmlFor='username'>UserName</label>
        <input
          id='username'
          type='text'
          className='border-gray-300 rounded-md border-solid border-2 h-8 shadow-lg'
        />
        <label htmlFor='password' type='password'>
          Password
        </label>
        <input
          id='password'
          className='border-gray-300 rounded-md border-solid border-2 h-8 shadow-lg'
        />
        <button className='py-2 w-24 my-4 bg-white shadow-lg border-gray-300 rounded-md border-solid border-2'>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
