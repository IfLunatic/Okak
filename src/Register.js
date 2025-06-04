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
      alert("Ім’я повинно містити щонайменше 2 символи");
      return false;
    }
    if (surname.trim().length < 2) {
      alert("Прізвище повинно містити щонайменше 2 символи");
      return false;
    }
    if (username.trim().length < 2) {
      alert("Логін повинен містити щонайменше 2 символи");
      return false;
    }
    if (!isValidPhone(phoneNumber)) {
      alert("Телефон повинен починатися з 380 та містити 12 цифр");
      return false;
    }
    if (password.length < 6) {
      alert("Пароль повинен містити щонайменше 6 символів");
      return false;
    }
    if (password !== confirmPassword) {
      alert("Паролі не співпадають");
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
      alert("Реєстрація успішна! Тепер увійдіть.");
      navigate("/login");
    } catch (err) {
      alert("Помилка реєстрації: " + err.message);
    }
  };

  return (
    <div className="container">
      <div className="form-wrapper">
        <h1 className="title">Реєстрація</h1>
        <form onSubmit={registrationHandler} className="form">
          <div className="input-group">
            <AiOutlineUser className="icon" />
            <input
              type="text"
              className="input"
              placeholder="Ім’я"
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
              placeholder="Прізвище"
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
              placeholder="Логін"
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
              placeholder="Підтвердьте пароль"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn">
            Зареєструватися
          </button>
        </form>
        <div className="toggle">
          <button onClick={() => navigate("/login")} className="toggle-btn">
            Вже маєте акаунт? Увійдіть
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
