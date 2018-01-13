// main
ready(() => {
    // css filter detect
    if (!Modernizr_oauth_buttons.cssfilters) {
        const el = document.getElementsByClassName('lbtn');
        for(let i = 0; i < el.length; i++) {
            addClass(el[i], 'white')
        }
        console.log('This browser does not support css filter.');
    } else {
        console.log('This browser supports css filter.');
    }

    // svg detect
    if (!Modernizr_oauth_buttons.svg) {
        const el = document.getElementsByClassName('lbtn');
        for(let i = 0; i < el.length; i++) {
            addClass(el[i], 'lbtn-fallback-svg')
        }
        console.log('This browser does not support svg.');
    } else {
        console.log('This browser supports svg.');
    }
});