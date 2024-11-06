import{S as f,i as g,a as h}from"./assets/vendor-Qob_5Ba8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const y=document.querySelector(".js-form"),i=document.querySelector(".js-gallery"),u=document.querySelector(".js-load-button");let c=1,a;const d=new f(".item-link",{captions:!0,captionsData:"alt",captionDelay:250});y.addEventListener("submit",L);u.addEventListener("click",b);function L(r){r.preventDefault(),i.innerHTML="";const{query:t}=r.currentTarget.elements;if(a=t.value,a===""){g.error({message:"Please enter a value!"});return}p(a).then(({data:{hits:n}})=>{i.insertAdjacentHTML("beforeend",m(n)),d.refresh(),u.classList.remove("is-hidden"),c++})}function p(r){return h.get("https://pixabay.com/api/",{params:{key:"29734383-6ec437d7a0c5df52cef54a0f9",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:c,per_page:16}})}function m(r){return r.map(t=>`<li class="gallery-item">
            <a class="item-link" href="${t.largeImageURL}">
              <img
                class="item-image"
                src="${t.webformatURL}"
                alt="${t.tags}"
              >
            </a>
            <div class="item-stats_container">
              <p class="item-stats"><span>Likes</span>${t.likes}</p>
              <p class="item-stats"><span>Views</span>${t.views}</p>
              <p class="item-stats"><span>Comments</span>${t.comments}</p>
              <p class="item-stats"><span>Downloads</span>${t.downloads}</p>
            </div>
          </li>`).join("")}function b(){p(a).then(({data:{hits:r}})=>{i.insertAdjacentHTML("beforeend",m(r)),d.refresh()}),c++}
//# sourceMappingURL=index.js.map
