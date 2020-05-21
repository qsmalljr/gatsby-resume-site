import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import LeftPanel from "../components/left_panel";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <LeftPanel />
    </Layout>
);

export default IndexPage;
