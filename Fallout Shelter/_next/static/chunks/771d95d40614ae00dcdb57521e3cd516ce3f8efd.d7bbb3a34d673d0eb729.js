(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{"1LLx":function(e,n,i){"use strict";var t=i("xvhg"),a=i("cpVT"),r=i("MX0m"),d=i.n(r),o=i("q1tI"),l=i.n(o),s=i("Vvt1"),u=i.n(s),c=i("GBY4"),m=i.n(c),v=i("+TN3"),f=i("DiiX"),p=i.n(f),k=i("eMNQ"),g=i("VnKV"),b=i("H5ZT"),y=i("phBc"),h=i("PeBf"),j=i("mhtd"),O=i("TobM"),N=i("e1TJ"),S=i("mwIZ"),_=i.n(S),w=i("g4pe"),P=i.n(w),F=i("nKUr"),x=function(e){var n=e.video,i=e.pageType,t=e.adTagUrl,r=_()(n,"metadata.slug"),d=_()(n,"objectRelations[0].legacyId");return Object(F.jsxs)(o.Fragment,{children:[Object(F.jsx)(P.a,{children:Object(F.jsx)("script",{async:!0,"custom-element":"amp-ima-video",src:"https://cdn.ampproject.org/v0/amp-ima-video-0.1.js"},"amp-ima-video")}),Object(F.jsx)("amp-analytics",{type:"gtag","data-credentials":"include",children:Object(F.jsx)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify({vars:{gtag_id:g.AMP_GTAG_ID,config:Object(a.a)({},g.AMP_GTAG_ID,{groups:"default",send_page_view:!1,custom_map:{metric2:"Video_View",dimension1:"Page_Type",dimension2:"Object_Id",dimension10:"Page_Platform",dimension40:"Video_Id"}})},triggers:{videoPlay:{on:"video-play",selector:"amp-ima-video#".concat(r),vars:{method:"Google",event_name:"videoPlay",event_category:"Video",event_action:"Playback",event_label:"Video View",Video_View:1,Page_Type:i,Object_Id:d,Page_Platform:"AMP",Video_Id:n.videoId}},videoPause:{on:"video-pause",selector:"amp-ima-video#".concat(r),vars:{method:"Google",event_name:"videoPause",event_category:"Video",event_action:"Pause",event_label:"Video Pause"}}}})}})}),Object(F.jsxs)("amp-ima-video",{id:r,"data-tag":t,layout:"responsive","data-poster":_()(n,"thumbnails[0].url"),height:_()(n,"assets[0].height"),width:_()(n,"assets[0].width"),title:_()(n,"metadata.name"),children:[Object(F.jsx)("source",{src:_()(n,"refs.m3uUrl"),type:"application/vnd.apple.mpegurl"}),Object(F.jsx)("source",{src:_()(n,"assets[0].url"),type:"video/mp4"})]})]})},I=i("lfJx");function V(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function T(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?V(Object(i),!0).forEach((function(n){Object(a.a)(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):V(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}var D=u()({loader:function(){return Promise.all([i.e(0),i.e(49),i.e(10),i.e(129)]).then(i.bind(null,"SQVt"))},loading:function(){return Object(F.jsx)(E,{})},ssr:!1,loadableGenerated:{webpack:function(){return["SQVt"]},modules:["../components/VideoPlayerLoader.js -> ./video-player/V7Player"]}}),E=l.a.forwardRef((function(e,n){return Object(F.jsxs)("div",{ref:n,className:"jsx-13587360 video-player-loading",children:[Object(F.jsxs)(y.b,{aspectRatio:"16:9",children:[Object(F.jsx)("div",{className:"jsx-13587360 loading-spinner",children:Object(F.jsx)(h.IconLoadingSpinner,{color:"white"})}),Object(F.jsx)("div",{className:"jsx-13587360 red-circle",children:Object(F.jsx)("div",{className:"jsx-13587360 play-triangle"})})]}),Object(F.jsx)(d.a,{id:"13587360",children:[".video-player-loading.jsx-13587360{position:relative;background:black;}",".video-player-loading.jsx-13587360 .aspect-ratio-child{overflow:hidden;}",".loading-spinner.jsx-13587360{position:absolute;z-index:20001;bottom:0;left:0;}",".red-circle.jsx-13587360{height:3.6em;width:3.6em;background-color:rgb(191,19,19);border-radius:50%;z-index:2;font-size:1.5em;cursor:pointer;margin:auto;position:absolute;bottom:0px;left:0px;right:0px;top:0px;}",".play-triangle.jsx-13587360{top:0.95em;left:1.3em;border-top:0.85em solid transparent;border-bottom:0.85em solid transparent;border-left:1.35em solid white;position:absolute;}"]})]})})),L=function(e){var n,i,t,a,r=Object(N.c)(),d=r.adPageType,l=r.pageType,s=Object(O.b)(),u=e.video,c=e.analytics.playerContext,v=null!==(n=null!==d&&void 0!==d?d:l)&&void 0!==n?n:"unknown",f=null!==(i=null===u||void 0===u?void 0:u.videoId)&&void 0!==i?i:"",p=null!==(t=null===u||void 0===u||null===(a=u.metadata)||void 0===a?void 0:a.url)&&void 0!==t?t:"",b=Object(o.useState)(Object(k.o)({isMobile:!1,videoId:f,videoUrl:p,pageType:v,playerContext:c,isAmp:s})),y=b[0],h=b[1];return Object(o.useEffect)((function(){var e=m()(window.location.href,!0).query;h(Object(k.o)({isMobile:window.innerWidth<=g.MOBILE_WIDTH_THRESHOLD,videoId:f,videoUrl:p,pageType:v,playerContext:c,isAmp:s,queryParams:e}))}),[v,s,c,f,p]),s?Object(F.jsx)(x,{pageType:l,video:u,adTagUrl:y}):Object(F.jsx)(j.a,{type:"video",params:{id:f},children:Object(F.jsx)(D,T({},T(T({},e),{},{video:u,adTagUrl:y})))})};n.a=function(e){var n,i,a,r,d=Object(O.b)(),l=Object(I.d)({rootMargin:"200px 0px",triggerOnce:!0}),s=Object(t.a)(l,2),u=s[0],c=s[1],m=Object(o.useState)({}),f=m[0],g=m[1],y=Object(o.useState)(!1),h=y[0],j=y[1],N=e.handleSwitchVideo,S=e.video,_=Object(o.useCallback)((function(e){var n=e.videoId,i=e.skipInitialAd,t=e.muted,a=e.url;N?N({url:a}):g({videoId:n,autoplay:!0,skipInitialAd:i,muted:t,slug:"",video:!1}),j(!0)}),[N]),w=T(T({},e),f),P=w.slug,x=w.videoId,V=w.url,D=w.video,A=P||x||!V?P:Object(k.vd)(V),C=Object(b.a)(),M=(c||!C)&&!d,U=Object(v.a)(p.a,{variables:{slug:A,videoId:x},skip:D||M}),R=U.data,G=U.previousData,q=U.loading;if(M||q&&!D&&!R&&!G)return Object(F.jsx)(E,{ref:u});if(D)return Object(F.jsx)(L,T({},T(T({},e),{},{slug:A,onVideoChangeRequest:_})));var z=(null===G||void 0===G?void 0:G.videoPlayerProps)||S,H=null!==(n=null!==(i=null===R||void 0===R?void 0:R.videoPlayerProps)&&void 0!==i?i:z)&&void 0!==n?n:{},Q=H.videoId===x&&null!==H&&void 0!==H&&null!==(a=H.metadata)&&void 0!==a&&a.networks[0]?T(T({},f),{},{overrideAutoplaySetting:h}):{};return"published"===(null===H||void 0===H||null===(r=H.metadata)||void 0===r?void 0:r.state)?Object(F.jsx)(L,T({},T(T(T({},e),Q),{},{slug:A,video:H,onVideoChangeRequest:_,loadingNextVideo:q}))):null}},DiiX:function(e,n){var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"VideoPlayerProps"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"slug"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"videoId"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"videoPlayerProps"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"slug"}}},{kind:"Argument",name:{kind:"Name",value:"videoId"},value:{kind:"Variable",name:{kind:"Name",value:"videoId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"videoId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"metadata"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"slug"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"networks"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"duration"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"state"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"noads"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ageGate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"classification"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"extra"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"videoSeries"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"live"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"liveOnAir"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"refs"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"m3uUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"legacy"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"captions"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"customLinkCards"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"time"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"link"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"platform"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"vendor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageLink"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isSponsored"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"disclosure"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"price"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"objectLinkCards"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"time"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageLink"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isSponsored"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"disclosure"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"objectId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"platform"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"ziffcatLinkCards"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"time"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ziffcatId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageLink"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isSponsored"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"disclosure"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"assets"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"bitrate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"width"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"height"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"fps"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"thumbnails"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"styleUrl"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"objectRelations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"commonName"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"legacyId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"objectType"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"objects"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"recommendations"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"videoId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"thumbnailUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:1193}};i.loc.source={body:"query VideoPlayerProps($slug: String, $videoId: String) {\n  videoPlayerProps(slug: $slug, videoId: $videoId) {\n    id\n    videoId\n    metadata {\n      slug\n      url\n      title\n      networks\n      duration\n      state\n      noads\n      ageGate\n      classification\n    }\n    extra {\n      videoSeries\n      live\n      liveOnAir\n    }\n    refs {\n      m3uUrl\n      legacy\n      captions {\n        url\n      }\n      customLinkCards {\n        time\n        link\n        title\n        platform\n        vendor\n        imageLink\n        isSponsored\n        disclosure\n        price\n      }\n      objectLinkCards {\n        time\n        title\n        imageLink\n        isSponsored\n        disclosure\n        objectId\n        platform\n      }\n      ziffcatLinkCards {\n        time\n        ziffcatId\n        imageLink\n        isSponsored\n        disclosure\n      }\n    }\n    assets {\n      url\n      bitrate\n      width\n      height\n      fps\n    }\n    thumbnails {\n      url\n      styleUrl\n    }\n    objectRelations {\n      commonName\n      legacyId\n      objectType\n    }\n    objects {\n      id\n      url\n    }\n    recommendations {\n      title\n      videoId\n      thumbnailUrl\n      url\n    }\n  }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}};function t(e,n){if("FragmentSpread"===e.kind)n.add(e.name.value);else if("VariableDefinition"===e.kind){var i=e.type;"NamedType"===i.kind&&n.add(i.name.value)}e.selectionSet&&e.selectionSet.selections.forEach((function(e){t(e,n)})),e.variableDefinitions&&e.variableDefinitions.forEach((function(e){t(e,n)})),e.definitions&&e.definitions.forEach((function(e){t(e,n)}))}var a={};function r(e,n){for(var i=0;i<e.definitions.length;i++){var t=e.definitions[i];if(t.name&&t.name.value==n)return t}}i.definitions.forEach((function(e){if(e.name){var n=new Set;t(e,n),a[e.name.value]=n}})),e.exports=i,e.exports.VideoPlayerProps=function(e,n){var i={kind:e.kind,definitions:[r(e,n)]};e.hasOwnProperty("loc")&&(i.loc=e.loc);var t=a[n]||new Set,d=new Set,o=new Set;for(t.forEach((function(e){o.add(e)}));o.size>0;){var l=o;o=new Set,l.forEach((function(e){d.has(e)||(d.add(e),(a[e]||new Set).forEach((function(e){o.add(e)})))}))}return d.forEach((function(n){var t=r(e,n);t&&i.definitions.push(t)})),i}(i,"VideoPlayerProps"),i.documentId="ef401f728f7976541dd0c9bd7e337fbec8c3cb4fec5fa64e3d733d838d608e34"},O4nQ:function(e,n,i){"use strict";var t=i("/GRZ"),a=i("i2R6"),r=i("oI91");function d(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?d(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):d(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){var i="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,n){if(!e)return;if("string"===typeof e)return s(e,n);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return s(e,n)}(e))||n&&e&&"number"===typeof e.length){i&&(e=i);var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,d=!0,o=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return d=e.done,e},e:function(e){o=!0,r=e},f:function(){try{d||null==i.return||i.return()}finally{if(o)throw r}}}}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var i=0,t=new Array(n);i<n;i++)t[i]=e[i];return t}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u,c=(u=i("q1tI"))&&u.__esModule?u:{default:u},m=i("8L3h"),v=i("UKv4");var f=[],p=[],k=!1;function g(e){var n=e(),i={loading:!0,loaded:null,error:null};return i.promise=n.then((function(e){return i.loading=!1,i.loaded=e,e})).catch((function(e){throw i.loading=!1,i.error=e,e})),i}var b=function(){function e(n,i){t(this,e),this._loadFn=n,this._opts=i,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var n=this._res,i=this._opts;n.loading&&("number"===typeof i.delay&&(0===i.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),i.delay)),"number"===typeof i.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),i.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(n){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=o(o({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var n=this;return this._callbacks.add(e),function(){n._callbacks.delete(e)}}}]),e}();function y(e){return function(e,n){var i=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},n);i.suspense&&(i.lazy=c.default.lazy(i.loader));var t=null;function a(){if(!t){var n=new b(e,i);t={getCurrentValue:n.getCurrentValue.bind(n),subscribe:n.subscribe.bind(n),retry:n.retry.bind(n),promise:n.promise.bind(n)}}return t.promise()}if(!k&&"function"===typeof i.webpack&&!i.suspense){var r=i.webpack();p.push((function(e){var n,i=l(r);try{for(i.s();!(n=i.n()).done;){var t=n.value;if(-1!==e.indexOf(t))return a()}}catch(d){i.e(d)}finally{i.f()}}))}var d=i.suspense?function(e,n){return c.default.createElement(i.lazy,o(o({},e),{},{ref:n}))}:function(e,n){a();var r=c.default.useContext(v.LoadableContext),d=m.useSubscription(t);return c.default.useImperativeHandle(n,(function(){return{retry:t.retry}}),[]),r&&Array.isArray(i.modules)&&i.modules.forEach((function(e){r(e)})),c.default.useMemo((function(){return d.loading||d.error?c.default.createElement(i.loading,{isLoading:d.loading,pastDelay:d.pastDelay,timedOut:d.timedOut,error:d.error,retry:t.retry}):d.loaded?c.default.createElement(function(e){return e&&e.__esModule?e.default:e}(d.loaded),e):null}),[e,d])};return d.preload=function(){return!i.suspense&&a()},d.displayName="LoadableComponent",c.default.forwardRef(d)}(g,e)}function h(e,n){for(var i=[];e.length;){var t=e.pop();i.push(t(n))}return Promise.all(i).then((function(){if(e.length)return h(e,n)}))}y.preloadAll=function(){return new Promise((function(e,n){h(f).then(e,n)}))},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(n){var i=function(){return k=!0,n()};h(p,e).then(i,i)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var j=y;n.default=j},UKv4:function(e,n,i){"use strict";var t;Object.defineProperty(n,"__esModule",{value:!0}),n.LoadableContext=void 0;var a=((t=i("q1tI"))&&t.__esModule?t:{default:t}).default.createContext(null);n.LoadableContext=a},Vvt1:function(e,n,i){e.exports=i("rqUP")},rqUP:function(e,n,i){"use strict";var t=i("oI91");function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}Object.defineProperty(n,"__esModule",{value:!0}),n.noSSR=l,n.default=function(e,n){var i=d.default,t={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?t.loader=function(){return e}:"function"===typeof e?t.loader=e:"object"===typeof e&&(t=r(r({},t),e));var a=t=r(r({},t),n);if(a.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(a.suspense)return i(a);t.loadableGenerated&&delete(t=r(r({},t),t.loadableGenerated)).loadableGenerated;if("boolean"===typeof t.ssr){if(!t.ssr)return delete t.ssr,l(i,t);delete t.ssr}return i(t)};o(i("q1tI"));var d=o(i("O4nQ"));function o(e){return e&&e.__esModule?e:{default:e}}function l(e,n){return delete n.webpack,delete n.modules,e(n)}}}]);
//# sourceMappingURL=771d95d40614ae00dcdb57521e3cd516ce3f8efd.d7bbb3a34d673d0eb729.js.map