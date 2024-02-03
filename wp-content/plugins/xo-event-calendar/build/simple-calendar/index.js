(()=>{"use strict";var e,l={734:(e,l,a)=>{const n=window.wp.blocks,t=window.wp.i18n,o=window.wp.element,r=window.wp.blockEditor,v=window.wp.components,c=window.wp.data,i=window.wp.serverSideRender;var d=a.n(i);const u=(0,o.createElement)(v.SVG,{width:20,height:20,viewBox:"0 0 5.292 5.292"},(0,o.createElement)(v.Path,{d:"M1.323 2.341h.529v.529h-.529zM2.381 2.341h.529v.529h-.529zM3.44 2.341h.529v.529H3.44zM3.44 3.135h.529v.529H3.44zM3.44 3.928h.529v.529H3.44zM2.381 3.928h.529v.529h-.529zM1.323 3.928h.529v.529h-.529zM1.323 3.135h.529v.529h-.529zM2.381 3.135h.529v.529h-.529z"}),(0,o.createElement)(v.Path,{d:"M1.223.305a.433.433 0 0 0-.428.432v.281H.529v3.969h4.234V1.018h-.267V.745a.43.43 0 0 0-.428-.43.431.431 0 0 0-.427.43v.273h-.092V.745a.432.432 0 0 0-.43-.43.431.431 0 0 0-.428.43v.273H2.6V.745a.431.431 0 0 0-.428-.43.431.431 0 0 0-.428.43v.273h-.093V.737a.433.433 0 0 0-.428-.432Zm0 .258c.095 0 .172.076.172.174v.734a.172.172 0 0 1-.172.174.17.17 0 0 1-.17-.174V.737a.17.17 0 0 1 .17-.174zm.949.01c.095 0 .17.074.17.172v.736a.168.168 0 0 1-.17.172A.17.17 0 0 1 2 1.48V.745a.17.17 0 0 1 .172-.172Zm.947 0a.17.17 0 0 1 .172.172v.736a.17.17 0 0 1-.172.172.168.168 0 0 1-.17-.172V.745c0-.098.075-.172.17-.172zm.95 0a.17.17 0 0 1 .171.172v.736a.17.17 0 0 1-.172.172.168.168 0 0 1-.17-.172V.745c0-.098.075-.172.17-.172ZM.793 2.076h3.704v2.646H.794Z"}));(0,n.registerBlockType)("xo-event-calendar/simple-calendar",{title:(0,t.__)("Simple Calendar","xo-event-calendar"),description:(0,t.__)("Simple calendar for XO Event Calendar.","xo-event-calendar"),edit:function({attributes:e,setAttributes:l}){const a=(0,c.useSelect)((e=>{const l=e("core").getEntityRecord("root","site");return l?.xo_event_calendar_holiday_settings}),[]),n=a?Object.keys(a):[];if(0===e.year){const l=new Date;e.year=l.getFullYear(),e.month=l.getMonth()+1}const i=(0,o.createElement)(r.InspectorControls,null,(0,o.createElement)(v.PanelBody,{title:(0,t.__)("Calendar settings","xo-event-calendar"),initialOpen:!1},(0,o.createElement)(v.RangeControl,{label:(0,t.__)("Number of months to display","xo-event-calendar"),value:e.months,onChange:e=>l({months:e}),isShiftStepEnabled:!0,shiftStep:12,step:1,min:1,max:12}),(0,o.createElement)(v.RangeControl,{label:(0,t.__)("Columns","xo-event-calendar"),value:e.columns,onChange:e=>l({columns:e}),isShiftStepEnabled:!0,shiftStep:4,step:1,min:1,max:4}),(0,o.createElement)(v.SelectControl,{label:(0,t.__)("Start of week","xo-event-calendar"),value:e.startOfWeek,onChange:e=>l({startOfWeek:parseInt(e)}),options:[{value:-1,label:(0,t.__)("General Settings","xo-event-calendar")},{value:0,label:(0,t.__)("Sunday","xo-event-calendar")},{value:1,label:(0,t.__)("Monday","xo-event-calendar")},{value:2,label:(0,t.__)("Tuesday","xo-event-calendar")},{value:3,label:(0,t.__)("Wednesday","xo-event-calendar")},{value:4,label:(0,t.__)("Thursday","xo-event-calendar")},{value:5,label:(0,t.__)("Friday","xo-event-calendar")},{value:6,label:(0,t.__)("Saturday","xo-event-calendar")}]}),(0,o.createElement)(v.ToggleControl,{label:(0,t.__)("Feed month","xo-event-calendar"),checked:e.navigation,onChange:e=>l({navigation:e})}),e.navigation&&(0,o.createElement)(v.Flex,{direction:"row",align:"baseline"},(0,o.createElement)(v.FlexBlock,null,(0,o.createElement)(v.SelectControl,{label:(0,t.__)("Previous month","xo-event-calendar"),value:e.prevMonths,onChange:e=>l({prevMonths:parseInt(e)}),options:[{value:-1,label:(0,t.__)("No limit","xo-event-calendar")},{value:0,label:(0,t.__)("None","xo-event-calendar")},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"},{value:10,label:"10"},{value:11,label:"11"},{value:12,label:"12"}]})),(0,o.createElement)(v.FlexBlock,null,(0,o.createElement)(v.SelectControl,{label:(0,t.__)("Next month","xo-event-calendar"),value:e.nextMonths,onChange:e=>l({nextMonths:parseInt(e)}),options:[{value:-1,label:(0,t.__)("No limit","xo-event-calendar")},{value:0,label:(0,t.__)("None","xo-event-calendar")},{value:1,label:"1"},{value:2,label:"2"},{value:3,label:"3"},{value:4,label:"4"},{value:5,label:"5"},{value:6,label:"6"},{value:7,label:"7"},{value:8,label:"8"},{value:9,label:"9"},{value:10,label:"10"},{value:11,label:"11"},{value:12,label:"12"}]}))),(0,o.createElement)(v.ToggleControl,{label:(0,t.__)("Specify initial display month","xo-event-calendar"),checked:e.selectedMonth,onChange:e=>l({selectedMonth:e})}),e.selectedMonth&&(0,o.createElement)(v.Flex,{direction:"row",align:"baseline"},(0,o.createElement)(v.FlexItem,null,(0,o.createElement)(v.SelectControl,{value:e.month,onChange:e=>l({month:parseInt(e)}),options:[{value:1,label:(0,t.__)("January","xo-event-calendar")},{value:2,label:(0,t.__)("February","xo-event-calendar")},{value:3,label:(0,t.__)("March","xo-event-calendar")},{value:4,label:(0,t.__)("April","xo-event-calendar")},{value:5,label:(0,t.__)("May","xo-event-calendar")},{value:6,label:(0,t.__)("June","xo-event-calendar")},{value:7,label:(0,t.__)("July","xo-event-calendar")},{value:8,label:(0,t.__)("August","xo-event-calendar")},{value:9,label:(0,t.__)("September","xo-event-calendar")},{value:10,label:(0,t.__)("October","xo-event-calendar")},{value:11,label:(0,t.__)("November","xo-event-calendar")},{value:12,label:(0,t.__)("December","xo-event-calendar")}]})),(0,o.createElement)(v.FlexBlock,null,(0,o.createElement)(v.__experimentalNumberControl,{value:e.year,onChange:e=>l({year:parseInt(e)}),isShiftStepEnabled:!0,shiftStep:10,step:1,min:1900,max:3e3}))),(0,o.createElement)(v.ToggleControl,{label:(0,t.__)("Default title format","xo-event-calendar"),checked:e.defaultTitle,onChange:e=>l({defaultTitle:e})}),!e.defaultTitle&&(0,o.createElement)(v.TextControl,{label:(0,t.__)("Format","xo-event-calendar"),value:e.titleFormat,onChange:e=>l({titleFormat:e})}),(0,o.createElement)(v.ToggleControl,{label:(0,t.__)("Locale translation","xo-event-calendar"),checked:e.localeTranslation,onChange:e=>l({localeTranslation:e})})),(0,o.createElement)(v.PanelBody,{title:(0,t.__)("Holiday settings","xo-event-calendar"),initialOpen:!1},(0,o.createElement)(v.FormTokenField,{label:(0,t.__)("Holidays to display","xo-event-calendar"),onChange:e=>{l({holidays:e?e.join(" "):""})},value:e.holidays?e.holidays.split(" "):[],suggestions:n,__experimentalExpandOnFocus:!0})),(0,o.createElement)(r.PanelColorSettings,{title:(0,t.__)("Color","xo-event-calendar"),initialOpen:!1,disableCustomColors:!1,colorSettings:[{label:(0,t.__)("Caption text","xo-event-calendar"),value:e.captionTextColor,onChange:e=>{l({captionTextColor:e})}},{label:(0,t.__)("Caption background","xo-event-calendar"),value:e.captionBackgroundColor,onChange:e=>{l({captionBackgroundColor:e})}}]}));return(0,o.createElement)("div",(0,r.useBlockProps)(),i,(0,o.createElement)(v.Disabled,null,(0,o.createElement)(d(),{block:"xo-event-calendar/simple-calendar",attributes:{...e}})))},save:()=>null,icon:{foreground:"#782121",src:u}})}},a={};function n(e){var t=a[e];if(void 0!==t)return t.exports;var o=a[e]={exports:{}};return l[e](o,o.exports,n),o.exports}n.m=l,e=[],n.O=(l,a,t,o)=>{if(!a){var r=1/0;for(d=0;d<e.length;d++){for(var[a,t,o]=e[d],v=!0,c=0;c<a.length;c++)(!1&o||r>=o)&&Object.keys(n.O).every((e=>n.O[e](a[c])))?a.splice(c--,1):(v=!1,o<r&&(r=o));if(v){e.splice(d--,1);var i=t();void 0!==i&&(l=i)}}return l}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[a,t,o]},n.n=e=>{var l=e&&e.__esModule?()=>e.default:()=>e;return n.d(l,{a:l}),l},n.d=(e,l)=>{for(var a in l)n.o(l,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:l[a]})},n.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),(()=>{var e={29:0,422:0};n.O.j=l=>0===e[l];var l=(l,a)=>{var t,o,[r,v,c]=a,i=0;if(r.some((l=>0!==e[l]))){for(t in v)n.o(v,t)&&(n.m[t]=v[t]);if(c)var d=c(n)}for(l&&l(a);i<r.length;i++)o=r[i],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(d)},a=globalThis.webpackChunkxo_event_calendar=globalThis.webpackChunkxo_event_calendar||[];a.forEach(l.bind(null,0)),a.push=l.bind(null,a.push.bind(a))})();var t=n.O(void 0,[422],(()=>n(734)));t=n.O(t)})();