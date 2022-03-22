import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import './App.css';

function App() {
  return (
    <div className='bg-slate-50 flex-col min-h-screen'>
      <header className='flex gap-5 w-5/6 flex-row bg-cyan-700 h-24 items-center text-slate-50'>
        <h2 className='px-4 text-2xl justify-self-end'>Potluck App</h2>
        <nav className='px-4'>
          <Link to='/'>Home</Link>
          <Link to='/signup'>SignUp</Link>
          <Link to='/login'>Login</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='login' element={<Login />} />
      </Routes>
      <footer className='bg-cyan-700 w-5/6 h-24 flex'>
        {/* TODO: Make button hidden if on signup page */}
        <button className='py-2 w-32 my-5 bg-slate-50 shadow-lg rounded-md'>
          Sign Up
        </button>
      </footer>
    </div>
  );
}

export default App;
