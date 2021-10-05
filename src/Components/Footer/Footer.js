import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookSquare, faInstagramSquare, faTwitterSquare, faYoutube,} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <div className="left-container text-start">
                <h1> EduLab</h1>
                <div className="icons-container d-flex text-center ">
                  <div className="icon">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faYoutube} />
                  </div>
                  <div className="icon">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </div>
                </div>
                <p className="mt-4 ">
                  <small>
                    *These statements have not been evaluated by the Food and
                    Drug Administration. These products are not intended to
                    diagnose.
                  </small>
                </p>

                <p className="mt-5">
                  <small>Zemez © . All rights reserved.</small>
                </p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu-container">
                <ul>
                  <li className="footer-menu">Home</li>
                  <li className="footer-menu">Services</li>
                  <li className="footer-menu">Sports</li>
                  <li className="footer-menu">Contact us</li>
                  <li className="footer-menu"> About us</li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="right-footer-container">
                <h3>Sign up for the newsletter</h3>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="EnterYour Email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">SingUp</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// import React from 'react';
// import './Footer.css';

// const Footer = () => {
//     return (
//         <div className="footer-main">
//             <p> © All Copyright Reserved By AlphaScript 2021.</p>
//         </div>
//     );
// };

// export default Footer;