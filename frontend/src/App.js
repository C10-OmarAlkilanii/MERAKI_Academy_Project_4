import React, { useState, createContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Com404 from './components/Com404';
import Login from './components/Login';
import Dashbord from './components/Dashbord';
import AddProduct from './components/AddProduct/meat';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Baverage from './components/AddProduct/Baverage';
import Electronic from './components/AddProduct/Electronic';
import BustanFresh from './components/AddProduct/BustanFresh';

export const userContext = createContext();

const App = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <userContext.Provider value={{ isLogin, setIsLogin, token, setToken }}>
      <div className="App d-flex flex-column min-vh-100">
        <Navbar />
        <div className="container flex-grow-1 mt-5">
          <Routes>
            <Route path="/" element={<Dashbord />} />
            <Route path="/category" element={<Dashbord />} />
            <Route path="/product/Meat" element={<AddProduct />} />
            <Route path="/product/Baverage" element={<Baverage />} />
            <Route path="/product/Electronic" element={<Electronic />} />
            <Route path="/product/BustanFresh" element={<BustanFresh />} />
            <Route path="/users/register" element={<Register />} />
            <Route path="/users/login" element={<Login />} />
            <Route path="*" element={<Com404 />} />
          </Routes>
        </div>
        <footer className="bg-dark text-light text-center py-3">
          &copy; Baladi
        </footer>
      </div>
    </userContext.Provider>
  );
}

export default App;
