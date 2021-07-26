import { makeObservable, observable, action, computed } from "mobx"

class newsStore {

    news = [];
    comments = []

    constructor(){
        makeObservable(this, {
            news: observable,
            comments: observable,
            addNews: action,
            getNews: computed,
            addComment: action,
            getComments: action
        });

        this.addNews = this.addNews.bind(this);
        this.addComment = this.addComment.bind(this);
        this.getComments = this.getComments.bind(this);
    }

    addNews(news){
        this.news = news;
    }

    get getNews(){
        return this.news;
    }

    addComment(comment){
        this.comments = [...this.comments, comment];
    }

    getComments(id){
       return this.comments.filter(comment=> comment.id == id);
    }

}

export default newsStore;
