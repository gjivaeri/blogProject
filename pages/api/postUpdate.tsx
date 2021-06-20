import firebase from "../../lib/firebase";
import config from "../../config/firebaseConfig";
import Cookies from "js-cookie";
const short = require("short-uuid");

const handler = async (req, res) => {
  const now = new Date();
  const user = JSON.parse(req.query.user);

  const post = {
    //postid, content, posttime, author
    content: req.query.content,
    title: req.query.title,
    category: req.query.category,
    postID: req.query.postID,
    author: {
      uid: user.uid, //store.user.uid,
      displayName: user.displayName, //store.user.displayName,
      email: user.email, //store.user.email,
    },
    created_at: now,
    updated_at: now,
  };

  firebase
    .firestore()
    .collection("posts")
    .doc(req.query.postID)
    .update(post)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      alert("error: " + error.message);
      console.log(error);
    });
};

export default handler;
