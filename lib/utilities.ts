import matter from "gray-matter";
import moment from "moment";
import { useEffect } from "react";
import { Blog, Page } from "./types";

export const useUpdateExternalLink = () => {
  useEffect(() => {
    // Targets secure url's
    document.querySelectorAll('a[href^="https://"]').forEach((link) => {
      link.setAttribute("target", "_blank");
    });

    // Target unsecured url's
    document.querySelectorAll('a[href^="http://"]').forEach((link) => {
      link.setAttribute("target", "_blank");
    });
  }, []);
};

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

  const post = values[0];

  const date = new Date(post.data.updatedOn).toISOString();

  return {
    ...post,
    data: {
      ...post.data,
      updatedOn: moment(date).format("MMMM Do, YYYY"),
    },
  };
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
    .sort((a, b) => {
      // @ts-ignore
      return new Date(b.data.updatedOn) - new Date(a.data.updatedOn);
    })
    .map((post) => {
      const date = new Date(post.data.updatedOn).toISOString();

      return {
        ...post,
        data: {
          ...post.data,
          updatedOn: moment(date).format("MMMM Do, YYYY"),
        },
      };
    });

  return data;
};
