import { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/Footer";
import Top from "../src/Top";
import { Provider } from '../public/context';

export default function App({ Component, pageProps }: AppProps) {
  // Set the configuration for your app
  // TODO: Replace with your project's config object4

  return (
    <div>
      <Provider>
        <a>
          <Top />
          <Component {...pageProps} />
          <Footer />
        </a>
      </Provider>
    </div>
  )
}