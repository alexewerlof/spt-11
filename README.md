Intro
-----

The app is [deployed to Heroku](https://rugged-sequoia-84926.herokuapp.com/).
You don't need Heroku to run it locall but if you have the toolbelt installed
simply do a `heroky local`.

**AdBlock Plus may prevent Ajax calls in this application due to the word "advertisers".
Please disable AdBlock on this page if the Ajax calls have a problem.**

The source is of course [on Github](https://github.com/userpixel/spt-11) under ISC licenses.

It needs Node 6+. First install dependencies with `npm i`
then run it with `npm start`.

This will:

* Compile components (read on for more info)
* Create a bundle
* Generate CSS from Stylus
* Start the file/api server (Express 4)

The port is defined in `package.json` under `config` but you can also define it
in an `.env` file for local Heroku execution.

To build the project,
I use plain npm scripts with Browserify. I tried WebPack
(with its incremental builds) and Rollup.js
(with its tree shaking feature) as well
but in the end settled for Browserify because at the moment the project doesn't
need more.

Powered by: Express, ES6, Browserify, Heroku, Riot.js, Stylus

Frameworks/Libraries
--------------------

First I decided to write everything in plain JS. But as you know the
imperative code is hard to maintain and doesn't scale very well (which was
a requirement for this project).

Since the problem definition requires smallest possible size, I chose
[Riot.js](http://riotjs.com/) which is a very light weight micro library that
abstracts away complexity while improving maintainability and adding scalability.

* React based
* Tiny size (9.23 KB)
* Possibility to do isomorphic app
* Content Security Policy (CSP) support for higher security
* In Riot HTML and JavaScript appear much more familiar. Both are under the same
component, but neatly separated from each other.
* Less boilerplate (`"Hello {world}"` instead of `"Hello " + this.state.world`)

I don't believe it's the silver bullet but since this project didn't have any
explicit requirements, I did a quick
search and found Riot and started using it (took a couple of hours to pick up).
The API is pretty small and the syntax is very readable.

## Runtime

I haven't had time to test it on old IEs (though VMs are available) but since MS
[dropped support for IE<11](https://www.microsoft.com/en-us/WindowsForBusiness/End-of-IE-support)
I focused the time on higher prio tasks first. Can do graceful degradation later.

The following browsers are tested:

* Edge
* Chrome (Desktop and Android)
* Firefox

I also ran it through [Google Speed Test](https://developers.google.com/speed/pagespeed/insights/?url=https%3A%2F%2Fdazzling-mammoth-cave-57798.herokuapp.com%2F)
and it scored pretty good (96/100 on desktop and 90/100 on mobile).

### Quick stats

* Total download size: 58.8KB with 6 requests
* CSS: 1.2KB
* JS: 44KB

The server uses Helmet for security and Gzip compression for network utilization.

## About tests

I usually use Mocha or Jasmine for unit tests whenever I can but for this project
I didn't write any tests for two reasons:

1. I was learning Riot.js and it didn't make much sense to write tests from the started
2. The end code is really tiny and there's not so much to test
3. Time constrains (I spent 8 hours in total on the test)

Future Improvements
-------------------

## Performance

1. Lazy load (defer) above-the-fold CSS
2. Enable caching on the fake api end points (not top prio)
3. Compress the bg.png to save a few kilobytes (can shrink to 2.5KB)

## Code quality

* JSDoc: if the team uses it
* Linting: to improve consistency and team efficiency.
* Enable CSP for security
* Use Nodejs clusters to improve scalability
* Run the server behind a reverse proxy to improve speed and reduce cost

## Improve UI

* Support other HTTP verbs. I assume this page is not all about `GET` and it should allow other
HTTP verbs like `POST`, `PUT`, etc. as well.
* Make it pixel perfect if necessary: The current background is courtesy of
[xmoodboard](http://xmoodboard.tumblr.com/post/120765332819).
I didn't have access to the original assets or branding/color scheme.
* Add favicons
* Pretty formatting the JSON/XML client side: The production server will most probably return a crammed result but the
documentation should pretty-format the results by default (and maybe allow
seeing the original response).
* i18n support

## Highlighting

I have [a branch](https://github.com/userpixel/spt-11/tree/highlight.js) for that,
but there was a hiccup with dynamic highlighting that took too long
so I parked the idea of highlight.

Nevertheless, it's a good idea to use Highlight.JS in a Web Worker
[to avoid freezing the UI](https://highlightjs.org/usage/)
when highlighting huge responses.

## Auto extraction from code

Currently the API is defined in the `fake-api` directory
(see [docs](https://github.com/userpixel/spt-11/blob/master/fake-api/README.md))
but it would be cool to have a mechanism to extract the API from the code.

This makes it so effortless to write and keep up to date.

## More on the server side

* Parameter validation
* Support tokens and authenticated APIs
