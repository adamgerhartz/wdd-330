export default class Comment {
    constructor(name, comment, type = "hike") {
        this.name = name;
        this.type = type;
        this.comment = comment;
        this.date = new Date();
      }
    
    saveComment() {
    let ls = new LocalStorageHelper();
    ls.saveComment({ 
        name: this.name, 
        comment: this.comment, 
        date: this.date 
    });
    }
  
    getCommentsByHike() {
    // return hikes from local storage
    return this.localStorageHelper.getHikes();
    }
}