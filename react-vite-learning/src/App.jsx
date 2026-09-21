
import UserForm from "./UserForm";
import UserTable from "./UserTable";

function App() {
  
  return (

    <div style={{ display: "flex", gap: "30px" }}>
      <UserForm/>

      <UserTable/>
    </div>
    
  );
}

export default App;