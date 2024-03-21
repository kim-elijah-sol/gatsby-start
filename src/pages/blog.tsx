import { PageProps, graphql } from "gatsby";
import React from "react";
import { liStyle } from "./blog.css";

type QueryResponse = {
  allMdx: {
    nodes: {
      frontmatter: {
        date: string;
        title: string;
      };
      /**
       * 고유 key 값
       */
      id: string;

      /**
       * mdx 내용
       */
      excerpt: string;
    }[];
  };
};

const Blog: React.FC<PageProps<QueryResponse>> = ({ data }) => {
  return (
    <>
      <h1>Blog List </h1>

      <hr />

      <ul>
        {data.allMdx.nodes.map((node) => (
          <li key={node.id} className={liStyle}>
            <h3>{node.frontmatter.title}</h3>
            <p>{node.frontmatter.date}</p>

            <p>{node.excerpt}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export const Head = () => <title>Blog Page</title>;

export const query = graphql`
  query MyQuery {
    allMdx {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;

export default Blog;
