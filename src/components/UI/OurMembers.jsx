import React from "react";
import "../../styles/our-member.css"; 
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import groupPic from "../../assets/all-images/team.jpg"; 

const OurMembers = () => {
  return (
    <Col lg="12" md="12" sm="12" xs="12" className="mb-4">
      <div className="group__member">
        <div className="group__member-img">
          <img src={groupPic} alt="Our Team" className="w-100" />

          <div className="group__member-social">
            {/* Social Media Links */}
            <Link to="https://www.facebook.com/tigerterratransport" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-line"></i>
            </Link>
            <Link to="https://x.com/TigerTerra2024?t=mJUY-SUHL2fa2ULq9x-9Eg&s=09" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-line"></i>
            </Link>
            <Link to="https://www.instagram.com/tigerterratransport/" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-line"></i>
            </Link>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default OurMembers;
