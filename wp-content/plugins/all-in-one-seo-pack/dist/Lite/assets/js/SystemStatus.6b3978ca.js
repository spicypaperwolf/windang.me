import{m as r}from"./vuex.esm.8fdeb4b6.js";import{C as l}from"./Card.db2ec99d.js";import{G as m,a as c}from"./Row.830f6397.js";import{S as u}from"./Checkmark.f26f6201.js";import{e as d}from"./index.4b67d3e2.js";import{S as p}from"./Download.ef366516.js";import{T as _,a as f}from"./Row.2f03c6a0.js";import{n as h}from"./_plugin-vue2_normalizer.61652a7c.js";import"./Tooltip.68a8a92b.js";import"./_commonjsHelpers.f84db168.js";import"./Caret.d93b302e.js";import"./Slide.15a07930.js";const y={components:{CoreCard:l,GridColumn:m,GridRow:c,SvgCheckmark:u,SvgCopy:d,SvgDownload:p,TableColumn:_,TableRow:f},data(){return{copied:!1,emailError:null,emailAddress:null,sendingEmail:!1,strings:{systemStatusInfo:this.$t.__("System Status Info",this.$td),downloadSystemInfoFile:this.$t.__("Download System Info File",this.$td),copyToClipboard:this.$t.__("Copy to Clipboard",this.$td),emailDebugInformation:this.$t.__("Email Debug Information",this.$td),submit:this.$t.__("Submit",this.$td),wordPress:this.$t.__("WordPress",this.$td),serverInfo:this.$t.__("Server Info",this.$td),activeTheme:this.$t.__("Active Theme",this.$td),muPlugins:this.$t.__("Must-Use Plugins",this.$td),activePlugins:this.$t.__("Active Plugins",this.$td),inactivePlugins:this.$t.__("Inactive Plugins",this.$td),copied:this.$t.__("Copied!",this.$td)}}},computed:{copySystemStatusInfo(){return JSON.stringify(this.$aioseo.data.status)}},methods:{...r(["emailDebugInfo"]),onCopy(){this.copied=!0,setTimeout(()=>{this.copied=!1},2e3)},onError(){},downloadSystemStatusInfo(){const i=new Blob([JSON.stringify(this.$aioseo.data.status)],{type:"application/json"}),s=document.createElement("a");s.href=URL.createObjectURL(i),s.download=`aioseo-system-status-${this.$dateTime.now().toFormat("yyyy-MM-dd")}.json`,s.click(),URL.revokeObjectURL(s.href)},processEmailDebugInfo(){if(this.emailError=!1,!this.emailAddress||!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.emailAddress)){this.emailError=!0;return}this.sendingEmail=!0,this.emailDebugInfo(this.emailAddress).then(()=>{this.emailAddress=null,this.sendingEmail=!1})}}};var g=function(){var s=this,t=s._self._c;return t("div",{staticClass:"aioseo-tools-system-status-info"},[t("core-card",{attrs:{slug:"systemStatusInfo","header-text":s.strings.systemStatusInfo}},[t("div",{staticClass:"actions"},[t("grid-row",[t("grid-column",{staticClass:"left",attrs:{sm:"6"}},[t("base-button",{attrs:{type:"blue",size:"medium"},on:{click:s.downloadSystemStatusInfo}},[t("svg-download"),s._v(" "+s._s(s.strings.downloadSystemInfoFile)+" ")],1),t("base-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:s.copySystemStatusInfo,expression:"copySystemStatusInfo",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:s.onCopy,expression:"onCopy",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:s.onError,expression:"onError",arg:"error"}],attrs:{type:"blue",size:"medium"}},[s.copied?s._e():[t("svg-copy"),s._v(" "+s._s(s.strings.copyToClipboard)+" ")],s.copied?[t("svg-checkmark"),s._v(" "+s._s(s.strings.copied)+" ")]:s._e()],2)],1),t("grid-column",{staticClass:"right",attrs:{sm:"6"}},[t("base-input",{class:{"aioseo-error":s.emailError},attrs:{size:"medium",placeholder:s.strings.emailDebugInformation},model:{value:s.emailAddress,callback:function(e){s.emailAddress=e},expression:"emailAddress"}}),t("base-button",{attrs:{type:"blue",size:"medium",loading:s.sendingEmail},on:{click:s.processEmailDebugInfo}},[s._v(" "+s._s(s.strings.submit)+" ")])],1)],1)],1),t("div",{staticClass:"aioseo-settings-row"},[s._l(s.$aioseo.data.status,function(e,n){return[e.results.length?t("div",{key:n,staticClass:"settings-group"},[t("div",{staticClass:"settings-name"},[t("div",{staticClass:"name"},[s._v(s._s(e.label))])]),t("div",{staticClass:"settings-content"},[t("div",{staticClass:"system-status-table"},s._l(e.results,function(o,a){return t("table-row",{key:a,class:{even:a%2===0}},[t("table-column",{staticClass:"system-status-header"},[s._v(" "+s._s(o.header)+" ")]),t("table-column",[s._v(" "+s._s(o.value)+" ")])],1)}),1)])]):s._e()]})],2)])],1)},v=[],b=h(y,g,v,!1,null,null,null,null);const R=b.exports;export{R as default};
