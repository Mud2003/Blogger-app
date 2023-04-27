import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Pages/Home/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Home/>
      </BrowserRouter>
    </div>
  );
}

export default App;
