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
      <>Run FDM Monster on a Raspberry Pi 3, 4 or 5 using our prebuilt image.</>
    ),
    featureLink: {
      description: "Read More!",
      href: "/docs/installing/monsterpi",
    },
  },
  {
    title: "Enable moonraker/klipper support",
    Svg: require("@site/static/img/klipper.svg").default,
    description: (
      <>Connect FDM Monster with your klipper enabled printers.</>
    ),
    featureLink: {
      description: "Read More!",
      href: "/docs/software_usage/moonraker",
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
    Svg: require("@site/static/img/fdm-monster-logo.svg").default,
    description: (
      <>Moonraker enables FDM Monster to communicate with your Klipper device!</>
    ),
    featureLink: {
      description: "Read More!",
      href: "https://moonraker.readthedocs.io/",
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
      </div>
      <div className="text--center padding-horiz--md">
        <Link className={clsx("button button--secondary button--lg")} to={featureLink.href}>
            {featureLink.description}
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  const firstRow = FeatureList.slice(0, 3);
  const secondRow = FeatureList.slice(3);
  return (
    <div className="container text--center">
      <div className="row margin-top--lg margin-bottom--lg">
        {firstRow.map((props, idx) => (
            <Feature key={idx} {...props} />
        ))}
      </div>
      <div className="row margin-bottom--lg">
        {secondRow.map((props, idx) => (
            <Feature key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}
