import { NextApiRequest, NextApiResponse } from "next";

export type ApiRoute = (
  request: NextApiRequest,
  response: NextApiResponse
) => void;

export interface Page {
  content: string;
}

export interface Blog {
  content: string;
  data: {
    title: string;
    slug: string;
    tags: string;
  };
}
