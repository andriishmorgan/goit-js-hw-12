import{S as L,i as c,a as p}from"./assets/vendor-c145bea9.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const y of o.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&n(y)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const v=document.querySelector(".form"),d=document.querySelector(".gallery");document.querySelector(".gallery-box");const i=document.querySelector(".loader-top"),m=document.querySelector(".loader-bottom"),a=document.querySelector(".load-image");let l=1,u="sun",f=40;const g=new L(".gallery a",{nav:!0,captionDelay:300,captionsData:"alt",close:!0,enableKeyboard:!0,docClose:!0});v.addEventListener("submit",S);a.addEventListener("click",w);async function S(r){if(r.preventDefault(),i.style.display="block",a.style.display="none",l=1,u=r.target.elements.search.value.trim(),!u){d.innerHTML="",c.info({position:"topRight",message:"Error enter any symbols"}),i.style.display="none";return}try{const{data:{hits:s,totalHits:t}}=await h(u,l);s.length>0?(i.style.display="none",d.innerHTML=b(s),g.refresh(),c.success({position:"topRight",message:`We found ${t} photos`}),a.style.display="block"):(d.innerHTML="",c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})),t<=f&&(a.style.display="none")}catch{console.log("Error")}finally{i.style.display="none",r.target.reset()}}function h(r,s){const t="41767782-13727767f44f3e84ebf7a04b0",n="https://pixabay.com";return p.defaults.baseURL=n,p.get("/api/",{params:{key:t,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:40}})}function b(r=[]){return r.reduce((s,t)=>s+`<li class="gallery-item">
        <a href=${t.largeImageURL}>
          <img class="gallery-img" src =${t.webformatURL} alt=${t.tags}/>
        </a>
        <div class="gallery-text-box">
          <p>Likes: <span class="text-value">${t.likes}</span></p>
          <p>views: <span class="text-value">${t.views}</span></p>
          <p>comments: <span class="text-value">${t.comments}</span></p>
          <p>downloads: <span class="text-value">${t.downloads}</span></p>
      </div>
      </li>`,"")}async function w(r){m.style.display="block",a.style.display="none";const t=document.querySelector(".gallery-item:first-child").getBoundingClientRect().height;try{l+=1;const{data:{hits:n,totalHits:e}}=await h(u,l),o=Math.ceil(e/f);if(a.style.display="block",d.insertAdjacentHTML("beforeend",b(n)),g.refresh(),l===o)return a.style.display="none",c.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})}catch(n){console.log(n)}finally{m.style.display="none",window.scrollBy({top:2*t,behavior:"smooth"})}}
//# sourceMappingURL=commonHelpers.js.map