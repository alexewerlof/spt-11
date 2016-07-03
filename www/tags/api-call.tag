<api-call>
  <h2>Advertiser List</h2>
  <select>
      <option value="json">JSON</option>
      <option value="xml">XML</option>
  </select>
  <pre><code>GET /advertisers/?format=api</code></pre>
  <pre><code>HTTP 200 OK
  Vary: Accept
  Allow: GET, POST, HEAD, OPTIONS
  Content-Type: application/json

  [
  {
  "id": 1,
  "name": "MockAdvertiser",
  "external_id": "1",
  "impressions": 52721284,
  "clicks": 93149
  }
  ]</code></pre>
  <response-view headers='ohlala' response='mehero'></response-view>

  <script>
  import riot from 'riot';
  </script>

</api-call>
