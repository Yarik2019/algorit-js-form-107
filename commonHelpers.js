import{a as u,i as d}from"./assets/vendor-C6pytavQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();u.defaults.baseURL="https://api.unsplash.com";async function f(t,e){const a="LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc";try{return(await u.get("/search/photos",{params:{query:t,page:e,per_page:12,orientation:"portrait",client_id:a}})).data}catch(n){console.error(n.status)}}const s={form:document.querySelector(".search-form"),galleryList:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadMore:document.querySelector(".load-more-btn")};function m(t){return t.map(e=>`<li class="gallery-item"><img src="${e.urls.small}" alt="${e.description}"></li>`).join("")}function p(){s.loader.classList.remove("is-hidden")}function y(){s.loader.classList.add("is-hidden")}function h(){s.loadMore.classList.remove("is-hidden")}function g(){s.loadMore.classList.add("is-hidden")}s.form.addEventListener("submit",L);s.loadMore.addEventListener("click",M);let i=1,l=null;async function L(t){t.preventDefault(),i=1,p(),s.galleryList.innerHTML="",l=t.currentTarget.elements.search.value.trim();try{const e=await f(l,i);if(e.results.length===0)return d.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"});s.galleryList.innerHTML=m(e.results),h()}catch(e){console.log(e)}finally{y(),t.target.reset()}}async function M(){i+=1,p();try{const t=await f(l,i),e=Math.ceil(t.total/12);s.galleryList.insertAdjacentHTML("beforeend",m(t.results)),e===i&&(g(),d.info({message:"The end"}))}catch(t){console.log(t)}finally{y()}}
//# sourceMappingURL=commonHelpers.js.map
