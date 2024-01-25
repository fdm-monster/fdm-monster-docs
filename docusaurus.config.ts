import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "FDM Monster Docs",
  tagline: "3D printer farm management platform for local or in-cloud usage using OctoPrint.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.fdm-monster.net",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "fdm-monster", // Usually your GitHub org/user name.
  projectName: "fdm-monster", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/fdm-monster/fdm-monster-docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
        // },
        theme: {
          customCss: "./src/css/custom.css"
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig:

    {
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "FDM Monster",
        logo: {
          alt: "FDM Monster Logo",
          src: "img/fdm-monster-logo.svg"
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Getting Started"
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/"
              }
            ]
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/mwA8uP8CMc"
              },
              {
                label: "GitHub",
                href: "https://github.com/fdm-monster/fdm-monster"
              }
            ]
          },
          {
            title: "More",
            items: [
              {
                label: "Site",
                href: "https://fdm-monster.net/"
              },
              {
                label: "Demo",
                href: "https://demo.fdm-monster.net/"
              }
            ]
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} David Zwart. Built with Docusaurus.`
      },
      prism: {
        colorMode: {
          // Let the system decide with 'respectPrefersColorScheme' below
          // defaultMode: 'dark',
          respectPrefersColorScheme: true,
        },
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula
      }
    }
};

export default config;
