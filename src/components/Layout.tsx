import { Link } from "gatsby";
import React, { PropsWithChildren } from "react";

interface Props {
  pageTitle: string;
}

function Layout({ pageTitle, children }: PropsWithChildren<Props>) {
  return (
    <div>
      <h1>{pageTitle}</h1>

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
