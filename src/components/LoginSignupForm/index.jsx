// {import.meta.env.VITE_BASEURL}

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSignupForm = ({ pathname }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [forgotUsername, setForgotUsername] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const baseUrl = "http://localhost:8080/api";

const getUser = async () => {

    const body = JSON.stringify({
        username,
        email,
        password,
      });

    try {
        const response = await fetch(`${baseUrl}${pathname}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body,
        });

        return await response.json();
    } catch (err) {
        console.log("error", err.message);
        // TODO test mess up server function/route idk
        throw Error({ message: "Something went wrong. Please try again." });
    }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);

    const response = await getUser();

    if (response.username) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: response.username,
          token: response.token,
          userId: response.userId,
        })
      );
      navigate("/dashboard");
      window.location.reload();
      setSubmitted(true);
    } else {
      setSubmitted(false);
      // TODO fix error handling on backend
      console.log("ERROR:", error)
      setError(response.message);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {!forgotUsername && (
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="Username"
        />
      )}

      {pathname === "/login" && !forgotUsername && (
        <button onClick={() => setForgotUsername(true)}>forgot username</button>
      )}

      {(pathname === "/signup" || forgotUsername) && (
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
      )}

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
      />

      {error && <p>{error}</p>}

      <input
        type="submit"
        value="submit"
        className="submit"
        disabled={submitted}
      />
    </form>
  );
};

export default LoginSignupForm;