import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { parseCookies } from "../helpers/";
import Cookies from "js-cookie";
import { Input, Dropdown, Button } from "semantic-ui-react";
import styles from "../../src/postdetail.module.css"
const axios = require("axios");


var markdown = require("markdown").markdown;
import parse from "html-react-parser";

import * as Showdown from "showdown";
import ReactMde from "react-mde";

import "react-mde/lib/styles/css/react-mde-all.css";

const converter = new Showdown.Converter({
  tables: true,
  simplifiedAutoLink: true,
  strikethrough: true,
  tasklists: true,
});

export default function Posts({ posts, data }) {
  const [modifyClicked, setModify] = useState(false);
  const categoryReference = useRef();
  const titleReference = useRef();
  const contentReference = useRef();
  let user = Cookies.get("user");
  if (user == undefined) user = Cookies.get("userNaver");
  if (user == undefined) user = { uid: '', displayName: '' };
  else user = JSON.parse(user);

  const router = useRouter();

  const getIndex = () => {
    for (let i = 0; i <= posts.length; i++) {
      if (router.query.PostID == posts[i].postID) {
        let num = i;
        return num;
      }
    }
  };
  const i = getIndex();

  const remove = (event) => {
    axios
      .post("/api/postRemove", null, {
        params: {
          postID: posts[i].postID,
        },
      })
      .then((response) => {
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [value, setValue] = React.useState(posts[i].content);
  const [selectedTab, setSelectedTab] =
    React.useState<"write" | "preview">("write");

  const submit = (event) => {
    const category =
      (categoryReference.current as HTMLInputElement).value == undefined
        ? posts[i].category
        : (categoryReference.current as HTMLInputElement).value;
    const title =
      (titleReference.current as HTMLInputElement).value == undefined
        ? posts[i].title
        : (titleReference.current as HTMLInputElement).value;
    const content = value; //(contentReference.current as HTMLInputElement).value;

    if (title == 0) {
      alert("최소 한글자 이상의 제목을 입력해야 합니다");
    } else if (category == 0) {
      alert("카테고리를 선택해야 합니다");
    } else {
      axios
        .post("/api/postUpdate", null, {
          params: {
            title: title,
            content: content,
            user: user,
            //date: date,
            //author: posts[i].author,
            postID: posts[i].postID,
            category: category,
          },
        })
        .then((response) => {
          //console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      router.push("/postList");
    }
  };

  const modify = () => {
    setModify(true);
  };

  const handleDropDownSelect = (event, data) => {
    (categoryReference.current as HTMLInputElement).value = data.value;
  };
  const handleTitleInput = (event, data) => {
    (titleReference.current as HTMLInputElement).value = data.value;
  };
  const options = [
    { key: 1, text: "일기", value: "diary" },
    { key: 2, text: "리뷰", value: "review" },
    { key: 3, text: "TIL", value: "til" },
  ];

  if (modifyClicked == false) {
    return (
      <div className={styles.post}>
        <h1 className={styles.postTitle}>{posts[i].title}</h1>
        <section className={styles.postInfo}>
          <p className={styles.postDate}>
            게시일:{" "}
            {new Date(posts[i].created_at.seconds * 1000).toLocaleString()}
          </p>
          <p className={styles.postCat}>작성자: {posts[i].author.displayName}</p>
          <p className={styles.postCat}>카테고리: {posts[i].category}</p>
          <br />
          <p className={styles.postDesc}>{parse(markdown.toHTML(posts[i].content))}</p>

          <div className="Content"></div>
        </section>

        {JSON.parse(user).uid == posts[i].author.uid ? (
          <Button primary onClick={modify}>
            수정
          </Button>
          ) : (
              <span></span>
            )}

          <Link href="/postList">
            {user.uid == posts[i].author.uid ? (
              <Button secondary onClick={remove}>
                삭제
            </Button>
            ) : (
                <span></span>
              )}
          </Link>
        </div>
    );
  } else {
    return (
      <>
          <title>글 수정</title>
        <h1>글 수정</h1>
        {/*<nav>
          <ul className="nav-container">
            <li className="nav-item">홈</li>
            <li className="nav-item">내 글</li>
            <li className="nav-item">로그아웃</li>
          </ul>
        </nav>*/}
        <form>
          <div className="category">
            <Dropdown
              clearable
              options={options}
              selection
              onChange={handleDropDownSelect}
              ref={categoryReference}
              defaultValue={posts[i].category}
            />
          </div>
          <div className="title">
            <Input
              ref={titleReference}
              type="text"
              id="title"
              minLength={1}
              maxLength={13}
              onChange={handleTitleInput}
              defaultValue={posts[i].title}
              transparent
              placeholder="제목을 입력하세요"
            />
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

          <button onClick={submit} type="button">
            저장
          </button>

          <Link href="/postList">
            <button type="button">취소</button>
          </Link>
        </form>
      </>
    );
  }
}

export async function getServerSideProps(ctx) {
  const res = await fetch("http://localhost:3000/api/postList"); // must be changed by production
  const posts = await res.json();
  const data = parseCookies(ctx.req);

  return {
    props: { posts, data },
  };
}
