
import React, { useState } from "react";
import './../styles/App.css'
import {Route,Routes} from "react-router-dom"
import { Link } from "react-router-dom";
import Playground from "../pages/playground";
import PrivateRoute from "./PrivateRoute";
import Login from "./Login";



// const App = () => {
//   const [isLogin, setIsLogin] = useState(false);

//   return (
//     <Router>
//       <div className="main-container">
//         <Link to="/privateRoute">PlayGround</Link>
//         <Link to="/login">Login</Link>

//         <PrivateRoute path="/privateRoute" component={Playground} isLogin={isLogin} />
//         <Route path="/login" render={(props) => <Login {...props} setIsLogin={setIsLogin} />} />
//       </div>
//     </Router>
//   );
// };

// export default App;

const App = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="main-container">
      <Link to="/privateRoute">PlayGround</Link><br></br>
      <Link to="/login">Login</Link>
      {isLogin ? <p>You are currently logged in.</p> : <p>You are currently logged out.</p>}
      <Routes>
        <Route path="/login" element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />} />
        <Route path="/privateRoute" element={
          <PrivateRoute isLogin={isLogin}>
            <Playground />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  );
};

export default App;