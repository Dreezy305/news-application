import { db } from "../src/firebase";

class DbFunction {
  news() {
    return db.collection("news");
  }

  addComments(news) {
    // news { newsId: " ... ", name: "...", comments: " ...." }
    return db.collection("comments").add(news);
  }

  getCommments(newsId) {
    return db.collection("comments").where("newsId", "==", newsId);
  }
}

export default new DbFunction();
