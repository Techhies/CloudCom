sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/base/types/CSSColor","sap/ui/webc/common/thirdparty/base/Device","./generated/templates/ColorPaletteItemTemplate.lit","./generated/i18n/i18n-defaults","./generated/themes/ColorPaletteItem.css"],function(e,t,a,n,r,o,s,i,u){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;t=l(t);a=l(a);r=l(r);s=l(s);u=l(u);function l(e){return e&&e.__esModule?e:{default:e}}const d={tag:"ui5-color-palette-item",managedSlots:true,properties:{value:{type:r.default},_tabIndex:{type:String,defaultValue:"-1",noAttribute:true},index:{type:String},phone:{type:Boolean},_disabled:{type:Boolean}},slots:{},events:{}};class c extends t.default{static get metadata(){return d}static get render(){return a.default}static get styles(){return u.default}static get template(){return s.default}static async onDefine(){c.i18nBundle=await(0,n.getI18nBundle)("@ui5/webcomponents")}constructor(){super()}onBeforeRendering(){this._disabled=!this.value;this.phone=(0,o.isPhone)()}get colorLabel(){return c.i18nBundle.getText(i.COLORPALETTE_COLOR_LABEL)}get styles(){return{root:{"background-color":this.value}}}}c.define();var p=c;e.default=p});
//# sourceMappingURL=ColorPaletteItem.js.map