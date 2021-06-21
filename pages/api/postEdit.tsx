import firebase from "../../lib/firebase";

const short = require("short-uuid");

const handler = async (req, res) => {
  const now = new Date();
  const uuid = short.generate();
  const user = JSON.parse(req.query.user);

  const post = {
    content: req.query.content,
    title: req.query.title,
    category: req.query.category,
    postID: uuid,
    author: {
      uid: user.uid,
      displayName: user.displayName,
      email: user.email,
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
      res.status(500).json({});
    });
  res.status(200).json({});
};

export default handler;
