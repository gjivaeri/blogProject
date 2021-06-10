import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

//next에서 제공하는 document를 커스터마이즈 할 수 있다
//_app.js은 글로벌 css 적용, 레이아웃 적용
//_document.js 서버에서만 렌더링되고 onclick같은 이벤트, css는 적용하지 않음