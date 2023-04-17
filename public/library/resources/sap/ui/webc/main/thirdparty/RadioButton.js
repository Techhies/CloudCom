sap.ui.define(["exports","sap/ui/webc/common/thirdparty/base/Device","sap/ui/webc/common/thirdparty/base/FeaturesRegistry","sap/ui/webc/common/thirdparty/base/UI5Element","sap/ui/webc/common/thirdparty/base/renderer/LitRenderer","sap/ui/webc/common/thirdparty/base/i18nBundle","sap/ui/webc/common/thirdparty/base/types/ValueState","sap/ui/webc/common/thirdparty/base/util/AriaLabelHelper","sap/ui/webc/common/thirdparty/base/Keys","./Label","./RadioButtonGroup","./types/WrappingType","./generated/templates/RadioButtonTemplate.lit","./generated/i18n/i18n-defaults","./generated/themes/RadioButton.css"],function(e,t,a,i,n,s,r,u,o,l,d,c,h,p,f){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;i=g(i);n=g(n);r=g(r);l=g(l);d=g(d);c=g(c);h=g(h);f=g(f);function g(e){return e&&e.__esModule?e:{default:e}}let m=false;let b=null;const y={tag:"ui5-radio-button",altTag:"ui5-radiobutton",languageAware:true,properties:{disabled:{type:Boolean},readonly:{type:Boolean},checked:{type:Boolean},text:{type:String},valueState:{defaultValue:r.default.None,type:r.default},name:{type:String},value:{type:String},wrappingType:{type:c.default,defaultValue:c.default.None},accessibleName:{type:String},accessibleNameRef:{type:String},_tabIndex:{type:String,defaultValue:"-1",noAttribute:true},active:{type:Boolean}},slots:{formSupport:{type:HTMLElement}},events:{change:{}}};class v extends i.default{constructor(){super();this._deactivate=()=>{if(b){b.active=false}};if(!m){document.addEventListener("mouseup",this._deactivate);m=true}}static get metadata(){return y}static get render(){return n.default}static get template(){return h.default}static get styles(){return f.default}static get dependencies(){return[l.default]}static async onDefine(){v.i18nBundle=await(0,s.getI18nBundle)("@ui5/webcomponents")}onBeforeRendering(){this.syncGroup();this._enableFormSupport()}syncGroup(){const e=this._name;const t=this.name;const a=this._checked;const i=this.checked;if(t!==e){if(e){d.default.removeFromGroup(this,e)}if(t){d.default.addToGroup(this,t)}}else if(t){d.default.enforceSingleSelection(this,t)}if(this.name&&i!==a){d.default.updateTabOrder(this.name)}this._name=this.name;this._checked=this.checked}_enableFormSupport(){const e=(0,a.getFeature)("FormSupport");if(e){e.syncNativeHiddenInput(this,(e,t)=>{t.disabled=e.disabled||!e.checked;t.value=e.checked?e.value:""})}else if(this.value){console.warn(`In order for the "value" property to have effect, you should also: import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";`)}}_onclick(){return this.toggle()}_handleDown(e){const t=this.name;if(!t){return}e.preventDefault();d.default.selectNextItem(this,t)}_handleUp(e){const t=this.name;if(!t){return}e.preventDefault();d.default.selectPreviousItem(this,t)}_onkeydown(e){if((0,o.isSpace)(e)){this.active=true;return e.preventDefault()}if((0,o.isEnter)(e)){this.active=true;return this.toggle()}if((0,o.isDown)(e)||(0,o.isRight)(e)){this._handleDown(e)}if((0,o.isUp)(e)||(0,o.isLeft)(e)){this._handleUp(e)}}_onkeyup(e){if((0,o.isSpace)(e)){this.toggle()}this.active=false}_onmousedown(){this.active=true;b=this}_onmouseup(){this.active=false}_onfocusout(){this.active=false}toggle(){if(!this.canToggle()){return this}if(!this.name){this.checked=!this.checked;this.fireEvent("change");return this}d.default.selectItem(this,this.name);return this}canToggle(){return!(this.disabled||this.readonly||this.checked)}valueStateTextMappings(){return{Error:v.i18nBundle.getText(p.VALUE_STATE_ERROR),Warning:v.i18nBundle.getText(p.VALUE_STATE_WARNING),Success:v.i18nBundle.getText(p.VALUE_STATE_SUCCESS),Information:v.i18nBundle.getText(p.VALUE_STATE_INFORMATION)}}get classes(){return{main:{},inner:{"ui5-radio-inner--hoverable":!this.disabled&&!this.readonly&&(0,t.isDesktop)()}}}get ariaReadonly(){return this.readonly?"true":undefined}get ariaDisabled(){return this.disabled?"true":undefined}get ariaLabelText(){return[(0,u.getEffectiveAriaLabelText)(this),this.text].filter(Boolean).join(" ")}get ariaDescribedBy(){return this.hasValueState?`${this._id}-descr`:undefined}get hasValueState(){return this.valueState!==r.default.None}get valueStateText(){return this.valueStateTextMappings()[this.valueState]}get tabIndex(){const e=this.getAttribute("tabindex");if(this.disabled){return"-1"}if(this.name){return this._tabIndex}return e||"0"}get strokeWidth(){return this.valueState==="None"?"1":"2"}}v.define();var S=v;e.default=S});
//# sourceMappingURL=RadioButton.js.map