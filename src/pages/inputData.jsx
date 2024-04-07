import { useState } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  getDoc,
  doc,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { app } from "../firebase";
import InputSubCollection from "./InputSubCollection";

const firestore = getFirestore(app);

function InputData() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Insert the data to the Firestore "users" collection
    try {
      const docRef = await addDoc(collection(firestore, "users"), {
        name,
        age,
        phoneNo: phone,
      });
      console.log("Document written with ID: ", docRef);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  //retrieve the users collection
  async function getDocument(e) {
    e.preventDefault();
    const ref = doc(firestore, "users", "mQGk2lxW3c7vEJ48YaCf");
    const result = await getDoc(ref);
    console.log(result.data());
  }

  //getDocument data on query
  //based on the query give me the data
  const getDocumentByQuery = async (e) => {
    e.preventDefault();
    const collectionRef = collection(firestore, "users");
    //get the data with the condition where age == 12
    const qry = query(collectionRef, where("age", ">=", "12"));

    const result = await getDocs(qry);
    console.log(result);
    result.forEach((data) => {
      console.log(data.data());
    });
  };

  //update the document
  const updateDocument = async (e) => {
    e.preventDefault();
    const docRef = doc(firestore, "users", "2LxCTF3beRuSNURHMNrH");
    await updateDoc(docRef, {
      name: "John Updated",
    });
  };

  return (
    <div className="signup-form-container">
      <div>
        <h1>InputData</h1>
        <span>
          Firestore database integration (Enter data to store in users
          collection)
        </span>
      </div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label>
          Name:
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
          Age:
          <input
            type="number"
            required
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </label>
        <button type="submit">Input Data</button>
      </form>

      <InputSubCollection />

      <h1>Refer to Console for data</h1>
      <form className="signup-form" onSubmit={getDocument}>
        <button type="submit">Get Document</button>
      </form>

      <form className="signup-form" onSubmit={getDocumentByQuery}>
        <button type="submit">Get Document By Query</button>
      </form>

      <form className="signup-form" onSubmit={updateDocument}>
        <p>Updates the document for the ref: 2LxCTF3beRuSNURHMNrH refrence</p>
        <button type="submit">Update Document</button>
      </form>
    </div>
  );
}

export default InputData;
