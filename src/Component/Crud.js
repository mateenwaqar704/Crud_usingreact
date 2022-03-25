import React, { useState } from "react";

function Crud() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setage] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [joiningDate, setjoiningDate] = useState("");
  const [validation, setValidation] = useState(false);
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
    } else if (e.target.name === "joiningDate") {
      setjoiningDate(e.target.value);
    }
  };
  const handleSubmit = () => {
    if (firstName === "") {
      setValidation(true);
    } else if (lastName === "") {
      setValidation(true);
    } else if (age === "") {
      setValidation(true);
    } else if (dateOfBirth === "") {
      setValidation(true);
    } else if (joiningDate === "") {
      setValidation(true);
    } else {
      setValidation(false);

      setData([
        ...data,
        { firstName, lastName, age, dateOfBirth, joiningDate },
      ]);

      setfirstName("");
      setlastName("");
      setage("");
      setdateOfBirth("");
      setjoiningDate("");
    }
  };
  const handleDelete = (index) => {
    setData(
      data.filter((gf, i) => {
        return i !== index;
      })
    );
  };
  const handleEdit = (po) => {
    console.log(po);
    setfirstName(po.firstName);
    setlastName(po.lastName);
    setage(po.age);
    setdateOfBirth(po.dateOfBirth);
    setjoiningDate(po.joiningDate);
  };



  return (
    <>
      <div className="container">
        <h4> Crud App</h4>
        <div className="row">
          <div className=" col-2">
            <label> First Name </label>
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {validation && (
              <span className="text-danger">Please Enter First Name</span>
            )}
          </div>

          <div className=" col-2">
            <label> Last Name </label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {validation && (
              <span className="text-danger">Please Enter First Name</span>
            )}
          </div>
          <div className=" col-2">
            <label> Age </label>
            <input
              type="text"
              name="age"
              value={age}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {validation && (
              <span className="text-danger">Please Enter First Name</span>
            )}
          </div>
          <div className=" col-2">
            <label> Date Of Birth</label>
            <input
              type="text"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {validation && (
              <span className="text-danger">Please Enter First Name</span>
            )}
          </div>
          <div className=" col-2">
            <label> Joining Date</label>
            <input
              type="text"
              name="joiningDate"
              value={joiningDate}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            {validation && (
              <span className="text-danger">Please Enter First Name</span>
            )}
          </div>
          <div className=" col-2 mt-4">
            <button
              type="submit"
              name="button"
              onClick={() => {
                handleSubmit();
              }}
            >
              {" "}
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
              <button className="m-2" onClick={() => 
                handleDelete(index)}>
                Delete
              </button>
              <br />
              <button className="m-2" onClick={() =>
                 handleEdit(el)}>
                Edit
              </button>
            
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Crud;
