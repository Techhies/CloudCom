/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","sap/ui/core/EnabledPropagator","sap/ui/core/library","./thirdparty/CheckBox","./thirdparty/features/InputElementsFormSupport"],function(e,a,t,r){"use strict";var i=r.ValueState;var p=a.WrappingType;var l=e.extend("sap.ui.webc.main.CheckBox",{metadata:{library:"sap.ui.webc.main",tag:"ui5-checkbox-ui5",interfaces:["sap.ui.core.IFormContent"],properties:{accessibleName:{type:"string",defaultValue:""},checked:{type:"boolean",defaultValue:false},enabled:{type:"boolean",defaultValue:true,mapping:{type:"attribute",to:"disabled",formatter:"_mapEnabled"}},indeterminate:{type:"boolean",defaultValue:false},name:{type:"string",defaultValue:""},readonly:{type:"boolean",defaultValue:false},required:{type:"boolean",defaultValue:false},text:{type:"string",defaultValue:""},valueState:{type:"sap.ui.core.ValueState",defaultValue:i.None},width:{type:"sap.ui.core.CSSSize",mapping:"style"},wrappingType:{type:"sap.ui.webc.main.WrappingType",defaultValue:p.None}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,mapping:{type:"property",to:"accessibleNameRef",formatter:"_getAriaLabelledByForRendering"}}},events:{change:{parameters:{}}},designtime:"sap/ui/webc/main/designtime/CheckBox.designtime"}});t.call(l.prototype);l.prototype.getFormDoNotAdjustWidth=function(){return this.getText()?false:true};return l});
//# sourceMappingURL=CheckBox.js.map