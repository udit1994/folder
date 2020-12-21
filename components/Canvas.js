import Particles from "react-particles-js";
import styled from "styled-components";

const StyledParticles = styled(Particles)`
  background-color: #ffffff;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: -1;
`;

export default () => {
  return (
    <StyledParticles
      params={{
        particles: {
          color: {
            value: "#000000",
          },
          number: {
            value: 70,
            density: {
              enable: false,
            },
          },
          size: {
            value: 10,
            random: true,
          },
          move: {
            direction: "bottom",
            out_mode: "out",
          },
          line_linked: {
            enable: false,
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "remove",
            },
          },
          modes: {
            remove: {
              particles_nb: 10,
            },
          },
        },
      }}
    />
  );
};
