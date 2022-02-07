/*
  Template Name : Hosty
  Author: Art Rage ( M.I.Daniel )
  Version: v1.0 Html
*/

/* Settings In night.js :
  1. Bootstrap fix for WinPhone 8 and IE10
  2. Preloader
  3. Parallax
  4. Simple Text Rotate
  5. Animate On Scroll
  6. Owl Carousel
  7. Testimonials (Flexslider)
  8. Tipper
  9. Placeholdem
  10. Magnific Popup
  11. Google Map
*/

/* ==============================================
Bootstrap fix for WinPhone 8 and IE10
=============================================== */

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
    var msViewportStyle = document.createElement("style")
    msViewportStyle.appendChild(
      document.createTextNode(
          "@-ms-viewport{width:auto!important}"
      )
    )
    document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
}

function detectIE() {
  if ($.browser.msie && $.browser.version == 9) {
    return true;
  }
  if ($.browser.msie && $.browser.version == 8) {
    return true;
  }
  return false;
}

function getWindowWidth() {
    return Math.max( $(window).width(), window.innerWidth);
}

function getWindowHeight() {
    return Math.max( $(window).height(), window.innerHeight);
}


;(function($){

    "use strict";

/* ==============================================
Preloader
=============================================== */

$(window).load(function() {
    var preloaderDelay = 350,
        preloaderFadeOutTime = 800;
    function hidePreloader() {
        var loadingAnimation = $('.spinner'),
            preloader = $('.spinner');
        loadingAnimation.fadeOut();
        preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

/* ==================================================================
Parallax
================================================================== */

$('#main-header').parallax("50%", 0.6);
$('#testimonials').parallax("50%", 0.6);

/* ==================================================================
Simple Text Rotate
================================================================== */

$(".rotate").textrotator({
  animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
  separator: ",", // If you don't want commas to be the separator, you can define a new separator (|, &, * etc.) by yourself using this field.
  speed: 3000 // How many milliseconds until the next word show.
});

/* ==================================================================
Animate On Scroll
================================================================== */

new WOW().init();

/* ==================================================================
Owl Carousel
================================================================== */

$('.owl-carousel').owlCarousel({
  items: 6,
  transitionStyle : "goDown"
});

/* ==================================================================
Testimonials (Flexslider)
================================================================== */

$('.flexslider').flexslider({
  slideshow: true,
  animation: 'slide',
  directionNav: false
});

/* ==================================================================
Tipper
================================================================== */

$("#pricing-box > div").tipper({
  direction: "top"
});

/* ==================================================================
Placeholdem
================================================================== */

Placeholdem( document.querySelectorAll( '[placeholder]' ) );

/* ==================================================================
Magnific Popup
================================================================== */

$('.popup').magnificPopup({
  delegate: 'a',
  type: 'image'
});

/* ==================================================================
Google Map
================================================================== */

var map;
var myLatLng = new google.maps.LatLng(53.46727,-113.47192);

function initialize() {

  var roadAtlasStyles = [ 
  { "featureType": "poi", "elementType": "labels", "stylers": [ { "visibility": "on" } ] }, 
    { "elementType": "geometry.fill",   "stylers": [ { "color": "#424957" } ] },
  { "elementType": "labels.text", "stylers": [ { "color": "#ffffff" }, { "weight": 0.1 } ] },
  { "elementType": "labels.text.stroke", "stylers": [ { "color": "#000000" }, { "weight": 0.2 }, { "invert_lightness": true } ] },
  { "featureType": "water", "stylers": [ { "color": "#445069" } ] },
  { "featureType": "road.highway", "elementType": "geometry.stroke" }
  ];

  var mapOptions = {
      zoom: 15,
    center: myLatLng,
  disableDefaultUI: true,
  scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
    }
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
   
  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: 'img/location-icon.png',
    title: '',
  });
  
  var contentString = '<div style="max-width: 300px" id="content">'+
      '<div id="bodyContent">'+
    '<h3>Art Rage</h3>' +
      '<p style="font-size: 15px">Lorem ipsum dolor sit amet,' +
      'incididunt ut labore et dolore psum dolor magna aliqua.</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });

  var styledMapOptions = {
    name: 'US Road Atlas'
  };

  var usRoadMapType = new google.maps.StyledMapType(
      roadAtlasStyles, styledMapOptions);

  map.mapTypes.set('usroadatlas', usRoadMapType);
  map.setMapTypeId('usroadatlas');
}

google.maps.event.addDomListener(window, 'load', initialize);

/* Show And Hide The Google Map */

$('#google-map').fadeOut();
$('#google-map-btn').click(function(){
  $('#google-map').slideToggle();
});

})(jQuery);