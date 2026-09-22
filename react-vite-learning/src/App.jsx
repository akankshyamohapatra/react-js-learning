
import UserForm from "./UserForm";
import UserTable from "./UserTable";

function App() {
  
  return (
   //body 
<div className="font-sans bg-gradient-to-br from-[#4b6cb7] to-[#182848] m-0 p-0 flex justify-start items-start min-h-screen w-1000px">  
    <div className="flex gap-5 min-[412px]:max-[915px]:flex-col">
      <UserForm/>

      <UserTable/>
    </div>
    </div>
  );
}

export default App;





// "flex gap-[30px]"