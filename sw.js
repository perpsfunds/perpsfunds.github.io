/* PERPS service worker — installable app shell, fast repeat loads, Web Push.
 * Never caches chain reads (/rpc) or cross-origin requests (RPC, Supabase, CDNs).
 * HTML and un-hashed public files: network-first (a deploy shows on the first load); content-hashed /assets/:
 * cache-first (a hashed URL never changes). */
const CACHE = "perps-v1";
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./logo.png", "./icon-192.png"];
const MAX_ASSETS = 300;
async function trim(cache) {
  const keys = await cache.keys();
  const assets = keys.filter((k) => /\/assets\//.test(k.url));
  if (assets.length > MAX_ASSETS) await Promise.all(assets.slice(0, assets.length - MAX_ASSETS).map((k) => cache.delete(k)));
}

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE).catch(() => {})));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  let url;
  try { url = new URL(req.url); } catch { return; }
  if (url.origin !== location.origin) return;
  if (url.pathname.startsWith("/rpc")) return;

  if (req.mode === "navigate" || req.headers.get("accept")?.includes("text/html")) {
    e.respondWith(
      fetch(req, { cache: "no-cache" }).then((res) => {                 // revalidate: a deploy shows at once
        if (res.ok && (url.pathname === "/" || url.pathname.endsWith("/index.html"))) {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put("./index.html", copy)).catch(() => {});
        }
        return res;
      }).catch(() => caches.match("./index.html").then((r) => r || caches.match("./")))
    );
    return;
  }

  if (/\/assets\/[^/]+-[\w-]{8,}\.[a-z0-9]+$/i.test(url.pathname)) {
    e.respondWith(
      caches.open(CACHE).then(async (cache) => {
        const cached = await cache.match(req);
        if (cached) return cached;
        const res = await fetch(req);
        if (res && res.ok) cache.put(req, res.clone()).then(() => trim(cache)).catch(() => {});
        return res;
      })
    );
    return;
  }

  // perps-hub.json (contract addresses) and everything else un-hashed: network-first, cache = offline fallback
  e.respondWith(
    fetch(req).then((res) => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {}); }
      return res;
    }).catch(() => caches.match(req))
  );
});

/* ── Web Push (VAPID) ──────────────────────────────────────────────────────── */
self.addEventListener("push", (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch { try { d = { body: e.data.text() }; } catch {} }
  const opts = {
    body: d.body || "",
    icon: d.icon || "./icon-192.png",
    badge: "./icon-192.png",
    tag: d.tag,                 // the same event collapses on a device
    renotify: false,
    data: { url: d.url || "./#/wallet" },
  };
  e.waitUntil((async () => {
    // the app is open and in front → it shows the event itself (bell + toast); no system popup on top
    const wins = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    if (wins.some((c) => c.visibilityState === "visible" && c.focused)) {
      wins.forEach((c) => c.postMessage({ type: "perps-notification", payload: d }));
      return;
    }
    await self.registration.showNotification(d.title || "PERPS", opts);
  })());
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || "./#/wallet";
  e.waitUntil((async () => {
    const all = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    for (const c of all) { if ("focus" in c) { await c.focus(); try { await c.navigate(url); } catch {} return; } }
    if (self.clients.openWindow) return self.clients.openWindow(url);
  })());
});
