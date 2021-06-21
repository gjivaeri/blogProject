import { useRouter } from "next/router";
import { Button, Menu, Segment, Search } from "semantic-ui-react";
import Cookies from "js-cookie";
import Link from "next/link";
import firebase from "../lib/firebase";
import { LoginContext } from '../public/context';
import styles from "../src/NavMenu.module.css";

import { useState, useEffect, useContext } from "react";

export default function NavMenu() {
  const router = useRouter();
  let activeItem;

  const [loggedIn, setLogin] = useState(false);
  const { id, setID } = useContext(LoginContext);
  useEffect(() => {
    const loggedInUserGoogle = Cookies.get("user");
    if (loggedInUserGoogle) {
      setLogin(true);
    }
    const loggedInUserNaver = Cookies.get("userNaver");
    console.log(loggedInUserNaver);
    if (loggedInUserNaver) {
      setID(loggedInUserNaver.uid);
    }
  }, []);

  const loggedInTotal = (id != 'default') || loggedIn;

  const provider = new firebase.auth.GoogleAuthProvider();
  let login = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        Cookies.set("user", JSON.stringify(res.user));
        setLogin(true);
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

  let naver_logout = () => {
    setID('default');
    Cookies.remove("userNaver");
  };

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/postList") {
    activeItem = "postList";
  }

  function goLink(e, data) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "postList") {
      router.push("/postList");
    }
  }

  let search = () => {
    var inputValue = (document.getElementById("search") as HTMLInputElement).value;
    router.push(`/search/${inputValue}`);
  };

  return (
    <Segment inverted>
      <Menu inverted pointing secondary widths='ten'>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={goLink}
        />
        <Menu.Item
          name="postList"
          active={activeItem === "postList"}
          onClick={goLink}
        />

        {loggedInTotal ?
          <Menu.Item>
            <Link href="/postEdit"><Button inverted content="글쓰기" /></Link>
          </Menu.Item> : <span></span>
        }

        {loggedInTotal ?
          <Menu.Item>
            <Link href="/myPosts"><Button inverted content="내글" /></Link>
          </Menu.Item> : <span></span>
        }

        <Menu.Item>
          <div>
            <input id="search" type="text" placeholder="Search..."></input>
            <Button inverted content="검색" onClick={search} />
          </div>
        </Menu.Item>

        <Menu.Item position='right'>
          {loggedInTotal ? <Button inverted content="로그아웃" onClick={loggedIn ? logout : naver_logout} />
            : <Button inverted content="구글 로그인" onClick={login} />}
        </Menu.Item>

        {loggedInTotal ?
          <span></span> : <Menu.Item>
            <Link href="/signIn"><Button inverted content="네이버 로그인" /></Link>
          </Menu.Item>
        }
      </Menu>
    </Segment >
  );
}

            //상단 메뉴바 구현 https://semantic-ui.com/
            //별도 상태값과 action등을 가지고 있다.
