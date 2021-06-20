const axios = require("axios");
import Link from "next/link";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import Cookies from "js-cookie";
import * as Showdown from "showdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

export default function postEdit() {
  const categoryReference = useRef();
  const titleReference = useRef();
  const [value, setValue] = React.useState("**Hello world!!!**");
  const [selectedTab, setSelectedTab] =
    React.useState<"write" | "preview">("write");

  const submit = (event) => {
    const category = (categoryReference.current as HTMLInputElement).value;
    const title = (titleReference.current as HTMLInputElement).value;
    const content = value; //(contentReference.current as HTMLInputElement).value;
    const user = Cookies.get("user");
    axios
      .post("/api/postEdit", null, {
        params: {
          title: title,
          content: content,
          category: category,
          user: user,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   useEffect(() => {
  //     //setEditorState(true);
  //   });

  return (
    <>
      <h1>글 작성/수정</h1>
      <nav>
        <ul className="nav-container">
          <li className="nav-item">홈</li>
          <li className="nav-item">내 글</li>
          <li className="nav-item">로그아웃</li>
        </ul>
      </nav>
      <form>
        <div className="category">
          <select ref={categoryReference} id="category">
            <option value="diary">일기</option>
            <option value="review">리뷰</option>
            <option value="til">TIL</option>
          </select>
        </div>
        <div className="title">
          <input
            ref={titleReference}
            type="text"
            id="title"
            placeholder="제목"
          ></input>
        </div>
        <div className="content">
          <ReactMde
            value={value}
            onChange={setValue}
            selectedTab={selectedTab}
            onTabChange={setSelectedTab}
            generateMarkdownPreview={(markdown) =>
              Promise.resolve(converter.makeHtml(markdown))
            }
          />
        </div>
        <Link href="postList">
          <button onClick={submit} type="button">
            저장
          </button>
        </Link>
        <Link href="postList">
          <button type="button">취소</button>
        </Link>
      </form>
    </>
  );
}
