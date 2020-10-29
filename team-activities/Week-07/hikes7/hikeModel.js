import LocalStorageHelper from './localStorage.js';
import Comment from './Comment.js';

export default class HikeModel {
  constructor() {
    this.localStorageHelper = new LocalStorageHelper();
  }

  getAllHikes() {
    // return hikes from local storage
    return this.localStorageHelper.getHikes();
  }

  getHikeByName(name) {
    return this.localStorageHelper.getByKeyAndName('hikes', name);
  }

  getAllComments() {
    return this.localStorageHelper.getComments();
  }

  setNewComment(name, comment) {
    let newComment = new Comment(name, comment);
    let comments = this.localStorageHelper.getComments();
    comments.push(newComment);
    this.localStorageHelper.saveComment(comments);
  }
}