import riot from 'riot';
import $ from 'jquery';
import console from 'console-browserify';
import './tags/api-call';
import './tags/response-view';

$.getJSON('/api/')
.then(function (resp) {
  riot.mount('*', resp);
})
.fail(function (err, msg) {
  console.log(`Error ${err}: ${msg}`);
});
