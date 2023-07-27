import banner1 from '../images/banner1.png'

const banner = () =>{
    return (
        <div class="grid-container-second">
            <div class="grid-item banner-header">
                <h1>
                Find a listen for <br/>every movment
                </h1>
            </div>
        <div class="grid-item">
            <img src={banner1} alt="Banner1" hight="800px" width="400px" />
        </div>
        </div>
    );
}
export default banner;
