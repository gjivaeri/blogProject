import firebase from '../../lib/firebase';
import config from "../../config/firebaseConfig";

const handler = async (any, res) => {
    try {
        firebase.app();
      }
      catch (error) {
        
        firebase.initializeApp(config);
        firebase.analytics();
      }
    try {        
        let posts = [];
        const snapshot = await firebase.firestore()
            .collection('posts')
            .orderBy('created_at', 'desc')
            .get()
            .then(result => {
                result.docs.forEach(doc => {
                    posts.push(doc.data());
                })
            })
            .catch(error => {
                alert('error: ' + error.message);
                console.log(error);
            })
        return res.json(posts);
        
    } catch (e) {
        res.status(500).json({ message: e.message});
    }
}

export default handler;