import{a as g,S as h,i as c}from"./assets/vendor-D73Uttp0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function d(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(t){if(t.ep)return;t.ep=!0;const s=d(t);fetch(t.href,s)}})();async function m(r,e){return await g.get("https://pixabay.com/api/",{params:{key:"29734383-6ec437d7a0c5df52cef54a0f9",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:16}})}function p(r){return r.map(e=>`<li class="gallery-item">
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
          </li>`).join("")}const y=document.querySelector(".js-form"),l=document.querySelector(".js-gallery"),n=document.querySelector(".js-load-button");let a=1,i;const f=new h(".item-link",{captions:!0,captionsData:"alt",captionDelay:250});y.addEventListener("submit",L);n.addEventListener("click",b);function L(r){if(r.preventDefault(),n.classList.contains("is-hidden")||n.classList.add("is-hidden"),a=1,l.innerHTML="",i=r.currentTarget.elements.query.value,i===""){c.error({message:"Please enter a value!"});return}m(i,a).then(({data:{hits:e}})=>{if(e.length===0){c.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}l.insertAdjacentHTML("beforeend",p(e)),f.refresh(),n.classList.remove("is-hidden"),a++}).catch(()=>{c.error({title:"Error",message:"Please try again"})})}function b(){m(i,a).then(({data:{hits:r}})=>{l.insertAdjacentHTML("beforeend",p(r)),f.refresh()}),a++}
//# sourceMappingURL=index.js.map
