import{c,a as p,m as l}from"./vuex.esm.8fdeb4b6.js";import{A as m,T as u}from"./TitleDescription.4a5f369f.js";import{C as _}from"./Card.db2ec99d.js";import{C as d}from"./Tabs.a309f2c7.js";import{C as f}from"./Tooltip.68a8a92b.js";import{C as n,S as h}from"./Schema.ccd096a0.js";import{n as r}from"./_plugin-vue2_normalizer.61652a7c.js";import{a as b}from"./index.4b67d3e2.js";import"./WpTable.e2f412d1.js";import"./helpers.de7566d0.js";import"./index.ec9852b3.js";import"./isArrayLikeObject.9b4b678d.js";import"./default-i18n.3a91e0e5.js";import"./attachments.437fe1f4.js";import"./cleanForSlug.51ef7354.js";import"./constants.0d8c074c.js";import"./Caret.d93b302e.js";import"./html.14f2a8b9.js";import"./Index.5f7ddb17.js";import"./JsonValues.870a4901.js";import"./MaxCounts.12b45bab.js";import"./SaveChanges.e40a9083.js";import"./RadioToggle.e6e54396.js";import"./RobotsMeta.5a1b6c31.js";import"./Checkbox.60ba2f56.js";import"./Checkmark.f26f6201.js";import"./Row.830f6397.js";import"./SettingsRow.edbb3005.js";import"./GoogleSearchPreview.853cda22.js";import"./HtmlTagsEditor.70d3cf0a.js";import"./Editor.3e312d73.js";import"./_commonjsHelpers.f84db168.js";import"./UnfilteredHtml.7bdb1712.js";import"./Slide.15a07930.js";import"./TruSeoScore.339d22e1.js";import"./Information.93f80cbf.js";import"./Textarea.ce149d81.js";import"./Blur.f36c594d.js";import"./Index.21aaf27c.js";const g={components:{CustomFields:n,CustomFieldsLite:n},props:{type:{type:String,required:!0},object:{type:Object,required:!0},options:{type:Object,required:!0},showBulk:Boolean},computed:{...c(["isUnlicensed"])}};var v=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-sa-ct-custom-fields-view"},[t.isUnlicensed?t._e():e("custom-fields",{attrs:{type:t.type,object:t.object,options:t.options,"show-bulk":t.showBulk}}),t.isUnlicensed?e("custom-fields-lite",{attrs:{type:t.type,object:t.object,options:t.options,"show-bulk":t.showBulk}}):t._e()],1)},y=[],C=r(g,v,y,!1,null,null,null,null);const $=C.exports;const S={components:{Advanced:m,CoreCard:_,CoreMainTabs:d,CoreTooltip:f,CustomFields:$,Schema:h,SvgCircleQuestionMark:b,TitleDescription:u},data(){return{internalDebounce:null,strings:{label:this.$t.__("Label:",this.$td),name:this.$t.__("Slug:",this.$td)},tabs:[{slug:"title-description",name:this.$t.__("Title & Description",this.$td),access:"aioseo_search_appearance_settings",pro:!1},{slug:"schema",name:this.$t.__("Schema Markup",this.$td),access:"aioseo_search_appearance_settings",pro:!0},{slug:"custom-fields",name:this.$t.__("Custom Fields",this.$td),access:"aioseo_search_appearance_settings",pro:!0},{slug:"advanced",name:this.$t.__("Advanced",this.$td),access:"aioseo_search_appearance_settings",pro:!1}]}},computed:{...p(["options","dynamicOptions","settings"]),postTypes(){return this.$aioseo.postData.postTypes.filter(o=>o.name!=="attachment")}},methods:{...l(["changeTab"]),processChangeTab(o,t){this.internalDebounce||(this.internalDebounce=!0,this.changeTab({slug:`${o}SA`,value:t}),setTimeout(()=>{this.internalDebounce=!1},50))}}};var A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"aioseo-search-appearance-content-types"},t._l(t.postTypes,function(s,a){return e("core-card",{key:a,attrs:{slug:`${s.name}SA`},scopedSlots:t._u([{key:"header",fn:function(){return[e("div",{staticClass:"icon dashicons",class:`${s.icon||"dashicons-admin-post"}`}),t._v(" "+t._s(s.label)+" "),e("core-tooltip",{attrs:{"z-index":"99999"},scopedSlots:t._u([{key:"tooltip",fn:function(){return[e("div",{staticClass:"aioseo-description"},[t._v(" "+t._s(t.strings.label)+" "),e("strong",[t._v(t._s(s.label))]),e("br"),t._v(" "+t._s(t.strings.name)+" "),e("strong",[t._v(t._s(s.name))]),e("br")])]},proxy:!0}],null,!0)},[e("svg-circle-question-mark")],1)]},proxy:!0},{key:"tabs",fn:function(){return[e("core-main-tabs",{attrs:{tabs:t.tabs,showSaveButton:!1,active:t.settings.internalTabs[`${s.name}SA`],internal:""},on:{changed:i=>t.processChangeTab(s.name,i)}})]},proxy:!0}],null,!0)},[e("transition",{attrs:{name:"route-fade",mode:"out-in"}},[e(t.settings.internalTabs[`${s.name}SA`],{tag:"component",attrs:{object:s,separator:t.options.searchAppearance.global.separator,options:t.dynamicOptions.searchAppearance.postTypes[s.name],type:"postTypes"}})],1)],1)}),1)},k=[],x=r(S,A,k,!1,null,null,null,null);const ut=x.exports;export{ut as default};
