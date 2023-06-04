import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO EVM</h1>
            <p>
            The Infinity experience is unlike any other. Our full-service event planning and design team will guide you every step of the way, ensuring a stress-free experience from start to finish.With us, customization is guaranteed. From the very beginning, we will create a custom proposal tailored to your specific wants and needs
             </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src="/img/flower.jpg"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
