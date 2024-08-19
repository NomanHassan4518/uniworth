import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const dates = ["Date", ...days];
  const months = [
    "Month",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = Array.from({ length: 2005 - 1950 }, (_, i) => 1950 + i);
  const years = ["Year", ...year];

  return (
    <div className="mt-14 fontStyle ">
      <div className="flex items-center space-x-4 px-10 py-1 fontStyle  bg-[#f8f8f8]">
        <Link to="/">Home</Link>
        <span>|</span>
        <p>Create Account</p>
      </div>

      <div className="mt-8 px-8">
        <h1 className="text-[25px] font-bold uppercase">create account</h1>
        <div className="mt-4 bg-[#f8f8f8] p-7 border-2">
          <div className=" grid grid-cols-2 gap-6">
            <div>
              <label htmlFor="" className="block font-semibold">
                Full Name<span className="text-[#ed1c24]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="border py-3 px-6 mt-1 w-full placeholder:text-sm text-gray-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="" className="block font-semibold">
                Email Address<span className="text-[#ed1c24]">*</span>
              </label>
              <input
                type="email"
                placeholder="Email address"
                className="border py-3 px-6 mt-1 w-full placeholder:text-sm text-gray-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="" className="block font-semibold">
                Mobile No.<span className="text-[#ed1c24]">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Mobile No"
                className="border py-3 px-6 mt-1 w-full placeholder:text-sm text-gray-500 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="" className="block font-semibold">
                Date of Birth
              </label>
              <div className="grid grid-cols-3 gap-4">
                <select className="border py-3 px-6 mt-1 w-full appearance-none">
                  {dates.map((day, index) => (
                    <option key={index} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                <select className="border py-3 px-6 mt-1 w-full appearance-none">
                  {months.map((day, index) => (
                    <option key={index} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
                <select className="border py-3 px-6 mt-1 w-full appearance-none">
                  {years.map((day, index) => (
                    <option key={index} value={day}>
                      {day}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="">
              <label htmlFor="" className="block font-semibold">
                Password<span className="text-[#ed1c24]">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border py-3 px-6 mt-1 w-full placeholder:text-sm text-gray-500 focus:outline-none"
              />
            </div>
            <div className="">
              <label htmlFor="" className="block font-semibold">
                Confirm Password<span className="text-[#ed1c24]">*</span>
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="border py-3 px-6 mt-1 w-full placeholder:text-sm text-gray-500 focus:outline-none"
              />
            </div>
          </div>
          <button className="mt-8 block text-white text-[14px] font-semibold bg-[#ed1c24] uppercase py-2 px-9">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
