sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/base/util/AriaLabelHelper","./generated/templates/CardTemplate.lit","./Icon","./generated/i18n/i18n-defaults","./generated/themes/Card.css"],function(e,t,a,n,r,i,s,u,d){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;t=l(t);a=l(a);i=l(i);s=l(s);d=l(d);function l(e){return e&&e.__esModule?e:{default:e}}const c={tag:"ui5-card",languageAware:true,managedSlots:true,slots:{default:{propertyName:"content",type:HTMLElement},header:{type:HTMLElement}},properties:{accessibleName:{type:String},accessibleNameRef:{type:String}},events:{}};class o extends t.default{static get metadata(){return c}static get render(){return a.default}static get template(){return i.default}static get styles(){return d.default}get classes(){return{"ui5-card-root":true,"ui5-card--nocontent":!this.content.length}}get _hasHeader(){return!!this.header.length}get _getAriaLabel(){const e=(0,r.getEffectiveAriaLabelText)(this),t=e?` ${e}`:"";return o.i18nBundle.getText(u.ARIA_ROLEDESCRIPTION_CARD)+t}get _ariaCardContentLabel(){return o.i18nBundle.getText(u.ARIA_LABEL_CARD_CONTENT)}static get dependencies(){return[s.default]}static async onDefine(){o.i18nBundle=await(0,n.getI18nBundle)("@ui5/webcomponents")}}o.define();var g=o;e.default=g});
//# sourceMappingURL=Card.js.map