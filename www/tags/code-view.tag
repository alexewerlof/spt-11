<code-view>

  <pre><code>{opts.content}</code>

  <script>
  import riot from 'riot';
  import console from 'console-browserify';

  this.on('updated', () => {
    // TODO make it work
    console.log('code-view just got updated. time to highlight!')
  });
  </script>

</code-view>
