import * as React from "react";
import { Link, type HeadFC, type PageProps, navigate } from "gatsby";
import Layout from "../components/Layout";

const IndexPage: React.FC<PageProps> = () => {
  const handleGoAbout = () => {
    navigate("/about");
  };

  const handleGoAboutReplace = () => {
    navigate("/about", { replace: true });
  };

  return (
    <Layout pageTitle="Home Page">
      <button onClick={handleGoAbout}>go about</button>

      <button onClick={handleGoAboutReplace}>go about replace</button>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>gatsby-start</title>
    <meta name="description" content="Gatsby Start Page Description" />
  </>
);
