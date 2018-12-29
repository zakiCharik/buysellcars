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
// After the following setup all XHR requests will have additional 'Autorization' header
app.request.setup({
  headers: {
    // "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/html"
  }
});

// Init/Create left panel view
var mainView = app.views.create('.view-left', {
  url: '/'
});

// Init/Create main view
var mainView = app.views.create('.view-main', {
  url: '/'
});


// app.request.get('http://localhost:3005/ads', {   }, function (data) {
//       // Show Preloader
//       app.preloader.show();
//   console.log('data',JSON.parse(data));

//   console.log('Load was performed');
//           // Hide Preloader
//           app.preloader.hide();
// });
// ----------------------------------------------------------------
// ----------------------------------------------------------------
var load = function (){
      // // Show Preloader
      // app.preloader.show();
      // Simulate Ajax Request

    //   app.request({
    //     url: 'http://localhost:3005/ads',
    //     method: "GET",
    //     // dataType: 'json',
    //     contentType: 'text/html',
    //     crossDomain: false,
    //     headers: {
    //       // "Access-Control-Allow-Origin": '*',
    //       "Content-Type": 'text/html'
    //     },
    //     beforeSend: function(xhr) {
    //       console.log(xhr);
    //     },
    //     success: function(res) {
    //       console.log(res);
    //     },
    //     error: function(xhr) {
    //       console.log('error');
    //       console.log(xhr);
    //     }
    // });
      // // Hide Preloader
      // app.preloader.hide();

};


load();

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
$$('.video1').on('ready', function (e) {
  window.InAppYouTube.openVideo('iRusbYIyRNI', {fullscreen: true});
});

//Capture audio START
//Capture audio success
function captureSuccess(mediaFiles ) { 
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        navigator.notification.alert('Enregistrement audio :'+path);
        var divAudio = '<div class="message message-sent message-last message-tail">'+
                        '<div class="message-content">'+
                          '<div class="message-bubble">'+
                            '<div class="message-text" > Audio recrded : '+
                            path+
                            '<a onclick="play(\'errorSound\')"><i class="f7-icons">play_round</i><audio id="errorSound" src="'+path+'" type="audio/mp3" autoplay="autoplay"></audio>'+
                            '</div></div></div></div>';

        $$('.messages').append(divAudio);                    
    }  
};
var play  = function(id){
  var audio = document.getElementById(id);
  audio.play();
}
// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};
// limit capture operation to 3 media files, no longer than 10 seconds each
var options = { limit: 3, duration: 10 };

//Capture audio
var captureAudio = function(){ 
    navigator.device.capture.captureAudio(captureSuccess, captureError, options);
};
//Capture audio END

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
