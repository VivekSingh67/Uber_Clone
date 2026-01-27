import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const UserLogout = () => {
  let token = localStorage.getItem("token");
  const navigate = useNavigate()

  axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(() => {
      if ((response.status = 201)) {
        localStorage.removeItem("token");
        navigate('/login')
      }
    });
  return <div>UserLogout</div>;
};

export default UserLogout;
