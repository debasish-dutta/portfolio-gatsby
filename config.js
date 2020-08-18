module.exports = {
  pathPrefix: '',
  siteUrl: 'https://debasish0dutta.github.io',
  siteTitle: 'Debasish Dutta',
  siteDescription: 'Debasish Dutta portfolio',
  author: 'Debasish Dutta',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  pages: {
    home: '/',
    contact: 'contact',
    resume: 'resume',
    projects: 'projects',
  },
  social: {
    github: 'https://github.com/debasish0dutta',
    facebook: 'https://www.facebook.com/ddmasterdon',
    twitter: 'https://twitter.com/ddmasterdon',
    linkedin: 'https://www.linkedin.com/ddmasterdon/',
    kaggle: 'https://www.kaggle.com/ddmasterdon',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/563c531a-a8dd-4693-a7bd-9dd4ae472f24',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  tags: {
    angular: {
      description: 'Angular is an open source web application platform.',
    },
    electron: {
      description: 'Electron is a framework for building cross-platform desktop applications with web technology.',
    },
    javascript: {
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
    },
    laravel: {
      description: 'Laravel is a PHP framework for building web applications following the MVC pattern.',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
    },
    rxjs: {
      name: 'RxJS',
      description: 'RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code.',
    },
    sass: {
      description: 'Sass is a stable extension to classic CSS.',
    },
    typescript: {
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
    },
    react: {
      description: 'React is an open source JavaScript library used for designing user interfaces.',
    },
    vuejs: {
      name: 'Vue.js',
      description: 'Vue.js is a JavaScript framework for building interactive web applications.',
    },
  },
};
