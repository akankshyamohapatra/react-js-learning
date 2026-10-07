
import UserForm from "./UserForm";
import UserTable from "./UserTable";
import useUserStore from "./store/userStore";




function App() {

  const theme =useUserStore((state) => state.theme);
  const setTheme =useUserStore((state) => state.setTheme);
  
  return (
   //body 
<div className={`theme-${theme} font-sans m-0 p-0 flex justify-start items-start min-h-screen bg-[var(--primary)] text-white`}>  


  <div>
<select
value={theme}
onChange={(e) => setTheme(e.target.value)}
className="mb-5 px-4 py-2 rounded border"
>
  <option value="light">Light</option>
  <option value="dark">Dark</option>
  <option value="green">Green</option>
  <option value="pink">Pink</option>
</select>
</div>

    <div className="flex gap-5 min-[412px]:max-[915px]:flex-col">
      <UserForm/>

      <UserTable/>
    </div>
    </div>
    
  );
}

export default App;





