Intro
-----

SPT test. You need node 6+. Install dependencies with:

```
npm i
```

Then run it with:

```
npm start
```

This will:

* compile components
* Create a bundle
* Generate CSS from Stylus
* Start the Express server

The port is defined in `package.json` under `config`.

See it live
-----------

This application is [deployed to Heroku](https://dazzling-mammoth-cave-57798.herokuapp.com/).
To run it locally you can `heroky local` and if you deploy it, you can
use `heroku open` to see it running on the cloud.

The source is of course on [Github](https://github.com/userpixel/spt-11).

Frameworks/Libraries
--------------------

## Why Riot?

First I decided to write everything in plain JS. But as you know the
imperative code is hard to maintain and doesn't scale very well.
Since the problem definition requires smallest possible size, I chose
Riot which is a very light weight micro library that abstracts away
complexity while improving maintainability and adding scalability.

* Tiny size (9.23 KB)
* Isomorphic app
* Content Security Policy (CSP) support for higher security
* React based (many of React goodness is still there with a more familiar syntax)
plus the V-DOM speed boost. This means it's going to be familiar to the team if
they already know react.
* No need for extra libraries for routing, etc.
* The code base is ready to port to react (vs Knockout or Angular)
* In Riot HTML and JavaScript appear much more familiar. Both are under the same
component, but neatly separated from each other.
* Less boilerplate (`"Hello {world}"` instead of `"Hello " + this.state.world`)

I don't believe it's the silver bullet. It misses a big name like Goog/FB behind
it, but since this project didn't have any explicit requirements, I did a quick
search and found Riot and started using it. The API is pretty small and the
syntax is pretty readable so it shouldn't be a problem to pick it up.

## JSDoc

## Linting

to improve consistency and team efficiency.

## Runtime

I can see that the page is using Bootstrap but I go with a minimal
hand-coded solution to keep the size small and light weight.
The problem definition says we're aiming for fastest speed and smallest
footprint, so I didn't pick any framework or library.
As you know IE<11 is not supported by Microsoft [anymore](https://www.microsoft.com/en-us/WindowsForBusiness/End-of-IE-support)
and I guess the users of this site (developers) run a pretty decent version
of their browser, but nevertheless I use some polyfills that should work on IE
but due to limited time I haven't tested it on IE<11.
The following browsers are tested:

* Edge
* Chrome
* Firefox
* Opera

## Build

I use plain npm scripts with WebPack though for what I'm doing not so
much work needs to be done but in the future it may need a slightly more
powerful build config.

Future
------

## Enable CSP

## Use Helmet

## Enable GZip

## Use Nodejs clusters to improve scalability

## Run the server behind a reverse proxy to improve speed and reduce cost

## Support other HTTP verbs

I assume this page is not all about `GET` and it should allow other
HTTP verbs like `POST`, `PUT`, etc. as well.

## Make it pixel perfect if necessary

The current background is courtesy of [xmoodboard](http://xmoodboard.tumblr.com/post/120765332819).
I didn't have access to the original assets.

## Add favicons

## Pretty formatting

The production server will most probably return a crammed result but the
documentation should pretty-format the results by default (and maybe allow
seeing the original response).

## Use Web Workers

Use Highlight.JS in a Web Worker to [avoid freezing the UI](https://highlightjs.org/usage/)
when highlighting huge responses.

## Auto extraction from code

## Parameter validation

## Support tokens and authenticated APIs

## i18n support

## Platform Compatibility

I would test the UI thoroughly on mobile/tablets particularly the platform
that is used more (depending on on analytics data).


# TODO

* Review all TODOs in the code and document
* Performance improvements
* Cross browser test
* Write unit tests
* Use highlight.js if there's time
