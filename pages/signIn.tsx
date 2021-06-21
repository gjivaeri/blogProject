import Head from "next/head";
import { useEffect, useState } from "react";

export default function signIn() {
  useEffect(() => {
    const scriptTag = document.createElement('script');
    scriptTag.src = "/signIn.js";
    document.body.appendChild(scriptTag);
  }, []);

  return (
    <div>
      <Head>
        <script type="text/javascript" src="/naverLogin.js"></script>
        <script type="text/javascript" src="/jQuery.js"></script>
        <title>블로그 네이버 로그인</title>
      </Head>
      <div id="naver_id_login"></div>
    </div>
  );
}
