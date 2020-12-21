import { projects } from "../../content/hobbyProj";
import Projects from "../../components/Projects";

const Hobby = ({ projects }) => <Projects projects={projects} />;

export async function getStaticProps() {
  return {
    props: { projects },
  };
}

export default Hobby;
