import { Link, PageProps, graphql } from "gatsby";
import React from "react";
import { liStyle } from "./blog.css";

type QueryResponse = {
  allMdx: {
    nodes: {
      frontmatter: {
        date: string;
        title: string;
        slug: string;
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
            <Link to={`/blog/${node.frontmatter.slug}`}>
              <h3>{node.frontmatter.title}</h3>
            </Link>

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
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export default Blog;
