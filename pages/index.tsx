import Head from "next/head";
import firebase from "../lib/firebase";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function Home() {
  //console.log(data);

  const [loggedIn, setLogin] = useState(false);
  useEffect(() => {
    const loggedInUser = Cookies.get("user");
    if (loggedInUser) {
      setLogin(true);
    }
  }, []);

  const provider = new firebase.auth.GoogleAuthProvider();
  let login = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        Cookies.set("user", JSON.stringify(res.user.uid));
        setLogin(true);
        // store.user = {
        //   displayName: res.user.displayName,
        //   email: res.user.email,
        //   uid: res.user.uid,
        // }
      })
      .catch((error) => {
        alert("login failed " + error.message);
        console.log(error);
      });
  };

  let logout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        Cookies.remove("user");
        setLogin(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container">
      <Head>
        <title>블로그</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* <LoginContext.Consumer>
          {
            ({ id, setID }) => {console.log(id)}
            //로그인 상태에 따라 뭔가 하기
          }
        </LoginContext.Consumer> */}
        <h1 className="/title">환영합니다</h1>
      </main>
    </div>
  );
}
