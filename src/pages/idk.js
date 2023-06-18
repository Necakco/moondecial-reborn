import React, { useEffect, useState } from "react";
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
          <img className="logonho" src="./img/logo.png" alt="Logo"></img>
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
  const [baiThiList, setBaiThiList] = useState([]);

  useEffect(() => {
    fetch('./json/list_bai_thi.json')
      .then(response => response.json())
      .then(data => setBaiThiList(data))
      .catch(error => console.log(error));
  }, []);

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
        <div>
          <h1>Bảng Chọn Bài Thi</h1>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tên bài thi</th>
                <th>Mô tả</th>
              </tr>
            </thead>
            <tbody>
              {baiThiList.map((baiThi) => (
                <tr key={baiThi.id}>
                  <td>{baiThi.id}</td>
                  <td>{baiThi.name}</td>
                  <td>{baiThi.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <center></center>
      </main>
    </Layout>
  );
}
