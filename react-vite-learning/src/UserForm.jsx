import { useState, useEffect} from "react";
import "./index.css";

function UserForm({ saveUser, editUser}) {
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
if(editUser) {
setFormData(editUser);
}
  },[editUser]);


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
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h2>Student Registration Form</h2>

      <div className="row">

        <div className=" form-group ">
        <label htmlFor="fname">First Name: </label>

        <input
          type="text"
          name="fname"
          placeholder="First Name"
          value={formData.fname}
          onChange={(e) => {handleChange(e)
                            validateFname(e.target.value)}}
        />
        <div className="error-message">
  {fnameError}
</div>
        </div>


        <div className=" form-group">
        <label htmlFor="lname">Last Name: </label>

        <input
          type="text"
          name="lname"
          placeholder="Last Name"
          value={formData.lname}
          onChange={(e) => {handleChange(e)
                            validateLname(e.target.value)}}
        />
      <div className="error-message" >{lnameError}</div>
        
        </div>
      </div>

      <div className="row">
      <div className=" form-group ">
        <label htmlFor="dob">Date of Birth: </label>
        <input
          type="date"
          name="dob"
          placeholder="dd/mm/yy"
          value={formData.dob}
          onChange={(e) => {handleChange(e)
                            validateDob(e.target.value)}}
        />
        <div className="error-message" >{dobError}</div>
        </div>
        
        
        <div className=" form-group">
        <label htmlFor="gender">Gender: </label>

        <select
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
        <div className="error-message" >{genderError}</div>
        </div>
      </div>

      <div className="row">
        <div className="form-group">
        <label htmlFor="nationality">Nationality: </label>
        <input
          type="text"
          name="nationality"
          placeholder="nationality"
          value={formData.nationality}
          onChange={(e) => {handleChange(e)
                            validateNationality(e.target.value)}}
        />
        <div className="error-message" >{nationalityError}</div>
        </div>

        <div className="form-group">

        <label htmlFor="edlevel">Education Level: </label>
        <select
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
        <div className="error-message" >{edlevelError}</div>
        </div>
      </div>

      <div className="row">
      <div className="form-group">
        <label htmlFor="study">major: </label>
        <input
          type="text"
          name="major"
          placeholder="e.g.,computer science"
          value={formData.major}
          onChange={(e) => {handleChange(e)
                           validateMajor(e.target.value)}}
        />
        <div className="error-message" >{majorError}</div>
        </div>

        <div className="form-group">

        <label htmlFor="gpa">gpa: </label>
        <input
          type="text"
          name="gpa"
          placeholder="e.g.,3.8"
          value={formData.gpa}
          onChange={(e) => {handleChange(e)
                            validateGpa(e.target.value)}}
        />
        <div className="error-message" >{gpaError}</div>
        </div>
      </div>

      <div className="row">
      <div className="form-group">
        <label htmlFor="email">Email Address: </label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => {handleChange(e)
                            validateEmail(e.target.value)}}
        />
        <div className="error-message" >{emailError}</div>
</div>
        
<div className=" form-group ">
        <label htmlFor="school">school: </label>
        <input
          type="text"
          name="school"
          placeholder="school"
          value={formData.school}
          onChange={(e) => {handleChange(e)
                            validateSchool(e.target.value)}}
        />
        <div className="error-message" >{schoolError}</div>
      </div>
      </div>

      <div className="row">
      <div className=" form-group ">
        <label htmlFor="phone">mobile no: </label>
        <input
          type="tel"
          name="phone"
          placeholder="+1(555)123-4567"
          value={formData.phone}
          onChange={(e) => {handleChange(e)
                            validatePhone(e.target.value)}}
        />
        <div className="error-message" >{phoneError}</div>
        </div>

        <div className=" form-group ">
        <label htmlFor="street">street: </label>
        <input
          type="text"
          name="street"
          placeholder="123 main street"
          value={formData.street}
          onChange={(e) => {handleChange(e)
                            validateStreet(e.target.value)}}
        />
        <div className="error-message" >{streetError}</div>
         </div>
      </div>

      <div className="row">
      <div className=" form-group ">
        <label htmlFor="city">city: </label>
        <input
          type="text"
          name="city"
          placeholder="enter city"
          value={formData.city}
          onChange={(e) => {handleChange(e)
                            validateCity(e.target.value)}}
        />
        <div className="error-message" >{cityError}</div>
        </div>

        <div className=" form-group ">
        <label htmlFor="state">state: </label>
        <input
          type="text"
          name="state"
          placeholder="enter state"
          value={formData.state}
          onChange={(e) => {handleChange(e)
                            validateState(e.target.value)}}
        />
        <div className="error-message" >{stateError}</div>
        </div>
      </div>

      <button type="submit">
{editUser ? "Update": "Register"}
</button>
    </form>
    </div>
  );
}

export default UserForm;
