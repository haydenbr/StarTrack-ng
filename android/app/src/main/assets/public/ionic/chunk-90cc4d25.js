/*!
 * (C) Ionic http://ionicframework.com - MIT License
 * Built with http://stenciljs.com
 */
const{h:e}=window.Ionic,o=500,n="cubic-bezier(0.36,0.66,0.04,1)",t="opacity",r="transform",a="translateX",i="0%",l=.8;function c(e,c,d){const s="rtl"===document.dir,m=s?"-99.5%":"99.5%",u=s?"33%":"-33%",f=d.enteringEl,b=d.leavingEl,E=new e;if(E.addElement(f).duration(d.duration||o).easing(d.easing||n).beforeRemoveClass("hide-page"),b&&c){const o=new e;o.addElement(c).duringAddClass("show-decor"),E.add(o)}const w="back"===d.direction;if(f){const o=f.querySelector(":scope > ion-content"),n=f.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *"),r=f.querySelector(":scope > ion-header > ion-toolbar"),c=new e;if(o||r||0!==n.length?(c.addElement(o),c.addElement(n)):c.addElement(f.querySelector(":scope > ion-page, :scope > ion-nav, :scope > ion-tabs")),E.add(c),w?c.beforeClearStyles([t]).fromTo(a,u,i,!0).fromTo(t,l,1,!0):c.beforeClearStyles([t]).fromTo(a,m,i,!0),r){const o=new e;o.addElement(r),E.add(o);const n=new e;n.addElement(r.querySelector("ion-title"));const l=new e;l.addElement(r.querySelectorAll("ion-buttons,[menuToggle]"));const c=new e;c.addElement(r.querySelector(".toolbar-background"));const d=new e;if(d.addElement(r.querySelector("ion-back-button")),o.add(n).add(l).add(c).add(d),n.fromTo(t,.01,1,!0),l.fromTo(t,.01,1,!0),w)n.fromTo(a,u,i,!0),d.fromTo(t,.01,1,!0);else{n.fromTo(a,m,i,!0),c.beforeClearStyles([t]).fromTo(t,.01,1,!0),d.fromTo(t,.01,1,!0);const l=new e;l.addElement(r.querySelector("ion-back-button .button-text")).fromTo(a,s?"-100px":"100px","0px"),o.add(l)}}}if(b){const o=new e;o.addElement(b.querySelector(":scope > ion-content")),o.addElement(b.querySelectorAll(":scope > ion-header > *:not(ion-toolbar), :scope > ion-footer > *")),E.add(o),w?o.beforeClearStyles([t]).fromTo(a,i,s?"-100%":"100%"):o.fromTo(a,i,u,!0).fromTo(t,1,l,!0);const n=b.querySelector(":scope > ion-header > ion-toolbar");if(n){const o=new e;o.addElement(n);const l=new e;l.addElement(n.querySelector("ion-title"));const c=new e;c.addElement(n.querySelectorAll("ion-buttons,[menuToggle]"));const d=new e;d.addElement(n.querySelector(".toolbar-background"));const m=new e;if(m.addElement(n.querySelector("ion-back-button")),o.add(l).add(c).add(m).add(d),E.add(o),m.fromTo(t,.99,0,!0),l.fromTo(t,.99,0,!0),c.fromTo(t,.99,0,!0),w){l.fromTo(a,i,s?"-100%":"100%"),d.beforeClearStyles([t]).fromTo(t,1,.01,!0);const r=new e;r.addElement(n.querySelector("ion-back-button .button-text")),r.fromTo(a,i,(s?-124:124)+"px"),o.add(r)}else l.fromTo(a,i,u).afterClearStyles([r]),m.afterClearStyles([t]),l.afterClearStyles([t]),c.afterClearStyles([t])}}return Promise.resolve(E)}const d="translateY",s="40px",m="0px";function u(e,o,n){const t=n.enteringEl,r=n.leavingEl,a=f(t),i=new e;i.addElement(a).beforeRemoveClass("hide-page");const l="back"===n.direction;if(t){l?i.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):i.duration(n.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo(d,s,m,!0).fromTo("opacity",.01,1,!0);const o=a.querySelector("ion-toolbar");if(o){const n=new e;n.addElement(o),i.add(n)}}if(r&&l){i.duration(n.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");const o=new e;o.addElement(f(r)).fromTo(d,m,s).fromTo("opacity",1,0),i.add(o)}return Promise.resolve(i)}function f(e){if(e.classList.contains("ion-page"))return e;return e.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs")||e}function b(e){!function(e){const o=e.enteringEl,n=e.leavingEl;(function(e,o,n){e&&(e.style.zIndex="back"===n?"99":"101"),o&&(o.style.zIndex="100")})(o,n,e.direction),e.showGoBack?o.classList.add("can-go-back"):o.classList.remove("can-go-back"),o.hidden=!1,n&&(n.hidden=!1)}(e);const o=function(e){if(e.leavingEl&&!1!==e.animated&&0!==e.duration)return e.animationBuilder?e.animationBuilder:"ios"===e.mode?c:u}(e);return o?async function(e,o){await E(o,!0);const n=await o.animationCtrl.create(e,o.baseEl,o);return w(o.window,o.enteringEl,o.leavingEl),await function(e,o){const n=o.progressCallback,t=new Promise(o=>e.onFinish(o));return n?(e.progressStart(),n(e)):e.play(),t}(n,o),n.hasCompleted&&g(o.window,o.enteringEl,o.leavingEl),n}(o,e):async function(e){const o=e.enteringEl,n=e.leavingEl;return o&&o.classList.remove("hide-page"),n&&n.classList.remove("hide-page"),await E(e,!1),w(e.window,o,n),g(e.window,o,n),null}(e)}async function E(e,o){const n=(null!=e.deepWait?e.deepWait:o)?[S(e.enteringEl),S(e.leavingEl)]:[p(e.enteringEl),p(e.leavingEl)];await Promise.all(n),await async function(e,o){e&&await e(o)}(e.viewIsReady,e.enteringEl)}function w(e,o,n){y(e,n,"ionViewWillLeave"),y(e,o,"ionViewWillEnter")}function g(e,o,n){y(e,o,"ionViewDidEnter"),y(e,n,"ionViewDidLeave")}function y(e,o,n){if(o){const t=new(0,e.CustomEvent)(n,{bubbles:!1,cancelable:!1});o.dispatchEvent(t)}}function p(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()}function S(e){return e?customElements.get?customElements.get(e.tagName.toLowerCase())?T(e):Promise.all(Array.from(e.children).map(S)):T(e):Promise.resolve()}function T(e){return e.componentOnReady?e.componentOnReady():Promise.all(Array.from(e.children).map(S))}export{y as a,b};