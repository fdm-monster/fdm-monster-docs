import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import styles from "./index.module.css";
import React from "react";

const Svg = require("@site/static/img/fdm-monster-logo.svg").default;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={ styles.heroBanner }>
      <div className={ styles.heroContainer }>
        <div className={ styles.heroContent }>
          <div className={ styles.logoWrapper }>
            <Svg
              className={ styles.heroLogo }
              role="img"
            />
          </div>
          <h1 className={ styles.heroTitle }>
            { siteConfig.title }
          </h1>
          <p className={ styles.heroSubtitle }>
            All the tools you need to manage and scale your 3D Print farm,
            monitoring all your printers in one central place.
          </p>
          <div className={ styles.heroButtons }>
            <Link
              className={ clsx("button", styles.heroCta) }
              to="/docs"
            >
              Get started{ " " }
              <span className={ styles.ctaArrow }>→</span>
            </Link>
          </div>
        </div>
        <div className={ styles.heroVisual }>
          <div className={ styles.visualCard }></div>
          <div className={ styles.visualCard }></div>
          <div className={ styles.visualCard }></div>
        </div>
      </div>
    </header>
  );
}

function CodeBlock({ prefix, command, syntax }: { prefix?: string; command: string; syntax?: 'bash' | 'yaml' }) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderSyntaxHighlighted = () => {
    const commandText = (prefix ?? '') + command;
    if (syntax === 'bash') {
      // Simple bash syntax highlighting
      const parts = commandText.split(/(\s+)/);
      return parts.map((part, i) => {
        if (part.startsWith('curl') || part === 'bash' || part === 'docker' || part === 'docker-compose') {
          return <span key={ i } style={ { color: '#86efac' } }>{ part }</span>;
        } else if (part.startsWith('-')) {
          return <span key={ i } style={ { color: '#c084fc' } }>{ part }</span>;
        } else if (part.startsWith('http://') || part.startsWith('https://')) {
          return <span key={ i } style={ { color: '#fbbf24' } }>{ part }</span>;
        } else if (part === '|' || part === '\\') {
          return <span key={ i } style={ { color: '#94a3b8' } }>{ part }</span>;
        }
        return <span key={ i }>{ part }</span>;
      });
    } else if (syntax === 'yaml') {
      // Simple YAML syntax highlighting
      const lines = commandText.split('\n');
      return lines.map((line, i) => {
        const keyMatch = line.match(/^(\s*)([a-zA-Z_-]+):/);
        if (keyMatch) {
          const indent = keyMatch[1];
          const key = keyMatch[2];
          const rest = line.substring(keyMatch[0].length);
          return (
            <span key={ i }>
              { indent }
              <span style={ { color: '#86efac' } }>{ key }</span>
              <span style={ { color: '#94a3b8' } }>:</span>
              <span style={ { color: '#fbbf24' } }>{ rest }</span>
              { i < lines.length - 1 && '\n' }
            </span>
          );
        }
        return <span key={ i }>{ line }{ i < lines.length - 1 && '\n' }</span>;
      });
    }
    return command;
  };

  return (
    <div className={ styles.codeBlock }>
      <code className={ styles.codeText }>
        { syntax ? renderSyntaxHighlighted() : command }
      </code>
      <button
        className={ styles.copyButton }
        onClick={ copyToClipboard }
        title={ copied ? "Copied!" : "Copy to clipboard" }
        aria-label={ copied ? "Copied!" : "Copy to clipboard" }
      >
        { copied ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" stroke="currentColor" strokeWidth="2"
                  strokeLinecap="round" strokeLinejoin="round"/>
            <path
              d="M5 15H4C3.46957 15 2.96086 14.7893 2.58579 14.4142C2.21071 14.0391 2 13.5304 2 13V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H13C13.5304 2 14.0391 2.21071 14.4142 2.58579C14.7893 2.96086 15 3.46957 15 4V5"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) }
      </button>
    </div>
  );
}

function QuickInstall() {
  const linuxCommandPrefix = "$ ";
  const linuxCommand = "curl -fsSL https://raw.githubusercontent.com/fdm-monster/fdm-monster/main/install.sh | bash";
  const dockerComposeYaml = `services:
  fdm-monster:
    container_name: fdm-monster
    image: fdmmonster/fdm-monster:2
    restart: unless-stopped
    deploy:
      restart_policy:
        delay: 5s
        window: 120s
    ports:
      - "4000:4000"
    volumes:
      - fdm-monster-media:/app/media
      - fdm-monster-database:/app/database

volumes:
  fdm-monster-media:
  fdm-monster-database:`;
  const dockerComposeCommand = "docker-compose up -d";
  const dockerCommand = `docker run -d \\
  --name fdm-monster \\
  -p 4000:4000 \\
  -v fdm-monster-media:/app/media \\
  -v fdm-monster-database:/app/database \\
  --restart unless-stopped \\
  fdmmonster/fdm-monster:2`;

  return (
    <section className={ styles.quickInstall }>
      <div className={ styles.quickInstallContainer }>
        <h2 className={ styles.quickInstallTitle }>Quick Install</h2>
        <p className={ styles.quickInstallSubtitle }>
          Choose your preferred installation method and get started right away
        </p>

        <Tabs>
          <TabItem value="linux" label="Linux" default>
            <div className={ styles.tabContent }>
              <CodeBlock prefix={ linuxCommandPrefix } command={ linuxCommand } syntax="bash"/>
              <div className={ styles.quickInstallLinks }>
                <Link to="/docs/installing/one-click-linux" className={ styles.quickInstallLink }>
                  Full Installation Guide <strong>→</strong>
                </Link>
              </div>
            </div>
          </TabItem>

          <TabItem value="docker-compose" label="Docker Compose">
            <div className={ styles.tabContent }>
              <p className={ styles.tabDescription }>
                Run FDM Monster in a Docker container with docker-compose for easy management.
              </p>
              <p className={ styles.stepLabel }>1. Create a docker-compose.yml file:</p>
              <CodeBlock command={ dockerComposeYaml } syntax="yaml"/>
              <p className={ styles.stepLabel }>2. Start the container:</p>
              <CodeBlock prefix={ linuxCommandPrefix } command={ dockerComposeCommand } syntax="bash"/>
              <div className={ styles.quickInstallLinks }>
                <Link to="/docs/installing/docker_compose" className={ styles.quickInstallLink }>
                  Full Docker Guide →
                </Link>
              </div>
            </div>
          </TabItem>

          <TabItem value="docker" label="Docker">
            <div className={ styles.tabContent }>
              <CodeBlock prefix={ linuxCommandPrefix } command={ dockerCommand } syntax="bash"/>
              <div className={ styles.quickInstallLinks }>
                <Link to="/docs/installing/docker_compose" className={ styles.quickInstallLink }>
                  Full Docker Guide →
                </Link>
              </div>
            </div>
          </TabItem>

          <TabItem value="monsterpi" label="Raspberry Pi (3/4)">
            <div className={ styles.tabContent }>
              <div className={ styles.monsterpiContent }>
                <p className={ styles.monsterpiDescription }>
                  MonsterPi is a pre-built Raspberry Pi image with FDM Monster already configured and ready to use.
                  Perfect for Raspberry Pi 3B+, Pi 4, and compatible devices.
                </p>
                <Link to="/docs/installing/monsterpi" className={ styles.monsterpiButton }>
                  View Full MonsterPi Installation Guide →
                </Link>
              </div>
            </div>
          </TabItem>
        </Tabs>
      </div>
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={ siteConfig.title }
      description={ siteConfig.tagline }
    >
      <HomepageHeader/>
      <main>
        <QuickInstall/>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
