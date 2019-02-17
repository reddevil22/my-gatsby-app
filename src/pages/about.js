import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>About me</h1>
    <p>I’m good enough, I’m smart enough, and gosh darn it, people like me!</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default AboutPage;