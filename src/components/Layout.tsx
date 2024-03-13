import { Link } from "gatsby";
import styled from "@emotion/styled";
import React, { PropsWithChildren } from "react";

interface Props {
  pageTitle: string;
}

const StyledContainer = styled.div({
  padding: 32,
});

function Layout({ pageTitle, children }: PropsWithChildren<Props>) {
  return (
    <StyledContainer>
      <h1
        css={{
          fontSize: 48,
          color: "#372525",
          marginBottom: 32,
        }}
      >
        {pageTitle}
      </h1>

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
    </StyledContainer>
  );
}

export default Layout;
