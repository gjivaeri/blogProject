import { useRouter } from "next/router";
import { Menu } from "semantic-ui-react";

export default function Gnb() {
  const router = useRouter();
  let activeItem;

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
    <Menu inverted>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink} />
      <Menu.Item
        name="postList"
        active={activeItem === "postList"}
        onClick={goLink}
      />
    </Menu>
  );
}
//상단 메뉴바 구현 https://semantic-ui.com/
//별도 상태값과 action등을 가지고 있다.
