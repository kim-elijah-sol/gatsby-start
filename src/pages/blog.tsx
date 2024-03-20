import { PageProps, graphql } from "gatsby";
import React from "react";

type QueryResponse = {
  allFile: {
    nodes: {
      name: string;
    }[];
  };
};

const Blog: React.FC<PageProps<QueryResponse>> = ({ data }) => {
  return (
    <>
      <h1>Blog List </h1>

      <ul>
        {data.allFile.nodes.map((node) => (
          <li>{node.name}</li>
        ))}
      </ul>
    </>
  );
};

export const Head = () => <title>Blog Page</title>;

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default Blog;
