import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from 'next/router'
import Markdown from "react-markdown";
import gfm from 'remark-gfm'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import { vscDarkPlus } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Blog, getBlogPost, getBlogPosts } from "lib";
import Head from "next/head";

interface PostProps {
  blogPost: Blog;
}

const Post: React.FC<PostProps> = ({blogPost}) => {
  const router = useRouter();
  const renderers = {
  code: ({language, value}) => {
    return <SyntaxHighlighter style={vscDarkPlus} language={language} children={value} />
  }
}
console.log(router)
  return (
    <>
    <Head>
      <title>JT's Digital Garden | {blogPost.data.title}</title>

      {/* Twitter */}
      <meta name="twitter:card" content="summary" key="twcard" />
      <meta name="twitter:creator" content="emerladnomad" key="twhandle" />

      {/* Open Graph */}
      <meta property="og:url" content={`https://emeraldnomad.dev${router.asPath}`} key="ogurl" />
      <meta property="og:image" content={`https://emeraldnomad.dev/images/garden.jpg`} key="ogimage" />
      <meta property="og:site_name" content="JT's Digital Garden" key="ogsitename" />
      <meta property="og:title" content={blogPost.data.title} key="ogtitle" />
      {/* <meta property="og:description" content={description} key="ogdesc" /> */}
    </Head>
      <div>
        <h1>{blogPost.data.title}</h1>
          <time className="time__dot">Last updated on December 8, 2020</time>
          <time>5 min read</time>
        <hr/>
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