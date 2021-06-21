import { AppProps } from "next/app";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import Footer from "../src/Footer";
import Topbar from "../src/Top";
import {Provider} from '../public/context';

export default function App({ Component, pageProps }: AppProps) {

  // Set the configuration for your app
  // TODO: Replace with your project's config object4
  return(
    <div>
          <Topbar/>
    </div>
  )
}