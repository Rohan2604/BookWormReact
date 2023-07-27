import { Link } from "react-router-dom";
import Footer from './Footer'
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import NavBar from "./NavBar";
//import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [customerMasterDetails, setDetails] = useState({});
  const [customerMaster, setCustomerMaster] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDetails((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = (event) => {
    //let demo = JSON.stringify(customerMasterDetails);

    //console.log(JSON.parse(demo));
    fetch("https://localhost:7108/api/Login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(customerMasterDetails)
    }).then((response=>response.json()))
    .then (data=> {

        //sessionStorage.setItem('key',value);
      //console.log(data);
      if(data)
      {   

        console.log(JSON.stringify (data));    
        sessionStorage.setItem('user',JSON.stringify (data)) 
alert("Appicable");
{/* <Navigate to="/home" replace={true} /> */}

//localStorage.setItem('currentUser', JSON.stringify(r.text));
console.log(data);
      }
      else
      {
        alert("not applicable");
        throw new Error("User is invalid");
      }

    });

    event.preventDefault();
  };

    return(
        <>
            <header>
                <NavBar />   
            </header>
            
<div class="grid-container-login">
<div class="grid-item-login">

<form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <tr>
          <p>
            {" "}
            <td><label>Email Id : </label></td>
            <td><input
            className="login-input"
              type="email"
              name="email"
              value={customerMasterDetails.email || ""}
              onChange={handleChange}
            /></td>{" "}
          </p>
          </tr>
          <tr>
          <p>
            {" "}
            <td><label>Password : </label></td>
            <td><input            
            className="login-input"
              type="password"
              name="password"
              value={customerMasterDetails.password || ""}
              onChange={handleChange}
            /></td>
          </p>
          </tr>
          <tr>
         <td><button className="view"><Link to={"/Home1"}>Submit</Link></button></td>
         </tr>
        </form>
</div>

            
       
            </div>
            {/* <button><Link to={"/Home1"}>Submit</Link></button> */}
                

            <Footer />
        </>
    )
}
export default Login;