import { Check } from "lucide-react";
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 10000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HEAL-YEARLY",
      price: 20000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 40000,
      length: 12,
    },
  ];

  const [member, setMember] = useState({ name: "", email: "" });

  // Function to handle the join action
  const handleJoinNow = async (plan, e) => {
    e.preventDefault(); // Prevent default link behavior to ensure registration happens first
    if (!member.name || !member.email) {
      alert("Please enter your name and email");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/api/members/add-member", {
        name: member.name,
        email: member.email,
        plan: plan.title,
        price: plan.price,
      });
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Error adding gym member");
    }
  };

  return (
    <section className="pricing">
      <h1>ELITE EDGE FITNESS PLANS</h1>

      {/* Member Registration Form */}
      <div className="form">
        <input
          type="text"
          placeholder="Name"
          value={member.name}
          onChange={(e) => setMember({ ...member, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={member.email}
          onChange={(e) => setMember({ ...member, email: e.target.value })}
        />
      </div>

      {/* Pricing Cards */}
      <div className="wrapper">
        {pricing.map((plan) => {
          return (
            <div className="card" key={plan.title}>
              <img src={plan.imgUrl} alt={plan.title} />
              <div className="title">
                <h1>{plan.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {plan.price}</h3>
                <p>For {plan.length} Months</p>
              </div>
              <div className="description">
                <p><Check /> Equipment</p>
                <p><Check /> All Day Free Training</p>
                <p><Check /> Free Restroom</p>
                <p><Check /> 24/7 Skilled Support</p>
                <p><Check /> 20 Days Freezing Option</p>

                {/* Link to another page after successful registration */}
                <Link 
                  to="/" 
                  onClick={(e) => handleJoinNow(plan, e)} // Call the handler on click
                >
                  Join Now
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pricing;
