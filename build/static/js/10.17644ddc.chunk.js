(this.webpackJsonpkaizen=this.webpackJsonpkaizen||[]).push([[10],{1110:function(e,t,n){"use strict";n.r(t),n.d(t,"amplify_s3_image_picker",(function(){return h}));var r=n(46),i=n(150),o=n(36),a=n(416),c=n(33),u=(n(77),n(342),n(1278)),s=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function c(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},l=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},f=new i.a("S3ImagePicker"),h=function(){function e(e){var t=this;Object(r.k)(this,e),this.contentType="binary/octet-stream",this.level=a.a.Public,this.headerTitle=c.a.IMAGE_PICKER_TITLE,this.headerHint=c.a.IMAGE_PICKER_HINT,this.placeholderHint=c.a.IMAGE_PICKER_PLACEHOLDER_HINT,this.buttonText=c.a.IMAGE_PICKER_BUTTON_TEXT,this.handlePick=function(e){return s(t,void 0,void 0,(function(){var t,n,r,i,o,a,c,s,h,p;return l(this,(function(l){switch(l.label){case 0:n=(t=this).path,r=void 0===n?"":n,i=t.level,o=t.track,a=t.identityId,c=t.fileToKey,s=r+Object(u.b)(e,c),l.label=1;case 1:return l.trys.push([1,4,,5]),[4,Object(u.e)(s,e,i,o,e.type,f)];case 2:return l.sent(),h=this,[4,Object(u.c)(s,i,o,a,f)];case 3:return h.src=l.sent(),[3,5];case 4:throw p=l.sent(),f.error(p),new Error(p);case 5:return[2]}}))}))}}return e.prototype.render=function(){return Object(r.i)(r.b,null,Object(r.i)("slot",{name:"photo-picker"},Object(r.i)("amplify-photo-picker",{previewSrc:this.src,handleClick:this.handlePick,headerTitle:o.a.get(this.headerTitle),headerHint:o.a.get(this.headerHint),placeholderHint:o.a.get(this.placeholderHint),buttonText:o.a.get(this.buttonText)})))},e}()},1278:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return f}));var r=n(77),i=n(342),o=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{u(r.next(e))}catch(t){o(t)}}function c(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}u((r=r.apply(e,t||[])).next())}))},a=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(o){return function(c){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(c){o=[6,c],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,c])}}},c=new Set(["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","tif","tiff","webp"]),u=function(e,t){var n=e.name,r=e.size,i=e.type,o=encodeURI(n);return t&&((o="string"===typeof t?t:"function"===typeof t?t({name:n,size:r,type:i}):encodeURI(JSON.stringify(t)))||(o="empty_key")),o.replace(/\s/g,"_")},s=function(e,t,n,c,u){return o(void 0,void 0,void 0,(function(){var o,s;return a(this,(function(a){switch(a.label){case 0:if(!i.a||"function"!==typeof i.a.get)throw new Error(r.k);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i.a.get(e,{level:t,track:n,identityId:c})];case 2:return o=a.sent(),u.debug("Storage image get",o),[2,o];case 3:throw s=a.sent(),new Error(s);case 4:return[2]}}))}))},l=function(e,t,n,c,u){return o(void 0,void 0,void 0,(function(){var o,s;return a(this,(function(a){switch(a.label){case 0:if(!i.a||"function"!==typeof i.a.get)throw new Error(r.k);a.label=1;case 1:return a.trys.push([1,4,,5]),[4,i.a.get(e,{download:!0,level:t,track:n,identityId:c})];case 2:return o=a.sent(),u.debug(o),[4,(l=o.Body,new Promise((function(e,t){var n=new FileReader;n.onload=function(){e(n.result)},n.onerror=function(){t("Failed to read file!"),n.abort()},n.readAsText(l)})))];case 3:return[2,a.sent()];case 4:throw s=a.sent(),new Error(s);case 5:return[2]}var l}))}))},f=function(e,t,n,c,u,s){return o(void 0,void 0,void 0,(function(){var o,l;return a(this,(function(a){switch(a.label){case 0:if(!i.a||"function"!==typeof i.a.put)throw new Error(r.k);a.label=1;case 1:return a.trys.push([1,3,,4]),[4,i.a.put(e,t,{contentType:u,level:n,track:c})];case 2:return o=a.sent(),s.debug("Upload data",o),[3,4];case 3:throw l=a.sent(),new Error(l);case 4:return[2]}}))}))}}}]);
//# sourceMappingURL=10.17644ddc.chunk.js.map