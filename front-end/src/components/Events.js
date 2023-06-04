import React from "react";

const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/convocation.jpg" alt="pizza" />
              </div>
              <h1 className="price__heading">WEDDING</h1>
              <p className="price__text">
              Your Wedding, Your Way
Find the best wedding vendors with thousands of trusted reviews
              </p>
              
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/standup.jpg"/>
              </div>
              <h1 className="price__heading">PRODUCT LAUNCHES</h1>
              <p className="price__text">
              We know how to tailor a message to an audience and make it resonate with a memorable and engaging event. Our expertise spans every industry and every market.
              </p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/tedx.jpg" />
              </div>
              <h1 className="price__heading">CONCERT</h1>
              <p className="price__text">
              Our concert management staff has the collective experience of producing thousands of large-scale event operations and has considerable experience working with high-profile celebrities and VIPs.
              </p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/stage.jpg" />
              </div>
              <h1 className="price__heading">PARTY</h1>
              <p className="price__text">
              Put your party experience to good use by planning, designing and throwing events for private and corporate clients.
              </p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/re.jpg"/>
              </div>
              <h1 className="price__heading">GET TOGETHER</h1>
              <p className="price__text">
              Host a Memorable Get-together : Just some pre-planning, a little creativity, and voila, a convenient, memorable Party is on!!
              </p>
            </div>
          </div>

          <div className="col-4">
            <div className="price">
              <div className="price__img">
                <img src="/img/MicrosoftTeams-image.png"/>
              </div>
              <h1 className="price__heading">WEDDING RECEPTION</h1>
              <p className="price__text">
              The responsibility of coming up with a flawlessly successful reception can be daunting – from favors, food, and drink to recreation, seating charts, and youngsters, you’ve got myriad details to consider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prices;
