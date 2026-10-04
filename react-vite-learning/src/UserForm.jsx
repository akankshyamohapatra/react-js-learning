import { useState, useEffect} from "react";
import "./index.css";
import useUserStore from "./store/userStore";

function UserForm() {

  const users=useUserStore(
    (state) => state.users
  );

  const saveUser=useUserStore(
    (state) => state.saveUser
  );

const editIndex=useUserStore(
  (state) => state.editIndex
);






  const [formData, setFormData]= useState({

fname: "",
lname: "",
gender: "",
nationality: "",
edlevel: "",
gpa: "",
school: "",
city: "",
dob: "",
major: "",
email: "",
phone: "",
street: "",
state: ""

  });

  const [fnameError, setFnameError] = useState("");
  const [lnameError,setLnameError]=useState("");
  const [dobError, setDobError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [nationalityError, setNationalityError] = useState("");
  const [edlevelError, setEdlevelError] = useState("");
  const [majorError, setMajorError] = useState("");
  const [gpaError, setGpaError] = useState("");
  const [schoolError, setSchoolError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [streetError, setStreetError] = useState("");
  const [cityError, setCityError] = useState("");
  const [stateError, setStateError] = useState("");
  const [emailError, setEmailError] = useState("");



//input validation

//first name validation
  const validateFname=(value) => {

    if(value===""){
    setFnameError("first name cannot be empty");
    return false;
    } else if (value.trim().length < 3){
      setFnameError("first name must be at least 3 characters")
      return false;
    } else {
      setFnameError("")
      return true;
    }
  }

  //last name validation
  const validateLname=(value) => {

    if(value===""){
    setLnameError("last name cannot be empty");
    return false;
    } else if (value.trim().length < 3){
      setLnameError("last name must be at least 3 characters")
      return false;
    } else {
      setLnameError("")
      return true;
    }
  }

  
//Dob validation



const validateDob =(value) =>{

if (value===""){
  setDobError("dob cannot be empty.")
  return false;
}  else {
  setDobError("")
  return true;
}

}


//gender validation

const validateGender=(value) => {

  if(value===""){
  setGenderError("gender cannot be empty");
  return false;
  }  else {
    setGenderError("")
    return true;
  }
}

//nationality validation
const validateNationality=(value) => {

  if(value===""){
  setNationalityError("Nationality cannot be empty");
  return false;
  } else if (value.trim().length < 3){
    setNationalityError("Nationality must be at least 3 characters")
    return false;
  } else {
    setNationalityError("")
    return true;
  }
}

//education-level validation

const validateEdlevel=(value) => {

  if(value===""){
  setEdlevelError("Education level cannot be empty");
  return false;
  } else {
    setEdlevelError("")
    return true;
  }
}

//major validation

const validateMajor=(value) => {

  if(value===""){
  setMajorError("Major cannot be empty");
  return false;
  } else if (value.trim().length < 3){
    setMajorError("Major must be at least 3 characters")
    return false;
  } else {
    setMajorError("")
    return true;
  }
}

//gpa validation
const validateGpa=(value) => {

  if(value===""){
  setGpaError("gpa cannot be empty");
  return false;
  } else if (isNaN(value) || value <=0){
    setGpaError("Please enter a valid gpa!")
    return false;
  } else {
    setGpaError("")
    return true;
  }
}

//school validation
const validateSchool=(value) => {

  if(value===""){
  setSchoolError("School cannot be empty");
  return false;
  } else if (value.trim().length < 3){
    setSchoolError("School must be at least 3 characters")
    return false;
  } else {
    setSchoolError("")
    return true;
  }
}

//email validation

let dmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/i;

const validateEmail =(value) =>{

  if (value===""){
    setEmailError("email cannot be empty.")
    return false;
  } else if(!dmail.test(value)){
    setEmailError("please enter a valid email")
    return false;
  } else {
    setEmailError("")
    return true;
  }
  
  }

  //phone validation
  let contactno = /^\+[1-9]\d{1,14}$/;

  const validatePhone =(value) =>{

    if (value===""){
      setPhoneError("mobile no. cannot be empty.")
      return false;
    } else if(!contactno.test(value)){
      setPhoneError("please enter a valid phone number")
      return false;
    } else {
      setPhoneError("")
      return true;
    }
    
    }

    //street validation
    const validateStreet=(value) => {

      if(value===""){
      setStreetError("Street cannot be empty");
      return false;
      } else if (value.trim().length < 3){
        setStreetError("Street must be at least 3 characters")
        return false;
      } else {
        setStreetError("")
        return true;
      }
    }

    //city validation
    const validateCity=(value) => {

      if(value===""){
      setCityError("City cannot be empty");
      return false;
      } else if (value.trim().length < 3){
        setCityError("City must be at least 3 characters")
        return false;
      } else {
        setCityError("")
        return true;
      }
    }

    //state validation
    const validateState=(value) => {

      if(value===""){
      setStateError("State cannot be empty");
      return false;
      } else if (value.trim().length < 3){
        setStateError("State must be at least 3 characters")
        return false;
      } else {
        setStateError("")
        return true;
      }
    }



  useEffect ( ()=> {
if(editIndex !== null) {
setFormData(users[editIndex]);
}
  },[editIndex,users]);


const handleChange =(e) =>{
setFormData({
  ...formData,
  [e.target.name]: e.target.value,
});
};









  const handleSubmit = (e) => {
    e.preventDefault();


  // if(!fname || !lname || ! dob || !gender || !nationality 
  //   || !edlevel || !major || !gpa || !school || !phone ||
  //   !street || !city || !state || !email
  // ) {
  //   alert("Please fill all required fields");
  //   return;
  // }

const isFnameValid= validateFname(formData.fname);
const isLnameValid=validateLname(formData.lname);
const isDobValid=validateDob(formData.dob);
const isGenderValid=validateGender(formData.gender);
const isNationalityValid= validateNationality(formData.nationality);
const isEdlevelValid= validateEdlevel(formData.edlevel);
const isMajorValid = validateMajor(formData.major);
const isGpaValid= validateGpa(formData.gpa);
const isSchoolValid= validateSchool(formData.school);
const isPhoneValid= validatePhone(formData.phone);
const isStreetValid=validateStreet(formData.street);
const isCityValid= validateCity(formData.city);
const isStateValid= validateState(formData.state);
const isEmailValid= validateEmail(formData.email);



 
 if(!isFnameValid || !isLnameValid || !isDobValid
|| !isGenderValid || !isNationalityValid ||
 !isEdlevelValid || !isMajorValid || !isGpaValid
 || !isSchoolValid|| !isPhoneValid ||
 !isStreetValid || !isCityValid ||
 !isStateValid || !isEmailValid

){
  return;
 }



saveUser(formData);


setFormData({
  fname: "",
  lname: "",
  gender: "",
  nationality: "",
  edlevel: "",
  gpa: "",
  school: "",
  city: "",
  dob: "",
  major: "",
  email: "",
  phone: "",
  street: "",
  state: "",
})



    

    
  };

  return (
    <div className="px-10 py-[30px] rounded-[10px] shadow-lg max-w-[1000px] w-[700px] min-[412px]:max-[915px]:w-[970px] bg-[var(--bg)] text-[var(--text)]">
    <form onSubmit={handleSubmit}>
      <h2 className="text-[24px] leading-[118%] tracking-[-0.24px] mb-5 text-center max-[1024px]:text-[20px]">Student Registration Form</h2>

      <div className="flex gap-5 max-[600px]:flex-col">

        <div className="flex flex-col mb-[15px] flex-[3]">
        <label className ="mb-[5px] font-bold  flex justify-start  text-[var(--text)]"
        htmlFor="fname"
        >First Name: </label>

        <input className="p-[10px] border-2 rounded-[5px] text-base box-border w-full mb-[10px] bg-[var(--bg)] text-[var(--text)] border-[var(--primary)]" 
          type="text"
          name="fname"
          placeholder="First Name"
          value={formData.fname}
          onChange={(e) => {handleChange(e)
                            validateFname(e.target.value)}}
        />
        <div className="text-red-500 text-[0.9em] min-h-[1em]">
  {fnameError}
</div>
        </div>


        <div className=" flex flex-col mb-[15px] flex-[3]">
        <label className ="mb-[5px] font-bold  flex justify-start text-[var(--text)]" 
        htmlFor="lname"
        >Last Name: </label>

        <input className="p-[10px] border-2 rounded-[5px] text-base box-border w-full mb-[10px] bg-[var(--bg)] text-[var(--text)] border-[var(--primary)]"
          type="text"
          name="lname"
          placeholder="Last Name"
          value={formData.lname}
          onChange={(e) => {handleChange(e)
                            validateLname(e.target.value)}}
        />
      <div className="text-red-500 text-[0.9em] min-h-[1em]" >{lnameError}</div>
        
        </div>
      </div>

      <div className="flex gap-5 max-[600px]:flex-col">
      <div className=" flex flex-col mb-[15px] flex-[3] ">
        <label className = "mb-[5px] font-bold  flex justify-start text-[var(--text)]" 
        htmlFor="dob"
        >Date of Birth: </label>
        <input className="p-[10px] border-2 rounded-[5px] text-base box-border w-full mb-[10px] bg-[var(--bg)] text-[var(--text)] border-[var(--primary)]"
          type="date"
          name="dob"
          placeholder="dd/mm/yy"
          value={formData.dob}
          onChange={(e) => {handleChange(e)
                            validateDob(e.target.value)}}
        />
        <div className="text-red-500 text-[0.9em] min-h-[1em]" >{dobError}</div>
        </div>
        
        
        <div className=" flex flex-col mb-[15px] flex-[3]">
        <label className = "mb-[5px] font-bold  flex justify-start text-[var(--text)]" 
        htmlFor="gender"
        >Gender: </label>

        <select className="p-[10px] border-2 border-black rounded-[5px] text-base box-border w-full mb-[10px]"
        name="gender"
          placeholder="gender"
           value={formData.gender}
          onChange={(e) => {handleChange(e)
                            validateGender(e.target.value)}}
          >
          <option value="" disabled >
            Select Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <div className="text-red-500 text-[0.9em] min-h-[1em]" >{genderError}</div>
        </div>
      </div>

      <div className="flex gap-5 max-[600px]:flex-col">
        <div className="flex flex-col mb-[15px] flex-[3]">
        <label className = "mb-[5px] font-bold  flex justify-start text-[var(--text)]" 
        htmlFor="nationality">Nationality: </label>
        <input className="p-[10px] border-2 rounded-[5px] text-base box-border w-full mb-[10px] bg-[var(--bg)] text-[var(--text)] border-[var(--primary)]"
          type="text"
          name="nationality"
          placeholder="nationality"
          value={formData.nationality}
          onChange={(e) => {handleChange(e)
                            validateNationality(e.target.value)}}
        />
        <div className="text-red-500 text-[0.9em] min-h-[1em]" >{nationalityError}</div>
        </div>

        <div className="flex flex-col mb-[15px] flex-[3]">

        <label className = "mb-[5px] font-bold  flex justify-start text-[var(--text)]" 
        htmlFor="edlevel">Education Level: </label>
        <select className="p-[10px] border-2 border-black rounded-[5px] text-base box-border w-full mb-[10px]"
        name="edlevel"
          value={formData.edlevel}
          onChange={(e) => {handleChange(e)
                            validateEdlevel(e.target.value)}}
           >
          <option value="" disabled >
            Select education level
          </option>
          <option value="high school">High School</option>
          <option value="Bachelor's degree">Bachelor's Degree</option>
          <option value="master's degree">Master's Degree</option>
          <option value="phd">PhD</option>
        </select>
        <div className="text-red-500 text-[0.9em] min-h-[1em]" >{edlevelError}</div>
        </div>
      </div>

      <div className="flex gap-5 max-[600px]:flex-col">
      <div className="flex flex-col mb-[15px] flex-[3]">
        <label className = "mb-[5px] font-bold  flex justify-start text-[var(--text)]" 
        htmlFor="study"
        >major: </label>
        <input className="p-[10px] border-2 rounded-[5px] text-base box-border w-full mb-[10px] bg-[var(--bg)] text-[var(--text)] border-[var(--primary)]"
          type="text"
          name="major"
          placeholder="e.g.,computer science"
          value={formData.major}
          onChange={(e) => {handleChange(e)
                           validateMajor(e.target.value)}}
        />
        <div className="text-red-500 text-[0.9em] min-h-[1em]" >{majorError}</div>
        </div>

        <div className="flex flex-col mb-[15px] flex-[3]">

        <label className = "mb-[5px] font-bold  flex justify-start text-[var(--text)]" 
        htmlFor="gpa">gpa: </label>
        <input className="p-[10px] border-2 rounded-[5px] text-base box-border w-full mb-[10px] bg-[var(--bg)] text-[var(--text)] border-[var(--primary)]"
          type="text"
          name="gpa"
          placeholder="e.g.,3.8"
          value={formData.gpa}
          onChange={(e) => {handleChange(e)
                            validateGpa(e.target.value)}}
        />
        <div className="text-red-500 text-[0.9em] min-h-[1em]" >{gpaError}</div>
        </div>
      </div>

      <div className="flex gap-5 max-[600px]:flex-col">
      <div className="flex flex-col mb-[15px] flex-[3]">
        <label className = "mb-[5px] font-bold  flex justify-start text-[var(--text)]" 
        htmlFor="email">Email Address: </label>
        <input className="p-[10px] border-2 rounded-[5px] text-base box-border w-full mb-[10px] bg-[var(--bg)] text-[var(--text)] border-[var(--primary)]"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => {handleChange(e)
                            validateEmail(e.target.value)}}
        />
        <div className="text-red-500 text-[0.9em] min-h-[1em]" >{emailError}</div>
</div>
        
<div className=" flex flex-col mb-[15px] flex-[3] ">
        <label className = "mb-[5px] font-bold  flex justify-start text-[var(--text)]" 
        htmlFor="school">school: </label>
        <input className="p-[10px] border-2 rounded-[5px] text-base box-border w-full mb-[10px] bg-[var(--bg)] text-[var(--text)] border-[var(--primary)]"
          type="text"
          name="school"
          placeholder="school"
          value={formData.school}
          onChange={(e) => {handleChange(e)
                            validateSchool(e.target.value)}}
        />
        <div className="text-red-500 text-[0.9em] min-h-[1em]" >{schoolError}</div>
      </div>
      </div>

      <div className="flex gap-5 max-[600px]:flex-col">
      <div className=" flex flex-col mb-[15px] flex-[3]">
        <label className = "mb-[5px] font-bold  flex justify-start text-[var(--text)]" 
        htmlFor="phone">mobile no: </label>
        <input className="p-[10px] border-2 rounded-[5px] text-base box-border w-full mb-[10px] bg-[var(--bg)] text-[var(--text)] border-[var(--primary)]"
          type="tel"
          name="phone"
          placeholder="+1(555)123-4567"
          value={formData.phone}
          onChange={(e) => {handleChange(e)
                            validatePhone(e.target.value)}}
        />
        <div className="text-red-500 text-[0.9em] min-h-[1em]" >{phoneError}</div>
        </div>

        <div className=" flex flex-col mb-[15px] flex-[3] ">
        <label className = "mb-[5px] font-bold  flex justify-start text-[var(--text)]" 
        htmlFor="street">street: </label>
        <input className="p-[10px] border-2 rounded-[5px] text-base box-border w-full mb-[10px] bg-[var(--bg)] text-[var(--text)] border-[var(--primary)]"
          type="text"
          name="street"
          placeholder="123 main street"
          value={formData.street}
          onChange={(e) => {handleChange(e)
                            validateStreet(e.target.value)}}
        />
        <div className="text-red-500 text-[0.9em] min-h-[1em]" >{streetError}</div>
         </div>
      </div>

      <div className="flex gap-5 max-[600px]:flex-col">
      <div className=" flex flex-col mb-[15px] flex-[3]">
        <label className = "mb-[5px] font-bold  flex justify-start text-[var(--text)]" 
        htmlFor="city">city: </label>
        <input className="p-[10px] border-2 rounded-[5px] text-base box-border w-full mb-[10px] bg-[var(--bg)] text-[var(--text)] border-[var(--primary)]"
          type="text"
          name="city"
          placeholder="enter city"
          value={formData.city}
          onChange={(e) => {handleChange(e)
                            validateCity(e.target.value)}}
        />
        <div className="text-red-500 text-[0.9em] min-h-[1em]" >{cityError}</div>
        </div>

        <div className=" flex flex-col mb-[15px] flex-[3] ">
        <label className = "mb-[5px] font-bold  flex justify-start text-[var(--text)]" 
        htmlFor="state">state: </label>
        <input className = "p-[10px] border-2 rounded-[5px] text-base box-border w-full mb-[10px] bg-[var(--bg)] text-[var(--text)] border-[var(--primary)]"
          type="text"
          name="state"
          placeholder="enter state"
          value={formData.state}
          onChange={(e) => {handleChange(e)
                            validateState(e.target.value)}}
        />
        <div className="text-red-500 text-[0.9em] min-h-[1em]" >{stateError}</div>
        </div>
      </div>

      <button className="w-full p-3 bg-[#4b6cb7] text-white border-0 rounded-[5px] text-[1.1rem] cursor-pointer transition-[background] duration-300 ease-in-out mb-[30px] hover:bg-[#182848]"
      type="submit">
{editIndex !== null ? "Update": "Register"}
</button>
    </form>
    </div>
  );
}

export default UserForm;
