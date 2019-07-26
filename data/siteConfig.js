module.exports = {
  siteTitle: 'Admin Dashboards',
  siteDescription: 'open-source',
  authorName: 'Sm0ke',
  twitterUsername: 'Sm0keDev',
  authorAvatar: 'avatar.jpeg', // file in content/images
  multilangPosts: false, // enable/disable flags in post lists
  authorDescription: `
  By <strong><a href="https://twitter.com/Sm0keDev">Sm0ke</a></strong> <('_')> #automation geek.  
  <br /> Projects: <strong>Admin-Dashboards.com</strong> (open-source), <a href="https://appseed.us">AppSeed</a>. 
  `,
  siteUrl: 'https://admin-dashboards.com/',
  disqusSiteUrl: '',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '', // Note: it must *not* have a trailing slash.
  siteCover: 'cover.jpg', // file in content/images
  googleAnalyticsId: '',
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/logo.png',
  postsPerPage: 5,
  disqusShortname: '',
  headerTitle: 'Admin Dashboards',
  headerLinksIcon: 'logo.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'About',
      url: '/how-it-works',
    },
    {
      label: 'Blog',
      url: '/tags/blog',
    }
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com/admin-dashboards/',
  },
  footerLinks: [
    {
      sectionName: 'Links',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/admin-dashboards/',
        },
      ],
    },
    {
      sectionName: 'Social',
      links: [
        {
          label: 'Twitter',
          url: 'https://twitter.com/Sm0keDev',
        }
      ],
    },
  ],
}
