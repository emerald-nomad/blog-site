import { GetStaticProps } from "next";
import Markdown from "react-markdown";
import { Blog, getBlogPosts, getPageData, Page } from "lib";
import Link from "next/link";


interface HomeProps {
  pageData: Page;
  blogs: Blog[];
}

const Home: React.FC<HomeProps> = ({blogs, pageData}) => {
  
  return (
    <>
      <Markdown children={pageData.content} allowDangerousHtml/>
      {
        blogs.map(blog => <p><Link href={`/${blog.data.slug}`}><a>{blog.data.title}</a></Link></p>)
      }
    </>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async ({ params }) => {
  //get posts & context from folder
  const blogs = getBlogPosts();

  const pageData = getPageData("index.md")

  return {
    props: { blogs, pageData },
  };
};

export default Home;