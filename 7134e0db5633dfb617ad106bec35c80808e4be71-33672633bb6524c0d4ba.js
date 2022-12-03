"use strict";(self.webpackChunkgatsby_starter_lavender=self.webpackChunkgatsby_starter_lavender||[]).push([[425],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var r;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,r=!1,a=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,a=r,r=!0,n++):r&&a&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),a=r,r=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,a=r,r=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),r=e,t.pascalCase?r.charAt(0).toUpperCase()+r.slice(1):r)};e.exports=t,e.exports.default=t},3723:function(e,t,r){r.d(t,{L:function(){return m},M:function(){return E},P:function(){return b},S:function(){return P},_:function(){return s},a:function(){return o},b:function(){return c},g:function(){return u},h:function(){return l}});var a=r(7294),n=(r(72),r(5697)),i=r.n(n);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t.indexOf(r=i[a])>=0||(n[r]=e[r]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,r,a,n){return void 0===n&&(n={}),o({},r,{loading:a,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function u(e,t,r,a,n,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===r?(c.width=a,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var d,p=["children"],g=function(e){var t=e.layout,r=e.width,n=e.height;return"fullWidth"===t?a.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/r*100+"%"}}):"constrained"===t?a.createElement("div",{style:{maxWidth:r,display:"block"}},a.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+r+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},m=function(e){var t=e.children,r=s(e,p);return a.createElement(a.Fragment,null,a.createElement(g,o({},r)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){var t=e.src,r=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=s(e,f);return a.createElement("img",o({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?r:void 0,"data-srcset":c?void 0:r,alt:l}))},v=function(e){var t=e.fallback,r=e.sources,n=void 0===r?[]:r,i=e.shouldLoad,l=void 0===i||i,c=s(e,h),u=c.sizes||(null==t?void 0:t.sizes),d=a.createElement(y,o({},c,t,{sizes:u,shouldLoad:l}));return n.length?a.createElement("picture",null,n.map((function(e){var t=e.media,r=e.srcSet,n=e.type;return a.createElement("source",{key:t+"-"+n+"-"+r,type:n,media:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,sizes:u})})),d):d};y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},v.displayName="Picture",v.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var w=["fallback"],b=function(e){var t=e.fallback,r=s(e,w);return t?a.createElement(v,o({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):a.createElement("div",o({},r))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(d=v.propTypes)?void 0:d.sources,alt:function(e,t,r){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+r+"`. Validation failed."):null}};var E=function(e){return a.createElement(a.Fragment,null,a.createElement(v,o({},e)),a.createElement("noscript",null,a.createElement(v,o({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=v.propTypes;var k,x,C=function(e,t,r){for(var a=arguments.length,n=new Array(a>3?a-3:0),o=3;o<a;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,r].concat(n)):new Error('The "alt" prop is required in '+r+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},L={image:i().object.isRequired,alt:C},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],z=new Set,j=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,p=e.class,g=e.onStartLoad,m=e.onLoad,f=e.onError,h=s(e,S),y=i.width,v=i.height,w=i.layout,b=function(e,t,r){var a={},n="gatsby-image-wrapper";return"fixed"===r?(a.width=e,a.height=t):"constrained"===r&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:a}}(y,v,w),E=b.style,C=b.className,L=s(b,T),j=(0,a.useRef)(),O=(0,a.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);p&&(d=p);var _=function(e,t,r){var a="";return"fullWidth"===e&&(a='<div aria-hidden="true" style="padding-top: '+r/t*100+'%;"></div>'),"constrained"===e&&(a='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+r+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),a}(w,y,v);return(0,a.useEffect)((function(){k||(k=Promise.all([r.e(774),r.e(217)]).then(r.bind(r,9217)).then((function(e){var t=e.renderImageToString,r=e.swapPlaceholderImage;return x=t,{renderImageToString:t,swapPlaceholderImage:r}})));var e,t,a=j.current.querySelector("[data-gatsby-image-ssr]");return a&&l()?(a.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),a.addEventListener("load",(function e(){a.removeEventListener("load",e),null==m||m({wasCached:!0}),setTimeout((function(){a.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(O)):x&&z.has(O)?void 0:(k.then((function(r){var a=r.renderImageToString,n=r.swapPlaceholderImage;j.current&&(j.current.innerHTML=a(o({isLoading:!0,isLoaded:z.has(O),image:i},h)),z.has(O)||(e=requestAnimationFrame((function(){j.current&&(t=n(j.current,O,z,c,g,m,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,a.useLayoutEffect)((function(){z.has(O)&&x&&(j.current.innerHTML=x(o({isLoading:z.has(O),isLoaded:z.has(O),image:i},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[i]),(0,a.createElement)(n,o({},L,{style:o({},E,c,{backgroundColor:u}),className:C+(d?" "+d:""),ref:j,dangerouslySetInnerHTML:{__html:_},suppressHydrationWarning:!0}))},O=(0,a.memo)((function(e){return e.image?(0,a.createElement)(j,e):null}));O.propTypes=L,O.displayName="GatsbyImage";var _,I=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],q=function(e,t){for(var r=arguments.length,a=new Array(r>2?r-2:0),n=2;n<r;n++)a[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(a)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},R=new Set(["fixed","fullWidth","constrained"]),N={src:i().string.isRequired,alt:C,width:q,height:q,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!R.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},P=(_=O,function(e){var t=e.src,r=e.__imageData,n=e.__error,i=s(e,I);return n&&console.warn(n),r?a.createElement(_,o({image:r},i)):(console.warn("Image not loaded",t),null)});P.displayName="StaticImage",P.propTypes=N},9549:function(e,t,r){r.d(t,{Z:function(){return f}});var a=r(3723),n=r(7294),i=r(2229),o=r(8088),s=(0,o.zo)("div",{display:"grid",gridTemplateColumns:"70px auto",marginBottom:"2rem",padding:"1rem",borderRadius:"1rem",backgroundColor:"$gray100",transition:"background-color $transitionDuration $transitionTiming",".profile-image":{borderRadius:"50%",transform:"translateZ(0)"}}),l=(0,o.zo)("div",{paddingRight:"1rem",paddingLeft:"1rem",color:"$text300",transition:"color $transitionDuration $transitionTiming"}),c=(0,o.zo)("p",{marginTop:0,marginBottom:"0.5rem",fontSize:"1.25rem"}),u=(0,o.zo)("p",{lineHeight:1.2,wordBreak:"keep-all"}),d=(0,o.zo)("ul",{display:"flex",gap:"1em",marginTop:"1em",marginLeft:0}),p=(0,o.zo)("li",{display:"inline-block",listStyle:"none",transition:"color $transitionDuration $transitionTiming",a:{color:"$link"}}),g=function(e){var t=e.username,r=e.urlPrefix,a=e.children;return t?n.createElement(p,null,n.createElement("a",{href:""+r+t},a)):null},m=function(){var e,t=null===(e=(0,i.P)().site)||void 0===e?void 0:e.siteMetadata,o=null==t?void 0:t.author,p=null==t?void 0:t.description,m=null==t?void 0:t.social,f={github:{text:"GitHub",url:"https://github.com/"},twitter:{text:"Twitter",url:"https://twitter.com/"},facebook:{text:"Facebook",url:"https://www.facebook.com/"},instagram:{text:"Instagram",url:"https://www.instagram.com/"},linkedin:{text:"LinkedIn",url:"https://www.linkedin.com/in/"}};return n.createElement(s,null,n.createElement(a.S,{className:"profile-image",layout:"fixed",formats:["auto","webp","avif"],src:"../../images/jongyun.png",width:70,height:70,quality:95,alt:"Profile picture",__imageData:r(7673)}),n.createElement(l,null,n.createElement(c,null,n.createElement("strong",null,o)),n.createElement(u,null,p),n.createElement(d,null,Object.entries(null!=m?m:{}).map((function(e){var t=e[0],r=e[1],a=t;return n.createElement(g,{key:a,username:r,urlPrefix:f[a].url},f[a].text)})))))},f=(0,n.memo)(m)},7673:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#181808","images":{"fallback":{"src":"/static/55835a2df56a3c8d61c5402820fb35e8/145fc/jongyun.png","srcSet":"/static/55835a2df56a3c8d61c5402820fb35e8/145fc/jongyun.png 70w,\\n/static/55835a2df56a3c8d61c5402820fb35e8/f2ae4/jongyun.png 140w","sizes":"70px"},"sources":[{"srcSet":"/static/55835a2df56a3c8d61c5402820fb35e8/821ec/jongyun.avif 70w,\\n/static/55835a2df56a3c8d61c5402820fb35e8/1bb1f/jongyun.avif 140w","type":"image/avif","sizes":"70px"},{"srcSet":"/static/55835a2df56a3c8d61c5402820fb35e8/55c64/jongyun.webp 70w,\\n/static/55835a2df56a3c8d61c5402820fb35e8/b0396/jongyun.webp 140w","type":"image/webp","sizes":"70px"}]},"width":70,"height":70}')}}]);
//# sourceMappingURL=7134e0db5633dfb617ad106bec35c80808e4be71-33672633bb6524c0d4ba.js.map