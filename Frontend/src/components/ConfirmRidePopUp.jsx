import React from 'react'
import { Link } from 'react-router-dom';

const ConfirmRidePopUp = (props) => {
  return (
   <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setRidePopUpPanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>

      <h3 className="text-2xl font-semibold mb-5">Confirm this rode to start</h3>
      <div className="flex items-center justify-between p-3 bg-yellow-400 rounded-lg mt-4">
        <div className="flex items-center gap-3">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://i.redd.it/yaw8d7pg9lcb1.jpg"
            alt="user"
          />
          <h2 className="text-lg font-medium">Harsh Patel</h2>
        </div>

        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>

      <div className="flex justify-between flex-col items-center">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className="ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Kankariya Talab, Bhopal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 p-3 border-b-1">
            <i className="ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹193.20</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
            </div>
          </div>
        </div>
      </div>

      <Link to='/captain-riding' className="w-full flex justify-center mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg">
        Confirm
      </Link>
      <button onClick={() => {
        props.setConfirmRidePopUpPanel(false)
        props.setRidePopUpPanel(false)
      }} className="w-full mt-5 bg-red-700 text-white font-semibold p-2 rounded-lg">
        Cancel
      </button>
    </div>
  )
}

export default ConfirmRidePopUp