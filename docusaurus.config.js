// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "MoonDecial Reborn",
  tagline: "Nền Tảng Học trực tuyến",
  favicon: "img/logo.ico",

  // Set the production url of your site here
  url: "https://base-moondecial.web.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "vi",
    locales: ["vi", "en"],
  },

  // or, if you want to specify options:

  // ...

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "MoonDecial RB",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.png",
        },

        items: [
          {
            position: "left",
            label: "Learning",
            items: [
              {
                href: "https://github.com/facebook/docusaurus",
                label: "Lý Thuyết",
              },
              {
                type: "docSidebar",
                sidebarId: "tutorialSidebar",
                label: "Lập trình",
              },
              { to: "/quizz", label: "Quizz" },
              { to: "/video", label: "video" },
            ],
          },
          {
            position: "left",
            label: "Tool",
            items: [
              { to: "/docs/tool", label: "All Tool Here" },
              {
                href: "https://github.com/facebook/docusaurus",
                label: "Mgpt",
              },
            ],
          },
          {
            position: "left",
            label: "Blog",
            items: [{ to: "/blog", label: "Blog.dev" }],
          },
          {
            position: "left",
            label: "Other",
            items: [
              {
                href: "https://github.com/facebook/docusaurus",
                label: "Admin",
              },
              {
                href: "https://github.com/facebook/docusaurus",
                label: "Suport Me pls 🥰",
              },
              { to: "/blog/sitemap", label: "SiteMap" },
            ],
          },

          {
            href: "https://github.com/facebook/docusaurus",
            label: "Discord",
            position: "right",
          },
          {
            position: "right",
            label: "Account",
            items: [
              { to: "/docs/tool", label: "Đổi Mật Khẩu" },
              { to: "/docs/tool", label: "Bảo mật" },
              { to: "/docs/tool", label: "Đăng Xuất" },
            ],
          },
          {
            type: "localeDropdown",
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
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "MoonDecial OLDver",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Facebook",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Kchat",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "Blogv2",
                href: "https://github.com/facebook/docusaurus",
              },
              {
                label: "Discord",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} MoonDecial, By Necakco`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      lythuyet: [
        "cli",
        "docusaurus-core",
        {
          type: "autogenerated",
          dirName: "lythuyet",
        },
      ],
    }),
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};

module.exports = config;
