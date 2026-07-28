import assert from "node:assert/strict";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("renders the finished public-interest project site", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  assert.match(html, /FarmAssist Climate Intelligence/);
  assert.match(html, /Climate intelligence where connectivity ends/);
  assert.match(html, /Safeguarding by architecture/);
  assert.match(html, /Directly aligned to published climate-tech needs/);
  assert.match(html, /Five steps a technical reviewer can verify/);
  assert.match(html, /Built, demonstrated, documented/);
  assert.match(html, /Field-research workflows across three farmer locations/);
  assert.match(html, /Open-source evidence live/);
  assert.match(html, /github\.com\/prakau\/farmassist-child-climate-open/);
  assert.match(html, /USD 100,000/);
  assert.match(html, /No UNICEF endorsement/);
  assert.match(html, /Requires independent validation/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
});
