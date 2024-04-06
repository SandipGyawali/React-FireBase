import { useState } from "react";
import "../../App.css"; // Import your CSS file for styling
import { useFireBase } from "../../context/Firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginUserWithEmailAndPassword } = useFireBase();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    loginUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        alert("User LoggedIn Successfully");
      })
      .catch((err) => {
        alert(err);
      });

    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup-form-container">
      <div>
        <h1>LogIn</h1>
        <span>Email and Password LogIn with Firebase</span>
      </div>
      <form onSubmit={handleSubmit} className="signup-form">
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
