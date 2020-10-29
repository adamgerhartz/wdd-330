import hikeList from './hikeList.js';
import HikesController from './hikesController.js';
import dummyCommentList from './commentList.js';

// Initiatlize Hikes and Comments
localStorage.setItem('hikes', JSON.stringify(hikeList));
if(!localStorage.getItem('comments')) {
  localStorage.setItem('comments', JSON.stringify(dummyCommentList));
}

//on load grab the array and insert it into the page
const myHikesController = new HikesController('hikes');
window.addEventListener('load', () => {
  myHikesController.showHikeList();
});