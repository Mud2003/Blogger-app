import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Pages/Home/Home';
import Blogs from './components/Pages/Blogs/Blogs';
import CreatePost from './components/Pages/CreatePost/CreatePost';

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/blogs' element={<Blogs />} />
            <Route path='/createpost' element={<CreatePost/>} />
            <Route path='/' element={<Home />} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
