import React from 'react'
import { useNavigate } from 'react-router-dom';
const Login = ({isLogin, setIsLogin }) => {
    const navigate = useNavigate();
    const handleLogin = () => {
      setIsLogin(!isLogin);
      navigate('/privateRoute');
    };
  
    return (
      <div>
       { <button onClick={handleLogin}>{isLogin ? 'Logout' : 'Login'}</button>}
      </div>
    );
  };
export default Login