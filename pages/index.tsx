import { GetStaticProps } from "next";
import Markdown from "react-markdown";
import Link from "next/link";
import { Blog, getBlogPosts, getPageData, Page, useUpdateExternalLink } from "lib";


interface HomeProps {
  pageData: Page;
  blogs: Blog[];
}

const Home: React.FC<HomeProps> = ({blogs, pageData}) => {
  useUpdateExternalLink();
  
  return (
    <>
      <Markdown children={pageData.content} allowDangerousHtml/>
      <h3>Recent Posts</h3>
      <ul>
        {     
          blogs.map(blog => <li key={blog.data.slug}><Link href={`/${blog.data.slug}`}><a>{blog.data.title}</a></Link></li>)
        }
      </ul>
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