import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Pages/Home/Home';
import Blogs from './components/Pages/Blogs/Blogs';
import CreatePost from './components/Pages/CreatePost/CreatePost';
import Login from './components/Pages/Login/Login';
import Register from './components/Pages/Register/Register';

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/register' element={<Register/>} />  
            <Route path='/login' element={<Login/>} />
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/createpost' element={<CreatePost/>} />
            <Route path='/' element={<Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
