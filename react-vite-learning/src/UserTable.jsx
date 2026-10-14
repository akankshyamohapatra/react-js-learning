import useUserStore from "./store/userStore";
import { useState,useMemo } from "react";
//shadcn components
import { Button } from "./components/ui/button";
import { Table,TableBody,TableCell,TableHead,TableHeader,TableRow } from "./components/ui/table";
import { Input } from "./components/ui/input";

function UserTable() {
  const users = useUserStore((state) => state.users);

  const deleteUser = useUserStore((state) => state.deleteUser);

  const editUser = useUserStore((state) => state.editUser);

  const [search , setSearch]=useState("");

  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction:null,
  })


const handleSort = (key) => {
  setSortConfig((current) => {

    if(current.key !== key){
      return {key, direction: "asc"};
    }


    if(current.direction === "asc"){
      return {key, direction:"desc"};
    }

    return {key: null , direction: null};

  })
}

const sortedUsers= useMemo(() => {

return users
.map((user,index) => ({
user,
originalIndex:index,
}))
.filter(({user}) =>
  [
user.fname,
user.lname,
user.email,
user.phone,
user.gender,
user.nationality,
user.city,
user.state,
user.edlevel,
user.gpa,
user.school,
user.dob,
user.major,
user.street,
  ].some((value) =>
  String(value ?? "").toLowerCase().includes(search.toLowerCase())
  )
  )
.sort((a,b) => {

  const {key, direction} = sortConfig;

  if(!key || !direction){
 return a.originalIndex - b.originalIndex;
  }

  let result;

  if(key === "serialNo"){
    result = a.originalIndex - b.originalIndex;
  } 
  else{
 result = String(a.user[key] ?? ""). localeCompare(
String(b.user[key] ?? ""),
  undefined,
  {sensitivity: "base", numeric: true}
);
  }

return direction === "asc" ? result : -result;


});
}, [users, search, sortConfig]);


  

  return (
    <div className="w-[630px] overflow-x-auto min-[768px]:max-[1024px]:w-[1000px] min-[412px]:max-[915px]:w-[1000px]">

<Input
type="text"
placeholder="Search users..."
value={search}
onChange={(e) => setSearch(e.target.value)}
className="mb-4 w-full mt-4 border-[var(--bg)]"
/>


      <Table className="w-max border-collapse bg-[var(--bg)] text-[var(--text)]">
        <TableHeader>
          <TableRow>
            <TableHead className="py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
            <Button variant="ghost" onClick={() => handleSort("serialNo") }>
              Serial No.
              {
              sortConfig.key === "serialNo"
              ? sortConfig.direction === "asc"
              ? " ↑"
              : sortConfig.direction === "desc"
              ? " ↓"
              : " ↕"
            : " ↕"
              }
              </Button>
             
            </TableHead>

            <TableHead className= "py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">
              <Button variant="ghost" onClick={() => handleSort("fname") }>
              First Name
              {
              sortConfig.key === "fname"
              ? sortConfig.direction === "asc"
              ? " ↑"
              : sortConfig.direction === "desc"
              ? " ↓"
              : " ↕"
            : " ↕"
              }
              </Button>
              
            </TableHead>
            <TableHead className= "py-2 px-3 border whitespace-nowrap border-[var(--primary)] text-[var(--text)]">

            <Button variant="ghost" onClick={() => handleSort("lname") }>
              Last Name
              {
              sortConfig.key === "lname"
              ? sortConfig.direction === "asc"
              ? " ↑"
              : sortConfig.direction === "desc"
              ? " ↓"
              : " ↕"
            : " ↕"
              }
              </Button>
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
          {sortedUsers.map(({user , originalIndex}, index) => (
            <TableRow key={index}>
              <TableCell className="py-2 px-3 border whitespace-nowrap border-[var(--primary)]">
              originalIndex:{originalIndex + 1}<br></br>
              index: {index + 1}
                
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
                  onClick={() => editUser(originalIndex)}
                >
                  Edit
                </Button>
                <br></br>
                <Button
                  className="py-1 px-2 text-[0.9rem] m-[2px] border-0 rounded-[4px] cursor-pointer bg-[#4b6cb7]"
                  onClick={() => deleteUser(originalIndex)}
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
