import firebase from '../../lib/firebase';
import config from "../../config/firebaseConfig";
import db from "../../lib/db"
import store from '../../lib/store';

const short = require('short-uuid');


const handler = async (req, res) => {
  
  firebase.firestore()
    .collection('posts')
    .doc(req.query.postID)
    .delete()
    .then(res => {
      console.log(res);
    })
    .catch(error => {
      alert("error: " + error.message);
      console.log(error);
    });
}

export default handler;