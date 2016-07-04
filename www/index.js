import riot from 'riot';
import $ from 'jquery';
import console from 'console-browserify';
import './tags/api-list';

$.getJSON('/endpoints/')
.then(function (resp) {
  riot.mount('api-list', resp);
})
.fail(function (err, msg) {
  console.error(`Error ${err}: ${msg}`);
});
