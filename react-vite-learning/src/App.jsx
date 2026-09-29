
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import useUserStore from "./store/userStore";



function App() {

  const darkMode=useUserStore((state) => state.darkMode);
  const toggleTheme=useUserStore((state) => state.toggleTheme);
  
  return (
   //body 
<div className={`font-sans m-0 p-0 flex justify-start items-start min-h-screen ${darkMode ? "bg-gray-800 text-white" :"bg-gradient-to-br from-[#4b6cb7] to-[#182848] text-black" }`}>  

  <button onClick={toggleTheme}
  className="mb-5 px-4 py-2 rounded bg-blue-600 text-white"> 

  {darkMode ? "Light Mode" : "Dark Mode"}

  </button>


    <div className="flex gap-5 min-[412px]:max-[915px]:flex-col">
      <UserForm/>

      <UserTable/>
    </div>
    </div>
  );
}

export default App;





