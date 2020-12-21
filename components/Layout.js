import styled from "styled-components";

import Canvas from "../components/Canvas";
import Footer from ".//Footer";
import Header from "./Header";

const Wrapper = styled.main`
  height: calc(100% - 8rem);
  margin: auto;
  width: 50rem;

  @media only screen and (max-width: 1024px) {
    width: 95%;
  }
`;

const Layout = ({ children, setDisplayNav, showNav }) => {
  return (
    <>
      <Canvas />
      <Header setDisplayNav={setDisplayNav} showNav={showNav} />
      <Wrapper style={{ opacity: showNav ? 0 : 1 }}>{children}</Wrapper>
      <Footer />
    </>
  );
};

export default Layout;
