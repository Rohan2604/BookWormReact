import React, { useState } from "react";
import { Button } from "react-bootstrap";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { Navigate } from "react-router-dom";
import { Link  } from "react-router-dom";

const SignUp = () => {
  const [customerMasterDetails, setCustomerMasterDetails] = useState({});
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      fetch("https://localhost:7108/api/CustomerMasters", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(customerMasterDetails),
      })
        .then((response) => {
          if (response.ok) {
            console.log("Form submitted successfully!");
            setCustomerMasterDetails({});
            setErrors({});
          } else {
            throw new Error("Form submission failed");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setErrors(validationErrors);
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setCustomerMasterDetails((customerMasterDetails) => ({ ...customerMasterDetails, [name]: value }));
  };

  const validate = () => {
    let validationErrors = {};

    if (!customerMasterDetails.firstName) {
      validationErrors.firstName = "First name is required";
    }

    if (!customerMasterDetails.lastName) {
      validationErrors.lastName = "Last name is required";
    }

    if (!customerMasterDetails.email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(customerMasterDetails.email)) {
      validationErrors.email = "Email is invalid";
    }

    if (!customerMasterDetails.password) {
      validationErrors.password = "Password is required";
    } else if (
      customerMasterDetails.password.length < 8 ||
      customerMasterDetails.password.length > 15
    ) {
      validationErrors.password =
        "Password must be at least 8 characters and below 15 characters";
    }

    var phnum = /^[7-9]\d{9}$/;
    if (!customerMasterDetails.phoneNumber) {
      validationErrors.phoneNumber = "Phone number is required";
    } else if (!phnum.test(customerMasterDetails.phoneNumber)) {
      validationErrors.phoneNumber = "Phone number is not valid";
    }

    return validationErrors;
  };

//   const SignInButton = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(true);

//     if (isLoggedIn) {
//         return <Button>Logout</Button>;
//     } else {
//         // If user is logged out
//         return <Button>Login</Button>;
//     }
// };


  return (
    <>
    
    <header>
      <NavBar />
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <p>
          <label>
            First name:
            <input
            
              type="text"
              name="firstName"
              value={customerMasterDetails.firstName || ""}
              onChange={handleChange}
            />
          </label>
          {errors.firstName && <span>{errors.firstName}</span>}
        </p>

        <p >
          <label>
            Last name:
            <input
              type="text"
              name="lastName"
              value={customerMasterDetails.lastName || ""}
              onChange={handleChange}
            />
          </label>
          {errors.lastName && <span>{errors.lastName}</span>}
        </p>

        <p>
          <label>
            Email:
            <input
              type="text"
              name="email"
              value={customerMasterDetails.email || ""}
              onChange={handleChange}
            />
          </label>
          {errors.email && <span>{errors.email}</span>}
        </p>

        <p>
          <label>
            Password:
            <input
              type="password"
              name="password"
              value={customerMasterDetails.password || ""}
              onChange={handleChange}
            />
          </label>
          {errors.password && <span>{errors.password}</span>} 
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
             {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
          </p>
          
          
          <input type="submit" onClick={ <Navigate to="/" replace={true} /> } />
        </form>
       
     </header>
      <Footer />
    </>
  );
};
export default SignUp;
