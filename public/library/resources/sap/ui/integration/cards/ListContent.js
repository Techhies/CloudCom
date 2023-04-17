/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./BaseListContent","./ListContentRenderer","sap/ui/util/openWindow","sap/ui/core/ResizeHandler","sap/m/library","sap/m/List","sap/m/ObjectStatus","sap/ui/integration/library","sap/ui/integration/util/BindingHelper","sap/ui/integration/util/BindingResolver","sap/ui/integration/controls/Microchart","sap/ui/integration/controls/MicrochartLegend","sap/ui/integration/controls/ListContentItem","sap/ui/integration/controls/ActionsStrip"],function(t,i,e,n,r,o,s,a,c,h,p,l,d,u){"use strict";var g=r.AvatarSize;var f=r.AvatarColor;var m=r.ListType;var _=r.ListSeparators;var y=a.CardActionArea;var v=r.EmptyIndicatorMode;var I="_legendColorsLoad";var b=t.extend("sap.ui.integration.cards.ListContent",{metadata:{library:"sap.ui.integration",aggregations:{_legend:{multiple:false,visibility:"hidden"}}},renderer:i});b.prototype.init=function(){t.prototype.init.apply(this,arguments);var i=this._getList();var e=this;this.setAggregation("_content",i);i.attachUpdateFinished(function(){if(e._iVisibleItems){var t=i.getItems();for(var n=e._iVisibleItems+1;n<t.length;n++){t[n].setVisible(false)}}})};b.prototype.exit=function(){t.prototype.exit.apply(this,arguments);if(this._oItemTemplate){this._oItemTemplate.destroy();this._oItemTemplate=null}if(this._iMicrochartsResizeHandler){n.deregister(this._iMicrochartsResizeHandler);this._iMicrochartsResizeHandler=undefined}};b.prototype.onAfterRendering=function(){this._resizeMicrocharts()};b.prototype.loadDependencies=function(t){if(!this.isSkeleton()&&t.get("/sap.card/content/item/chart")){return p.loadDependencies()}return Promise.resolve()};b.prototype.setConfiguration=function(i){t.prototype.setConfiguration.apply(this,arguments);i=this.getParsedConfiguration();if(!i){return this}if(i.items){this._setStaticItems(i.items);return this}if(i.item){this._setItem(i)}return this};b.prototype.getStaticConfiguration=function(){var t=this.getInnerList().getItems(),i=this.getParsedConfiguration(),e=t[0]&&t[0].isA("sap.m.GroupHeaderListItem"),n=[],r=[],o;t.forEach(function(t){if(t.isA("sap.m.GroupHeaderListItem")){if(o){r.push(o)}n=[];o={title:t.getTitle(),items:n}}else{n.push(h.resolveValue(i.item,this,t.getBindingContext().getPath()))}}.bind(this));if(o){r.push(o)}var s={};if(e){s.groups=r}else{s.groups=[{items:n}]}return s};b.prototype.onDataChanged=function(){this._handleNoItemsError(this.getParsedConfiguration().item);this._checkHiddenNavigationItems(this.getParsedConfiguration().item)};b.prototype._getList=function(){if(this._bIsBeingDestroyed){return null}if(!this._oList){this._oList=new o({id:this.getId()+"-list",growing:false,showNoData:false})}return this._oList};b.prototype._setItem=function(t){var i=t.item,e=this._getList(),n=this.isSkeleton(),r={iconDensityAware:false,title:i.title&&(i.title.value||i.title),description:i.description&&(i.description.value||i.description),highlight:i.highlight,info:i.info&&i.info.value,infoState:i.info&&i.info.state,attributes:[]};if(i.icon){r.icon=c.formattedProperty(i.icon.src,function(t){return this._oIconFormatter.formatSrc(t)}.bind(this));r.iconAlt=i.icon.alt;r.iconDisplayShape=i.icon.shape;r.iconInitials=i.icon.initials||i.icon.text;r.iconVisible=i.icon.visible;if(r.title&&r.description){r.iconSize=g.S}else{r.iconSize=g.XS}r.iconSize=i.icon.size||r.iconSize;r.iconBackgroundColor=i.icon.backgroundColor||(r.iconInitials?undefined:f.Transparent)}if(i.attributesLayoutType){r.attributesLayoutType=i.attributesLayoutType}if(i.attributes){i.attributes.forEach(function(t){r.attributes.push(new s({text:t.value,state:t.state,emptyIndicatorMode:v.On,visible:t.visible}))})}if(!n){if(i.chart){r.microchart=this._createChartAndAddLegend(i.chart)}if(i.actionsStrip){r.actionsStrip=u.create(this.getCardInstance(),i.actionsStrip);e.setShowSeparators(_.All)}else{e.setShowSeparators(_.None)}}this._oItemTemplate=new d(r);this._oActions.attach({area:y.ContentItem,actions:i.actions,control:this,actionControl:this._oItemTemplate,enabledPropertyName:"type",enabledPropertyValue:m.Active,disabledPropertyValue:m.Inactive});var o=t.group;if(o){this._oSorter=this._getGroupSorter(o)}var a={template:this._oItemTemplate,sorter:this._oSorter};this._bindAggregationToControl("items",e,a)};b.prototype._createChartAndAddLegend=function(t){var i=p.create(t);this.destroyAggregation("_legend");if(t.type==="StackedBar"){var e=new l({chart:i.getChart(),colorsLoad:function(){this.fireEvent(I)}.bind(this)});e.initItemsTitles(t.bars,this.getBindingContext().getPath());this.setAggregation("_legend",e);this.awaitEvent(I)}return i};b.prototype._resizeMicrocharts=function(){var t=this.$().find(".sapUiIntMicrochartChart"),i=Number.MAX_VALUE;if(t.length===0){return}t.each(function(t,e){i=Math.min(i,e.offsetWidth)});t.find(".sapUiIntMicrochartChartInner").css("max-width",i+"px");if(!this._iMicrochartsResizeHandler){this._iMicrochartsResizeHandler=n.register(this,this._resizeMicrocharts.bind(this))}};b.prototype._setStaticItems=function(t){var i=this._getList();t.forEach(function(t){var n=new d({iconDensityAware:false,title:t.title?t.title:"",description:t.description?t.description:"",icon:t.icon?t.icon:"",infoState:t.infoState?t.infoState:"None",info:t.info?t.info:"",highlight:t.highlight?t.highlight:"None"});if(t.action){n.setType("Navigation");if(t.action.url){n.attachPress(function(){e(t.action.url,t.target||"_blank")})}}i.addItem(n)});this.fireEvent("_actionContentReady")};b.prototype.getInnerList=function(){return this._getList()};return b});
//# sourceMappingURL=ListContent.js.map