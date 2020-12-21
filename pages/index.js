import { useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import Email from "../components/Email";
import Learning from "../components/Learnings";

const Wrapper = styled.section`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-around;

  @media only screen and (max-width: 1024px) {
    width: 100%;
  }
`;

const CustomImage = styled(Image)`
  border-radius: 20px;
  box-shadow: 0 0 0.5rem #000000;
  filter: grayscale(100%);
  object-fit: cover;
`;

const Underline = styled.u`
  color: #0000ff;
  cursor: pointer;
`;

const Index = () => {
  const [showEmail, setShowEmail] = useState(false);

  const setDisplayEmail = () => {
    setShowEmail((prev) => !prev);
  };

  return showEmail ? (
    <Email setDisplayEmail={setDisplayEmail} />
  ) : (
    <Wrapper>
      <p>
        Hi there,
        <br />I am{" "}
        <span style={{ backgroundColor: "#dddddd" }}>Udit Kaushik</span>, a
        result oriented software developer, based in Bengaluru, India.
        <br />
        Interested in bringing innovative ideas to life.{" "}
        <span onClick={setDisplayEmail} style={{ cursor: "pointer" }}>
          <br />
          <Underline>Drop an e-mail!</Underline>
        </span>
      </p>
      <CustomImage src="/self.jpg" alt="Udit's" width={192} height={192} />
      <Learning />
    </Wrapper>
  );
};

export default Index;
