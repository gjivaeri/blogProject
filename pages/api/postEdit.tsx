import firebase from "../../lib/firebase";
import config from "../../config/firebaseConfig";

const short = require("short-uuid");

const handler = async (req, res) => {
  const now = new Date();
  const uuid = short.generate(); //uuidv4();
  const post = {
    //postid, content, posttime, author
    content: req.query.content,
    title: req.query.title,
    category: req.query.category,
    postID: uuid,
    author: {
      uid: "111", //store.user.uid,
      displayName: "123", //store.user.displayName,
      email: "12", //store.user.email,
    },
    created_at: now,
    updated_at: now,
  };

  firebase
    .firestore()
    .collection("posts")
    .doc(uuid)
    .set(post)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      alert("error: " + error.message);
      console.log(error);
    });
};

export default handler;
