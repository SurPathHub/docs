import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import SPHButton from "../components/SPHButton";

import {projects} from "../constants/projects";
import SPHCard from "../components/SPHCard";
import SPHTitleBar from "../components/SPHTitleBar";

import "https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css";

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div className={styles.buttons}>
                    <SPHButton type="filled" link="/docs">Get started</SPHButton>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    return (
        <Layout
            title={`HOME`}
            description="Description will go into a meta tag in <head />">
            <HomepageHeader/>
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
