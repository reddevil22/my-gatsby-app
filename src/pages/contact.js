import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>I'd love to talk! Email me at the address below</h1>
    <p>
      <a href="mailto:nlroberts200@gmail.com">nlroberts200@gmail.com</a>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default ContactPage;