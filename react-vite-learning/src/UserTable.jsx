import { useContext } from "react";
import { UserContext } from "./context/userContext";


function UserTable() {

const {users,deleteUser,editUser} = useContext(UserContext);


    return (
      <div className="table-container">
      <table border="1">
        <thead>
          <tr>
            <th>Serial No.</th>

            <th>First Name</th>
            <th>Last Name</th>
            <th>gender</th>
            <th>nationality</th>
            <th>education level</th>
            <th>gpa</th>
            <th>school</th>
            <th>city</th>
            <th>dob</th>
            <th>major</th>
            <th>mobileno.</th>
            <th>Email</th>
            <th>street</th>
            <th>state</th>
            <th>Actions</th>
          </tr>
        </thead>
  
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{index +1}</td>

              <td>{user.fname}</td>
              <td>{user.lname}</td>
              <td>{user.gender}</td>
              <td>{user.nationality}</td>
              <td>{user.edlevel}</td>
              <td>{user.gpa}</td>
              <td>{user.school}</td>
              <td>{user.city}</td>
              <td>{user.dob}</td>
              <td>{user.major}</td>
              <td>{user.phone}</td>
              <td>{user.email}</td>
              <td>{user.street}</td>
              <td>{user.state}</td>
              <td>
                <button onClick={()=> editUser(index)}>Edit</button>
                  <br></br>
                <button onClick={() => deleteUser(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    );
  }
  
  export default UserTable;