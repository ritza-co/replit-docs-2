// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const editUrlFn = ({docPath}) => {
  return "https://docs.replit.com/__repl#" + docPath;
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Replit Docs',
  tagline: 'Learn how to use Replit',
  url: '',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'replit',
  projectName: 'replit-docs-2',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/misc/General-FAQ',
              to: '/getting-started/faq'
          },
          { from: '/repls/intro',
              to: '/getting-started/intro-replit'
          },
          { from: '/repls/dashboard',
              to: '/getting-started/managing-repls'
          },
          { from: '/repls/files',
              to: '/getting-started/creating-files'
          },
          { from: '/misc/free-features',
              to: '/getting-started/using-replit-free'
          },
          { from: '/repls/repl-auth',
              to: '/hosting/authenticating-users-repl-auth'
          },
          { from: '/repls/vnc',
              to: '/hosting/streaming-native-graphics-vnc'
          },
          { from: '/repls/apps-and-publishing',
              to: '/hosting/browsing-publishing-repls'
          },
          { from: '/repls/strike-system-apps',
              to: '/hosting/strike-system-faq'
          },
          { from: '/misc/database',
              to: '/hosting/database-faq'
          },
          { from: '/repls/web-hosting',
              to: '/hosting/hosting-web-pages'
          },
          { from: '/repls/http-servers',
              to: '/hosting/deploying-http-servers'
          },
          { from: '/repls/embed',
              to: '/hosting/embedding-repls'
          },
          { from: '/repls/always-on',
              to: '/hosting/enabling-always-on'
          },
          { from: '/misc/security',
              to: '/legal-and-security-info/security'
          },
          { from: '/misc/licensing',
              to: '/legal-and-security-info/licensing-info'
          },
          { from: '/misc/copyright',
              to: '/legal-and-security-info/copyright-claims-takedown-requests'
          },
          { from: '/repls/audio',
              to: '/misc/playing-audio-replit'
          },
          { from: '/misc/basic',
              to: '/misc/classic-basic-replit'
          },
          { from: '/misc/clui',
              to: '/misc/clui-graphical-cli'
          },
          { from: '/repls/nix',
              to: '/programming-ide/getting-started-nix'
          },
          { from: '/repls/history',
              to: '/programming-ide/using-repl-history'
          },
          { from: '/repls/packages',
              to: '/programming-ide/installing-packages'
          },
          { from: '/repls/secrets-environment-variables',
              to: '/programming-ide/storing-sensitive-information-environment-variables'
          },
          { from: '/repls/editor',
              to: '/programming-ide/working-shortcuts'
          },
          { from: '/repls/repl-from-repo',
              to: '/programming-ide/running-github-repositories-replit'
          },
          { from: '/misc/repl-environment-variables',
              to: '/programming-ide/getting-repl-metadata'
          },
          { from: '/repls/dot-replit',
              to: '/programming-ide/configuring-run-button'
          },
          { from: '/misc/change-username',
              to: '/settings/changing-username'
          },
          { from: '/misc/favorite-languages',
              to: '/settings/selecting-favorite-languages'
          },
          { from: '/curriculum/Intro',
              to: '/teaching-curriculum/intro-teaching-curriculum'
          },
          { from: '/curriculum/introJava',
              to: '/teaching-curriculum/intro-java'
          },
          { from: '/curriculum/introPython',
              to: '/teaching-curriculum/intro-python'
          },
          { from: '/curriculum/intermediatePython',
              to: '/teaching-curriculum/intermediate-python'
          },
          { from: '/curriculum/introHTMLCSS',
              to: '/teaching-curriculum/intro-html-css'
          },
          { from: '/curriculum/introSQL',
              to: '/teaching-curriculum/intro-sql'
          },
          { from: '/curriculum/abstractData',
              to: '/teaching-curriculum/abstract-data-types'
          },
          { from: '/curriculum/introCpp',
              to: '/teaching-curriculum/intro-cpp'
          },
          { from: '/repls/UnitTesting',
              to: '/teams-edu/unit-testing'
          },
          { from: '/repls/multiplayer-anon',
              to: '/teams-edu/using-multiplayer-anonymous-users'
          },
          { from: '/Teams/Invitations',
              to: '/teams-edu/inviting-teachers-students'
          },
          { from: '/Teams/Nicknames',
              to: '/teams-edu/assigning-nicknames'
          },
          { from: '/Teams/Roles',
              to: '/teams-edu/assigning-user-roles'
          },
          { from: '/Teams/Projects',
              to: '/teams-edu/creating-projects-assignments'
          },
          { from: '/Teams/projectCopying',
              to: '/teams-edu/copying-projects-other-teams'
          },
          { from: '/Teams/Notes',
              to: '/teams-edu/keeping-notes-repls'
          },
          { from: '/Teams/HomeworkAssignments',
              to: '/teams-edu/example-homework-assignments'
          },
          { from: '/Teams/Annotations',
              to: '/teams-edu/reviewing-submissions'
          },
          { from: '/Teams/Testing',
              to: '/teams-edu/testing-assessments-autograding'
          },
          { from: '/Teams/InputOutput',
              to: '/teams-edu/input-output-testing'
          },
          { from: '/Teams/EmbedProjects',
              to: '/teams-edu/embedding-projects'
          },
          { from: '/Teams/privacyFAQs',
              to: '/teams-edu/privacy-faq'
          },
          { from: '/Teams/IT_Toolkit',
              to: '/teams-edu/it-administrators-toolkit'
          },
          { from: '/Teams/US_Student_DPA',
              to: '/teams-edu/us-student-dpa'
          },
          { from: '/pro/intro',
              to: '/teams-pro/intro-teams-pro'
          },
          { from: '/pro/teamManagement',
              to: '/teams-pro/managing-teams'
          },
          { from: '/pro/replManagement',
              to: '/teams-pro/managing-public-private-repls'
          },
          { from: '/teams-pro/interviewing-candidates-guest-mode',
              to: '/teams-pro/interviewing-candidates'
          },
          { from: '/pro/guests',
              to: '/teams-pro/interviewing-candidates'
          },
          { from: '/repls/python-plots',
              to: '/tutorials/creating-interactive-python-plots-matplotlib'
          },
          { from: '/tutorials/PinboardProjectPart1',
              to: '/tutorials/pinboard-project-part-1'
          },
          { from: '/tutorials/PinboardProjectPart2',
              to: '/tutorials/pinboard-project-part-2'
          },
          { from: '/tutorials/spotify-tutorials',
              to: '/tutorials/spotify-api-tutorials'
          },
          { from: '/tutorials/kaboom',
              to: '/tutorials/kaboom-editor'
          },
          { from: '/programming-ide/configuring-run-button',
              to: '/programming-ide/configuring-repl'
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/teams-edu')) {
            return [
              existingPath.replace('/teams-edu', '/teams'),
            ];
          }
          return undefined;
        },
      }
    ]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: editUrlFn,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    { 
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        hideOnScroll: true,
        items: [
          {label: 'Features',
           href: 'https://replit.com/site/ide',
           target: '_blank'},
          {label: 'Careers',
           href: 'https://replit.com/site/careers',
           target: '_blank'},
          {label: 'Blog',
           href: 'https://blog.replit.com',
           target: '_blank'},
          {label: 'Jam',
           href: 'https://replit.com/site/kajam',
           target: '_blank'},
          {type: 'search',
          position: 'right'},
          {type: 'html',
           position: 'right',
           value: `<a href="https://replit.com/signup" target="_blank" class="sign-up-button">Sign up</a>`}
        ],
        logo: {
          alt: 'Replit Logo',
          src: 'image/logo.svg',
          srcDark: 'image/logoDark.svg',
          href: 'https://replit.com',
          target: '_blank'
        },
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '33H1G1RMZJ',
        apiKey: '17617634403a792c4cf6f749c49ae0aa',
        indexName: 'replit-docs',
        contextualSearch: false
      },
    },
};

module.exports = config;
