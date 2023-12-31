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
      <div className="idkquizz">
        <HomepageHeader />
        <main>
          <div className="mainquizz">
            <center>
              <div className="flex-container">
                <div className="conterse">
                  <h1>Tự luyện</h1>
                  <a className="button button--secondary button--ifm-color-primary-light">
                    Start
                  </a>
                </div>
                <div className="conterse">
                  <h1>Thi online</h1>
                  <a className="button button--secondary button--ifm-color-primary-light">
                    Start
                  </a>
                </div>
              </div>
            </center>
          </div>
        </main>
      </div>
    </Layout>
  );
}
