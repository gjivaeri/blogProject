import { useRouter } from "next/router";
import { Button, Menu, Segment } from "semantic-ui-react";
import Cookies from "js-cookie";
import Link from "next/link";
import firebase from "../lib/firebase";

import { useState, useEffect } from "react";

export default function NavMenu() {
  const router = useRouter();
  let activeItem;

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

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/postList") {
    activeItem = "postList";
  }

  //라우터의 이름이 "/"라면 home에 불빛이 들어오도록

  function goLink(e, data) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "postList") {
      router.push("/postList");
    }
  }

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

        {loggedIn ?
          <Menu.Item>
            <Link href="/postEdit"><Button inverted content="글쓰기" /></Link>
          </Menu.Item> : <span></span>
        }

        {loggedIn ?
          <Menu.Item>
            <Link href="/myPosts"><Button inverted content="내글" /></Link>
          </Menu.Item> : <span></span>
        }

        <Menu.Item position='right'>
          {loggedIn ? <Button inverted content="로그아웃" onClick={logout} />
            : <Button inverted content="로그인" onClick={login} />}
        </Menu.Item>

      </Menu>
    </Segment >
  );
}

//상단 메뉴바 구현 https://semantic-ui.com/
//별도 상태값과 action등을 가지고 있다.
