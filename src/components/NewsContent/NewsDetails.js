import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./NewsContent.css";
import { observer } from "mobx-react-lite"
import NewsComment from "./NewsComment";


function NewsDetails({ store }) {

   let { newsId } = useParams();
   const [news, setNews] = useState({})

  const logo = {
    img1: "./appstore.png",
    img2: "./playstore.png",
    img3: "./raj_kundra_bribed_officers_main.jpg",
  };

  useEffect(()=>{
    async function load(){
        const allNews = store.getNews;
        // if(allnews)
        setNews(allNews.filter(news=> news.id == newsId)[0]);
    }
    load();
  }, [newsId, store])

  return (
    <div className="card border border-light w-100">
      <div className="container cardBox">
        <div className="row">
          <div
            className="col-lg-2"
            style={{ width: "35%", borderRadius: "3px" }}
          >
            <Link
              to={`/news/${news.id}`}
            >
            <img src={news.urlToImage} className="img-fluid p-2" alt="..." />
            </Link>
          </div>
          <div classname="col-lg-6 mt-2" style={{ width: "65%" }}>
            <h5 className="mt-3">
              {news.title}
            </h5>
            <h6 className="mb-3">
              short by {news.author} / {news.publishedAt}
            </h6>
            <p className="mb-3">
              {news.description}
            </p>
          </div>
        </div>
        <NewsComment />
      </div>
    </div>
  );
}

export default observer(NewsDetails);
