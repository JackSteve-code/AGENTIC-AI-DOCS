import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'JACK.SYSTEMS',
  tagline: 'Software and ML Engineer specializing in AI/ML infrastructure',
  favicon: 'img/favicon.ico',

  url: 'https://JackSteve-code.github.io',
  baseUrl: '/AGENTIC-AI-DOCS/', 
  organizationName: 'JackSteve-code', 
  projectName: 'AGENTIC-AI-DOCS',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // This makes your documentation the root (homepage)
          routeBasePath: '/', 
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
        },
        // Explicitly disabling blog and default pages to keep focus on docs
        blog: false, 
        pages: false, 
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      mermaid: {
        theme: { light: 'neutral', dark: 'forest' },
      },
      navbar: {
        title: 'JACK.SYSTEMS',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
          // Hides the image but keeps the title "JACK.SYSTEMS" clickable
          width: 0,
          height: 0,
          style: { display: 'none' },
        },
        items: [
          {
            href: 'https://github.com/JackSteve-code/AGENTIC-AI-D0CS',
            label: 'Source Code',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [],
        copyright: `© ${new Date().getFullYear()} Jack Steve | AI/ML Infrastructure Expert`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;