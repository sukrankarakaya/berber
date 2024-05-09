import React, { useState } from "react";
import { loginAsync } from "../../Store/Barber/BarberLoginSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";


const BerberLoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { user, token } =  dispatch(loginAsync({ userName, password }));
      console.log("Logged in successfully:", user);
      console.log("Token:", token);
      navigate("/homeberber");
    } catch (error) {
      console.error("Login failed:", error.message);
      setError("Kullanıcı adı veya şifre hatalı");
    }
  };
  
  return (
    <div>
      <div className="flex flex-col justify-center items-center gap-3 w-[400px] h-[300px]">
        <div className="flex flex-col p-3">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full items-center justify-center z-20">
            <div className="flex flex-col gap-2">
              <input
                type="text"
                name="username"
                value={userName}
                onChange={(e) => setUsername(e.target.value)}
                className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                placeholder="Kullanıcı Adı"
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                placeholder="Şifre"
              />
            </div>

            <button type="submit" className="w-[300px] h-12 rounded-[50px] bg-secondary text-light">
              Giriş Yap
            </button>
            {error && (
              <div className="text-red-500">{error}</div>
            )}
          </form>
        </div>
        <label htmlFor="" className="hover:border-b flex">
          Şifremi Unuttum?{" "}
          <Link to="/register">
            <button className="text-secondary pl-3"> Kayıt Ol</button>
          </Link>
        </label>
      </div>
    </div>
  );
};

export default BerberLoginForm;
