import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";
const CaptainProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const {captain, setCaptain} = useContext(CaptainDataContext)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {    
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/captain/profile`,{
        withCredentials: true
      })
      .then((response) => {
        if (response.status === 200) {
          setCaptain(response.data.captain);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        navigate("/captain-login");
      });
  }, [navigate]);

  if(isLoading){
    return(
        <div>Loading...</div>
    )
  }

  return <div>{children}</div>;
};

export default CaptainProtectWrapper;
