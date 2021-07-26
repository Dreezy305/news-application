import React from "react";
import Container from "@material-ui/core/Container";
import "./NewsContent.css";
import "bootstrap/dist/css/bootstrap.css";
import NewsCard from "./NewsCard";
import NewsComment from "./NewsComment";

const NewsContent = ({ store }) => {
  const logo = {
    img1: "./appstore.png",
    img2: "./playstore.png",
    img3: "./raj_kundra_bribed_officers_main.jpg",
  };

  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience you can use our app on your smartphone
          </span>
          <img src={logo.img1} alt="appstore" style={{ height: "80%" }} />
          <img src={logo.img2} alt="playstore" style={{ height: "80%" }} />
        </div>
        {/* news card goes here  */}
        <NewsCard store={store} />

        {/* news footer goes here  */}
        <div
          className="card mx-auto mt-5"
          style={{ width: "150px", textDecoration: "none", cursor: "pointer" }}
        >
          {/* <a
            className="fw-bold link-dark loadMore"
            href="#"
            style={{
              textDecoration: "none",
              cursor: "pointer",
            }}
          > */}
            {/* <span className="ms-4">Load More...</span> */}
          {/* </a> */}
        </div>
        <NewsComment />
      </div>
    </Container>
  );
};

export default NewsContent;
