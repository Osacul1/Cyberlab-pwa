const CACHE='cyberlab-pwa-27-1-navfix';
const SHELL=['./','./index.html','./manifest.webmanifest','./simlabs.js','./simlabs.css','./deep-lessons.js','./deep-skills.js','./deep-advanced.js','./cases.js','./cases.css','./software-course.js','./faculdade.js','./faculdade-deep.js','./math-lab.js','./math-lab.css','./satc-core.js','./satc-1-3.js','./satc-4-6.js','./satc-7-8.js','./satc-upgrade.js','./academic-capstones.js','./learning-progressive.js','./icons/icon-192.png','./icons/icon-512.png'];
self.addEventListener('install',event=>{event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('cyberlab-pwa-')&&key!==CACHE)await caches.delete(key);await self.clients.claim()})())});
self.addEventListener('fetch',event=>{const request=event.request;if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
 if(request.mode==='navigate'){event.respondWith(fetch(request).then(response=>{if(response.ok){const copy=response.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy))}return response}).catch(()=>caches.match('./index.html')));return}
 event.respondWith(caches.match(request).then(cached=>cached||fetch(request).then(response=>{if(response.ok)caches.open(CACHE).then(c=>c.put(request,response.clone()));return response})))
});
