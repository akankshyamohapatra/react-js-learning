import { useContext } from "react";
import { UserContext } from "./context/userContext";


function UserTable() {

const {users,deleteUser,editUser} = useContext(UserContext);


    return (
      <div className="w-[730px] overflow-x-auto min-[768px]:max-[1024px]:w-[1000px] min-[412px]:max-[915px]:w-[1000px]">
      <table className="w-max border-collapse bg-white">
        <thead>
          <tr>
            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">Serial No.</th>

            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">First Name</th>
            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">Last Name</th>
            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">gender</th>
            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">nationality</th>
            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">education level</th>
            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">gpa</th>
            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">school</th>
            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">city</th>
            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">dob</th>
            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">major</th>
            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">mobileno.</th>
            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">Email</th>
            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">street</th>
            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">state</th>
            <th className="py-2 px-3 border border-red-500 whitespace-nowrap ">Actions</th>
          </tr>
        </thead>
  
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">{index +1}</td>

              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">{user.fname}</td>
              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">{user.lname}</td>
              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">{user.gender}</td>
              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">{user.nationality}</td>
              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">{user.edlevel}</td>
              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">{user.gpa}</td>
              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">{user.school}</td>
              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">{user.city}</td>
              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">{user.dob}</td>
              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">{user.major}</td>
              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">{user.phone}</td>
              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">{user.email}</td>
              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">{user.street}</td>
              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">{user.state}</td>
              <td className="py-2 px-3 border border-red-500 whitespace-nowrap ">
                <button className="py-1 px-2 text-[0.9rem] m-[2px] border-0 rounded-[4px] cursor-pointer bg-[#4b6cb7]" onClick={()=> editUser(index)}>Edit</button>
                  <br></br>
                <button className="py-1 px-2 text-[0.9rem] m-[2px] border-0 rounded-[4px] cursor-pointer bg-[#4b6cb7]" onClick={() => deleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
  
  export default UserTable;