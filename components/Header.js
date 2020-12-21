import styled from "styled-components";

import MenuIcon from "./styled/MenuIcon";

const Wrapper = styled.header`
  align-items: center;
  display: flex;
  font-size: 0.7rem;
  height: 4rem;
  justify-content: space-between;
  margin: 0 2rem;
  z-index: 2;
`;

export default ({ setDisplayNav, showNav }) => {
  return (
    <Wrapper>
      <section>
        <p title="name">{`< Udit Kaushik />`}</p>
        <p title="role">{`< Frontend Developer />`}</p>
      </section>
      <div
        onClick={setDisplayNav}
        style={{ cursor: "pointer", padding: "1rem" }}
      >
        <MenuIcon transition={showNav} />
      </div>
    </Wrapper>
  );
};
