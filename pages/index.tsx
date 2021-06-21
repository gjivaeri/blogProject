import Head from "next/head";
import Link from "next/link";
import firebase from "../lib/firebase";

import {parseCookies} from "./helpers/"
import {useState, useEffect} from "react";
import Cookies from 'js-cookie';
import {LoginContext} from '../public/context';

export default function Home() {
 //console.log(data);

  
  const [loggedIn, setLogin] = useState(false);
  useEffect(() => {
    const loggedInUser = Cookies.get('user');
    if (loggedInUser) {
      setLogin(true);
    }
  }, []);

  const provider = new firebase.auth.GoogleAuthProvider();
  let login = () => {
    firebase.auth().signInWithPopup(provider)
    .then(res => {
      Cookies.set('user',JSON.stringify(res.user.uid));
      setLogin(true);
      // store.user = {
      //   displayName: res.user.displayName,
      //   email: res.user.email,
      //   uid: res.user.uid,
      // }
    })
    .catch(error => {
      alert('login failed ' + error.message);
      console.log(error);
    }); 
  }

  let logout = () => {
    firebase.auth().signOut().then(() => {
    Cookies.remove('user');
    setLogin(false);
    }).catch(error => {
      console.log(error);
    })
  };
  return (
    
    <div className="container">
      <Head>
        <title>블로그</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      {/* <LoginContext.Consumer>
        {({id, setID}) => (
          //로그인 상태에 따라 뭔가 하기
        )}
      </LoginContext.Consumer>
        <h1 className="/title">환영합니다</h1> */}
        {/* <Link href="/postList">
          <a>게시판</a>
        </Link>

        <Link href="/myPosts">{loggedIn ? <a> 내 글</a> : <span></span>}</Link>

        <div>검색창</div>

        <Link href="/signIn">
          <button>로그인</button>
        </Link>

        {!loggedIn && <button onClick={login}>firebase로그인</button>}
        {loggedIn && <div>안녕하세요</div>}
        {loggedIn && <button onClick={logout}>firebase로그아웃</button>}
      </main> */}

      </main>
    </div>
  );
}
