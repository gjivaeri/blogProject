import firebase from "../../lib/firebase";

const short = require("short-uuid");

const handler = async (req, res) => {
  firebase
    .firestore()
    .collection("posts")
    .doc(req.query.postID)
    .delete()
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
