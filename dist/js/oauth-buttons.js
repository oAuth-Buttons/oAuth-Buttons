'use strict';

$(document).ready(function () {
  // css filter detect
  if (!Modernizr.cssfilters) {
    $('.lbtn').addClass('white');
    console.log('This browser does not support css filter.');
  } else {
    console.log('This browser supports css filter.');
  }

  if (!Modernizr.svg) {
    $('.lbtn').addClass('lbtn-fallback-svg');
    console.log('This browser does not support svg.');
  } else {
    console.log('This browser supports svg.');
  }
});
//# sourceMappingURL=oauth-buttons.js.map
