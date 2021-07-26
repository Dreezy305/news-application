import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./NewsContent.css";
import { observer } from "mobx-react-lite"
import dbFunctions from "../../dbFunctions";


function NewsCard({ store }) {
  const logo = {
    img1: "./appstore.png",
    img2: "./playstore.png",
    img3: "./raj_kundra_bribed_officers_main.jpg",
  };

  useEffect(()=>{
    async function load(){
      dbFunctions.news()
      .onSnapshot((querySnapshot) => {
        var news = [];
        querySnapshot.forEach((doc) => {
            news.push({ id: doc.id, ...doc.data() });
        });
        store.addNews(news);
    });
    }
    load();
  }, [store])

  return (
    <div className="card border border-light w-100">
      <div className="container cardBox">
      {store?.getNews?.map((news, i)=> {
            return (
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
              {/* Actress Shilpa Shetty took to Instagram on Thursday to share her
              first post after her husband Raj Kundra's arrest in a porn videos
              case. She posted a page from a book, which she seems to be
              reading. "I have survived challenges in the past and will survive
              challenges in the future," a portion read. */}
            </p>
            <Link
              className="mt-5 link-primary fw-bold"
              to={`/news/${news.id}`}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              Read more...
            </Link>
          </div>
        </div>)
        })}
      </div>
    </div>
  );
}

export default observer(NewsCard);
