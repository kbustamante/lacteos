// La app ya no vive aquí. Este archivo reemplaza al de la app vieja instalada, borra lo guardado y se apaga solo;
// al recargar, la página lleva a la dirección nueva (kbustamante.github.io/group/).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: "window" })) c.navigate(c.url);
})()));
