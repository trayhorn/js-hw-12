import{a as g,i as o,S as h}from"./assets/vendor-BGz2EIcA.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))m(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&m(l)}).observe(document,{childList:!0,subtree:!0});function f(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function m(t){if(t.ep)return;t.ep=!0;const s=f(t);fetch(t.href,s)}})();async function u(r,e){return await g.get("https://pixabay.com/api/",{params:{key:"29734383-6ec437d7a0c5df52cef54a0f9",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:16}})}function d(r){return r.map(e=>`<li class="gallery-item">
            <a class="item-link" href="${e.largeImageURL}">
              <img
                class="item-image"
                src="${e.webformatURL}"
                alt="${e.tags}"
              >
            </a>
            <div class="item-stats_container">
              <p class="item-stats"><span>Likes</span>${e.likes}</p>
              <p class="item-stats"><span>Views</span>${e.views}</p>
              <p class="item-stats"><span>Comments</span>${e.comments}</p>
              <p class="item-stats"><span>Downloads</span>${e.downloads}</p>
            </div>
          </li>`).join("")}o.settings({position:"topRight",timeout:5e3,closeOnEscape:!0});function y(){return o.error({title:"Error",message:"Please try again"})}function L(){return o.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function b(){return o.error({message:"Please enter a value!"})}function v(){return o.warning({title:"Warning",message:"We are out of images. Please change the query"})}const w=document.querySelector(".js-form"),c=document.querySelector(".js-gallery"),a=document.querySelector(".js-load-button");let n=30,i;const p=new h(".item-link",{captions:!0,captionsData:"alt",captionDelay:250});w.addEventListener("submit",q);a.addEventListener("click",P);function q(r){if(r.preventDefault(),a.classList.contains("is-hidden")||a.classList.add("is-hidden"),n=30,c.innerHTML="",i=r.currentTarget.elements.query.value,i===""){b();return}u(i,n).then(({data:{hits:e}})=>{if(e.length===0){L();return}c.insertAdjacentHTML("beforeend",d(e)),p.refresh(),a.classList.remove("is-hidden"),n++}).catch(()=>y())}function P(){n<=31?u(i,n).then(({data:{hits:r}})=>{c.insertAdjacentHTML("beforeend",d(r)),p.refresh(),n++}):(u(i,n).then(({data:{hits:r}})=>{c.insertAdjacentHTML("beforeend",d(r)),p.refresh()}),a.classList.add("is-hidden"),v())}
//# sourceMappingURL=index.js.map
