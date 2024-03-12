import * as React from "react";
import { Link, PageProps, navigate } from "gatsby";

const AboutPage: React.FC<PageProps> = () => {
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <main>
      <h1>Here is the about page</h1>

      <Link to="/">Back to home</Link>

      <button onClick={handleBack}>goBack</button>
    </main>
  );
};

export default AboutPage;
