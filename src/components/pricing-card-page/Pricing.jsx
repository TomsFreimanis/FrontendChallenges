import React, { useState } from "react";
import "../pricing-card-page/pricing.scss";

const Pricing = () => {
  const [isBilledAnnually, setIsBilledAnnually] = useState(false);

  const handleToggleBilling = () => {
    setIsBilledAnnually(!isBilledAnnually);
  };

  return (
    <div className="container">
      <div className="header">
        <div className={`red-box ${isBilledAnnually ? "active" : ""}`}>
          <p>Your current plan:</p>
          <h5>Starter Trial • 500MAUs</h5>
        </div>
      </div>
      <div className="plan-selection">
        <h3>Choose a plan</h3>
        <div className="bill-container">
          <p> Billed monthly</p>
          <button
            className={`button ${isBilledAnnually ? "active" : ""}`}
            onClick={handleToggleBilling}
          >
            <div className="circle"></div> {/* Add the circle element here */}
          </button>
          <p>Billed annually</p>
        </div>
      </div>
      <div className="cards">
        <div className="cards-box">
          <h5>Starter</h5>
          <h2>$19</h2>
          <ul>
            <li>500 MAUs</li>
            <li>3 projects</li>
            <li>Unlimited guides</li>
            <li>Unlimited flows</li>
            <li>Unlimited branded themes</li>
            <li>Email support</li>
          </ul>
          <button className="buttons">Choose Plan</button>
        </div>
        <div className="cards-box">
          <h5>Pro</h5>

          <h2 className="h2mid">
            $99 <span className="span">/month</span>
          </h2>
          <select className="sel">
            <option value="1" className="opt">
              2500 MAUs
            </option>
          </select>
<p className="redp">Monthly active users</p>
          <ul>
            <li>All starter features, plus:</li>
            <li>Unlimited projects</li>
            <li>Unlimited fully customizable themes</li>
            <li>A dedicated Customer Success Manager</li>
          </ul>
          <button className="buttons2">Choose Plan</button>
        </div>
        <div className="cards-box">
          <h5>Enterprise</h5>
          <h2>Let’s Talk!</h2>
          <ul>
            <li>All Pro features</li>
            <li>Unlimited MAUs</li>
            <li>Dedicated environment</li>
            <li>Enterprise account administration</li>
            <li>Premium support and services</li>
          </ul>
          <button className="buttons">Contact us</button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
