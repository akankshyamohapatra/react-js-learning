import { useState } from "react";
import "./index.css";

function UserForm({ addUser }) {
  const [fname, setFname] = useState("");
  const [fnameError, setFnameError] = useState("");
  const [lname, setLname] = useState("");
  const [lnameError,setLnameError]=useState("");
  const [dob, setDob] = useState("");
  const [dobError, setDobError] = useState("");
  const [gender, setGender] = useState("");
  const [genderError, setGenderError] = useState("");
  const [nationality, setNationality] = useState("");
  const [nationalityError, setNationalityError] = useState("");
  const [edlevel, setEdlevel] = useState("");
  const [edlevelError, setEdlevelError] = useState("");
  const [major, setMajor] = useState("");
  const [majorError, setMajorError] = useState("");
  const [gpa, setGpa] = useState("");
  const [gpaError, setGpaError] = useState("");
  const [school, setSchool] = useState("");
  const [schoolError, setSchoolError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [street, setStreet] = useState("");
  const [streetError, setStreetError] = useState("");
  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState("");
  const [state, setState] = useState("");
  const [stateError, setStateError] = useState("");
  const [email, setEmail] = useState("");
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

if (value==""){
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

  if (value==""){
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

    if (value==""){
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

  












  const handleSubmit = (e) => {
    e.preventDefault();


  // if(!fname || !lname || ! dob || !gender || !nationality 
  //   || !edlevel || !major || !gpa || !school || !phone ||
  //   !street || !city || !state || !email
  // ) {
  //   alert("Please fill all required fields");
  //   return;
  // }

const isFnameValid= validateFname(fname);
const isLnameValid=validateLname(lname);
const isDobValid=validateDob(dob);
const isGenderValid=validateGender(gender);
const isNationalityValid= validateNationality(nationality);
const isEdlevelValid= validateEdlevel(edlevel);
const isMajorValid = validateMajor(major);
const isGpaValid= validateGpa(gpa);
const isSchoolValid= validateSchool(school);
const isPhoneValid= validatePhone(phone);
const isStreetValid=validateStreet(street);
const isCityValid= validateCity(city);
const isStateValid= validateState(state);
const isEmailValid= validateEmail(email);



 
 if(!isFnameValid || !isLnameValid || !isDobValid
|| !isGenderValid || !isNationalityValid ||
 !isEdlevelValid || !isMajorValid || !isGpaValid
 || !isSchoolValid|| !isPhoneValid ||
 !isStreetValid || !isCityValid ||
 !isStateValid || !isEmailValid

){
  return;
 }










    addUser({
      fname,
      lname,
      dob,
      gender,
      nationality,
      edlevel,
      major,
      gpa,
      school,
      phone,
      street,
      city,
      state,
      email,
    });

    setFname("");
    setLname("");
    setEmail("");
    setDob("");
    setGender("");
    setNationality("");
    setEdlevel("");
    setMajor("");
    setGpa("");
    setSchool("");
    setPhone("");
    setStreet("");
    setCity("");
    setState("");
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
          placeholder="First Name"
          value={fname}
          onChange={(e) => {setFname(e.target.value)
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
          placeholder="Last Name"
          value={lname}
          onChange={(e) => {setLname(e.target.value) 
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
          placeholder="dd/mm/yy"
          value={dob}
          onChange={(e) => {setDob(e.target.value)
                            validateDob(e.target.value)}}
        />
        <div className="error-message" >{dobError}</div>
        </div>
        
        
        <div className=" form-group">
        <label htmlFor="gender">Gender: </label>

        <select
          placeholder="gender" value={gender}
          onChange={(e) => {setGender(e.target.value)
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
          placeholder="nationality"
          value={nationality}
          onChange={(e) => {setNationality(e.target.value)
                            validateNationality(e.target.value)}}
        />
        <div className="error-message" >{nationalityError}</div>
        </div>

        <div className="form-group">

        <label htmlFor="edlevel">Education Level: </label>
        <select
          value={edlevel}
          onChange={(e) => {setEdlevel(e.target.value)
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
          placeholder="e.g.,computer science"
          value={major}
          onChange={(e) => {setMajor(e.target.value)
                           validateMajor(e.target.value)}}
        />
        <div className="error-message" >{majorError}</div>
        </div>

        <div className="form-group">

        <label htmlFor="gpa">gpa: </label>
        <input
          type="text"
          placeholder="e.g.,3.8"
          value={gpa}
          onChange={(e) => {setGpa(e.target.value)
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
          placeholder="Email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)
                            validateEmail(e.target.value)}}
        />
        <div className="error-message" >{emailError}</div>
</div>
        
<div className=" form-group ">
        <label htmlFor="school">school: </label>
        <input
          type="text"
          placeholder="school"
          value={school}
          onChange={(e) => {setSchool(e.target.value)
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
          placeholder="+1(555)123-4567"
          value={phone}
          onChange={(e) => {setPhone(e.target.value)
                            validatePhone(e.target.value)}}
        />
        <div className="error-message" >{phoneError}</div>
        </div>

        <div className=" form-group ">
        <label htmlFor="street">street: </label>
        <input
          type="text"
          placeholder="123 main street"
          value={street}
          onChange={(e) => {setStreet(e.target.value)
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
          placeholder="enter city"
          value={city}
          onChange={(e) => {setCity(e.target.value)
                            validateCity(e.target.value)}}
        />
        <div className="error-message" >{cityError}</div>
        </div>

        <div className=" form-group ">
        <label htmlFor="state">state: </label>
        <input
          type="text"
          placeholder="enter state"
          value={state}
          onChange={(e) => {setState(e.target.value)
                            validateState(e.target.value)}}
        />
        <div className="error-message" >{stateError}</div>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default UserForm;
