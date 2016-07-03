<api-list>
  name, description, url, params

  <api-call each={ opts.endpoints } endpoint={ this }></api-call>

  <script>
  import riot from 'riot';
  import console from 'console-browserify';

  console.log(opts);
  </script>

</api-list>
