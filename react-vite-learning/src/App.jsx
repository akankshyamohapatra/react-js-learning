import { useState } from "react";
import UserForm from "./UserForm";
import UserTable from "./UserTable";

function App() {
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex]=useState(null);

 const saveUser=(formData) =>{
  if(editIndex!==null){
const updateUsers=[...users];
updateUsers[editIndex]=formData;
setUsers(updateUsers);
setEditIndex(null);
  } else {
setUsers([...users,formData]);
  }
 }


 const deleteUser = (index) =>{
  const updateUsers=users.filter((_,i) => i !==index);
  setUsers(updateUsers);
 }


 const editUser =(index) => {
  setEditIndex(index);
 }

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <UserForm 
      saveUser={saveUser}
      editUser={editIndex !== null ? users[editIndex] : null}
       />

      <UserTable 
      users={users} 
      deleteUser={deleteUser}
      editUser={editUser}
      />
    </div>
  );
}

export default App;