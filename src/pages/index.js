import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="heroBanner">
      <div className="container">
        <center>
          <img className="logonho" src="./img/logo.png"></img>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--ifm-color-primary-light"
              to="/docs/intro"
            >
              Start Learning NOW 😉
            </Link>
          </div>
          <br></br>
          <p>Im better </p>
        </center>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <center>
      <h1>Why Choose Me?</h1>
      </center>
      <main>
        <HomepageFeatures />
      <center>
        <h1>intro</h1>
            <Link
              className="button button--secondary button--ifm-color-primary-light"
              to="/docs/intro"
            >
              CLICK HERE !!
            </Link>
            <br></br>
            <br></br>
        <iframe
        className="idkframe"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cHvhz2SRM04"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          allowfullscreen
        ></iframe>
      </center>
      </main>
    </Layout>
  );
}
