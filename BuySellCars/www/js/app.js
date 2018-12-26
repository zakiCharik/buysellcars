// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'com.buyintube.rim', // App bundle ID
  name: 'BuySellCars', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    }
  },
  // App routes
  routes: routes,
  // Enable panel left visibility breakpoint
  panel: {
    leftBreakpoint: 960,
  },
});

// Init/Create left panel view
var mainView = app.views.create('.view-left', {
  url: '/'
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});


// ----------------------------------------------------------------
// ----------------------------------------------------------------
var load = function (){
      // Simulate Ajax Request
      app.request({
        url: 'http://localhost:3005/ads',
        method: "GET",
        dataType: 'json',
        headers: {
          "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"          
        },
        crossDomain: true,
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
            console.log(xhr);
        },
        success: function(res) {
            console.log(res);
        },
        error: function(xhr) {
            console.log('error');
            console.log(xhr);
        }
    });

};
load();
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
$$('.video1').on('ready', function (e) {
  window.InAppYouTube.openVideo('iRusbYIyRNI', {fullscreen: true});
});

$$('.clicked-ad').on('click', function (e) {
  var panel = $$(this).parent().next().next();
  if ($$(panel).css('display') == 'none') {
    $$(panel).show();
  }else{
    $$(panel).hide();
  }

});

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});
