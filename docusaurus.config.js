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
          routeBasePath: "/docs",
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarPath: require.resolve('./sidebars.js'),
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
          src: 'img/tagline.jpg',
        },
        items: [
          {
            label: 'About',
            position: 'right',
            items: [
              {
                label: 'About',
                href: '/about'
              },
              {
                label: 'History',
                href: '/history'
              },
              {
                label: 'Features',
                href: '/features'
              },
              {
                label: 'Who We Are',
                href: '/who'
              },
              {
                label: 'Community Bylaws',
                href: '/bylaws'
              },
              {
                label: 'Trademark Guidelines',
                href: '/trademark-guidelines'
              },
              {
                label: 'Security',
                href: '/security'
              }
            ]
          },
          //{type: 'doc', docId: 'getting-started', position: 'right', label: 'Docs'},
          //{type: 'doc', docId: 'community', position: 'right', label: 'Community', docsPluginId: 'community'},
          {
            label: 'Community',
            position: 'right',
            items: [
              {
                label: 'Get Involved',
                href: '/contribute'
              },
              {
                label: 'Developer Resources',
                href: '/developers'
              },
              {
                label: 'Join Mailing Lists',
                href: '/mailing-lists'
              },
              {
                label: 'Issues Tracker',
                href: 'https://github.com/apache/cloudstack/issues'
              },
              {
                label: 'Community Slack',
                href: 'https://join.slack.com/t/apachecloudstack/shared_invite/zt-1u8qwbivp-u16HRI~LWioLmF1G2D3Iyg',
              },
              {
                label: 'Events and Meetups',
                href: '/events'
              },
              {
                label: 'Collab Conference',
                href: 'https://www.cloudstackcollab.org/'
              },
            ]
          },
          {
            label: 'Use Cases',
            position: 'right',
            items: [
              {
                label: 'Cloud Builders',
                href: '/cloud-builders'
              },
              {
                label: 'Kubernetes',
                href: '/kubernetes'
              }
            ]
          },
          {
            label: 'Users',
            position: 'right',
            items: [
              {
                label: 'Known Users',
                href: '/users'
              },
              {
                label: 'Case Studies',
                href: 'https://cwiki.apache.org/confluence/display/CLOUDSTACK/Case+Studies'
              },
              {
                label: 'Take Survey',
                href: '/survey'
              }
            ]
          },
          {
            label: 'Documentation',
            position: 'right',
            items: [
              {
                label: 'CloudStack Documentation',
                href: 'https://docs.cloudstack.apache.org'
              },
              {
                label: 'Project Wiki',
                href: 'https://cwiki.apache.org/confluence/display/CLOUDSTACK/Home'
              },
              {
                label: 'CloudStack Books',
                href: 'https://cwiki.apache.org/confluence/display/CLOUDSTACK/CloudStack+Books'
              },
              {
                label: 'API Documentation',
                href: '/api/'
              }
            ]
          },
          {
            label: 'Download',
            position: 'right',
            items: [
              {
                label: 'CloudStack',
                href: '/download#latest-cloudstack-releases'
              },
              {
                label: 'CloudMonkey CLI',
                href: '/download#cloudmonkey-releases'
              },
              {
                label: 'CloudStack Go-SDK',
                href: '/download#cloudstack-go-sdk',
              },
              {
                label: 'CloudStack Terraform Provider',
                href: '/download#cloudstack-terraform-provider-release'
              },
              {
                label: 'CloudStack Kubernetes Provider',
                href: '/download#cloudstack-kubernetes-provider-release'
              },
              {
                label: 'CAPI Provider CloudStack (Community)',
                href: 'https://cluster-api-cloudstack.sigs.k8s.io/'
              },
              {
                label: 'CloudStack Ansible Collection (Community)',
                href: 'https://docs.ansible.com/ansible/latest/collections/ngine_io/cloudstack'
              },
              {
                label: 'Release Archive',
                href: '/archives'
              }
            ]
          },
          {
            label: 'Blog',
            position: 'right',
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
        copyright: `<div style="text-align: left;">
          <div style="border-top: 1px solid #ccc;min-height: 60px;line-height: 20px;text-align: center;font-family: Avenir-Medium,serif;font-size: 14px;color: #999;display: flex;align-items: center;">
          <span>
          Copyright © ${new Date().getFullYear()} The Apache Software Foundation, Licensed under the Apache License, Version 2.0.
          "Apache", "CloudStack", "Apache CloudStack", the Apache CloudStack logo, the Apache CloudStack Cloud Monkey logo and the Apache feather logos are registered trademarks or trademarks of The Apache Software Foundation.

          <br/><a href="/trademark-guidelines">Apache CloudStack Trademark Usage</a> - <a href="/bylaws">Apache CloudStack Community ByLaws</a> - <a href="https://github.com/apache/cloudstack-www">Website Source Code</a>
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
          indexDocs: true,
          indexPages: true,
          language: ["en"],
        }
      ],
    ]
};

module.exports = config;
