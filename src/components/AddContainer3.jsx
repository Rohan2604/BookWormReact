import './App.css';
import add1 from '../images/add1.webp';
import add2 from '../images/add2.webp';

const homePageImg = {
  width : "550px",
  height: "280px"
}
function AddContainer3() {
  return (
    <div class="grid-container-add"> 
        <div class="add-container">
            <img src={add1} style={homePageImg} alt="Ebook image"/>  
        </div>  
        <div class="add-container">
            <img src={add2} style={homePageImg} alt="Ebook image"/>  
        </div>  

    </div>
  
  );
}
export default AddContainer3; 
