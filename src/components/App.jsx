// We are importing All jsx files which we are going to use
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About'
import Contact from './Contact';
import './App.css';
import Categories from "./Categories";
import SignUp from "./SignUp";
import Login from "./Login";
import ItemDescription1 from "./ItemDescription1";
import Comedy from "./Comedy";
import Suspense from "./Suspense";
import Romance from "./Romance";
import Biography from "./Biography";
import ShoppingCart from "./ShoppingCart";
import Home1 from "./Home1";


function App() {

    return (
        <BrowserRouter>
            <Routes>
                {/* Here the default page is home page so we have use '/' for Home */}
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="ItemDescription1/:Productid/ShoppingCart/:productId" element={<ShoppingCart />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                <Route path="ItemDescription1/:productId" element={<ItemDescription1 />} />
                <Route path="/Comedy" element={<Comedy />} />
                <Route path="/Suspense" element={<Suspense />} />
                <Route path="/Romance" element={<Romance />} />
                <Route path="/Biography" element={<Biography />} />
                <Route path="ShoppingCart/:productId" element={<ShoppingCart />} />
                <Route path="/Home1" element={<Home1 />} />
                
            
            </Routes>
        </BrowserRouter>
        
    )
}
export default App;