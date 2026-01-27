import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const { captain, setCaptain } = useContext(CaptainDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    let response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captain/register`,
      captainData,{ withCredentials: true }
    );



    if (response.status == 200) {
      const data = response.data;
      localStorage.setItem("token", JSON.stringify(data.token));
      setCaptain(data);
      navigate("/captain-home");
    }

    setEmail(" ");
    setPassword(" ");
    setFirstName(" ");
    setLastName(" ");
    setVehicleColor(" ");
    setVehicleCapacity(" ");
    setVehicleCapacity(" ");
    setVehicleType(" ");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt="Uber Logo"
        />
        <form onSubmit={submitHandler}>
          {/* Captain Name */}
          <h3 className="text-lg font-medium mb-2">
            What's our Captain's name
          </h3>
          <div className="flex gap-5 mb-5">
            <input
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="First Name"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2"
            />
            <input
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Last Name"
              className="bg-[#eeeeee] rounded px-4 py-2 border w-1/2"
            />
          </div>

          {/* Email */}
          <h3 className="text-lg font-medium mb-2">
            What's our Captain's email
          </h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="email@example.com"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full"
          />

          {/* Password */}
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="password"
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full"
          />

          {/* 🚗 Vehicle Details */}
          <h3 className="text-lg font-medium mb-2">Vehicle Details</h3>

          <input
            required
            value={vehicleColor}
            onChange={(e) => setVehicleColor(e.target.value)}
            type="text"
            placeholder="Vehicle Color"
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full"
          />

          <input
            required
            value={vehiclePlate}
            onChange={(e) => setVehiclePlate(e.target.value)}
            type="text"
            placeholder="Vehicle Plate Number"
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full"
          />

          <input
            required
            value={vehicleCapacity}
            onChange={(e) => setVehicleCapacity(e.target.value)}
            type="number"
            placeholder="Vehicle Capacity"
            className="bg-[#eeeeee] mb-3 rounded px-4 py-2 border w-full"
          />

          <select
            required
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full"
          >
            <option value="">Select Vehicle Type</option>
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="auto">Auto</option>
          </select>

          <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg">
            Register Captain
          </button>
        </form>

        <p className="text-center">
          Already have a account?{" "}
          <Link to="/captain-login" className="text-blue-600">
            Login here
          </Link>
        </p>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service</span> apply.
        </p>
      </div>
    </div>
  );
};

export default CaptainSignup;
