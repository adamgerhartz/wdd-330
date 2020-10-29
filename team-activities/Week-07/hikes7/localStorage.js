export default class LocalStorageHelper {

    constructor() {
        this.hikes = this.lsParse(localStorage.getItem('hikes'));
        this.comments = this.lsParse(localStorage.getItem('comments'));
      }

    lsStringify(data) {
        return JSON.stringify(data);
    }
    
    lsParse(data) {
        return JSON.parse(data);
    }

    getHikes() {
        return this.hikes;
    }

    getComments() {
        return this.comments;
    }

    saveComment(data) {
        localStorage.setItem('comments', this.lsStringify(data));
        this.comments = data;
    }

    getByKeyAndName(key, name) {
        return this[key].find(item => item.name === name);
    }
}
