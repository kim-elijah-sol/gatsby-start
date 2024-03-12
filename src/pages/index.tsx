import * as React from "react";
import { Link, type HeadFC, type PageProps, navigate } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  const handleGoAbout = () => {
    navigate("/about");
  };

  const handleGoAboutReplace = () => {
    navigate("/about", { replace: true });
  };

  return (
    <main>
      <h1>Here is the home page</h1>

      <Link to="/about">Go to about page</Link>

      <button onClick={handleGoAbout}>go about</button>

      <button onClick={handleGoAboutReplace}>go about replace</button>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>gatsby-start</title>
    <meta name="description" content="Gatsby Start Page Description" />
  </>
);
