// import { AppProps } from "next/app";
// import "semantic-ui-css/semantic.min.css";
// import styled from "styled-components";
// import Footer from "../src/Footer";
// import Top from "../src/Top";
// import {Provider} from '../public/context';

// export default function App({ Component, pageProps }: AppProps) {

//   // Set the configuration for your app
//   // TODO: Replace with your project's config object4
//   return(
//     <div>
//           <Header/>
//           <Top/>
//           <Provider>
//           <Component {...pageProps} />;
//           </Provider>
//           <Footer />
//     </div>
//   )
// }
// const Header = styled.div`
//   position: absolute;
//   top: 100px;
//   width: 100%;
//   height: 20%;
//   background: linear-gradient(
//       to bottom,
//       rgba(20, 20, 20, 0.1) 10%,
//       rgba(20, 20, 20, 0.7) 70%,
//       rgba(20, 20, 20, 1)
//     ),
//     url(https://source.unsplash.com/random/1920x1080);  
//     background-size: cover;
// `;