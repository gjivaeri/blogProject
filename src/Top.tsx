import { Header } from "semantic-ui-react";
import NavMenu from "./NavMenu";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}></div>
        <Header as="h1">미니 블로그</Header>
      </div>
      <NavMenu />
    </div>
  );
}
