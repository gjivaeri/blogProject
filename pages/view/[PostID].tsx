import React from 'react';
import { useRouter } from "next/router"
import { GetStaticPaths } from 'next'
import Link from "next/link";

export default function Posts({posts}) {

  const router = useRouter();
  function getIndex(){
    for(let i=0;i<=posts.length;i++){
      if(Number(router.query.PostID) == posts[i].PostID){
        let num = i
        return num 
      }
    }
  }
  const i = getIndex()
  return (          
    <div className="detailBox">
      <h1 className="title">
        {posts[i].Title}
      </h1>
    <section className="ContentBox">
      <p>게시일: {posts[i].PostTime}</p>
      <p>작성자: {posts[i].Author}</p>
      <p>카테고리: {posts[i].Category}</p>
      <br/>
        <div className="Content">
          <p>{posts[i].Content}</p>
        </div>
    </section>
    <Link href="postEdit">
      <button>글 작성</button>
    </Link>
  </div>)}


export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {

  return {
      paths: [], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/PostID'); // must be changed by production
  const posts = await res.json();

  return {
    props: {posts}
  };
}
