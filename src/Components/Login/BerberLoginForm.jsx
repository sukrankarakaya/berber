import React, { useState } from "react";
import { loginBarber,login  } from "../../Store/Barber/BarberLoginSlice";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const BerberLoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const error = useSelector(state => state.barberLogin.error);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await dispatch(loginBarber({ Username, Password }));
      dispatch(login(response.payload))
      const { payload } = response;
      if (payload && payload.token) {
        console.log("Token:", payload.token);

        navigate("/homeberber");
      } else {
        throw new Error("KUllanıcı adı veya şifre hatalı...")
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("KUllanıcı adı veya şifre hatalı... Lütfen tekrar deneyin.");

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
                name="Username"
                value={Username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-[230px] h-12 rounded-[50px] outline-none p-6 font-light text-secondary border-2 border-secondary bg-transparent"
                placeholder="Kullanıcı Adı"
              />
            </div>
            <div className="flex flex-col gap-2">
              <input
                type="password"
                name="Password"
                value={Password}
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
