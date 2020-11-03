import React from "react";
import "./MegaMenu.css";
import { NavLink } from "react-router-dom";
const MegaMenu = () => {
  return (
    <React.Fragment>
      <div className="MegaMenu">
        <div className="Menus">
          {/* <a href="#default" > <img src={Logos} alt="Jhonea-logo" /></a> */}

          <ul>
            <li>
              <NavLink to="/"> Home</NavLink>
            </li>
            <div className="dropdownsa">
              <li>
                <NavLink to="#default">
                  Shop<i className="fas fa-angle-down"></i>
                </NavLink>
              </li>

              <div className="dropdown-contenta">
                {/* <a href="#default">Buttons</a>
                <a href="#default">Zipper</a>
                <a href="#default">Thread</a>
                <a href="#default">Cufflinks</a>
                <a href="#default">Buckles</a>
                <a href="#default">Buttons</a>
                <a href="#default">Zipper</a>
                <a href="#default">Thread</a>
                <a href="#default">Buckles</a>
                <a href="#default">Button</a>
                <a href="#default">Thread</a>
                <a href="#default">Cufflinks</a> */}
              </div>
            </div>
            <li>
              <a href="#default"> SELL ON JHONEA</a>
            </li>
            <div className="dropdownsb">
              <li>
                <a href="#default">
                  {" "}
                  ACCOUNT<i className="fas fa-angle-down"></i>
                </a>
              </li>
              <div className="dropdown-contentb">
                <NavLink to="/myprofile">My Profile</NavLink>
                <NavLink to="/wishlist">My Wishlist</NavLink>
                <a href="#default">My Orders</a>
              </div>
            </div>
            <div className="dropdownsc">
              <li>
                <a href="#default">
                  MORE<i className="fas fa-angle-down"></i>
                </a>
              </li>
              <div className="dropdown-contentc">
                <a href="#default">Feedback</a>
                <a href="#default">Help</a>
                <a href="#default">Terms & Conditions</a>
                <a href="#default">About Us</a>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MegaMenu;
