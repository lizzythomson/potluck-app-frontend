import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='bg-slate-50 flex-column'>
      <header className='flex gap-5 w-5/6 flex-row bg-cyan-700 h-24 items-center text-slate-50'>
        <h2 className='px-4 text-2xl justify-self-end'>Potluck App</h2>
        <nav className='px-4'>
          <Link to='/'>Home</Link>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link>
        </nav>
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='register' element={<div>Register</div>} />
        <Route path='login' element={<div>Login</div>} />
      </Routes>
      <footer className='bg-cyan-700 w-5/6 h-24 flex'>
        <button className='bg-slate-50 rounded-lg w-28 self-center'>
          Get Started!
        </button>
      </footer>
    </div>
  );
}

export default App;
