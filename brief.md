# Brief

The goal is to recreate a (very-simplified) API user interface.

Eventually this application will request live data from an API and display it in the browser. As usual, the back end developers are running a bit late so we’re using mock data which has been provided for you along with this brief. We need to be able to visualise both JSON and XML.

The task is to:

- Create the user interface.
- Make an ajax request to fetch the preferred file format and render it to the page. It would be great if you could provide syntax highlighting (feel free to use an open source library for this)
- Allow the user to specify the request format they want using a dropdown and request the new format if required.

There are a couple of things we would like you to consider when writing this application:

- The application will eventually be quite large so you should structure your code so that it could scale. Think outside of this one simple page.
- The application will be quite critical so the code should be testable.
- We need to keep this application light and fast so we’d prefer it if you didn’t use any frameworks or libraries to help you write it. If you need to use a utility library like lodash then that’s ok but installing hundreds of kilobytes of css and js probably wouldn’t be advised.
- We need the page to load fast so any performance strategies you can use would be appreciated. It’s understandable if you don’t have time to get to all of them but if you could make a note of some of the future improvements that would be really useful.

Feel free to get in touch with us at any time throughout this task to answer any questions you might have. We realise and appreciate that you’re taking personal time out to complete this task so we’re happy to help. Also, please don’t spend too much time on this. We would rather see what you are capable of doing in a couple of evenings than a whole week.

It would be helpful if you could document your code (through comments or README files) and explain some of the decisions/assumptions you have made throughout. Given the short time constraints could you also make a note of the next steps you would take in order to make the application better.

The screenshot attached should provide all the clues you need around the look and feel of the application. It doesn’t need to be pixel-perfect but it should hold up in browsers IE9+ (using polyfills is acceptable) and shouldn’t explode if used on a small-screen device.
