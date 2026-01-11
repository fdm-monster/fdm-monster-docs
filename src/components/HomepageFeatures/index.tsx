import React from "react";
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
    title: "Connect OctoPrint",
    Svg: require("@site/static/img/octoprint-tentacle.svg").default,
    description: (
      <>Using OctoPrint, FDM Monster prevents single points of failures in your farm!</>
    ),
    featureLink: {
      description: "Visit OctoPrint",
      href: "https://octoprint.org/",
    },
  },
  {
    title: "Connect Moonraker",
    Svg: require("@site/static/img/klipper.svg").default,
    description: (
      <>Moonraker enables FDM Monster to communicate with your Klipper device!</>
    ),
    featureLink: {
      description: "Visit Moonraker",
      href: "https://moonraker.readthedocs.io/",
    },
  },
  {
    title: "Connect Bambu Lab",
    Svg: require("@site/static/img/bambu-logo.png").default,
    description: (
      <>Control your Bambu Lab printers directly through FDM Monster!</>
    ),
    featureLink: {
      description: "Visit Bambu Lab",
      href: "https://bambulab.com/",
    },
  },
  {
    title: "Connect PrusaLink",
    Svg: require("@site/static/img/prusa-link-logo.svg").default,
    description: (
      <>Integrate your Prusa printers using PrusaLink for seamless farm management!</>
    ),
    featureLink: {
      description: "Visit PrusaLink",
      href: "https://help.prusa3d.com/article/prusalink-and-prusaconnect_302608",
    },
  },
  {
    title: "Deploy on Unraid",
    Svg: require("@site/static/img/unraid-logo.svg").default,
    description: (
      <>Run FDM Monster on your Unraid server for easy container management!</>
    ),
    featureLink: {
      description: "Learn More",
      href: "https://unraid.net/community/apps",
    },
  },
  {
    title: "Our Community",
    Svg: require("@site/static/img/discord-icon-svgrepo-com.svg").default,
    description: (
      <>Do you have questions about FDM Monster? Or just want to talk about 3D Printing?</>
    ),
    featureLink: {
      description: "Join Community",
      href: "https://discord.gg/mwA8uP8CMc",
    },
  },
];

function Feature({ Svg, title, description, featureLink }) {
  const isExternal = featureLink.href.startsWith('http');

  return (
    <Link
      to={featureLink.href}
      className={styles.featureCardLink}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
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
          <span className={styles.featureButton}>
            {featureLink.description}{" "}
            <span className={styles.featureArrow}>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

function handleSectionTitleClick(sectionId: string) {
  return () => {
    window.history.pushState(null, '', `#${sectionId}`);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };
}

export default function HomepageFeatures() {
  return (
    <section className={styles.featuresSection} id="powered-by">
      <div className={styles.featuresContainer}>
        <div className={styles.featuresHeader}>
          <h2 className={styles.sectionTitle} onClick={handleSectionTitleClick('powered-by')} style={{ cursor: 'pointer' }}>
            FDM Monster is Powered By
          </h2>
          <p className={styles.sectionSubtitle}>
            FDM Monster stands on the shoulders of giants! Check out the following projects and see what fits your needs:
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
