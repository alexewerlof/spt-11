Intro
-----

SPT test. Run it with 

```
npm start
```

It'll start the server and open the client in your default browser.

Frameworks/Libraries
--------------------

## Runtime

I can see that the page is using Bootstrap but I go with a minimal
hand-coded solution to keep the size small and light weight.
The problem definition says we're aiming for fastest speed and smallest
footprint, so I didn't pick any framework or library. Instead of utility
libraries like lodash or underscore, I use [native](https://github.com/cht8687/You-Dont-Need-Lodash-Underscore) when possible and fallback only when needed.
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

## Support other HTTP verbs

I assume this page is not all about `GET` and it should allow other
HTTP verbs like `POST`, `PUT`, etc. as well.

## Make it pixel perfect if necessary

The current background is courtesy of [xmoodboard](http://xmoodboard.tumblr.com/post/120765332819).
I didn't have access to the original assets.

## Add favicons

## Auto extraction from code

## i18n support

## Platform Compatibility

I would test the UI thoroughly on mobile/tablets particularly the platform
that is used more (depending on on analytics data).

