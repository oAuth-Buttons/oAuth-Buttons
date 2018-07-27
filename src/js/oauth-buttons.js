import { addClass } from './class'
import './getByClassName'
import * as modenizr from 'modernizr'

ready(() => {
  // css filter detect
  if (!modenizr.cssfilters) {
    const el = document.getElementsByClassName('lbtn');
    for(let i = 0; i < el.length; i++) {
      addClass(el[i], 'white')
    }
    console.log('This browser does not support css filter.');
  } else {
    console.log('This browser supports css filter.');
  }

  // svg detect
  if (!modenizr.svg) {
    const el = document.getElementsByClassName('lbtn');
    for(let i = 0; i < el.length; i++) {
      addClass(el[i], 'lbtn-fallback-svg')
    }
    console.log('This browser does not support svg.');
  } else {
    console.log('This browser supports svg.');
  }
});