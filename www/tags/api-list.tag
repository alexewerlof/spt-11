<api-list>
  names, description, url, params

  <p>{JSON.stringify(opts)}</p>
  <api-call each={ opts.endpoints } url={ url } title={ title }></api-call>

  <script>
  import riot from 'riot';
  import console from 'console-browserify';

  console.log(this.opts);
  </script>

</api-list>
