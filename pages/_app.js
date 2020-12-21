import { Reset } from "styled-reset";
import { useState } from "react";

import "../styles/globals.css";
import Layout from "../components/Layout";
import Navigation from "../components/Navigation";

const App = ({ Component, pageProps }) => {
  const [showNav, setShowNav] = useState(false);

  const setDisplayNav = () => {
    setShowNav((prev) => !prev);
  };

  return (
    <>
      <Reset />
      <Layout showNav={showNav} setDisplayNav={setDisplayNav}>
        <Component {...pageProps} />
      </Layout>
      <Navigation showNav={showNav} setDisplayNav={setDisplayNav} />
    </>
  );
};

export default App;
