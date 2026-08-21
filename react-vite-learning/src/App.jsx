import { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers((prev) => [...prev, user]);
  };

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <UserForm addUser={addUser} />

      <UserTable users={users} />
    </div>
  );
}

export default App;