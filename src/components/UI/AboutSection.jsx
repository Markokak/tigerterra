import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/1.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Tiger Terra!</h2>
              <p className="section__description">
              Founded in 2021, Tiger Terra Transport Corporation is at the forefront of revolutionizing transportation logistics in the Philippines. Our mission is to bridge the gap between innovative transportation solutions and effective logistical support for cooperatives and local governments across the nation.
              </p>

              <div className="about__section-item d-flex">
                <p className="section__description d-flex align-items-center gap-2" style={{ flex: 1 }}>
                  <i class="ri-checkbox-circle-line"></i> Fleet Management
                </p>

                <p className="section__description d-flex align-items-center gap-2" style={{ flex: 1 }}>
                  <i class="ri-checkbox-circle-line"></i> After Sales
                </p>
              </div>

              <div className="about__section-item d-flex">
                <p className="section__description d-flex align-items-center gap-2" style={{ flex: 1 }}>
                  <i class="ri-checkbox-circle-line"></i> Quality Vehicle Sales
                </p>

                <p className="section__description d-flex align-items-center gap-2" style={{ flex: 1 }}> 
                  <i class="ri-checkbox-circle-line"></i> Flexible Financing Options
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;