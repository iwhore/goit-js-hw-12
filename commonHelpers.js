import{a as F,i as p,S as C}from"./assets/vendor-5401a4b0.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const d of t.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const u="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBrZZRDoIwDIYrwfDqTeQo3ohxEr0BXsW77GXFOFdkYcC6DuFPCJB1/7fCWgBgZEzfIPY256BYzqfkzE8nUNbCE+DzgqSKK8W6OVBV5xYk+ZUbgw/IFMVKmfxtng3ZYy5CjjBnISlzrXUtGcZiZpDxolsGIWItvTi/OK0xAuk7GhsBRjEGioNMmffMXKNEAAeRzENACYJc8QxF5IuJNBZhS2PSfBGwhNB9rjmpgHxZ5jqprAyC3jT0mi29RwSE5v6xhO9EhAjblN0tqS38G59t02ShKeCzU2Kh+SDE9z0GAUGxGPKaLS4F2aqVudcRENb8CIhovgeSMl/VwdQWbOPOl5yPvivs25b2MWjKJOu3hTX+AgZ5PpvL0NSkAAAAAElFTkSuQmCC";function g(r){return r.hits.map(o=>`<div class="gallery-item>
        <a class="gallery-link" href="${o.largeImageURL}">
                  <img class="image" src="${o.webformatURL}" alt="${o.tags}" />
        </a>
        <div class="gallery-item-info">
                  <p class="gallery-info">
                      <span class="item-info">Likes: <span class ="span">${o.likes}</span></span>    
                  </p>
                  <p class="gallery-info">
                      <span class="item-info">Views: <span class ="span">${o.views}</span></span>    
                  </p>
                  <p class="gallery-info">
                      <span class="item-info">Comments: <span class ="span">${o.comments}</span></span>    
                  </p>
                  <p class="gallery-info">
                      <span class="item-info">Downloads: <span class ="span">${o.downloads}</span></span>    
                  </p>
              </div>
          </div>
    </div>`).join("")}const S="42692881-f0d4d17361a73f053244a2051",b="https://pixabay.com/api/",y=document.querySelector(".loader"),E=document.querySelector(".load-btn"),v=document.querySelector(".search-form");async function m(r,o,a){const s=`${b}?key=${S}&q=${r}&image_type=photo&orientation=horizontal&savesearch=true&page=${a}&per_page=${o}`;y.style.display="block";try{const e=await F.get(s);return e.data.hits.length===0&&(p.error({iconUrl:u,position:"topRight",backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark",maxWidth:"432px",message:"There are no images matching your search query. Please, enter something else!"}),E.style.display="none",y.style.display="none",v.reset()),e.data}catch(e){console.error(`Error: ${e}`)}}const f=new C(".gallery div",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),w=document.querySelector(".search-form"),l=document.querySelector(".gallery"),n=document.querySelector(".loader"),i=document.querySelector(".load-btn");w.addEventListener("submit",B);n.style.display="none";i.style.display="none";let c,h,A;async function B(r){r.preventDefault(),n.style.display="block",l.innerHTML="";const a=r.currentTarget.elements.searchWord.value.trim();if(a===""){p.error({iconUrl:u,titleColor:"#FFFFFF",backgroundColor:"#ef4040",position:"topRight",messageColor:"#FFFFFF",message:"Please search for something"}),n.style.display="none";return}try{const s=await m(a,15,1);A=s.totalHits,l.innerHTML=g(s),h=a,c=1,f.refresh(),q()}catch(s){console.error("Error:",s)}finally{n.style.display="none"}}i.addEventListener("click",async r=>{n.style.display="block",c+=1;try{const o=await m(h,15,c);c*15<A?(l.innerHTML+=g(o),f.refresh(),L()):(i.style.display="none",p.show({title:"info",titleColor:"#FFFFFF",backgroundColor:"#6C8CFF",position:"topRight",messageColor:"#FFFFFF",message:"We're sorry, but you've reached the end of search results."}))}catch(o){console.error("Error:",o),alert(o.message)}finally{n.style.display="none"}});function L(){const r=l.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*r,behavior:"smooth"})}function q(){l.querySelector("img")?i.style.display="block":i.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
