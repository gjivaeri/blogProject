import { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/Footer";
import Top from "../src/Top";
import { Provider } from "../public/context";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Top />
      <Provider>
        <Component {...pageProps} />;
      </Provider>
      <Footer />
    </div>
  );
}
