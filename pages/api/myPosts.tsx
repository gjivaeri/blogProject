import firebase from "../../lib/firebase";
import config from "../../config/firebaseConfig";
import Cookies from "js-cookie";

const handler = async (req, res) => {
  try {
    firebase.app();
  } catch (error) {
    firebase.initializeApp(config);
    firebase.analytics();
  }

  try {
    //console.log("body", req.headers.cookie);
    let posts = [];
    const snapshot = await firebase
      .firestore()
      .collection("posts")
      .where(`author.uid`, "==", req.headers.cookie)
      .get()
      .then((result) => {
        result.docs.forEach((doc) => {
          posts.push(doc.data());
        });
      })
      .catch((error) => {
        alert("error: " + error.message);
        console.log(error);
      });
    return res.json(posts);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export default handler;
