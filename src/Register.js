import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { RiLockPasswordLine } from "react-icons/ri";
import "./Register.css";

function Register() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const isValidPhone = (phone) => /^380\d{9}$/.test(phone);

  const validateRegistration = () => {
    if (name.trim().length < 2) {
      alert("Имя должно содержать минимум 2 символа");
      return false;
    }
    if (surname.trim().length < 2) {
      alert("Фамилия должна содержать минимум 2 символа");
      return false;
    }
    if (username.trim().length < 2) {
      alert("Логин должен содержать минимум 2 символа");
      return false;
    }
    if (!isValidPhone(phoneNumber)) {
      alert("Телефон должен начинаться с 380 и содержать 12 цифр");
      return false;
    }
    if (password.length < 6) {
      alert("Пароль должен содержать минимум 6 символов");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Пароли не совпадают");
      return false;
    }
    return true;
  };

  const fakeAuthService = {
    registration: async (data) => {
      return { success: true };
    },
  };

  const registrationHandler = async (e) => {
    e.preventDefault();
    if (!validateRegistration()) return;

    try {
      await fakeAuthService.registration({
        name,
        surname,
        username,
        phoneNumber,
        password,
      });
      alert("Регистрация успешна! Теперь войдите.");
      navigate("/login");
    } catch (err) {
      alert("Ошибка регистрации: " + err.message);
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="title">Регистрация</h1>
        <form onSubmit={registrationHandler} className="form">
          <div className="input-group">
            <AiOutlineUser className="icon" />
            <input
              type="text"
              className="input"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <AiOutlineUser className="icon" />
            <input
              type="text"
              className="input"
              placeholder="Фамилия"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <AiOutlineUser className="icon" />
            <input
              type="text"
              className="input"
              placeholder="Логин"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
          <div className="input-group">
            <RiLockPasswordLine className="icon" />
            <input
              type="password"
              className="input"
              placeholder="Подтвердите пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            Зарегистрироваться
          </button>
        </form>
        <div className="toggle">
          <button onClick={() => navigate("/login")} className="toggle-btn">
            Уже есть аккаунт? Войти
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
