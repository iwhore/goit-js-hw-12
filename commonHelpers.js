import{a as C,i as u,S}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const y of r.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&o(y)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const m="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEYSURBVHgBrZZRDoIwDIYrwfDqTeQo3ohxEr0BXsW77GXFOFdkYcC6DuFPCJB1/7fCWgBgZEzfIPY256BYzqfkzE8nUNbCE+DzgqSKK8W6OVBV5xYk+ZUbgw/IFMVKmfxtng3ZYy5CjjBnISlzrXUtGcZiZpDxolsGIWItvTi/OK0xAuk7GhsBRjEGioNMmffMXKNEAAeRzENACYJc8QxF5IuJNBZhS2PSfBGwhNB9rjmpgHxZ5jqprAyC3jT0mi29RwSE5v6xhO9EhAjblN0tqS38G59t02ShKeCzU2Kh+SDE9z0GAUGxGPKaLS4F2aqVudcRENb8CIhovgeSMl/VwdQWbOPOl5yPvivs25b2MWjKJOu3hTX+AgZ5PpvL0NSkAAAAAElFTkSuQmCC";function f(s){return s.hits.map(e=>`<div class="gallery-item>
        <a class="gallery-link" href="${e.largeImageURL}">
                  <img class="image" src="${e.webformatURL}" alt="${e.tags}" />
        </a>
        <div class="gallery-item-info">
                  <p class="gallery-info">
                      <span class="item-info">Likes: <span class ="span">${e.likes}</span></span>    
                  </p>
                  <p class="gallery-info">
                      <span class="item-info">Views: <span class ="span">${e.views}</span></span>    
                  </p>
                  <p class="gallery-info">
                      <span class="item-info">Comments: <span class ="span">${e.comments}</span></span>    
                  </p>
                  <p class="gallery-info">
                      <span class="item-info">Downloads: <span class ="span">${e.downloads}</span></span>    
                  </p>
              </div>
          </div>
    </div>`).join("")}const b="42692881-f0d4d17361a73f053244a2051",E="https://pixabay.com/api/",g=document.querySelector(".loader");document.querySelector(".load-btn");const v=document.querySelector(".search-form");async function h(s,e,a){const o=`${E}?key=${b}&q=${s}&image_type=photo&orientation=horizontal&savesearch=true&page=${a}&per_page=${e}`;g.style.display="block";try{const t=await C.get(o);return t.data.hits.length===0&&(u.error({iconUrl:m,position:"topRight",backgroundColor:"#ef4040",titleColor:"#FFFFFF",messageColor:"#FFFFFF",theme:"dark",maxWidth:"432px",message:"There are no images matching your search query. Please, enter something else!"}),g.style.display="none",v.reset()),t.data}catch(t){console.error(`Error: ${t}`)}}const A=new S(".gallery div",{nav:!0,captions:!0,captionsData:"alt",captionDelay:150}),p=15,w=document.querySelector(".search-form"),d=document.querySelector(".gallery"),n=document.querySelector(".loader"),l=document.querySelector(".load-btn");w.addEventListener("submit",B);n.style.display="none";l.style.display="none";let i,F,c;async function B(s){s.preventDefault(),n.style.display="block",d.innerHTML="";const a=s.currentTarget.elements.searchWord.value.trim();if(a===""){u.error({iconUrl:m,titleColor:"#FFFFFF",backgroundColor:"#ef4040",position:"topRight",messageColor:"#FFFFFF",message:"Please search for something"}),n.style.display="none";return}try{const o=await h(a,p,1);c=o.totalHits,d.innerHTML=f(o),F=a,i=1,A.refresh(),!c||c<=i*p?l.style.display="none":l.style.display="block"}catch(o){console.error("Error:",o)}finally{n.style.display="none"}}l.addEventListener("click",async s=>{n.style.display="block",i+=1;try{const e=await h(F,p,i);e.hits&&e.hits.length>0?(d.innerHTML+=f(e),A.refresh(),L(),i*p>=c&&(l.style.display="none",u.show({title:"info",titleColor:"#FFFFFF",backgroundColor:"#6C8CFF",position:"topRight",messageColor:"#FFFFFF",message:"We're sorry, but you've reached the end of search results."}))):l.style.display="none"}catch(e){console.error("Error:",e),alert(e.message)}finally{n.style.display="none"}});function L(){const s=d.firstElementChild.getBoundingClientRect().height;window.scrollBy({top:2*s,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
