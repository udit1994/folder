import { projects } from "../../content/companyProj";
import Projects from "../../components/Projects";

const Company = ({ projects }) => <Projects projects={projects} />;

export async function getStaticProps() {
  return {
    props: { projects },
  };
}

export default Company;
