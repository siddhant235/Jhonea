import React, { Component } from "react";
import Login from "../../Authentication/Login/Login";
import * as authaction from "../../../store/actions/authentication";
import { connect } from "react-redux";
import SignUp from "../../Authentication/SignUp/Signup";
import user from "../../../assets/images/user-icon.png";
import "./Navbar.css";
import customerCare from "../../../assets/images/customer-care-icon.png";
import { Redirect, NavLink } from "react-router-dom";
class Navbar extends Component {
  state = {
    showLogin: false,
    showSignUp: false,
    loggedout: false,
  };
  slogin = () => {
    this.setState({
      showLogin: true,
      showSignUp: false,
      loggedout: false,
    });
  };
  clogin = () => {
    this.setState({
      showLogin: false,
    });
  };
  showsignup = () => {
    this.setState({
      showSignUp: true,
    });
  };
  closeSignup = () => {
    this.setState({
      showSignUp: false,
    });
  };
  logout = () => {
    this.props.onLogout();
    this.setState({
      loggedout: true,
    });
  };
  render() {
    const id = localStorage.getItem("userID");
    const loginres = localStorage.getItem("otpRes");
    let userData = "";
    let Username = "";
    if (loginres) {
      userData = JSON.parse(localStorage.getItem("userData"));
      Username = userData.userFullName;
    }
    if (this.state.loggedout) {
      return <Redirect to="/" />;
    }

    return (
      <div className="Navbar">
        <div className="Leftitems">
          <a href="#default">
            <img src={customerCare} alt="care-icon" />
            Phone:1-888-123-456-89
          </a>
        </div>

        <div className="Rightitems">
          <span className="dropdown1">
            <img src={user} alt="User" className="user" />
            <span style={{ color: "white" }}>
              {loginres ? Username : "Login"}
            </span>
            <i className="fas fa-angle-down"></i>
            <div className="dropdown-content">
              {loginres ? (
                <div>
                  <p onClick={this.logout}>Logout</p>
                </div>
              ) : (
                <div>
                  <p onClick={this.slogin} show="true">
                    Login
                  </p>
                  <p onClick={this.showsignup} show="true">
                    Register
                  </p>
                </div>
              )}
            </div>
          </span>

          {id ? (
            <NavLink to="/wishlist">
              <i className="far fa-heart"></i>Wishlist
            </NavLink>
          ) : (
            <p
              onClick={this.slogin}
              show="true"
              style={{ color: "white", cursor: "pointer",fontSize: "0.933rem",margin:"0.1rem 0.5rem",
              display: "flex" }}
            >
              <i className="far fa-heart"></i>Wishlist
            </p>
          )}
          <NavLink to="/notifications">
            <i className="far fa-bell"></i>
          </NavLink>
          <div className="icons">
            {/* {id?<a href="/checkout">Checkout</a>} */}
            {id ? (
              <NavLink to="/checkout">Checkout</NavLink>
            ) : (
              <p
                onClick={this.slogin}
                show="true"
                style={{ color: "white", cursor: "pointer",fontSize: "0.933rem", margin:"0.1rem 0.5rem",
                display: "flex" }}
              >
                Checkout
              </p>
            )}
          </div>
        </div>
        {this.state.showLogin && (
          <Login show={this.state.showLogin} close={this.clogin} />
        )}
        {this.state.showSignUp && (
          <SignUp
            show={this.state.showSignUp}
            close={this.closeSignup}
            showlogin={this.slogin}
          />
        )}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onLogout: () => dispatch(authaction.logout()),
  };
};
export default connect(null, mapDispatchToProps)(Navbar);
