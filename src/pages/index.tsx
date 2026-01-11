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

function handleSectionTitleClick(sectionId: string, scrollPosition: ScrollLogicalPosition = 'start') {
  return () => {
    globalThis.history.pushState(null, '', `#${sectionId}`);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: scrollPosition });
    }
  };
}

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
            The Open Source tool you need to manage and scale your 3D Print farm,
            monitoring all your printers in one central place.
          </p>
          <div className={ styles.heroButtons }>
            <Link
              className={ clsx("button", styles.heroCta) }
              to="#quick-install"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('quick-install')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Quick Install{ " " }
            </Link>
            <Link
              className={ clsx("button", styles.heroCtaOutlined) }
              to="/docs"
            >
              Documentation{ " " }
              <span className={ styles.ctaArrow }>→</span>
            </Link>
          </div>
        </div>
        <div className={ styles.heroVisual }>
          <Link to="/blog/fdm-monster-release-1-9.0" className={ styles.visualCard }>
            <div className={ styles.visualCardBadge }>Latest Release</div>
            <h3 className={ styles.visualCardTitle }>1.9.0</h3>
            <p className={ styles.visualCardDesc }>Printer thumbnail improvements, fixed upload progress bar, path-based routing support, and HTTP client builder pattern</p>
            <span className={ styles.visualCardLink }>Read more →</span>
          </Link>
          <a href="#why-fdm-monster" className={ styles.visualCard } onClick={(e) => {
            e.preventDefault();
            window.history.pushState(null, '', '#why-fdm-monster');
            document.getElementById('why-fdm-monster')?.scrollIntoView({ behavior: 'smooth' });
          }}>
            <div className={ styles.visualCardBadge }>Features</div>
            <h3 className={ styles.visualCardTitle }>Why FDM Monster?</h3>
            <p className={ styles.visualCardDesc }>Discover the powerful features built for managing your 3D print farm</p>
            <span className={ styles.visualCardLink }>Learn more →</span>
          </a>
          <a href="https://github.com/sponsors/fdm-monster" target="_blank" rel="noopener noreferrer" className={ styles.visualCard }>
            <div className={ styles.visualCardBadge }>Support Us</div>
            <h3 className={ styles.visualCardTitle }>Sponsor</h3>
            <p className={ styles.visualCardDesc }>Help us keep the project going</p>
            <span className={ styles.visualCardLink }>Sponsor on GitHub →</span>
          </a>
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
          return <span key={ i } className={ styles.syntaxCommand }>{ part }</span>;
        } else if (part.startsWith('-')) {
          return <span key={ i } className={ styles.syntaxFlag }>{ part }</span>;
        } else if (part.startsWith('http://') || part.startsWith('https://')) {
          return <span key={ i } className={ styles.syntaxUrl }>{ part }</span>;
        } else if (part === '|' || part === '\\') {
          return <span key={ i } className={ styles.syntaxOperator }>{ part }</span>;
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
              <span className={ styles.syntaxKey }>{ key }</span>
              <span className={ styles.syntaxOperator }>:</span>
              <span className={ styles.syntaxValue }>{ rest }</span>
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
  const [activeTab, setActiveTab] = React.useState('linux');
  const tabsWrapperRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash.startsWith('#quick-install-')) {
      const tabValue = hash.replace('#quick-install-', '');
      setActiveTab(tabValue);
    }
  }, []);

  React.useEffect(() => {
    // Map of tab labels to values
    const tabMapping: Record<string, string> = {
      'Linux': 'linux',
      'Docker Compose': 'docker-compose',
      'Docker': 'docker',
      'Raspberry Pi (3/4)': 'monsterpi'
    };

    const handleTabClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tabButton = target.closest('[role="tab"]') as HTMLElement;
      if (tabButton) {
        const label = tabButton.textContent?.trim() || '';
        const tabValue = tabMapping[label];
        if (tabValue) {
          window.history.pushState(null, '', `#quick-install-${tabValue}`);
        }
      }
    };

    const wrapper = tabsWrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('click', handleTabClick as EventListener);
      return () => {
        wrapper.removeEventListener('click', handleTabClick as EventListener);
      };
    }
  }, []);

  const linuxCommandPrefix = "$ ";
  const linuxCommand = "curl -fsSL https://raw.githubusercontent.com/fdm-monster/fdm-monster-scripts/main/install.sh | bash";
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
    <section id="quick-install" className={ styles.quickInstall }>
      <div className={ styles.quickInstallContainer }>
        <h2 className={ styles.quickInstallTitle } onClick={ handleSectionTitleClick('quick-install') } style={{ cursor: 'pointer' }}>
          Quick Install
        </h2>
        <p className={ styles.quickInstallSubtitle }>
          Choose your preferred installation method and get started right away
        </p>

        <div className={ styles.tabsWrapper } ref={tabsWrapperRef}>
          <Tabs defaultValue={activeTab} key={activeTab}>
            <TabItem value="linux" label="Linux">
            <div className={ styles.tabContent }>
              <p className={ styles.tabDescription }>
                Run this one-line command to automatically install FDM Monster on <strong>Ubuntu / Debian / Raspberry Pi OS</strong>:
              </p>
              <CodeBlock prefix={ linuxCommandPrefix } command={ linuxCommand } syntax="bash"/>
              <div className={ styles.scriptLink }>
                <a href="https://raw.githubusercontent.com/fdm-monster/fdm-monster-scripts/main/install.sh" target="_blank" rel="noopener noreferrer" className={ styles.viewScriptLink }>
                  View Installation Script{" "}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle' }}>
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
              <div className={ styles.quickInstallLinks }>
                <Link to="/docs/installing/linux" className={ styles.quickInstallLink }>
                  Full Installation Guide →
                </Link>
              </div>
            </div>
          </TabItem>

          <TabItem value="docker-compose" label="Docker Compose">
            <div className={ styles.tabContent }>
              <p className={ styles.stepLabel }>1. Create a docker-compose.yml file:</p>
              <CodeBlock command={ dockerComposeYaml } syntax="yaml"/>
              <p className={ styles.stepLabel }>2. Start the container:</p>
              <CodeBlock prefix={ linuxCommandPrefix } command={ dockerComposeCommand } syntax="bash"/>
              <div className={ styles.quickInstallLinks }>
                <Link to="/docs/installing/docker_compose" className={ styles.quickInstallLink }>
                  View Docker Compose Guide →
                </Link>
              </div>
            </div>
          </TabItem>

          <TabItem value="docker" label="Docker">
            <div className={ styles.tabContent }>
              <p className={ styles.tabDescription }>
                Run FDM Monster in a Docker container with this single command:
              </p>
              <CodeBlock prefix={ linuxCommandPrefix } command={ dockerCommand } syntax="bash"/>
              <div className={ styles.quickInstallLinks }>
                <Link to="/docs/installing/docker_compose" className={ styles.quickInstallLink }>
                  View Docker Guide →
                </Link>
              </div>
            </div>
          </TabItem>

          <TabItem value="monsterpi" label="Raspberry Pi (3/4)">
            <div className={ styles.tabContent }>
              <div className={ styles.monsterpiHeader }>
                <img src="/img/raspberry-pi-svgrepo-com.svg" alt="Raspberry Pi" className={ styles.monsterpiLogo } />
                <div className={ styles.monsterpiText }>
                  <h3 className={ styles.monsterpiTitle }>MonsterPi</h3>
                  <p className={ styles.monsterpiDescription }>
                    A pre-built Raspberry Pi image with FDM Monster already configured and ready to use.
                    Perfect for Raspberry Pi 3B+, Pi 4, and compatible devices.
                  </p>
                </div>
              </div>
              <div className={ styles.quickInstallLinks }>
                <Link to="/docs/installing/monsterpi" className={ styles.quickInstallLink }>
                  View MonsterPi Installation Guide <strong>→</strong>
                </Link>
              </div>
            </div>
          </TabItem>
          </Tabs>
        </div>
      </div>
    </section>
  );
}

function WhyFDMMonster() {
  const features = [
    {
      title: "Real-time Monitoring",
      description: "Monitor all your 3D printers in one central dashboard with live status updates and webcam feeds.",
      // image: "/img/features/monitoring.gif"
    },
    {
      title: "Print Queue Management",
      description: "Organize and manage your print queue across multiple printers with drag-and-drop simplicity.",
      // image: "/img/features/queue.gif"
    },
    {
      title: "Multi-Printer Control",
      description: "Control dozens of printers simultaneously with group operations and batch management tools.",
      // image: "/img/features/control.gif"
    },
  ];

  return (
    <section id="why-fdm-monster" className={ styles.whySection }>
      <div className={ styles.whyContainer }>
        <h2 className={ styles.whyTitle } onClick={ handleSectionTitleClick('why-fdm-monster') } style={{ cursor: 'pointer' }}>
          Why FDM Monster?
        </h2>
        <p className={ styles.whySubtitle }>
          Built for makers who need to manage multiple 3D printers efficiently
        </p>

        <div className={ styles.featuresShowcase }>
          {features.map((feature, idx) => (
            <div key={idx} className={ styles.showcaseItem }>
              <div className={ styles.showcaseMedia }>
                {/* Placeholder for GIF - will be replaced with actual image */}
                <div className={ styles.mediaPlaceholder }>
                  <span>GIF Coming Soon</span>
                </div>
              </div>
              <div className={ styles.showcaseContent }>
                <h3 className={ styles.showcaseTitle }>{feature.title}</h3>
                <p className={ styles.showcaseDescription }>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
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
        <div className={ styles.sectionSeparator }></div>
        <WhyFDMMonster/>
        <div className={ styles.sectionSeparator }></div>
        <HomepageFeatures/>
      </main>
    </Layout>
  );
}
