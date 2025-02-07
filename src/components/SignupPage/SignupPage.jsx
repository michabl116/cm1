import { useState } from "react";
import "./SignupPage.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationality, setNationality] = useState("de");
  const [emailValid, setEmailValid] = useState(false);
  const [passwordStrong, setPasswordStrong] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailValid(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordStrong(validatePassword(value));
  };

  const handleNationalityChange = (e) => {
    setNationality(e.target.value);
  };

  const greetings = {
    fi: "Moi",
    en: "Hello",
    de: "Hallo",
    fr: "Bonjour",
  };

  return (
    <div className="signup-container">
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={emailValid ? "valid" : "invalid"}
        />
        {emailValid ? (
          <p className="valid-message">You typed a valid email.</p>
        ) : (
          <p className="invalid-message">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={passwordStrong ? "valid" : "invalid"}
        />
        {passwordStrong ? (
          <p className="valid-message">Your password is strong.</p>
        ) : (
          <p className="invalid-message">Your password is too weak.</p>
        )}
      </div>
      <div className="form-group">
        <label>Nationality:</label>
        <select value={nationality} onChange={handleNationalityChange}>
          <option value="fi">Finnish</option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </div>
      <p>{greetings[nationality]}</p>
      <p>Your email is {email || "john@doe.com"}</p>
      <button className="signup-button">Sign up</button>
    </div>
  );
};

export default SignupPage;
