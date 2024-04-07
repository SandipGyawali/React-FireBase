import { useEffect, useState } from "react";
import { useFireBase } from "../context/Firebase";

function UsersList() {
  const [list, setList] = useState(null);
  const { getAllUsers } = useFireBase();

  useEffect(() => {
    (async function () {
      setList(await getAllUsers());
    })();
  }, [getAllUsers]);

  return (
    <div className="signup-form-container">
      <h1>Users List</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "5vh",
          color: "whitesmoke",
          marginTop: "10px",
          maxWidth: "800px",
        }}
      >
        {list !== null &&
          list?.map((data, index) => (
            <div
              key={index}
              style={{
                background: "#333333",
                padding: "10px",
                margin: "0 10px",
              }}
            >
              <ul>
                <li>{data.name}</li>
                <li>{data.age}</li>
                <li>{data.phoneNo}</li>
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}

export default UsersList;
