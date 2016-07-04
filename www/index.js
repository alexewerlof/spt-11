import riot from 'riot';
import $ from 'jquery';
import console from 'console-browserify';
import './tags/api-list';
import './tags/api-call';
import './tags/response-view';

$.getJSON('/endpoints/')
.then(function (resp) {
  console.log(resp);
  riot.mount('api-list', resp);
})
.fail(function (err, msg) {
  console.log(`Error ${err}: ${msg}`);
});
