import { useState } from "react";
import Login from "./Login";
export default function Conditional()
{
  const [isLoggedin, setLoggedin]=useState(false);
  const check=(event)=>{
    event.target.value==="Login"?setLoggedin(true):setLoggedin(false);
         }
    return (
    <div >
{/*     <h1>ff </h1> */}
{/*     <input type="text" value={isLoggedin}/> */}
    <Login isloggedIn={isLoggedin} onLogin={check}/>
    </div>
    );
}
