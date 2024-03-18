import { Link, graphql, useStaticQuery } from "gatsby";
import React, { PropsWithChildren } from "react";
import { containerStyle, h3Style, h1Style } from "./Layout.css";

interface Props {
  pageTitle: string;
}

type QueryResponse = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

function Layout({ pageTitle, children }: PropsWithChildren<Props>) {
  const data: QueryResponse = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={containerStyle}>
      <h1 className={h1Style}>{data.site.siteMetadata.title}</h1>

      <h3 className={h3Style}>{pageTitle}</h3>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <main>{children}</main>
    </div>
  );
}

export default Layout;
