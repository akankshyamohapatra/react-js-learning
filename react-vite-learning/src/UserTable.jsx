import useUserStore from "./store/userStore";

function UserTable() {
  const users = useUserStore((state) => state.users);

  const deleteUser = useUserStore((state) => state.deleteUser);

  const editUser = useUserStore((state) => state.editUser);

  

  return (
    <div className="w-[730px] overflow-x-auto min-[768px]:max-[1024px]:w-[1000px] min-[412px]:max-[915px]:w-[1000px]">
      <table className="w-max border-collapse bg-[var(--bg)] text-[var(--text)]">
        <thead>
          <tr>
            <th className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              Serial No.
            </th>

            <th className= "py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              First Name
            </th>
            <th className= "py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              Last Name
            </th>
            <th className= "py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              gender
            </th>
            <th className= "py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              nationality
            </th>
            <th className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              education level
            </th>
            <th className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              gpa
            </th>
            <th className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              school
            </th>
            <th className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              city
            </th>
            <th className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              dob
            </th>
            <th className= "py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              major
            </th>
            <th className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              mobileno.
            </th>
            <th className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              Email
            </th>
            <th className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              street
            </th>
            <th className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              state
            </th>
            <th className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {index + 1}
              </td>

              <td className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.fname}
              </td>
              <td className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.lname}
              </td>
              <td className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.gender}
              </td>
              <td className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.nationality}
              </td>
              <td className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.edlevel}
              </td>
              <td className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.gpa}
              </td>
              <td className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.school}
              </td>
              <td className= "py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.city}
              </td>
              <td className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.dob}
              </td>
              <td className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.major}
              </td>
              <td className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.phone}
              </td>
              <td className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.email}
              </td>
              <td className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.street}
              </td>
              <td className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.state}
              </td>
              <td className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                <button
                  className="py-1 px-2 text-[0.9rem] m-[2px] border-0 rounded-[4px] cursor-pointer bg-[#4b6cb7]"
                  onClick={() => editUser(index)}
                >
                  Edit
                </button>
                <br></br>
                <button
                  className="py-1 px-2 text-[0.9rem] m-[2px] border-0 rounded-[4px] cursor-pointer bg-[#4b6cb7]"
                  onClick={() => deleteUser(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
