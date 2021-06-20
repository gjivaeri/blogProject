import Head from "next/head";

export default function signIn() {
  return (
    <div>
      <Head>
        <script type="text/javascript" src="/naverLogin.js"></script>
        <script type="text/javascript" src="/jQuery.js"></script>
        <script type="text/javascript" src="/signIn.js"></script>
        <title>블로그 로그인</title>
      </Head>
      <div id="naver_id_login"></div>
    </div>
  );
}
