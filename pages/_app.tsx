import { AppProps } from 'next/app'
import "semantic-ui-css/semantic.min.css";
import Footer from "../src/Footer";
import Top from "../src/Top";
import {LoginContext, Provider} from '../src/context';

export default function App({ Component, pageProps }: AppProps) {
  return(
      <div>
        <Provider>
          <Top />
          <Component {...pageProps} />;
          <Footer />
        </Provider>
      </div>
  )
}

