import React, { useEffect, useState } from "react";

import "./App.css";
import Mainpage from "./MainPage";
import Navbar from "./Navbar";
import { Route, Routes, useNavigate } from "react-router-dom";
import ProductDetails from "./MainPage/components/ProductDetails";
import Login from "./Utils/login";
import { login } from "./api/request";
import { UserContext } from "./context/UserContext";
import { user } from "./types/user";
import Logout from "./Utils/logout";
import Cart from "./cart";

function App() {
  const navigate = useNavigate();

  const str = localStorage.getItem('user');
        var userObj: user = {} as user;
        if (str != null) {
            userObj = JSON.parse(str);
        }
  const [user, setUser] = useState<Boolean>(
    localStorage.getItem("user") == null ? false : true
  );
  function loginUser(username: string, password: string) {
    login(username, password).then((res) => {
      // console.log(res)
      // Cookies.set('access-token', res.token, { expires: 7 });
      // Cookies.set('userId',res.id,{ expires: 7 })
      setUser(true);
      localStorage.setItem("user", JSON.stringify(res));
      navigate("/");
    });
  }

  function logoutUser() {
    localStorage.removeItem("user");
    setUser(false);
    navigate("/");
  }
  return (
    <div className="App">
      <UserContext.Provider value={userObj}>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/login" element={<Login login={loginUser} />} />
            <Route path="/logout" element={<Logout logout={logoutUser} />} />
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
