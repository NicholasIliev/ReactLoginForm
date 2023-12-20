import React, { useState } from "react";

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password.");
      return;
    }

    setLoading(true);

    try {
      // Authentication logic would goes here
      // For now, let's simulate a delay with setTimeout
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Logged in successfully:", username);
      setError(null);
    } catch (err: any) {
      console.error("Login failed:", err.message);
      setError("Login failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // Placeholder for "Forgot Password?" functionality
    console.log("Forgot Password? Clicked");
  };

  const handleSignUp = () => {
    // Placeholder for "Sign Up" functionality
    console.log("Sign Up Clicked");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="login-header">Login</div>

        {error && <div className="error-message">{error}</div>}

        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <div className="input-group">
          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </div>

        <div className="additional-links">
          <span
            className="link"
            onClick={handleForgotPassword}
            role="button"
            tabIndex={0}
          >
            Forgot Password?
          </span>
          <span className="separator">|</span>
          <span
            className="link"
            onClick={handleSignUp}
            role="button"
            tabIndex={0}
          >
            Sign Up
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
