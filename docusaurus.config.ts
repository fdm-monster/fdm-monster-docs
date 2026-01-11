import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type { Options as PresetOptions } from "@docusaurus/preset-classic";
import type { Options as DocsOptions } from "@docusaurus/plugin-content-docs";
import type { Options as BlogOptions } from "@docusaurus/plugin-content-blog";
import type { Options as ClientRedirectsOptions } from "@docusaurus/plugin-client-redirects";

const config: Config = {
  title: "FDM Monster",
  tagline:
    "Are you ready to scale up your 3D Print farm?",
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

  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "throw",
      onBrokenMarkdownImages: "throw"
    }
  },

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  headTags: [
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: 'https://docs.fdm-monster.net/img/server-running.png',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:width',
        content: '1200',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image:height',
        content: '630',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:image',
        content: 'https://docs.fdm-monster.net/img/server-running.png',
      },
    },
  ],

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs",
          breadcrumbs: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({ versionDocsDirPath, docPath }) =>
            `https://github.com/fdm-monster/fdm-monster-docs/edit/main/${versionDocsDirPath}/${docPath}`,
          sidebarPath: "./sidebars.ts",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        } satisfies DocsOptions,
        blog: {
          path: "blog",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          showReadingTime: true,
          postsPerPage: 5,
          feedOptions: {
            type: "all",
            description:
              "Keep up to date with FDM Monster and articles by following our feed!",
            copyright: `Copyright © ${new Date().getFullYear()} David Zwart.`,
            xslt: true,
          },
          editUrl: ({ blogDirPath, blogPath }) =>
            `https://github.com/facebook/docusaurus/edit/main/website/${blogDirPath}/${blogPath}`,
          blogTitle: "FDM Monster blog",
          blogDescription: "Read blog posts about FDM Monster from the team",
          blogSidebarCount: "ALL",
          blogSidebarTitle: "All our posts",
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        } satisfies BlogOptions,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies PresetOptions,
    ],
  ],

  plugins: [
    [
      'client-redirects',
      {
        fromExtensions: ['html'],
        createRedirects(routePath) {
          // Redirect to /docs from /docs/introduction (now docs root doc)
          if (routePath === '/docs/developer_setup' || routePath === '/docs/developer_setup/') {
            return [`${routePath}/developer_setup/introduction`];
          }
          return [];
        },
        redirects: [
          {
            from: ['/docs/ourteam'],
            to: '/docs/community/ourteam',
          },
        ],
      } satisfies ClientRedirectsOptions,
    ],
  ],

  themeConfig: {
    algolia: {
      // The application ID provided by Algolia
      appId: "BZ7UWA7P64",
      // Public API key: it is safe to commit it
      apiKey: "58008360f3754a5ce748b4c13b855a64",
      // Index to be searched on Algolia
      indexName: "fdm-monster",
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      externalUrlRegex: "docs.fdm-monster\\.net|fdm-monster\\.net",
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: "/docs/", // or as RegExp: /\/docs\//
        to: "/",
      },
      // Optional: Algolia search parameters (might require regenerating index at
      // https://crawler.algolia.com/admin/crawlers/?sort=status&order=ASC&limit=20&appId=BZ7UWA7P64
      // searchParameters: {
      // },
      // // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: "search",
      //... other Algolia params
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    image: "img/server-running.png",
    navbar: {
      title: "FDM Monster",
      logo: {
        alt: "FDM Monster Logo",
        src: "img/fdm-monster-logo.svg",
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "introduction",
          label: "Docs",
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'community',
          label: "Community",
        },
        {
          to: "/blog",
          label: "Blog",
          position: "left"
        },
        {
          type: 'docSidebar',
          position: 'left',
          sidebarId: 'development',
          label: 'Development',
        },
        {
          href: "https://github.com/fdm-monster/fdm-monster-docs",
          className: "header-github-link",
          "aria-label": "GitHub repository",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Installation",
              to: "/docs/installing",
            },
            {
              label: "Getting Started",
              to: "/docs/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Sponsor us",
              href: "/docs/community/sponsor-us",
            },
            {
              label: "Discord",
              href: "https://discord.gg/mwA8uP8CMc",
            },
            {
              label: "GitHub",
              href: "https://github.com/fdm-monster/fdm-monster",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Site",
              href: "https://fdm-monster.net/",
            },
            {
              label: "Demo (latest release)",
              href: "https://demo.fdm-monster.net/",
            },
            {
              label: "Test (bleeding edge release)",
              href: "https://test.demo.fdm-monster.net/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} David Zwart. Built with <a href="https://github.com/facebook/docusaurus">Docusaurus</a>.`,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "powershell"],
    },
  },
};

export default config;
