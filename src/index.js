import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Details from './components/Details';
import NotFound from './components/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='home' element={<Home />} />
      <Route path='login' element={<Login />} />
      <Route path='/details/:id' element={<Details />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
