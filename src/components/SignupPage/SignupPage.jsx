import { useState } from "react";
import "./SignupPage.css";

const SignupPage = () => {
  const [email, setEmail] = useState('maxence@ironhack.com');
  const [password, setPassword] = useState('...');
  const [nationality, setNationality] = useState('de');
  const [emailValid, setEmailValid] = useState(null);
  const [passwordStrength, setPasswordStrength] = useState(null);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailValid(validateEmail(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordStrength(validatePassword(e.target.value));
  };

  const getGreeting = (nationality) => {
    switch (nationality) {
      case 'fi':
        return 'Moi';
      case 'en':
        return 'Hello';
      case 'de':
        return 'Hallo';
      case 'fr':
        return 'Bonjour';
      default:
        return '';
    }
  };

  return (
    <div className="signup-page">
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          className={`input ${emailValid === null ? '' : emailValid ? 'valid' : 'invalid'}`}
          placeholder="Enter your email"
        />
        <small className={emailValid ? "text-valid" : "text-invalid"}>
          {emailValid === null
            ? ""
            : emailValid
            ? "You typed a valid email"
            : "Please enter a valid email"}
        </small>
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          className={`input ${passwordStrength === null ? '' : passwordStrength ? 'valid' : 'invalid'}`}
          placeholder="Enter your password"
        />
        <small className={passwordStrength ? "text-valid" : "text-invalid"}>
          {passwordStrength === null
            ? ""
            : passwordStrength
            ? "Your password is strong"
            : "Your password is too weak"}
        </small>
      </div>

      <div className="form-group">
        <label>Nationality</label>
        <select
          value={nationality}
          onChange={(e) => setNationality(e.target.value)}
          className="input"
        >
          <option value="fi">Finnish</option>
          <option value="en">English</option>
          <option value="de">German</option>
          <option value="fr">French</option>
        </select>
      </div>

      <button className="submit-button">Sign up</button>

      <div className="greeting">
        <p>{getGreeting(nationality)}</p>
        <p>Your email address is: {email}</p>
        <p>{emailValid ? "Your email address is correct" : ""}</p>
      </div>
    </div>
  );
};

export default SignupPage;
