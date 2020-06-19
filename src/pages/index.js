import React from "react";

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import LeftPanel from "../components/left_panel";
import ResumeContainer from "../components/resume_container";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <LeftPanel />
        <ResumeContainer />
    </Layout>
);

export default IndexPage;
