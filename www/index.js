import riot from 'riot';
import $ from 'jquery';
import tags from './~tags.js';
import console from 'console-browserify';

$.getJSON('/api/')
.then(function (resp) {
  riot.mount('*', resp);
})
.fail(function (err, msg) {
  console.log(`Error ${err}: ${msg}`);
});
