import React, { useState } from "react";
import "./App.css"; // Importing the CSS file

const LoginForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true); // Show welcome message
  };

  return (
    <div className="container">
      {isSubmitted ? (
        <div className="welcome-screen">
          <h1>Welcome, {formData.name}!</h1>
          <p>We’re glad to have you on our website. 🎉</p>
        </div>
      ) : (
        <div className="login-container">
          <h2>Signup Form</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <button type="submit" className="submit-button">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
