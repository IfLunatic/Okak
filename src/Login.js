import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuPhone } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import "./Register.css"; // подключи, если хочешь стили

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isValidPhone = (phone) => /^380\d{9}$/.test(phone);

  const validateLogin = () => {
    if (!isValidPhone(phoneNumber)) {
      alert("Телефон должен начинаться с 380 и содержать 12 цифр");
      return false;
    }
    if (password.length < 6) {
      alert("Пароль должен содержать минимум 6 символов");
      return false;
    }
    return true;
  };

  const fakeAuthService = {
    login: async ({ phoneNumber, password }) => {
      if (phoneNumber === "380123456789" && password === "123456") {
        return { token: "abc123" };
      }
      throw new Error("Неверные учетные данные");
    },
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;

    try {
      const data = await fakeAuthService.login({ phoneNumber, password });
      alert("Успешный вход! Токен: " + data.token);
      navigate("/");
    } catch (err) {
      alert("Ошибка входа: " + err.message);
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="title">Вход</h1>
        <form onSubmit={loginHandler} className="form">
          <div className="input-group">
            <LuPhone className="icon" />
            <input
              type="text"
              className="input"
              placeholder="Телефон (380XXXXXXXXX)"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <RiLockPasswordLine className="icon" />
            <input
              type="password"
              className="input"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            Войти
          </button>
        </form>
        <div className="toggle">
          <button onClick={() => navigate("/register")} className="toggle-btn">
            Нет аккаунта? Зарегистрируйтесь
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
