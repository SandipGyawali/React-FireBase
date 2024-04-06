import { useState } from "react";
import "../../App.css"; // Import your CSS file for styling
import { useFireBase } from "../../context/Firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUpUserWithEmailAndPassword, signInWithGoogle } = useFireBase();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpUserWithEmailAndPassword(email, password).then(() => {
      alert("User Created Successfully");
    });

    setEmail("");
    setPassword("");
  };

  const handleGoogleSubmit = (e) => {
    e.preventDefault();
    signInWithGoogle().then((data) => console.log(data));
  };

  return (
    <div className="signup-form-container">
      <div>
        <h1>Sign-Up</h1>
        <span>Email and Password Sign-Up with Firebase</span>
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
        <button type="submit">Sign Up</button>
        <p>OR</p>
        <div className="google">
          <button onClick={handleGoogleSubmit}>
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              width={26}
              height={26}
            />{" "}
            SignIn With Google
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
