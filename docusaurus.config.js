// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apache CloudStack',
  tagline: 'Open Source Cloud Computing™',
  url: 'https://cloudstack.apache.org',
  baseUrl: '/',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',

  plugins: [
    ['docusaurus-plugin-sass', {}],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: "/website-guide",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          editUrl: 'https://github.com/apache/cloudstack-www/tree/main/',
        },
        blog: {
          blogTitle: 'Blog',
          blogDescription: 'Apache CloudStack Blog',
          showReadingTime: false,
          blogSidebarTitle: 'Recent Posts',
          blogSidebarCount: 10,
          editUrl: 'https://github.com/apache/cloudstack-www/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'apache-cloudstack',
          src: 'img/navlogo.png',
          href: 'https://cloudstack.apache.org/'
        },
        items: [
          {
            label: 'Home',
            href: 'https://cloudstack.apache.org/'
          },
          {
            label: 'Blog',
            href: '/blog'
          },
          {
            href: 'https://github.com/apache/cloudstack',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
          {type: 'search', position: 'right'},
          {
            type: 'dropdown',
            label: 'ASF',
            position: 'right',
            items: [
              {label: 'Foundation', to: 'https://www.apache.org/'},
              {label: 'License', to: 'https://www.apache.org/licenses/'},
              {label: 'Events', to: 'https://www.apache.org/events/current-event'},
              {label: 'Security', to: 'https://www.apache.org/security/'},
              {label: 'Sponsorship', to: 'https://www.apache.org/foundation/sponsorship.html'},
              {label: 'Privacy', to: 'https://www.apache.org/foundation/policies/privacy.html'},
              {label: 'Thanks', to: 'https://www.apache.org/foundation/thanks.html'}
            ],
          },
        ],
      },
      footer: {
        style: 'light',
        logo: {
            alt: 'Apache CloudStack logo',
            src: 'img/banner.svg',
            href: 'https://cloudstack.apache.org/'
        },
        copyright: `
          <div style="opacity: 0.5">
          <a href="mailto:dev-subscribe@cloudstack.apache.org" target="_blank">
            <img src="/img/social/mail.svg" title="Join Dev Mailing List" height="32px" />
          </a>
          <a href="https://join.slack.com/t/apachecloudstack/shared_invite/zt-1u8qwbivp-u16HRI~LWioLmF1G2D3Iyg" target="_blank">
            <img src="/img/social/slack.svg" title="Join Slack" height="32px" />
          </a>
          <a href="https://github.com/apache/cloudstack" target="_blank">
            <img src="/img/social/github.svg" title="Github" height="32px" />
          </a>
          <a href="https://twitter.com/CloudStack" target="_blank">
            <img src="/img/social/twitter.svg" title="Twitter" height="32px" />
          </a>
          <a href="https://www.youtube.com/@ApacheCloudStack" target="_blank">
            <img src="/img/social/youtube.svg" title="YouTube" height="32px" />
          </a>
          <a href="https://www.linkedin.com/company/apachecloudstack/posts/" target="_blank">
            <img src="/img/social/linkedin.svg" title="LinkedIn" height="32px" />
          </a>
          </div>
          <div style="text-align: left;">
          <div style="border-top: 1px solid #ccc;min-height: 60px;line-height: 20px;text-align: center;font-family: Avenir-Medium,serif;font-size: 14px;color: #999;display: flex;align-items: center;">
          <span>
          Copyright © ${new Date().getFullYear()} The Apache Software Foundation, Licensed under the Apache License, Version 2.0.
          "Apache", "CloudStack", "Apache CloudStack", the Apache CloudStack logo, the Apache CloudStack Cloud Monkey logo and the Apache feather logos are registered trademarks or trademarks of The Apache Software Foundation.
          <br/><a href="/trademark-guidelines.html">Apache CloudStack Trademark Usage</a> - <a href="/bylaws.html">Apache CloudStack Community ByLaws</a> - <a href="https://github.com/apache/cloudstack-www">Website Source Code</a>
          </span></div></div>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['properties'],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
    }),

    themes: [
      [
        require.resolve("@easyops-cn/docusaurus-search-local"),
        {
          hashed: true,
          indexDocs: false,
          indexPages: true,
          language: ["en"],
        }
      ],
    ]
};

module.exports = config;
