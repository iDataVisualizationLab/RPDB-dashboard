"use strict";(self.webpackChunkrpdb_dash=self.webpackChunkrpdb_dash||[]).push([[666],{98297:function(e,t,n){n.d(t,{ZP:function(){return v},Wz:function(){return f}});var r=n(72791),a=r.createContext(null),u=n(80184),i=n(29439),o=n(4942),c=n(1413),s=(n(65523),n(763),n(38664));function d(e,t){var n=t.type,r=t.path,a=t.isLoading,u=void 0!==a&&a,i=t.error,s=void 0!==i&&i,d=t.hasError,l=void 0!==d&&d,v=t.value;switch(n){case"LOADING_CHANGED":return(0,c.Z)((0,c.Z)({},e),{},(0,o.Z)({},r,(0,c.Z)((0,c.Z)({},e[r]),{},{isLoading:u})));case"VALUE_CHANGE":return(0,c.Z)((0,c.Z)({},e),{},(0,o.Z)({},r,(0,c.Z)((0,c.Z)({},e[r]),{},{value:v,isLoading:u,error:s,hasError:l})));case"INIT":return(0,c.Z)((0,c.Z)({},e),{},{isInit:v});default:throw new Error}}var l={loading:!1,error:!1,isInit:!1,surveyType:{},surveyLevel:{},section:{}},v=function(e){var t=e.children,n=e.name,o=(0,r.useReducer)(d,l),c=(0,i.Z)(o,2),v=c[0],f=c[1],h=(0,s.Mq)(n);(0,r.useEffect)((function(){if(!v.surveyType)try{f({type:"LOADING_CHANGED",path:"surveyType",isLoading:!0}),h.getSurveyType().then((function(e){var t=e.data;f({type:"VALUE_CHANGE",path:"surveyType",value:t,isLoading:!1})})).catch((function(e){f({type:"ERROR",path:"surveyType",isLoading:!1,error:e,hasError:!0})})),f({type:"LOADING_CHANGED",path:"surveyLevel",isLoading:!0}),h.getSurveyLevel().then((function(e){var t=e.data;f({type:"VALUE_CHANGE",path:"surveyLevel",value:t,isLoading:!1})})).catch((function(e){f({type:"ERROR",path:"surveyLevel",isLoading:!1,error:e,hasError:!0})}))}catch(e){}}),[]);var p=(0,r.useCallback)((function(e){return!!v[e]&&v[e].isLoading}),[v]),y=(0,r.useCallback)((function(e){return v[e]&&v[e].value?v[e].value:[]}),[v]),L=(0,r.useCallback)((function(e){f({type:"LOADING_CHANGED",path:"section",isLoading:!0}),h.getSection(e).then((function(e){var t=e.data;f({type:"VALUE_CHANGE",path:"section",value:t,isLoading:!1})})).catch((function(e){f({type:"ERROR",path:"section",isLoading:!1,error:e,hasError:!0})}))}),[v]),E=(0,r.useCallback)((function(e){return v.section&&v.section.value&&e===v.section.value.Section?v.section.value:{}}),[v]);return(0,u.jsx)(a.Provider,{value:{isLoading:p,getList:y,querySection:L,getSection:E},children:t})};function f(){return(0,r.useContext)(a)}},51639:function(e,t,n){n.r(t),n.d(t,{default:function(){return l}});var r=n(72791),a=n(36571),u=n(69783),i=n(42404),o=n(61862),c=n(98297),s=n(38664),d=n(80184);function l(e){var t=e.children,n=(0,i.useConfig)().appConfig,l=(0,o.useAuth)(),v=n||{},f=v.database,h=v.auth,p=void 0===h?{}:h,y=f||{},L=y.prod,E=void 0===L?{}:L,g=(y.dev,(p||{}).onAuthStateChanged);return(0,s.Mq)("api")||(0,s.ZF)("api",E.initConfig),(0,r.useEffect)((function(){(0,s.Mq)("api").onAuthFalse=function(){return g(l)}}),[]),(0,d.jsx)(c.ZP,{name:"api",children:(0,d.jsx)(a._,{dateAdapter:u.Z,children:t})})}},23318:function(e,t,n){t.__esModule=!0,t.default=function(e){var t=e.children;return u.default.createElement(r.default,null,u.default.createElement(a.default,null,t))};var r=i(n(13152)),a=i(n(51639)),u=i(n(72791));function i(e){return e&&e.__esModule?e:{default:e}}e.exports=t.default}}]);
//# sourceMappingURL=666.8a22e450.chunk.js.map