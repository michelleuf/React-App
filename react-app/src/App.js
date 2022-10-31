import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = useState("");

  useEffect(async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  }, [users]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, this is my first react project.</p>
      </header>
      <div>
        <h3>our users</h3>
        {users
          ? users.map((user) => (
              <div style={{ margin: 20 }}>
                <p>name : {user.name}</p>
                <p>email : {user.email}</p>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
}

export default App;
