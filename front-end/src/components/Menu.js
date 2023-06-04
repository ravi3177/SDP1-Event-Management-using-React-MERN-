import React from "react";

const Menu = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="about__img">
              <img src="/img/birthday1.jpg"/>
            </div>
          </div>
          <div className="col-6 p-25">
            <h3>Events Menu</h3>
            <h1>Birthday</h1>
            <p>
            Our team of professionals will analyze your requirements and provide birthday ideas to suit your needs and budget. Either your birthday party budget is small or big, we handle all kinds of party works for all budgets. Let us handle the birthday party and you just enjoy your memorable moments, make your guests surprise by your best birthday surprise your loved ones on their birthday with beautiful decorations, get creative with our guide to the most popular kids’ party ideas and themes.
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                VIEW MORE
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
