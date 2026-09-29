import useUserStore from "./store/userStore";

function UserTable() {
  const users = useUserStore((state) => state.users);

  const deleteUser = useUserStore((state) => state.deleteUser);

  const editUser = useUserStore((state) => state.editUser);

  const darkMode = useUserStore((state) => state.darkMode);

  return (
    <div className="w-[730px] overflow-x-auto min-[768px]:max-[1024px]:w-[1000px] min-[412px]:max-[915px]:w-[1000px]">
      <table className={`w-max border-collapse ${darkMode ? "bg-gray-800 text-white": "bg-white text-black"}`}>
        <thead>
          <tr>
            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              Serial No.
            </th>

            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              First Name
            </th>
            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              Last Name
            </th>
            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              gender
            </th>
            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              nationality
            </th>
            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              education level
            </th>
            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              gpa
            </th>
            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              school
            </th>
            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              city
            </th>
            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              dob
            </th>
            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              major
            </th>
            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              mobileno.
            </th>
            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              Email
            </th>
            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              street
            </th>
            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              state
            </th>
            <th className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
                {index + 1}
              </td>

              <td className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
                {user.fname}
              </td>
              <td className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
                {user.lname}
              </td>
              <td className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
                {user.gender}
              </td>
              <td className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
                {user.nationality}
              </td>
              <td className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
                {user.edlevel}
              </td>
              <td className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
                {user.gpa}
              </td>
              <td className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
                {user.school}
              </td>
              <td className= {`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
                {user.city}
              </td>
              <td className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
                {user.dob}
              </td>
              <td className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
                {user.major}
              </td>
              <td className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
                {user.phone}
              </td>
              <td className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
                {user.email}
              </td>
              <td className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
                {user.street}
              </td>
              <td className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
                {user.state}
              </td>
              <td className={`py-2 px-3 border whitespace-nowrap ${darkMode?"border-gray-500":"border-red-500"}`}>
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
