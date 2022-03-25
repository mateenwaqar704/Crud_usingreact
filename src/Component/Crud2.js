import React, { useState } from "react";

function Crud2() {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setage] = useState("");
  const [dateOfBirth, setdateOfBirth] = useState("");
  const [joiningdate, setjoiningdate] = useState("");
  const [data, setData] = useState([]);

  const handleCHange = (e) => {
    if (e.target.name === "firstName") {
      setfirstName(e.target.value);
    } else if (e.target.name === "lastName") {
      setlastName(e.target.value);
    } else if (e.target.name === "age") {
      setage(e.target.value);
    } else if (e.target.name === "dateOfBirth") {
      setdateOfBirth(e.target.value);
    } else if (e.target.name === "joiningdate") {
      setjoiningdate(e.target.value);
    }
  };

  const handleSUbmit = () => {
    setData([...data, { firstName, lastName, age, dateOfBirth, joiningdate }]);
    setfirstName("");
    setlastName("");
    setage("");
    setdateOfBirth("");
    setjoiningdate("");
  };

  const handleDelete = (index) => {
    setData(
      data.filter((io, i) => {
        return i !== index;
      })
    );
  };

  const handleEdit = (eryer) => {
    setfirstName(eryer.firstName);
    setlastName(eryer.lastName);
    setage(eryer.age);
    setdateOfBirth(eryer.dateOfBirth);
    setjoiningdate(eryer.joiningdate);
  };
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
              onChange={(e) => handleCHange(e)}
            />
          </div>
          <div className="col-2">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => handleCHange(e)}
            />
          </div>
          <div className=" col-2">
            <label>Age</label>
            <input
              type="text"
              name="age"
              value={age}
              onChange={(e) => handleCHange(e)}
            />
          </div>
          <div className=" col-2">
            <label>Date Of Birth</label>
            <input
              type="text"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={(e) => handleCHange(e)}
            />
          </div>
          <div className=" col-2">
            <label>Joining Date</label>
            <input
              type="text"
              name="joiningdate"
              value={joiningdate}
              onChange={(e) => handleCHange(e)}
            />
          </div>
          <div className=" col-2 mt-4">
            <button type="submit" onClick={() => handleSUbmit()}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <div>
        {data.map((po, index) => {
          return (
            <div key={index}>
              <li>{po.firstName}</li>
              <li>{po.lastName}</li>
              <li>{po.age}</li>
              <li>{po.joiningdate}</li>
              <li>{po.dateOfBirth}</li>

              <button className="m-2" onClick={(el)=>handleEdit(po)}>
                Edit
              </button>

              <button type="submit" onClick={()=>handleDelete(index)}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Crud2;
