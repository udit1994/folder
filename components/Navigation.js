import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

import Anchor from "./styled/Anchor";
import Modal from "./styled/Modal";

const List = styled.ul`
  font-size: 2rem;
  left: 50%;
  list-style-type: none;
  position: absolute;
  text-align: center;
  top: 40%;
  transform: translate(-50%, -50%);
`;

const ListItem = styled.li`
  min-height: 5rem;
`;

const Navigation = ({ setDisplayNav, showNav }) => {
  const router = useRouter();

  return (
    <Modal
      onClick={setDisplayNav}
      style={showNav ? {} : { opacity: 0, zIndex: -10 }}
    >
      <List>
        <ListItem>
          <Link href="/">
            <Anchor
              style={{
                color: router.pathname === "/" ? "#0000ff" : "",
              }}
            >
              /home
            </Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/projects/company">
            <Anchor
              style={{
                color: router.pathname === "/projects/company" ? "#0000ff" : "",
              }}
            >
              /projects/company
            </Anchor>
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/projects/hobby">
            <Anchor
              style={{
                color: router.pathname === "/projects/hobby" ? "#0000ff" : "",
              }}
            >
              /projects/hobby
            </Anchor>
          </Link>
        </ListItem>
      </List>
    </Modal>
  );
};

export default Navigation;
