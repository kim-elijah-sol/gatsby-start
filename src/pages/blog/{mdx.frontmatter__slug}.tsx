import { PageProps, graphql } from "gatsby";
import React from "react";

type QueryResponse = {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
    };
    excerpt: string;
  };
};

const BlogPost: React.FC<PageProps<QueryResponse>> = ({ data }) => {
  return (
    <>
      <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.date}</p>
      <hr />
      <p>{data.mdx.excerpt}</p>
    </>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      excerpt
    }
  }
`;

export const Head = ({ data }: PageProps<QueryResponse>) => (
  <title>{data.mdx.frontmatter.title}</title>
);

export default BlogPost;
