// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const homePageImg = {
//   width : "550px",
//   height: "280px"
// }
// function AddContainer2() {
//   return (
//     <div class="grid-container-add"> 
//         {/* <div class="add-container">
//             <img src={banner3} style={homePageImg} alt="Ebook image"/>  
//         </div>  
//         <div class="add-container">
//             <img src={banner4} style={homePageImg} alt="Ebook image"/>  
//         </div>   */}

        
// <div>

// <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
//   <div class="carousel-indicators">
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
//     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
//   </div>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//     <img src={banner3} style={homePageImg} alt="Ebook image"/>  
//     </div>
//     <div class="carousel-item">
//     <img src={banner4} style={homePageImg} alt="Ebook image"/>  
//     </div>
//     <div class="carousel-item">
//     <img src={banner4} style={homePageImg} alt="Ebook image"/>  
//     </div>
//   </div>
//   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Previous</span>
//   </button>
//   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="visually-hidden">Next</span>
//   </button>
// </div>

// </div>




        

//     </div>
  
//   );
// }




// export default AddContainer2; 


import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';
import banner3 from '../images/banner3.jpeg';
import banner4 from '../images/banner4.jpeg';

function AddContainer2() {
  return (
    <div className="carousel-css">
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-css"
          src={banner4}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-css"
          src={banner3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carousel-css"
          src={banner4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default AddContainer2;