import React from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar } from "recharts";
import { names } from "./names";
import "./hmf.css";

const Rating = () => {
  const totalRatings = 8665;
  const avgRating = 4.4;

  const starRatings = [
    { stars: 5, percentage: 65, count: 5512 },
    { stars: 4, percentage: 24, count: 2085 },
    { stars: 3, percentage: 6, count: 464 },
    { stars: 2, percentage: 3, count: 173 },
    { stars: 1, percentage: 2, count: 431 },
  ];

  const aspectRatings = [
    { name: "Services", value: (Math.random() * 1.5 + 3.5).toFixed(1) },
    { name: "Maintenance", value: (Math.random() * 1.5 + 3.5).toFixed(1) },
    { name: "Billing", value: (Math.random() * 1.5 + 3.5).toFixed(1) },
    { name: "Worth of Cost", value: (Math.random() * 1.5 + 3.5).toFixed(1) },
  ];

  return (
    <div className="rating-review-container">
      <div className="rating-section">
        <h2 className="heading">Hospital Rating 🏥</h2>
        <div className="rating-summary">
          <div className="avg-rating">
            <span className="big-rating">{avgRating} ★</span>
            <p className="total-ratings">
              {totalRatings.toLocaleString()} Ratings
            </p>
          </div>
          <div className="rating-bars">
            {starRatings.map((rating, index) => (
              <div key={index} className="rating-row">
                <span className="star-text">{rating.stars} ★</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${rating.percentage}%` }}
                  ></div>
                </div>
                <span className="rating-count">{rating.count.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="circular-section">
          {aspectRatings.map((item, index) => (
            <div key={index} className="chart-item">
              <ResponsiveContainer width={80} height={80}>
                <RadialBarChart
                  innerRadius="80%"
                  outerRadius="100%"
                  barSize={10}
                  data={[{ value: item.value * 20 }]}
                  startAngle={90}
                  endAngle={90 - item.value * 36}
                >
                  <RadialBar dataKey="value" cornerRadius={50} fill="#28A745" />
                </RadialBarChart>
              </ResponsiveContainer>
              <div className="rating-value">{item.value}</div>
              <p className="rating-label">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="review-section">
        <h2 className="heading">User Reviews </h2>
        <div className="review-list">
          {names.map((i, index) => (
            <div key={index} className="review-item">
              <div className="logoimg">
                <img src={i.img} alt={i.name} />
              </div>
              <div className="logonames">
                <strong>{i.name}</strong>
                <p>{i.comment}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="inputclass">
  <input type="text" placeholder="Enter Comment..." />
  <input type="submit" value="Submit" />
</div>
      </div>
    </div>
  );
};

export default Rating;