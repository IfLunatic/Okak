import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LuPhone } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import "./Register.css"; // підключи, якщо хочеш стилі

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isValidPhone = (phone) => /^380\d{9}$/.test(phone);

  const validateLogin = () => {
    if (!isValidPhone(phoneNumber)) {
      alert("Телефон повинен починатися з 380 та містити 12 цифр");
      return false;
    }
    if (password.length < 6) {
      alert("Пароль повинен містити мінімум 6 символів");
      return false;
    }
    return true;
  };

  const fakeAuthService = {
    login: async ({ phoneNumber, password }) => {
      if (phoneNumber === "380123456789" && password === "123456") {
        return { token: "abc123" };
      }
      throw new Error("Невірні облікові дані");
    },
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;

    try {
      const data = await fakeAuthService.login({ phoneNumber, password });
      alert("Успішний вхід! Токен: " + data.token);
      navigate("/");
    } catch (err) {
      alert("Помилка входу: " + err.message);
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="title">Вхід</h1>
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
            Увійти
          </button>
        </form>
        <div className="toggle">
          <button onClick={() => navigate("/register")} className="toggle-btn">
            Немає аккаунту? Зареєструйтесь
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
