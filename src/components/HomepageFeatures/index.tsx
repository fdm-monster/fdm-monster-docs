import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type FeatureLink = {
  description: string;
  href: string;
};

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">> | string;
  description: React.JSX.Element;
  featureLink: FeatureLink;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Install as Docker container",
    Svg: require("@site/static/img/docker-svgrepo-com.svg").default,
    description: (
      <>
        With docker you can be sure FDM Monster will run in isolation. (easy)
      </>
    ),
    featureLink: {
      description: "Easy setup!",
      href: "/docs/installing/docker_compose",
    },
  },
  {
    title: "Install MonsterPi on your Pi",
    Svg: require("@site/static/img/raspberry-pi-svgrepo-com.svg").default,
    description: (
      <>Run FDM Monster on a Raspberry Pi 3 or 4 using our prebuilt image.</>
    ),
    featureLink: {
      description: "Read More!",
      href: "/docs/installing/monsterpi",
    },
  },
  {
    title: "Chat on Discord",
    Svg: require("@site/static/img/discord-icon-svgrepo-com.svg").default,
    description: (
      <>Do you have questions about FDM Monster? Or just want to talk about 3D Printing?</>
    ),
    featureLink: {
      description: "Join our Discord!",
      href: "https://discord.gg/mwA8uP8CMc",
    },
  },
  {
    title: "Powered by OctoPrint",
    Svg: require("@site/static/img/octoprint-tentacle.svg").default,
    description: (
      <>Using OctoPrint, FDM Monster prevents single points of failures in your farm!</>
    ),
    featureLink: {
      description: "Read More!",
      href: "https://octoprint.org/",
    },
  },
  {
    title: "Powered by Moonraker",
    Svg: require("@site/static/img/klipper.svg").default,
    description: (
      <>Moonraker enables FDM Monster to communicate with your Klipper device!</>
    ),
    featureLink: {
      description: "Read More!",
      href: "https://moonraker.readthedocs.io/",
    },
  },
  {
    title: "Powered by Bambu Lab",
    Svg: require("@site/static/img/bambu-logo.png").default,
    description: (
      <>Connect and manage your Bambu Lab printers directly through FDM Monster!</>
    ),
    featureLink: {
      description: "Read More!",
      href: "https://bambulab.com/",
    },
  },
  {
    title: "Powered by PrusaLink",
    Svg: require("@site/static/img/prusa-link-logo.svg").default,
    description: (
      <>Integrate your Prusa printers using PrusaLink for seamless farm management!</>
    ),
    featureLink: {
      description: "Read More!",
      href: "https://help.prusa3d.com/article/prusalink-and-prusaconnect_302608",
    },
  },
];

function Feature({ Svg, title, description, featureLink }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIconWrapper}>
        {typeof Svg === "string" ? (
          <img src={Svg} className={styles.featureSvg} alt={title} />
        ) : (
          <Svg className={styles.featureSvg} role="img" />
        )}
      </div>
      <div className={styles.featureContent}>
        <h3 className={styles.featureTitle}>{title}</h3>
        <p className={styles.featureDescription}>{description}</p>
      </div>
      <div className={styles.featureAction}>
        <Link className={styles.featureButton} to={featureLink.href}>
          {featureLink.description}{" "}
          <span className={styles.featureArrow}>→</span>
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.featuresContainer}>
        <div className={styles.featuresHeader}>
          <h2 className={styles.sectionTitle}>Get Started with FDM Monster</h2>
          <p className={styles.sectionSubtitle}>
            Choose your preferred installation method and start managing your 3D print farm today
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
