import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { GetStaticPaths } from "next";
import Link from "next/link";
import { parseCookies } from "../helpers/";
const axios = require("axios");

export default function Posts({ posts, data }) {
  const [modifyClicked, setModify] = useState(false);
  const categoryReference = useRef();
  const titleReference = useRef();
  const contentReference = useRef();

  const router = useRouter();
  //console.log('posts', posts)
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

  const submit = (event) => {
    const category = (categoryReference.current as HTMLInputElement).value; //(document.getElementById('category') as HTMLInputElement).value;
    const title = (titleReference.current as HTMLInputElement).value;
    const content = (contentReference.current as HTMLInputElement).value;

    axios
      .post("/api/postUpdate", null, {
        params: {
          title: title,
          content: content,
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
  };

  const modify = () => {
    setModify(true);
  };

  if (modifyClicked == false) {
    return (
      <div className="detailBox">
        <h1 className="title">{posts[i].title}</h1>
        <section className="ContentBox">
          <p>
            게시일: {new Date(posts[i].created_at.seconds * 1000).toISOString()}
          </p>
          <p>작성자: {posts[i].author.uid}</p>
          <p>카테고리: {posts[i].category}</p>
          <br />
          <div className="Content">
            <p>{posts[i].content}</p>
          </div>
        </section>

        {data.user ? <button onClick={modify}>수정</button> : <span></span>}

        <Link href="/">
          {data.user ? <button onClick={remove}>삭제</button> : <span></span>}
        </Link>
      </div>
    );
  } else {
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
            <select
              ref={categoryReference}
              defaultValue={posts[i].category}
              id="category"
            >
              <option value="diary">일기</option>
              <option value="review">리뷰</option>
              <option value="til">TIL</option>
            </select>
          </div>
          <div className="title">
            <input
              ref={titleReference}
              defaultValue={posts[i].title}
              type="text"
              id="title"
              placeholder="제목"
            ></input>
          </div>
          <div className="content">
            <textarea
              ref={contentReference}
              defaultValue={posts[i].content}
              id="content"
            ></textarea>
          </div>
          <Link href="/postList">
            <button onClick={submit} type="button">
              저장
            </button>
          </Link>
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
