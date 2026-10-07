import useUserStore from "./store/userStore";
//shadcn components
import { Button } from "./components/ui/button";
import { Table,TableBody,TableCell,TableHead,TableHeader,TableRow } from "./components/ui/table";

function UserTable() {
  const users = useUserStore((state) => state.users);

  const deleteUser = useUserStore((state) => state.deleteUser);

  const editUser = useUserStore((state) => state.editUser);

  

  return (
    <div className="w-[630px] overflow-x-auto min-[768px]:max-[1024px]:w-[1000px] min-[412px]:max-[915px]:w-[1000px]">
      <Table className="w-max border-collapse bg-[var(--bg)] text-[var(--text)]">
        <TableHeader>
          <TableRow>
            <TableHead className="py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              Serial No.
            </TableHead>

            <TableHead className= "py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              First Name
            </TableHead>
            <TableHead className= "py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              Last Name
            </TableHead>
            <TableHead className= "py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              gender
            </TableHead>
            <TableHead className= "py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              nationality
            </TableHead>
            <TableHead className="py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              education level
            </TableHead>
            <TableHead className="py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              gpa
            </TableHead>
            <TableHead className="py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              school
            </TableHead>
            <TableHead className="py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              city
            </TableHead>
            <TableHead className="py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              dob
            </TableHead>
            <TableHead className= "py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              major
            </TableHead>
            <TableHead className="py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              mobileno.
            </TableHead>
            <TableHead className="py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              Email
            </TableHead>
            <TableHead className="py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              street
            </TableHead>
            <TableHead className="py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              state
            </TableHead>
            <TableHead className="py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user, index) => (
            <TableRow key={index}>
              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {index + 1}
              </TableCell>

              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.fname}
              </TableCell>
              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.lname}
              </TableCell>
              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.gender}
              </TableCell>
              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.nationality}
              </TableCell>
              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.edlevel}
              </TableCell>
              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.gpa}
              </TableCell>
              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.school}
              </TableCell>
              <TableCell className= "py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.city}
              </TableCell>
              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.dob}
              </TableCell>
              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.major}
              </TableCell>
              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.phone}
              </TableCell>
              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.email}
              </TableCell>
              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.street}
              </TableCell>
              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                {user.state}
              </TableCell>
              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
                <Button
                  className="py-1 px-2 text-[0.9rem] m-[2px] border-0 rounded-[4px] cursor-pointer bg-[#4b6cb7]"
                  onClick={() => editUser(index)}
                >
                  Edit
                </Button>
                <br></br>
                <Button
                  className="py-1 px-2 text-[0.9rem] m-[2px] border-0 rounded-[4px] cursor-pointer bg-[#4b6cb7]"
                  onClick={() => deleteUser(index)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default UserTable;
