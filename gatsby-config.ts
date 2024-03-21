import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `gatsby-start`,
    siteUrl: `https://gatsby-start-khaki.vercel.app/`,
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-vanilla-extract",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};

export default config;
