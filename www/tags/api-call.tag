<api-call>
  <h2>{opts.endpoint.title}</h2>
  <select>
      <option value="json">JSON</option>
      <option value="xml">XML</option>
  </select>
  <button onclick={get}>GET</button>
  <pre><code>GET {opts.endpoint.url}</code></pre>
  <response-view headers={headers} response={response}></response-view>

  <script>
  import riot from 'riot';
  import $ from 'jquery';

  this.get = () => {
    $.get(opts.endpoint.url, function (results) {
      this.response = results;
      this.update();
      //TODO happy coding? error handling.
    });
  }
  </script>

</api-call>
