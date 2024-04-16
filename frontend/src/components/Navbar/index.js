import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../App';

const Navbar = () => {
  const { isLogin, setIsLogin, setToken } = useContext(userContext);

  const logoutFun = () => {
    localStorage.clear();
    setToken(null);
    setIsLogin(false);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

      <Link to="/" className="navbar-brand">
        <img
          src={'https://img.freepik.com/premium-vector/grocery-shopping-business-commerce-logo-design-template_76712-487.jpg'}
          width="100"
          height="50"
          alt="Your Logo"
          className="rounded-circle"
        />
      </Link>
      
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {isLogin ? (
              <>
                <li className="nav-item">
                  <Link to="/category" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link to="/cart" className="nav-link">Cart</Link>
                </li>
                <li className="nav-item">
                  <button onClick={logoutFun} className="btn btn-danger">Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button className="btn btn-primary">
                    <Link to="/users/register" className="nav-link">Register</Link>
                  </button>
                </li>
                <li className="nav-item">
                  <button className="btn btn-success">
                    <Link to="/users/login" className="nav-link">Login</Link>
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
