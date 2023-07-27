import { Link } from "react-router-dom";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";

const SignUp = () => {
  const [customerMasterDetails, setDetails] = useState({});
  const [error,setError]=useState(false)
  useEffect(() => {
    fetch("https://localhost:7159/api/CustomerMasters/")
      .then((res) => res.json())
      .then((result) => {
        setDetails(result);
      });
  }, []);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDetails((values) => ({ ...values, [name]: value }));
  };

  const validate=()=>
  {
    let errors = {};

    if (!customerMasterDetails.firstName) {
      errors.firstName = "Name is required";
    }

    if (!customerMasterDetails.lastName) {
        errors.lastName = "lastName is required";
      }

    if (!customerMasterDetails.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(customerMasterDetails.email)) {
      errors.email = "Email is invalid";
    }

    var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    if (!customerMasterDetails.password) {
      errors.password = "Password is required";
    } else if (customerMasterDetails.password.length < 8 || customerMasterDetails.password.length > 15 ) {
      errors.password = "Password must be at least 8 characters and below 15 characters";
    } else if (!format.test(customerMasterDetails.password)){
      errors.password = "Password should contain atleast one special character"
    }
     
    var phnum = /^[7-9]\d{9}$/;
   if(!customerMasterDetails.phonenumber){ 
    errors.phonenumber = "Phone number is required";
   } else if (phnum.test(customerMasterDetails.phonenumber)) {
    errors.phonenumber = "Not in proper manner"
   }

    return errors;

  };
  const handleSubmit = (event) => {
    let demo = JSON.stringify(customerMasterDetails);
    console.log(JSON.parse(demo));
    fetch("https://localhost:7159/api/CustomerMasters/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: demo,
    }).then((r) => {
      console.log(r.json());
    });

    event.preventDefault();
  };

  return (
    <>
      <header>
        <div className="Navbar">
          <div class="grid-container">
            <div className="logo">BookWorm</div>
            <div>
              <ul className="nav-link">
                <li className="nav-li">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="nav-li">
                  <Link to={"/categories"}>Categories</Link>
                </li>
                <li className="nav-li">
                  <Link to={"/about"}>About</Link>
                </li>
                <li className="nav-li">
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </div>
            <div className="sign-up">
              <button>
                <Link to={"/signup"}>Sign Up</Link>
              </button>
            </div>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <h2>Sign Up</h2>
          <p>
            {" "}
            <label>First name : </label>
            <input
              type="text"
              name="firstName"
              value={customerMasterDetails.firstName || ""}
              onChange={handleChange}
            />{" "}
          </p>
          <p>
            {" "}
            <label>Last name : </label>
            <input
              type="text"
              name="lastName"
              value={customerMasterDetails.lastName || ""}
              onChange={handleChange}
            />{" "}
          </p>
          <p>
            {" "}
            <label>Email Id : </label>
            <input
              type="text"
              name="email"
              value={customerMasterDetails.email || ""}
              onChange={handleChange}
            />{" "}
          </p>
          <p>
            {" "}
            <label>Password : </label>
            <input
              type="text"
              name="password"
              value={customerMasterDetails.password || ""}
              onChange={handleChange}
            />
          </p>
          <p>
            {" "}
            <label>Phone Number : </label>
            <input
              type="text"
              name="phoneNumber"
              value={customerMasterDetails.phoneNumber || ""}
              onChange={handleChange}
            />
          </p>
          <input type="submit" />
        </form>
       
      </header>
      <Footer />
    </>
  );
};
export default SignUp;
