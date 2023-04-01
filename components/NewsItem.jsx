import React from "react";
import "../styles/NewsItem.css";

function NewsItem({ title, description, url }) {
  return (
    <div className="news">
      <h4>{title}</h4>
      <p>
        <a href={url} target="_blank">
          Read More
        </a>
      </p>
    </div>
  );
}

export default NewsItem;
