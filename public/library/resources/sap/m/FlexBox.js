/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./FlexBoxStylingHelper","./FlexItemData","./library","sap/ui/base/ManagedObjectObserver","sap/ui/core/Control","sap/ui/core/InvisibleRenderer","./FlexBoxRenderer","sap/ui/thirdparty/jquery"],function(e,t,i,r,n,a,s,jQuery){"use strict";var o=i.BackgroundDesign;var p=i.FlexAlignContent;var l=i.FlexWrap;var u=i.FlexAlignItems;var d=i.FlexJustifyContent;var g=i.FlexRendertype;var m=i.FlexDirection;var c=n.extend("sap.m.FlexBox",{metadata:{library:"sap.m",properties:{height:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:""},width:{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:""},displayInline:{type:"boolean",group:"Appearance",defaultValue:false},direction:{type:"sap.m.FlexDirection",group:"Appearance",defaultValue:m.Row},fitContainer:{type:"boolean",group:"Appearance",defaultValue:false},renderType:{type:"sap.m.FlexRendertype",group:"Misc",defaultValue:g.Div},justifyContent:{type:"sap.m.FlexJustifyContent",group:"Appearance",defaultValue:d.Start},alignItems:{type:"sap.m.FlexAlignItems",group:"Appearance",defaultValue:u.Stretch},wrap:{type:"sap.m.FlexWrap",group:"Appearance",defaultValue:l.NoWrap},alignContent:{type:"sap.m.FlexAlignContent",group:"Appearance",defaultValue:p.Stretch},backgroundDesign:{type:"sap.m.BackgroundDesign",group:"Appearance",defaultValue:o.Transparent}},defaultAggregation:"items",aggregations:{items:{type:"sap.ui.core.Control",multiple:true,singularName:"item"}},designtime:"sap/m/designtime/FlexBox.designtime",dnd:{draggable:false,droppable:true}},renderer:s});c.prototype.init=function(){this._oItemDelegate={onAfterRendering:this._onAfterItemRendering};this._oItemsObserver=new r(this._onItemsChange.bind(this));this._oItemsObserver.observe(this,{aggregations:["items"]})};c.prototype.exit=function(){if(this._oItemsObserver){this._oItemsObserver.disconnect();this._oItemsObserver=null}};c.prototype._onItemsChange=function(e){if(e.name==="items"&&e.child){if(e.mutation==="insert"){this._onItemInserted(e.child)}else if(e.mutation==="remove"){this._onItemRemoved(e.child)}}else if(e.name==="visible"){this._onItemVisibilityChange(e)}};c.prototype._onItemInserted=function(e){if(e&&!(e instanceof c)){this._oItemsObserver.observe(e,{properties:["visible"]});if(this.getRenderType()===g.Bare){e.addEventDelegate(this._oItemDelegate,e)}}};c.prototype._onItemRemoved=function(e){if(e&&!(e instanceof c)){this._oItemsObserver.unobserve(e,{properties:["visible"]});if(this.getRenderType()===g.Bare){e.removeEventDelegate(this._oItemDelegate,e)}}};c.prototype._onItemVisibilityChange=function(e){var t=e.object,i;if(this.getRenderType()!==g.List&&this.getRenderType()!==g.Div){return}if(t.getLayoutData()){i=jQuery(document.getElementById(t.getLayoutData().getId()))}else{i=jQuery(document.getElementById(a.createInvisiblePlaceholderId(t))).parent()}if(e.current){i.removeClass("sapUiHiddenPlaceholder").removeAttr("aria-hidden")}else{i.addClass("sapUiHiddenPlaceholder").attr("aria-hidden","true")}};c.prototype._onAfterItemRendering=function(){var i=this.getLayoutData();if(i instanceof t){e.setFlexItemStyles(null,i)}};c.prototype.setRenderType=function(e){var t=this.getRenderType(),i=this.getItems();if(e===t){return this}this.setProperty("renderType",e);if(t==="Bare"){i.forEach(this._onItemRemoved,this)}if(e==="Bare"){i.forEach(this._onItemInserted,this)}return this};c.prototype.getAccessibilityInfo=function(){return{children:this.getItems()}};return c});
//# sourceMappingURL=FlexBox.js.map