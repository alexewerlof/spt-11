<code-view>

  <pre><code>{opts.content}</code></pre>

  <script>
  import riot from 'riot';
  import console from 'console-browserify';
  // TODO fix this workaround
  // import highlight from '../../node_modules/highlight.js/src/highlight.js';
  import hljs from '../../node_modules/highlight.js/lib//highlight';
  import hljsHttpLang from '../../node_modules/highlight.js/lib/languages/http';
  import hljsXmlLang from '../../node_modules/highlight.js/lib/languages/xml';
  import hljsJsonLang from '../../node_modules/highlight.js/lib/languages/json';
  //hljs.registerLanguage('http', require('../../node_modules/highlight.js/lib/language/http'));
  hljs.registerLanguage('http', hljsHttpLang);
  hljs.registerLanguage('xml', hljsXmlLang);
  hljs.registerLanguage('json', hljsJsonLang);

  this.on('updated', () => {
    // TODO make it work
    console.log('code-view just got updated. time to highlight!');
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
    hljs.highlightBlock(this.root.querySelector('pre'));
  });
  </script>

</code-view>
