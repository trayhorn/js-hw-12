import{a as g,S as h,i}from"./assets/vendor-D73Uttp0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function u(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();async function m(s,e){return await g.get("https://pixabay.com/api/",{params:{key:"29734383-6ec437d7a0c5df52cef54a0f9",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:16}})}function p(s){return s.map(e=>`<li class="gallery-item">
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
          </li>`).join("")}const y=document.querySelector(".js-form"),c=document.querySelector(".js-gallery"),d=document.querySelector(".js-load-button");let n=1,a;const f=new h(".item-link",{captions:!0,captionsData:"alt",captionDelay:250});y.addEventListener("submit",L);d.addEventListener("click",b);function L(s){if(s.preventDefault(),c.innerHTML="",a=s.currentTarget.elements.query.value,a===""){i.error({message:"Please enter a value!"});return}m(a,n).then(({data:{hits:e}})=>{if(e.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}c.insertAdjacentHTML("beforeend",p(e)),f.refresh(),d.classList.remove("is-hidden"),n++}).catch(()=>{i.error({title:"Error",message:"Please try again"})})}function b(){m(a,n).then(({data:{hits:s}})=>{c.insertAdjacentHTML("beforeend",p(s)),f.refresh()}),n++}
//# sourceMappingURL=index.js.map
