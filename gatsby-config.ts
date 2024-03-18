import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-start`,
    siteUrl: `https://gatsby-start-khaki.vercel.app/`,
  },
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-vanilla-extract"],
};

export default config;
