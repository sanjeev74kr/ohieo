import { brandLOgo, playButton } from "../../assets/images";
import { cartButton } from "../../assets/icons";
import { headerStyles } from ".";

function Header() {
    return (
        <header className="header">

            <img className="brand-logo clickable" src={brandLOgo} alt="brandLOgo" />

            <div className="navigation-items-container">
                <p className="navigation-text clickable">Menu</p>
                <p className="navigation-text clickable">Delivery Area</p>
                <p className="navigation-text clickable">How it works</p>
                <p className="navigation-text clickable">Coupons & Discounts</p>
                <p className="navigation-text clickable">Box Meals & More</p>
            </div>

            <img className="play-button clickable" src={playButton} alt="playButton" />

            <span className="login-signup clickable">Login / Signup</span>
                
            <div className="cart-icon-container clickable">
                <img className="cart-button" src={cartButton} alt="cartButton" />
                <p className="cart-count">0</p>
            </div>
        </header>
    )

}

export default Header;