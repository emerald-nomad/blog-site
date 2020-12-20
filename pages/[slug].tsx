import { GetStaticPaths, GetStaticProps } from "next";
import Markdown from "react-markdown";
import gfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Blog, getBlogPost, getBlogPosts } from "lib";

interface PostProps {
  blogPost: Blog;
}

const Post: React.FC<PostProps> = ({blogPost}) => {
  const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter style={vscDarkPlus} language={language} children={value} />
  }
}

  return (
    <>
      <div style={{marginBottom: "2.25em"}}>
        <h1>{blogPost.data.title}</h1>
        <time>Last updated on December 8, 2020</time>
      </div>
     
      <Markdown plugins={[gfm]} renderers={renderers} allowDangerousHtml children={blogPost.content} />
    </>
  )
  
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getBlogPosts();

  const paths = posts.map((post) => ({
    params: { slug: post.data.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostProps> = async ({ params }) => {
  const { slug } = params;

  const blogPost = getBlogPost(slug as string);

  return {
      props: { blogPost },
    };

  
};


export default Post;