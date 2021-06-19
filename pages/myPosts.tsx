import Head from "next/head";
import Link from "next/link";
import { Grid } from "semantic-ui-react";
import styles from "../src/postList.module.css";
const cookie = require("cookie");

export default function Home({ posts }) {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">게시판</h1>
        <Link href="postEdit">
          <button>글 작성</button>
        </Link>
        <section>
          <Grid columns={3}>
            <Grid.Row>
              {posts &&
                posts.map((item) => (
                  <Grid.Column key={item.postID}>
                    <Link href={`/posts/${item.postID}`}>
                      <a>
                        <div className={styles.wrap}>
                          <h2 className={styles.tit_item}>{item.title}</h2>
                          <span className={styles.txt_info}>
                            <p>
                              게시일:{" "}
                              {new Date(
                                item.created_at.seconds * 1000
                              ).toISOString()}
                            </p>
                            <p>작성자: {item.author.displayName}</p>
                            <p>카테고리: {item.category}</p>
                          </span>
                          <br />
                        </div>
                      </a>
                    </Link>
                  </Grid.Column>
                ))}
            </Grid.Row>
          </Grid>
        </section>
      </main>
      <footer>footer</footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
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

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

// export async function getStaticProps() {
//   const res = await fetch('http://localhost:3000/api/postList'); // must be changed by production
//   const posts = await res.json();

//   return {
//     props: {posts},
//   };
// }

export async function getServerSideProps(ctx) {
  const { req, res } = ctx;
  const cookies = cookie.parse(req.headers.cookie ?? "");
  const uid = JSON.parse(cookies.user).uid;
  //console.log(JSON.parse(cookies.user).uid);
  const response = await fetch("http://localhost:3000/api/myPosts", {
    headers: {
      cookie: uid,
    },
  }); // must be changed by production
  const posts = await response.json();

  return {
    props: { posts },
  };
}
