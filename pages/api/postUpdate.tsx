import firebase from "../../lib/firebase";
const short = require("short-uuid");

const handler = async (req, res) => {
  const now = new Date();

  const post = {
    //postid, content, posttime, author
    content: req.query.content,
    title: req.query.title,
    category: req.query.category,
    postID: req.query.postID,
    author: {
      uid: req.query.user.uid, //store.user.uid,
      displayName: req.query.user.displayName, //store.user.displayName,
      //email: user.email, //store.user.email,
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
      res.status(500).json({});
    });
  res.status(200).json({});
};

export default handler;
