import React, { useState } from "react";

function Crud1() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setage] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [joiningDate, setjoiningDate] = useState("");
  const [data, setData] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === "firstName") {
      setfirstName(e.target.value);
    } else if (e.target.name === "lastName") {
      setlastName(e.target.value);
    } else if (e.target.name === "age") {
      setage(e.target.value);
    } else if (e.target.name === "dateOfBirth") {
      setdateOfBirth(e.target.value);
    } else if (e.target.name === "joiningdate") {
      setjoiningDate(e.target.value);
    }
  };

  const handleSubmit = () => {
    setData([...data, { firstName, lastName, age, dateOfBirth,
        joiningDate }]);

        setfirstName("");
        setlastName("");
        setage("");
        setdateOfBirth("");
        setjoiningDate("");
      

  };
  //     if (e.target.name === "firstName") {
  //       setfirstName(e.target.value);
  //     } else if (e.target.name === "lastName") {
  //       setlastName(e.target.value);
  //     } else if (e.target.name === "age") {
  //       setage(e.target.value);
  //     } else if (e.target.name === "dateOfBirth") {
  //       setdateOfBirth(e.target.value);
  //     } else if (e.target.name === "joiningdate") {
  //       setjoiningDate(e.target.value);
  //     }
  //   };

  const handleClick = (index) => {
  setData(data.filter((uio,i) =>{
   
    return i !== index;
    

  }))
 
  }

  return (

    <>
    <div className="container">
      <h4>Crud</h4>

      <div className="row">
        <div className=" col-2">
          <label>First Name</label>
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="col-2">
          <label>Last Name</label>
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className=" col-2">
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={age}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className=" col-2">
          <label>Date Of Birth</label>
          <input
            type="text"
            name="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className=" col-2">
          <label>Joining Date</label>
          <input
            type="text"
            name="joiningdate"
            value={joiningDate}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className=" col-2 mt-4">
          <button type="submit" onClick={() => handleSubmit()}>
            Submit
          </button>
        </div>
      </div>
      </div>
      


      <div>
        {data.map((el, index) => {
          return (
            <div key={index}>
              <li>{el.firstName}</li>
              <li>{el.lastName}</li>
              <li>{el.age}</li>
              <li>{el.dateOfBirth}</li>
              <li>{el.joiningDate}</li>
              
            <button type="button" onClick={() =>
                handleClick(index)}>Delete</button>
            </div>
          );
        })}
      </div>

</>


  );
}
export default Crud1;
