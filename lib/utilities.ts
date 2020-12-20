import matter from "gray-matter";
import moment from "moment";
import { Blog, Page } from "./types";

export const getPageData = (page: string): Page => {
  const context = (require as any).context("../data/pages", true, /\.md$/);
  const keys = context.keys().filter((file) => file.includes(page));
  const value = keys.map(context)[0];

  // Parse yaml metadata & markdownbody in document
  const document = matter(value.default);
  delete document.orig;

  return document;
};

export const getBlogPost = (slug: string): Blog => {
  const context = (require as any).context("../data/posts", true, /\.md$/);
  const keys = context.keys();
  const values = keys.map(context).reduce((result, value) => {
    const document = matter(value.default);

    if (document.data.slug === slug) {
      delete document.orig;

      result.push(document);
      return result;
    }

    return result;
  }, []);

  return values[0];
};

export const getBlogPosts = (): Blog[] => {
  const context = (require as any).context("../data/posts", true, /\.md$/);
  const keys = context.keys();
  const values = keys.map(context);
  const data = keys
    .map((key, index) => {
      const value = values[index];
      // Parse yaml metadata & markdownbody in document
      const document = matter(value.default);
      delete document.orig;

      return document;
    })
    .sort((a, b) => +b.data.date - +a.data.date)
    .map((post) => ({
      ...post,
      data: {
        ...post.data,
        date: `Published ${moment(post.data.date).format("MMM Do YYYY")}`,
      },
    }));

  return data;
};
