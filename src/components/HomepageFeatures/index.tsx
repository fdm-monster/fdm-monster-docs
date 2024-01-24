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
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: React.JSX.Element;
  featureLink: FeatureLink;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Install as Docker container",
    Svg: require("@site/static/img/docker-svgrepo-com.svg").default,
    description: (
      <>
        With docker you can be sure FDM Monster will run in isolation. For the
        least hassle setup, you should give this a try!
      </>
    ),
    featureLink: {
      description: "Read More!",
      href: "/docs/installing/docker_compose",
    },
  },
  {
    title: "Install MonsterPi on your Pi",
    Svg: require("@site/static/img/raspberry-pi-svgrepo-com.svg").default,
    description: (
      <>Run FDM Monster on a Raspberry Pi 3, 4 or 5 using our prebuilt image.</>
    ),
    featureLink: {
      description: "Read More!",
      href: "/docs/installing/monsterpi",
    },
  },
  {
    title: "Powered by OctoPrint",
    Svg: require("@site/static/img/octoprint-tentacle.svg").default,
    description: (
      <>
        Using OctoPrint, FDM Monster prevents single points of failures in your
        farm!
      </>
    ),
    featureLink: {
      description: "Read More!",
      href: "https://octoprint.org/",
    },
  },
];

function Feature({ Svg, title, description, featureLink }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link className="button button--secondary button--lg" to={featureLink.href}>
            {featureLink.description}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
