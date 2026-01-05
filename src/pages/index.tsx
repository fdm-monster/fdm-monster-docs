import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import React from "react";

const Svg = require("@site/static/img/fdm-monster-logo.svg").default;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <div className={styles.logoWrapper}>
            <Svg
              className={styles.heroLogo}
              role="img"
            />
          </div>
          <h1 className={styles.heroTitle}>
            {siteConfig.title}
          </h1>
          <p className={styles.heroSubtitle}>
            All the tools you need to manage and scale your 3D Print farm,
            monitoring all your printers in one central place.
          </p>
          <div className={styles.heroButtons}>
            <Link
              className={clsx("button", styles.heroCta)}
              to="/docs"
            >
              Get started{" "}
              <span className={styles.ctaArrow}>→</span>
            </Link>
          </div>
        </div>
        <div className={styles.heroVisual}>
          <div className={styles.visualCard}></div>
          <div className={styles.visualCard}></div>
          <div className={styles.visualCard}></div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
