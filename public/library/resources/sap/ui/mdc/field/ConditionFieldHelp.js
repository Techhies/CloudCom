/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/m/library","sap/ui/mdc/field/FieldHelpBase","sap/ui/mdc/condition/Condition","sap/ui/base/ManagedObjectObserver"],function(e,t,i,o){"use strict";var n=e.ButtonType;var s;var r;var a;var p;var l;var u;var d=t.extend("sap.ui.mdc.field.ConditionFieldHelp",{metadata:{library:"sap.ui.mdc",properties:{title:{type:"string",group:"Appearance",defaultValue:""},label:{type:"string",group:"Appearance",defaultValue:""},_enableOK:{type:"boolean",group:"Appearance",defaultValue:true,visibility:"hidden"}}}});d.prototype.init=function(){t.prototype.init.apply(this,arguments);this._oObserver=new o(f.bind(this));this._oObserver.observe(this,{properties:["title"]});this._oResourceBundle=sap.ui.getCore().getLibraryResourceBundle("sap.ui.mdc")};d._init=function(){t._init.apply(this,arguments);s=undefined;p=undefined};d.prototype.exit=function(){t.prototype.exit.apply(this,arguments);this._oObserver.disconnect();this._oObserver=undefined};d.prototype.getIcon=function(){return"sap-icon://value-help"};d.prototype.isFocusInHelp=function(){return true};d.prototype.openByTyping=function(){return false};d.prototype.getAriaHasPopup=function(){return"dialog"};d.prototype._createPopover=function(){var e=t.prototype._createPopover.apply(this,arguments);if((!s||!r||!a||!p||!l||!u)&&!this._bModulesRequested){s=sap.ui.require("sap/ui/mdc/field/DefineConditionPanel");r=sap.ui.require("sap/m/Toolbar");a=sap.ui.require("sap/m/ToolbarSpacer");p=sap.ui.require("sap/m/Button");l=sap.ui.require("sap/ui/model/base/ManagedObjectModel");u=sap.ui.require("sap/ui/mdc/condition/FilterOperatorUtil");if(!s||!r||!a||!p||!l){sap.ui.require(["sap/ui/mdc/field/DefineConditionPanel","sap/m/Toolbar","sap/m/ToolbarSpacer","sap/m/Button","sap/ui/model/base/ManagedObjectModel","sap/ui/mdc/condition/FilterOperatorUtil"],c.bind(this));this._bModulesRequested=true}}if(e){e.setShowArrow(true);e.setTitle(this.getTitle());e.setShowHeader(true);e.setTitleAlignment("Center");e.setContentWidth("500px");e.setResizable(false);h.call(this)}return e};function h(){if(!this._oDefineConditionPanel&&s&&r&&a&&p&&l&&u&&!this._bModulesRequested){this._oManagedObjectModel=new l(this);this._oDefineConditionPanel=new s(this.getId()+"-DCP",{conditions:{path:"$help>/conditions"},formatOptions:g.call(this),label:"{$help>/label}",inputOK:"{$help>/_enableOK}"}).setModel(this._oManagedObjectModel,"$help");this._setContent(this._oDefineConditionPanel);var e=new p(this.getId()+"-ok",{text:this._oResourceBundle.getText("valuehelp.OK"),enabled:"{$help>/_enableOK}",type:n.Emphasized,press:_.bind(this)});var t=new p(this.getId()+"-cancel",{text:this._oResourceBundle.getText("valuehelp.CANCEL"),press:b.bind(this)});var i=new r(this.getId()+"-TB",{content:[new a(this.getId()+"-Spacer"),e,t]}).setModel(this._oManagedObjectModel,"$help");var o=this.getAggregation("_popover");if(o){o.setFooter(i)}}}function c(e,t,i,o,n,d){s=e;r=t;a=i;p=o;l=n;u=d;this._bModulesRequested=false;if(!this._bIsBeingDestroyed){h.call(this)}}d.prototype.open=function(e){t.prototype.open.apply(this,arguments);var i=this.getAggregation("_popover");if(i&&this._oDefineConditionPanel){this._oDefineConditionPanel.setFormatOptions(g.call(this));this._oDefineConditionPanel.getBinding("conditions").resume()}return this};d.prototype._handleAfterClose=function(e){this._oDefineConditionPanel.getBinding("conditions").suspend();setTimeout(function(){this._oDefineConditionPanel.cleanUp();this.setProperty("_enableOK",true,true)}.bind(this),0);t.prototype._handleAfterClose.apply(this,arguments)};d.prototype._getControlForSuggestion=function(){var e=t.prototype._getControlForSuggestion.apply(this,arguments);var i=e.getAggregation("_endIcon",[]);if(i.length===1){e=i[0]}return e};function f(e){if(e.name==="title"){var t=this.getAggregation("_popover");if(t){t.setTitle(this.getTitel())}}}d.prototype.isValidationSupported=function(){return false};d.prototype.getItemForValue=function(e,t,i,o,n,s,r){return{key:t,description:undefined}};function g(){if(this._oField&&this._oField._getFormatOptions){return this._oField._getFormatOptions()}else{return{}}}function _(e){this.close();var t=this.getConditions();t=i._removeEmptyConditions(t);t=i._removeInitialFlags(t);u.updateConditionsValues(t);this.setProperty("conditions",t,true);this.fireSelect({conditions:t,add:false,close:true})}function b(e){this.close()}return d});
//# sourceMappingURL=ConditionFieldHelp.js.map