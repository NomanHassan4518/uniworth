import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../../Components/Spinner";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  const [error, setError] = useState(false);
  const [isValid, setValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("authToken");
  let navigate = useNavigate();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setValid(emailRegex.test(email) && email.endsWith("@gmail.com"));
  };

  const handleLogin = async () => {
    if (email === "" || password === "") {
      setError(true);
    } else if (isValid === false) {
      toast.error("Enter your Gmail account");
    } else {
      try {
        setLoading(true);
        await fetch("http://localhost:5000/api/customers/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        })
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            if (data.message === "Login successful") {
              toast.success(data.message);
              localStorage.setItem("authToken", data.token);
            } else {
              toast.error(data.message);
            }
          });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ToastContainer position="top-left" />
          <div className="mt-14 fontStyle ">
            <div className="flex items-center space-x-4 px-10 py-1 fontStyle  bg-[#f8f8f8]">
              <Link to="/">Home</Link>
              <span>|</span>
              <p>Sign In</p>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-5 px-6">
              <div>
                <h1 className="text-[25px] font-bold uppercase">Login</h1>

                <div className="mt-4 bg-[#f8f8f8] p-7 border-2 boxHeight">
                  <div>
                    <label htmlFor="" className="block font-semibold">
                      Email<span className="text-[#ed1c24]">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      onBlur={validateEmail}
                      placeholder="Email address"
                      className={`${
                        error && !email
                          ? "border border-[#ed1c24] placeholder:text-[#ed1c24]"
                          : "border"
                      } py-3 px-6 mt-1 w-full placeholder:text-sm text-gray-500 focus:outline-none`}
                    />
                  </div>
                  <div className="mt-6">
                    <label htmlFor="" className="block font-semibold">
                      Password<span className="text-[#ed1c24]">*</span>
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => {
                        setPassowrd(e.target.value);
                      }}
                      placeholder="Enter your password"
                      className={`${
                        !password && error
                          ? "border border-[#ed1c24] placeholder:text-[#ed1c24]"
                          : "border"
                      } py-3 px-6 mt-1 w-full placeholder:text-sm text-gray-500 focus:outline-none`}
                    />
                  </div>

                  <Link to="/" className="mt-5 block text-sm">
                    Forgot your password?
                  </Link>
                  <button
                    className="mt-6 block text-white text-[14px] font-semibold bg-[#ed1c24] uppercase py-2 px-9"
                    onClick={handleLogin}
                  >
                    Sign in
                  </button>
                </div>
              </div>

              <div>
                <h1 className="text-[25px] font-bold uppercase">
                  New Customer
                </h1>
                <div className="mt-4 bg-[#f8f8f8] p-7 border-2 boxHeight">
                  <p className="font-semibold">Create A Account</p>
                  <p className="mt-7 text-sm text-gray-700">
                    Sign up for a free account at our store. Registration is
                    quick and easy. It allows you to be able to order from our
                    shop. To start shopping click register.
                  </p>
                  <div className="mt-9">
                    <Link
                      to="/register"
                      className=" text-white text-[14px] font-semibold bg-[#ed1c24] uppercase py-2 px-9"
                    >
                      Create an account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
