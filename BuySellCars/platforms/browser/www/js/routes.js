routes = [
  {
    path: '/',
    url: './index.html'  
  },
  {
    path: '/about/',
    url: './pages/about.html',
  },
  {
    path: '/login/',
    url: './pages/login.html',
  },
  {
    path: '/insertad/',
    url: './pages/insertad.html',
  },
  {
    path: '/boost/',
    url: './pages/boost.html',
  },
  {
    path: '/otherboost/',
    url: './pages/otherboost.html',
  },
  {
    path: '/insertad1/',
    url: './pages/insertad1.html',
  },
  {
    path: '/insertad2/',
    url: './pages/insertad2.html',
  },
  {
    path: '/insertad/',
    url: './pages/insertad.html',
  },
  {
    path: '/info/',
    url: './pages/info.html',
  },
  {
    path: '/apropos/',
    url: './pages/apropos.html',
  },
  {
    path: '/regles/',
    url: './pages/regles.html',
  },
  {
    path: '/ad/',
    url: './pages/ad.html',
  },
  {
    path: '/myannonce/',
    url: './pages/myannonce.html',
  },
  {
    path: '/mymessages1/',
    url: './pages/mymessages1.html',
  },
  {
    path: '/myaccount/',
    url: './pages/myaccount.html',
  },
  {
    path: '/mymessages/',
    url: './pages/mymessages.html',
  },
  {
    path: '/donneprive/',
    url: './pages/donneprive.html',
  },
  {
    path: '/conditionofuse/',
    url: './pages/conditionofuse.html',
  },
  {
    path: '/form/',
    url: './pages/form.html',
  },
  // Left View Pages
  {
    path: '/left-page-1/',
    url: './pages/left-page-1.html',
  },
  {
    path: '/left-page-2/',
    url: './pages/left-page-2.html',
  },
  // Page Loaders & Router
  {
    path: '/page-loader-template7/:user/:userId/:posts/:postId/',
    templateUrl: './pages/page-loader-template7.html',
  },
  {
    path: '/page-loader-component/:user/:userId/:posts/:postId/',
    componentUrl: './pages/page-loader-component.html',
  },
  {
    path: '/request-and-load/user/:userId/',
    async: function (routeTo, routeFrom, resolve, reject) {
      // Router instance
      var router = this;

      // App instance
      var app = router.app;

      // Show Preloader
      app.preloader.show();

      // User ID from request
      var userId = routeTo.params.userId;

      // Simulate Ajax Request
      setTimeout(function () {
        // We got user data from request
        var user = {
          firstName: 'Vladimir',
          lastName: 'Kharlampidi',
          about: 'Hello, i am creator of Framework7! Hope you like it!',
          links: [
            {
              title: 'Framework7 Website',
              url: 'http://framework7.io',
            },
            {
              title: 'Framework7 Forum',
              url: 'http://forum.framework7.io',
            },
          ]
        };
        // Hide Preloader
        app.preloader.hide();

        // Resolve route to load page
        resolve(
          {
            componentUrl: './pages/request-and-load.html',
          },
          {
            context: {
              user: user,
            }
          }
        );
      }, 1000);
    },
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
