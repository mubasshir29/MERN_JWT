import logo from './logo.svg';
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './Components/Home';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Profile from './Components/Profile';
import SignupSuccess from './Components/SignupSuccess';

function App() {
  return (
    <div>
      <div className='bg-slate-700 w-full flex justify-center'>
        <NavLink to='/'><button className='bg-green-500 p-2 mx-auto text-white w-[120px] rounded-xl'>Home</button></NavLink>
      </div>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/signup' element={<Signup/>} />
        <Route exact path='/profile' element={<Profile/>} />
        <Route exact path='/signupSuccess' element={<SignupSuccess/>} />
      </Routes>
    </div>
  );
}

export default App;
