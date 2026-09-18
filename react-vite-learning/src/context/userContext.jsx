import { createContext, useState } from "react";

export const UserContext=createContext();

export function UserProvider({children}) {

const [users,setUsers] = useState([]);
const [editIndex, setEditIndex]= useState(null);

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

   
   return(
<UserContext.Provider
value={{users,
    saveUser,
    deleteUser,
    editUser,
    editIndex
}}
>

{children}

</UserContext.Provider>

   );

}