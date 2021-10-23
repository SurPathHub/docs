import React from 'react';
import Layout from '@theme/Layout';
import Link from "@docusaurus/Link";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SPHButton from "../components/SPHButton";

import {projects} from "../constants/projects";
import SPHCard from "../components/SPHCard";
import SPHTitleBar from "../components/SPHTitleBar";
import siteMetadata from "@generated/site-metadata";

function Hero() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className="hero hero--primary">
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className="buttons">
                    <Link to="/docs">
                        <button className="sph-button sph-button--filled sph-button--hero">
                            <span className="sph-button__label">GET STARTED</span>
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`HOME`}
            description={siteConfig.tagline}>
            <Hero/>
            <main className="content-wrap">
                <SPHTitleBar>SurPathHub Projects</SPHTitleBar>
                <section className="grid" id="docs-list">
                    {projects.map((data, key) => {
                        return (
                            <SPHCard
                                key={key}
                                title={data.name}
                                description={data.description}
                                media={data.img}
                                hasAction
                            >
                                <SPHButton label="Documentation" link={data.link}/>
                            </SPHCard>
                        );
                    })}
                </section>
            </main>
        </Layout>
    );
}
