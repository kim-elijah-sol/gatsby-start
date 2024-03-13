import * as React from "react";
import { PageProps, navigate } from "gatsby";
import Layout from "../components/Layout";

const AboutPage: React.FC<PageProps> = () => {
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Layout pageTitle="About Page">
      <button onClick={handleBack}>goBack</button>
    </Layout>
  );
};

export default AboutPage;
