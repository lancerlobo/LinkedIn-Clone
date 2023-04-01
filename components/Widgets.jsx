import React, { useEffect, useState } from "react";
import "../styles/Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import axios from 'axios';
import NewsItem from "./NewsItem";

const Widgets = () => {

  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    const getArticles = async () => {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=' + import.meta.env.VITE_NEWS_API_KEY);
    setArticles(response.data.articles);
    console.log(response);
    }
    getArticles();
    
  }, []);

  // const newsArticle = ({heading, subtitle}) => {
  //   <div className="widgets-article">
  //     <div className="widgets-articleLeft">
  //       <FiberManualRecordIcon />
  //     </div>
  //     <div className="widgets-articleRight">
  //       <h4>{heading}</h4>
  //       <p>{subtitle}</p>
  //     </div>
  //   </div>
  // };

  return (
    <div className="widgets">
      <div className="widgets-header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {/* {newsArticle("Elon Musk", "I am back - 15000 readers")} */}
      

          {articles.map((article, index) => {
            return (
              <div className="widgets-article">
                <div className="widgets-articleLeft">
                  <FiberManualRecordIcon />
                </div>
                <div className="widgets-articleRight">
                  <NewsItem
                    key = {index}
                    title = {article.title}
                    description = {article.description}
                    url = {article.url}
                  />
                </div>
              </div>
              );
          })}

    </div>
  );

}
export default Widgets;
