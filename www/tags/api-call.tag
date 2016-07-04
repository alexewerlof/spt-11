<api-call>
  <h2>{opts.title}</h2>
  <select value={this.format} onchange={formatChanged}>
      <option value="json">JSON</option>
      <option value="xml">XML</option>
  </select>
  <button onclick={get}>GET</button>
  <pre><code>GET {opts.url}</code></pre>
  <response-view if={opts.headers} headers={headers} response={response}></response-view>

  <script>
  import riot from 'riot';
  import $ from 'jquery';

  this.format = 'xml';

  this.formatChanged = function (e) {
    this.format = e.target.value;
  }

  this.get = () => {
    $.ajax({
      url: opts.url,
      dataType: this.format,
      context: this,
      error: console.error,
      method: 'GET', //TODO allow the user to choose
      // data: {}, // TODO allow the user to send params
    })
    .done((results, textStatus, jqXHR) => {
      this.response = jqXHR.responseText;
      this.headers = jqXHR.getAllResponseHeaders();
    })
    .always(() => this.update());
  }
  </script>

</api-call>
