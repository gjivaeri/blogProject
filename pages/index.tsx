import Head from "next/head";
import Link from "next/link";
import firebase from "../lib/firebase";

import {parseCookies} from "./helpers"
import {useState, useEffect} from "react";
import Cookies from 'js-cookie';
import {LoginContext} from '../public/context';
import "@gjivaeri/test-component/dist/Clock.css";



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
      </Head>
      <main>
      <div className="person1">
        <img src="https://previews.123rf.com/images/vrabelpeter1/vrabelpeter11201/vrabelpeter1120100286/12079396-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%8F%99%EA%B7%B8%EB%9E%80-%EC%98%A4%EB%A0%8C%EC%A7%80-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4.jpg"></img>
        <div>박설진</div>
        <a href="https://github.com/gjivaeri/blogProject">깃허브 링크</a>
      </div>
      <div className="person1">
        <img src="https://previews.123rf.com/images/vrabelpeter1/vrabelpeter11201/vrabelpeter1120100286/12079396-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%8F%99%EA%B7%B8%EB%9E%80-%EC%98%A4%EB%A0%8C%EC%A7%80-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4.jpg"></img>
        <div>박설진</div>
        <a href="https://github.com/gjivaeri/blogProject">깃허브 링크</a>
      </div>
      <div className="person1">
        <img src="https://previews.123rf.com/images/vrabelpeter1/vrabelpeter11201/vrabelpeter1120100286/12079396-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD%EC%97%90-%EA%B3%A0%EB%A6%BD-%EB%90%9C-%EB%8F%99%EA%B7%B8%EB%9E%80-%EC%98%A4%EB%A0%8C%EC%A7%80-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EC%8A%A4.jpg"></img>
        <div>박설진</div>
        <a href="https://github.com/gjivaeri/blogProject">깃허브 링크</a>
      </div>
        <style jsx>{`
          .container {
          padding: 0 0.5rem;
          display: absolute;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 800px;
          color: red;

        }
        .person1 > img {
          margin-top: 30px;
          height:50px;
          width:50px;
        }
        main {
          display: flex;
          flex-direction: column;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }
      `}</style>

      <style jsx global>{`
        * {
          box-sizing: border-box;
        }
      `}</style>
      </main>
    </div>
  );
}
