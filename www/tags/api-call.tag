<api-call>
  <h2>{opts.title}</h2>
  <button onclick={get}>GET</button>
  <select value={format} onchange={formatChanged}>
      <option value="json">JSON</option>
      <option value="xml">XML</option>
  </select>
  <div class="well">
    <code-view content="GET {opts.url}"></code-view>
  </div>
  <div class="well" if={response}>
    <code-view content={headers}></code-view>
    <br/>
    <code-view content={response}></code-view>
  </div>

  <script>
  import riot from 'riot';
  import $ from 'jquery';
  import './code-view';

  this.format = 'xml';

  this.formatChanged = (e) => {
    this.format = e.target.value;
    this.get();
  };

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
      this.update();
    })
    .always(() => this.update());
  }
  </script>

</api-call>
