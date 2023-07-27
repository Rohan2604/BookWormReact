import { Link } from "react-router-dom";
import AddContainer2 from "./AddContainer2";
import Footer from './Footer'
import NavBar from "./NavBar";

const Contact = () => {
    return(
        <>
            <header>
                <NavBar />
                <AddContainer2 />
                <div>
                    <h1>BookWorm.com</h1>
                    <h2>Kindly contact us on one of the following : </h2>
                    <br/>
                    <h4>Address : </h4>
                    <h5>BookWorm pvt ltd,
                        Juhu,Mumbai.
                    </h5>
                    <h4>Phone Number : <p>+91 987654321</p></h4>
                    <h4>Email Id :  <a href="#">bookworm@yahoo.com</a></h4>
                </div>
                <Footer />
            </header>
        </>
    )
}
export default Contact;