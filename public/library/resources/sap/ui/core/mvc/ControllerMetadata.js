/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/base/Metadata","sap/base/util/merge","sap/ui/core/mvc/OverrideExecution","sap/base/Log"],function(t,e,i,o){"use strict";var r=function(e,i){t.apply(this,arguments);if(this.isA("sap.ui.core.mvc.ControllerExtension")&&this.getParent().getClass().override){this.getClass().override=this.getParent().getClass().override}};r.prototype=Object.create(t.prototype);r.prototype.constructor=r;r.prototype.applySettings=function(r){if(r.override){this._override=r.override;delete r.override}t.prototype.applySettings.call(this,r);var s=r.metadata;this._defaultLifecycleMethodMetadata={onInit:{public:true,final:false,overrideExecution:i.After},onExit:{public:true,final:false,overrideExecution:i.Before},onBeforeRendering:{public:true,final:false,overrideExecution:i.Before},onAfterRendering:{public:true,final:false,overrideExecution:i.After}};var a=this.isA("sap.ui.core.mvc.ControllerExtension");var n=/^_/;var h=this._oParent.isA("sap.ui.core.mvc.Controller");var l=r.metadata&&r.metadata.methods?true:false;if(!a){if(h&&!l){n=/^_|^on|^init$|^exit$/}if(h&&l){e(s.methods,this._defaultLifecycleMethodMetadata)}}if(a||l){this._aPublicMethods=[]}this._mMethods=s.methods||{};for(var d in r){if(d!=="metadata"&&d!=="constructor"){if(!d.match(n)){if(h&&this._oParent&&this._oParent.isMethodFinal(d)){o.error("Method: '"+d+"' of controller '"+this._oParent.getName()+"' is final and cannot be overridden by controller '"+this.getName()+"'");delete this._oClass.prototype[d]}if(!(d in this._mMethods)&&typeof r[d]==="function"){if(!(r[d].getMetadata&&r[d].getMetadata().isA("sap.ui.core.mvc.ControllerExtension"))){this._mMethods[d]={public:true,final:false}}}}}}for(var c in this._mMethods){if(this.isMethodPublic(c)){this._aPublicMethods.push(c)}}};r.prototype.afterApplySettings=function(){t.prototype.afterApplySettings.call(this);var i=this.isA("sap.ui.core.mvc.ControllerExtension");if(this._oParent){var o=this._oParent._mMethods?this._oParent._mMethods:{};for(var r in o){if(this._mMethods[r]&&!i){var s=this._mMethods[r].public;this._mMethods[r]=e({},o[r]);if(s!==undefined){this._mMethods[r].public=s}if(!this.isMethodPublic(r)&&this._mMethods[r].public!==o[r].public){this._aAllPublicMethods.splice(this._aAllPublicMethods.indexOf(r),1)}}else{this._mMethods[r]=o[r]}}}if(this._oParent&&this._oParent.isA("sap.ui.core.mvc.ControllerExtension")){this._bFinal=true}};r.prototype.getNamespace=function(){var t=this._sClassName.indexOf("anonymousExtension~")==0;var e=t?this._oParent._sClassName:this._sClassName;return e.substr(0,e.lastIndexOf("."))};r.prototype.isMethodFinal=function(t){var e=this._mMethods[t];return e&&e.final};r.prototype.isMethodPublic=function(t){var e=this._mMethods[t];return e&&e.public};r.prototype.getAllMethods=function(){return this._mMethods};r.prototype.getOverrideExecution=function(t){var e=this._mMethods[t];var o=i.Instead;if(e){o=e.overrideExecution}return o};r.prototype.getOverrides=function(){return this._override};r.prototype.getStaticOverrides=function(){return this._staticOverride};r.prototype.hasOverrides=function(){return!!this._override||!!this._staticOverride};r.prototype.getLifecycleConfiguration=function(){return this._defaultLifecycleMethodMetadata};return r});
//# sourceMappingURL=ControllerMetadata.js.map