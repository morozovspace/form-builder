(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{203:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return o.default}}),t.regex=t.ref=t.len=t.req=void 0;var n,o=(n=r(212))&&n.__esModule?n:{default:n};function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var l=function(e){if(Array.isArray(e))return!!e.length;if(null==e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===f(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=l;t.len=function(e){return Array.isArray(e)?e.length:"object"===f(e)?Object.keys(e).length:String(e).length};t.ref=function(e,t,r){return"function"==typeof e?e.call(t,r):r[e]};t.regex=function(e,t){return(0,o.default)({type:e},(function(e){return!l(e)||t.test(e)}))}},204:function(e,t,r){var content=r(209);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(55).default)("255c3334",content,!0,{sourceMap:!1})},205:function(e,t,r){"use strict";r.r(t);var n={props:{field:{type:Object,default:function(){return{id:"defaultInput",type:"Input",name:"defaultName",label:"defaultLabel",validation:"",params:{type:"text",inputmode:"text"}}}}}},o=r(15),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",[e._v("\n  "+e._s(e.field.label)+"\n  "),r("input",{attrs:{type:e.field.params.type||"text",inputmode:e.field.params.inputmode||"text"},on:{input:function(t){return e.$emit("input",t.target.value)}}})])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Input:r(205).default})},206:function(e,t,r){"use strict";r.r(t);var n={props:{field:{type:Object,default:function(){return{id:"defaultSelect",type:"Select",name:"Default name",label:"Default label",params:{options:[]}}}}},data:function(){return{selected:null}}},o=r(15),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("label",[e._v("\n    "+e._s(e.field.label)+"\n    "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{id:e.field.id+"_"+e.field.label,name:e.field.label},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selected=t.target.multiple?r:r[0]},function(t){return e.$emit("input",e.selected)}]}},e._l(e.field.params.options,(function(option){return r("option",{key:option.id,domProps:{value:option.id}},[e._v("\n        "+e._s(option.title)+"\n      ")])})),0)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Select:r(206).default})},207:function(e,t,r){"use strict";r.r(t);var n={props:{field:{type:Object,default:function(){return{id:"defaultInput",type:"Input",name:"defaultName",label:"defaultLabel",validation:"",params:{type:"text",inputmode:"text"}}}}}},o=r(15),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",[e._v("\n  "+e._s(e.field.label)+"\n  "),r("textarea",{attrs:{type:e.field.params.type||"text",inputmode:e.field.params.inputmode||"text"},on:{input:function(t){return e.$emit("input",t.target.value)}}})])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Textarea:r(207).default})},208:function(e,t,r){"use strict";r(204)},209:function(e,t,r){(t=r(54)(!1)).push([e.i,"*{padding:0;margin:0;border:0}*,:after,:before{box-sizing:border-box}:active,:focus,a:active,a:focus{outline:none}aside,footer,header,nav{display:block}body,html{height:100%;width:100%;font-size:100%;line-height:1;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%}button,input,textarea{font-family:inherit}input::-ms-clear{display:none}button{cursor:pointer}button::-moz-focus-inner{padding:0;border:0}a,a:hover,a:visited{text-decoration:none}ul li{list-style:none}img{vertical-align:top}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}.index-page__wrapper{position:relative;padding:100px 30px;display:flex;justify-content:center;width:100%;box-sizing:border-box}",""]),e.exports=t},210:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return x.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return j.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return P.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return M.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return S.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return z.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return A.default}}),t.helpers=void 0;var n=V(r(211)),o=V(r(214)),f=V(r(215)),l=V(r(216)),c=V(r(217)),d=V(r(218)),m=V(r(219)),v=V(r(220)),y=V(r(221)),h=V(r(222)),x=V(r(223)),_=V(r(224)),O=V(r(225)),j=V(r(226)),P=V(r(227)),w=V(r(228)),$=V(r(229)),M=V(r(230)),S=V(r(231)),z=V(r(232)),A=V(r(233)),D=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var desc=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};desc.get||desc.set?Object.defineProperty(t,r,desc):t[r]=e[r]}return t.default=e,t}(r(203));function V(e){return e&&e.__esModule?e:{default:e}}t.helpers=D},211:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(203).regex)("alpha",/^[a-zA-Z]*$/);t.default=n},212:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n="web"===e.env.BUILD?r(213).withParams:r(135).withParams;t.default=n}).call(this,r(88))},213:function(e,t,r){"use strict";(function(e){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var n="undefined"!=typeof window?window:void 0!==e?e:{},o=n.vuelidate?n.vuelidate.withParams:function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))};t.withParams=o}).call(this,r(29))},214:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(203).regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},215:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(203).regex)("numeric",/^[0-9]*$/);t.default=n},216:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(203);t.default=function(e,t){return(0,n.withParams)({type:"between",min:e,max:t},(function(r){return!(0,n.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))}},217:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(203).regex)("email",/^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/);t.default=n},218:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(203),o=(0,n.withParams)({type:"ipAddress"},(function(e){if(!(0,n.req)(e))return!0;if("string"!=typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(f)}));t.default=o;var f=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},219:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(203);t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,n.withParams)({type:"macAddress"},(function(t){if(!(0,n.req)(t))return!0;if("string"!=typeof t)return!1;var r="string"==typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(o)}))};var o=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},220:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(203);t.default=function(e){return(0,n.withParams)({type:"maxLength",max:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)<=e}))}},221:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(203);t.default=function(e){return(0,n.withParams)({type:"minLength",min:e},(function(t){return!(0,n.req)(t)||(0,n.len)(t)>=e}))}},222:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(203),o=(0,n.withParams)({type:"required"},(function(e){return"string"==typeof e?(0,n.req)(e.trim()):(0,n.req)(e)}));t.default=o},223:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(203);t.default=function(e){return(0,n.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},224:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(203);t.default=function(e){return(0,n.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,n.ref)(e,this,r)||(0,n.req)(t)}))}},225:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(203);t.default=function(e){return(0,n.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,n.ref)(e,this,r)}))}},226:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(203).regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i);t.default=n},227:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(203);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,n)}),!1)}))}},228:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(203);t.default=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,n.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,n)}),!0)}))}},229:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(203);t.default=function(e){return(0,n.withParams)({type:"not"},(function(t,r){return!(0,n.req)(t)||!e.call(this,t,r)}))}},230:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(203);t.default=function(e){return(0,n.withParams)({type:"minValue",min:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))}},231:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(203);t.default=function(e){return(0,n.withParams)({type:"maxValue",max:e},(function(t){return!(0,n.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))}},232:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(203).regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},233:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=(0,r(203).regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},234:function(e,t,r){"use strict";r.r(t);r(30),r(32),r(31),r(21),r(22),r(53),r(20),r(18),r(40);var n=r(3),o=(r(17),r(41),r(10),r(27)),f=r(126),l=r(210),c=r(205),d=r(206),m=r(207);function v(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,f=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return f=e.done,e},e:function(e){l=!0,o=e},f:function(){try{f||null==r.return||r.return()}finally{if(l)throw o}}}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var _={components:{Input:c.default,Select:d.default,Textarea:m.default},mixins:[f.validationMixin],props:{config:{type:Array,default:function(){return[]}}},data:function(){return{validators:x({},l),formValues:{},errors:!1}},computed:{disabled:function(){return this.$v.formValues.$error}},created:function(){this.setValues(this.config,this.formValues,null)},methods:{setValues:function(e,t,r){var n=this;e.map((function(e){n.$set(t,e.id,r)}))},updateField:function(e,t){this.formValues[e]=t,this.$v.formValues[e]&&this.$v.formValues[e].$touch()},prepareData:function(e){return new Promise((function(t,r){try{for(var n=new FormData,o=0,f=Object.keys(e);o<f.length;o++){var l=f[o];n.append(l,JSON.stringify(e[l]))}return t(n)}catch(e){return r(e)}}))},submit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.prepareData(e.formValues);case 3:data=t.sent,e.$v.$touch(),e.$v.formValues.$invalid||e.$emit("submit",data),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()}},validations:function(){var e=this;try{var t={};return this.config.map((function(r){if(r.validation&&r.validation.length){t[r.id]={};var n,o=v(r.validation);try{for(o.s();!(n=o.n()).done;){var f=n.value;t[r.id][f.name?f.name:f]=f.args?e.validators[f.name](f.args):e.validators[f]}}catch(e){o.e(e)}finally{o.f()}}})),{formValues:t}}catch(e){}}},O=r(15),component=Object(O.a)(_,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[e._l(e.config,(function(t){return r("div",{key:t.id},[r(t.type,{tag:"component",attrs:{name:t.id,field:t},on:{input:function(r){return e.updateField(t.id,r)}}}),e._v(" "),e.$v.formValues[t.id]&&e.$v.formValues[t.id].$error?r("div",[e._v("\n      Field is invalid.\n    ")]):e._e()],1)})),e._v(" "),r("div",[r("button",{attrs:{type:"submit",disabled:e.disabled}},[e._v("Submit")])])],2)}),[],!1,null,null,null);t.default=component.exports},235:function(e,t,r){"use strict";r.r(t);r(40);var n=r(3),o={data:function(){return{formConfig:[],ready:!1}},created:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.get("./form-example-config.json");case 3:r=t.sent,e.formConfig=r.data,e.ready=!0,t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})))()},methods:{submit:function(data){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.$axios.post("/",data);case 3:t.next=7;break;case 5:t.prev=5,t.t0=t.catch(0);case 7:case"end":return t.stop()}}),t,null,[[0,5]])})))()}}},f=(r(208),r(15)),component=Object(f.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("main",{staticClass:"index-page__wrapper"},[this.ready?t("form-builder",{attrs:{config:this.formConfig},on:{submit:this.submit}}):this._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FormBuilder:r(234).default})}}]);