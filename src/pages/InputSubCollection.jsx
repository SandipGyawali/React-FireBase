import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { app } from "../firebase";

const firestore = getFirestore(app);

function InputSubCollection() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Insert the data to the Firestore "users" collection
    try {
      const docRef = await addDoc(
        collection(firestore, `users/mQGk2lxW3c7vEJ48YaCf/${name}`),
        {
          description,
          date: Date.now(),
        }
      );
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    setName("");
    setDescription("");
  };

  return (
    <div className="signup-form-container">
      <div>
        <h1>InputSubData</h1>
        <span>
          Sub collection Integration(Enter sub collection to the users document)
        </span>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          Enter Collection Name:
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </label>

        <label>
          Enter description:
          <input
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            required
          />
        </label>

        <button type="submit">Input Sub Collection</button>
      </form>
    </div>
  );
}

export default InputSubCollection;
