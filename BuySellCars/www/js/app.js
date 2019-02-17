// Dom7
var $$ = Dom7;
// After the following setup all XHR requests will have additional 'Autorization' header
Framework7.request.setup({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "text/html"
  }
});

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'com.buyintube.rim', // App bundle ID
  name: 'BuySellCars', // App name
  theme: 'auto', // Automatic theme detection
  // App root data
  data: function () {
    //request the data her
    //request the data her
    var annonceArray = [];

    Framework7.request.get('http://31.220.55.232:3001/api/v1/', function (data) {

      var ads = JSON.parse(data).listCars;
      ads.forEach(function(ad){
        var video_id = ad.video.split('v=')[1];
        var ampersandPosition = video_id.indexOf('&');
        if(ampersandPosition != -1) {
          video_id = video_id.substring(0, ampersandPosition);
        }
        ad.video = video_id;
        annonceArray.push(ad);
      });     
    }); 
    return {
      ads:annonceArray,        
      user: {
        firstName: 'John',
        lastName: 'Doe',
      },
    };
  },
  // App root methods
  methods: {
    getAnnonce: function(){
      //request the data her
      var annonceArray = [];

      Framework7.request.get('http://31.220.55.232:3001/api/v1/', function (data) {

        var ads = JSON.parse(data).listCars;
        ads.forEach(function(ad){
          var video_id = ad.video.split('v=')[1];
          var ampersandPosition = video_id.indexOf('&');
          if(ampersandPosition != -1) {
            video_id = video_id.substring(0, ampersandPosition);
          }
          ad.video = video_id;
          annonceArray.push(ad);
        });     
      });
      return {
        annonces:annonceArray,        
      };     
    },
    helloWorld: function () {
      app.dialog.alert('Hello World!');
    }
  },
  on: {
    pageInit: function () {
      // After the following setup all XHR requests will have additional 'Autorization' header
      Framework7.request.setup({
        headers: {
          "Access-Control-Allow-Origin": "http://31.220.55.232:3001/",
          "Content-Type": "text/html"
        }
      });      
      var annonceArray = [];
      Framework7.request.get('http://31.220.55.232:3001/api/v1/', function (data) {

        if (document.querySelector('#videoWrapper') !== null && document.querySelector('#videoTemplate') !== null) {
          // for professional search page card details on right hand side
          var template = document.querySelector('#videoTemplate').innerHTML;
          var template_compiled = Template7(template).compile();
          var ads = JSON.parse(data).listCars;
          var annonceArray = [];
          ads.forEach(function(ad){
            var video_id = ad.video.split('v=')[1];
            var ampersandPosition = video_id.indexOf('&');
            if(ampersandPosition != -1) {
              video_id = video_id.substring(0, ampersandPosition);
            }
            ad.video = video_id;
            annonceArray.push(ad);
          });
          console.log('Data from server', annonceArray);
          var details_compiledRendered = template_compiled({annonce:annonceArray});
          document.querySelector('#videoWrapper').innerHTML = details_compiledRendered;


        }

      });
      return {
        annonce:annonceArray,
      };
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
    "Access-Control-Allow-Origin": "*",
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


// ----------------------------------------------------------------
// ----------------------------------------------------------------
var load = function (){


};


load();

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------
// $$('.video1').on('ready', function (e) {
//   window.InAppYouTube.openVideo('iRusbYIyRNI', {fullscreen: true});
// });

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

// $$('.clicked-ad').on('click', function (e) {
//   var panel = $$(this).parent().next().next();
//   if ($$(panel).css('display') == 'none') {
//     $$(panel).show();
//   }else{
//     $$(panel).hide();
//   }

// });

var display = function(target){

    var panel = $$('#'+target);
    if ($$(panel).css('display') == 'none') {
      $$(panel).show();
    }else{
      $$(panel).hide();
    }
};

// Login Screen Demo
$$('#my-login-screen .login-button').on('click', function () {
  var username = $$('#my-login-screen [name="username"]').val();
  var password = $$('#my-login-screen [name="password"]').val();

  // Close login screen
  app.loginScreen.close('#my-login-screen');

  // Alert username and password
  app.dialog.alert('Username: ' + username + '<br>Password: ' + password);
});

/**
   * Calculates the position of a given element within the viewport
   *
   * @param {string} obj jQuery object of the dom element to be monitored
   * @return {array} An array containing both X and Y positions as a number
   * ranging from 0 (under/right of viewport) to 1 (above/left of viewport)
   */
  var visibility = function(obj) {
      var winw = jQuery(window).width(), winh = jQuery(window).height(),
          elw = obj.width(), elh = obj.height(),
          o = obj[0].getBoundingClientRect(),
          x1 = o.left - winw, x2 = o.left + elw,
          y1 = o.top - winh, y2 = o.top + elh;

      return  Math.max(0, Math.min((0 - y1) / (y2 - y1), 1))
      
  }