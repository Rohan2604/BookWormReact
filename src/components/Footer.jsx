import { Link } from 'react-router-dom';
const Footer = () => {
    return(
        <>
            <footer>
                <h2 className="footerHeader">Links</h2>
                <div class="grid-container-footer">
                    <div class="grid-item-footer">
                                <ul className="foot-link">
                                    <li><Link to={"/about"} className="link-design">About</Link></li>
                                    <li><Link to={"/contact"} className="link-design">Contact</Link></li>
                                    <li><Link to={"/FAQ"} className="link-design">FAQ</Link></li>
                                </ul>
                    </div>
                    <div class="grid-item-footer">
                                <ul className="foot-link">
                                    <li><Link to={"/about"} className="link-design">About bookWorm</Link></li>
                                    <li><Link to={"/contact"} className="link-design">Contact</Link></li>
                                </ul>
                    </div>
                    <div class="grid-item-footer">
                                <ul className="foot-link">
                                    <li className="foot-list"><a href="#" class="fa fa-facebook"></a></li>
                                    <li className="foot-list"><a href="#" class="fa fa-twitter"></a></li>
                                    <li className="foot-list"><a href="#" class="fa fa-google"></a></li>
                                    <li className="foot-list"><a href="#" class="fa fa-linkedin"></a></li>
                                </ul>
                    </div>

                </div>
            </footer>
        </>
    );
}

export default Footer;