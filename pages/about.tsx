import { GetStaticProps } from "next";
import Markdown from "react-markdown";
import { getPageData, Page } from "lib";

interface AboutProps {
  pageData: Page;
}

const About: React.FC<AboutProps> = ({pageData}) => {

  return (
    <Markdown children={pageData.content} allowDangerousHtml/>
  )
}

export const getStaticProps: GetStaticProps<AboutProps> = async ({ params }) => {
  const pageData = getPageData("about.md")

  return {
    props: {  pageData },
  };
};

export default About;