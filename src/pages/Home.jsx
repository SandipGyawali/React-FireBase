import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { app } from "../firebase";
import { Navigate } from "react-router-dom";
import { useFireBase } from "../context/Firebase";

const auth = getAuth(app);

function Home() {
  const [loggedUser, setLoggedUser] = useState(); // Initialize loggedUser with null
  const { get_Token } = useFireBase();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoggedUser(user.displayName);
      } else {
        setLoggedUser(null); // Set loggedUser to null if user is not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, []);

  useEffect(() => {
    //request user for notification permission

    async function requestPermission() {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        //generate token
        const token = await get_Token();
        console.log(token);
      } else if (permission === "denied") {
        alert("Notification denied");
      }
    }

    requestPermission();
  }, [get_Token]);

  // Check if loggedUser is null and navigate accordingly
  if (loggedUser === null) {
    return <Navigate to="/auth/sign-up" replace={true} />;
  }

  // Render the home page if the user is logged in
  return (
    <div className="home-wrapper">
      <div className="home-heading">
        <h1>React + FireBase App</h1>
        <h3>{loggedUser ? `Welcome! ${loggedUser}` : ""}</h3>
      </div>
      <button
        style={{ fontSize: "18px" }}
        onClick={() => signOut(auth)}
        className="btn"
      >
        Log Out ?
      </button>
    </div>
  );
}

export default Home;
