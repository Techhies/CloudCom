/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/thirdparty/jquery","sap/ui/core/Core","./ObjectPageSectionBase","./ObjectPageLazyLoader","./BlockBase","sap/m/Button","sap/ui/core/StashedControlSupport","sap/ui/base/ManagedObjectObserver","sap/m/TitlePropagationSupport","./library","sap/m/library","./ObjectPageSubSectionRenderer","sap/base/Log","sap/ui/base/DataType","sap/ui/events/KeyCodes","sap/ui/dom/jquery/Focusable"],function(jQuery,t,e,o,i,r,s,n,a,u,g,l,c,p,h){"use strict";var f=g.ButtonType;var d=u.ObjectPageSubSectionMode;var y=u.ObjectPageSubSectionLayout;var _=e.extend("sap.uxap.ObjectPageSubSection",{metadata:{library:"sap.uxap",properties:{showTitle:{type:"boolean",group:"Appearance",defaultValue:true},_columnSpan:{type:"string",group:"Appearance",defaultValue:"all",visibility:"hidden"},mode:{type:"sap.uxap.ObjectPageSubSectionMode",group:"Appearance",defaultValue:d.Collapsed},titleUppercase:{type:"boolean",group:"Appearance",defaultValue:false}},defaultAggregation:"blocks",aggregations:{blocks:{type:"sap.ui.core.Control",multiple:true,singularName:"block"},moreBlocks:{type:"sap.ui.core.Control",multiple:true,singularName:"moreBlock"},actions:{type:"sap.ui.core.Control",multiple:true,singularName:"action"}},designtime:"sap/uxap/designtime/ObjectPageSubSection.designtime"},renderer:l});a.call(_.prototype,"blocks",function(){return this._getTitleDomId()});_.FIT_CONTAINER_CLASS="sapUxAPObjectPageSubSectionFitContainer";_.COLUMN_SPAN={all:"all",auto:"auto"};_._getLibraryResourceBundle=function(){return t.getLibraryResourceBundle("sap.uxap")};_.prototype.init=function(){e.prototype.init.call(this);this._aStashedControls=[];this._bRenderedFirstTime=false;this._aAggregationProxy={blocks:[],moreBlocks:[]};this._$spacer=[];this._sContainerSelector=".sapUxAPBlockContainer";this._sMoreContainerSelector=".sapUxAPSubSectionSeeMoreContainer";this._oObserver=new n(_.prototype._observeChanges.bind(this));this._oObserver.observe(this,{aggregations:["actions"]});this._oBlocksObserver=new n(this._onBlocksChange.bind(this));this._switchSubSectionMode(this.getMode());this._initTitlePropagationSupport();this._sBorrowedTitleDomId=false;this._height=""};_.prototype.getParent=function(){var t=e.prototype.getParent.apply(this,arguments);if(t&&t.isA("sap.ui.layout.Grid")){t=t.getParent()}return t};_.prototype._getColumnSpan=function(){return this.getProperty("_columnSpan")};_.prototype._setColumnSpan=function(t){var e=this.getProperty("_columnSpan"),o;if(e===t){return}this.setProperty("_columnSpan",t);o=this.getParent();o&&o.invalidate();return this};_.prototype._getHeight=function(){return this._height};_.prototype._setHeight=function(t){var e,o;if(this._height===t){return}e=p.getType("sap.ui.core.CSSSize");if(!e.isValid(t)){throw new Error('"'+t+'" is of type '+typeof t+", expected "+e.getName()+' for property "_height" of '+this)}this._height=t;o=this.getDomRef();if(o){o.style.height=t}};_.prototype.getSectionText=function(t){return _._getLibraryResourceBundle().getText("SUBSECTION_CONTROL_NAME")};_.prototype._getTitleDomId=function(){if(this._sBorrowedTitleDomId){return this._sBorrowedTitleDomId}if(!this.getTitle().trim()){return false}if(this._getInternalTitleVisible()){return this.getId()+"-headerTitle"}return false};_.prototype._setBorrowedTitleDomId=function(t){this._sBorrowedTitleDomId=t};_.prototype._toggleMultiLineSectionContent=function(t){this.toggleStyleClass("sapUxAPObjectPageSectionMultilineContent",t);this._bMultiLine=t};_.prototype._expandSection=function(){e.prototype._expandSection.call(this);var t=this.getParent();t&&typeof t._expandSection==="function"&&t._expandSection();return this};_.prototype._hasVisibleActions=function(){var t=this.getActions()||[];if(t.length===0){return false}return t.filter(function(t){return t.getVisible()}).length>0};_.prototype._observeChanges=function(t){var e=t.object,o=t.name,i=t.mutation,r=t.child,s;if(e===this){if(o==="actions"){if(i==="insert"){this._observeAction(r)}else if(i==="remove"){this._unobserveAction(r)}}}else if(o==="visible"){s=this._getInternalTitleVisible()&&this.getTitle().trim()!=="";if(!s){this.$("header").toggleClass("sapUiHidden",!this._hasVisibleActions())}}};_.prototype._onBlocksChange=function(){var t=this._getObjectPageLayout();if(!this._bRenderedFirstTime){return}this._applyLayout(t)};_.prototype._observeAction=function(t){this._oObserver.observe(t,{properties:["visible"]})};_.prototype._unobserveAction=function(t){this._oObserver.unobserve(t,{properties:["visible"]})};["addStyleClass","toggleStyleClass","removeStyleClass"].forEach(function(t){_.prototype[t]=function(o,i){if(o===_.FIT_CONTAINER_CLASS){this._notifyObjectPageLayout()}return e.prototype[t].apply(this,arguments)}});_.prototype._unStashControls=function(){var e;this._aStashedControls.forEach(function(o){o.control.unstash();e=t.byId(o.control.getId());this.addAggregation(o.aggregationName,e,true)}.bind(this));this._aStashedControls=[]};_.prototype.connectToModels=function(){var t=this.getBlocks()||[],e=this.getMoreBlocks()||[],o=this.getMode();this._unStashControls();t.forEach(function(t){if(t instanceof i){if(!t.getMode()){t.setMode(o)}t.connectToModels()}});if(e.length>0&&o===d.Expanded){e.forEach(function(t){if(t instanceof i){if(!t.getMode()){t.setMode(o)}t.connectToModels()}})}};_.prototype._allowPropagationToLoadedViews=function(t){var e=this.getBlocks()||[],o=this.getMoreBlocks()||[];e.forEach(function(e){if(e instanceof i){e._allowPropagationToLoadedViews(t)}});o.forEach(function(e){if(e instanceof i){e._allowPropagationToLoadedViews(t)}})};_.prototype.clone=function(){Object.keys(this._aAggregationProxy).forEach(function(t){var e=this.mAggregations[t];if(!e||e.length===0){this.mAggregations[t]=this._aAggregationProxy[t]}},this);return e.prototype.clone.apply(this,arguments)};_.prototype._cleanProxiedAggregations=function(){var t=this._aAggregationProxy;Object.keys(t).forEach(function(e){t[e].forEach(function(t){t.destroy()})})};_.prototype._unobserveBlocks=function(){var t=this.getBlocks().concat(this.getMoreBlocks());t.forEach(function(t){t&&this._oBlocksObserver.unobserve(t,{properties:["visible"]})},this)};_.prototype.exit=function(){if(this._oSeeMoreButton){this._oSeeMoreButton.destroy();this._oSeeMoreButton=null}if(this._oSeeLessButton){this._oSeeLessButton.destroy();this._oSeeLessButton=null}this._unobserveBlocks();this._oCurrentlyVisibleSeeMoreLessButton=null;this._cleanProxiedAggregations();if(e.prototype.exit){e.prototype.exit.call(this)}};_.prototype.onAfterRendering=function(){var t=this._getObjectPageLayout();if(e.prototype.onAfterRendering){e.prototype.onAfterRendering.call(this)}if(!t){return}this._$spacer=t.$("spacer");if(this._bShouldFocusSeeMoreLessButton&&document.activeElement===document.body){this._oCurrentlyVisibleSeeMoreLessButton.focus()}this._bShouldFocusSeeMoreLessButton=false};_.prototype.onBeforeRendering=function(){var t=this._getObjectPageLayout();if(!t){return}if(e.prototype.onBeforeRendering){e.prototype.onBeforeRendering.call(this)}this._setAggregationProxy();this._getGrid().removeAllContent();this._applyLayout(t);this.refreshSeeMoreVisibility()};_.prototype._applyLayout=function(t){var e,o=this._getGrid(),i=o.getAggregation("content"),r=this.getMode(),s=t.getSubSectionLayout(),n=this._calculateLayoutConfiguration(s,t),a=this.getBlocks(),u=a.concat(this.getMoreBlocks());this._oLayoutConfig=n;this._resetLayoutData(u);if(r===d.Expanded){e=u}else{e=a}this._assignLayoutData(e,n);try{e.forEach(function(t){this._setBlockMode(t,r);if(!i||i&&i.indexOf(t)<0){o.addAggregation("content",t,true)}},this)}catch(t){c.error("ObjectPageSubSection :: error while building layout "+s+": "+t)}return this};_.prototype._calculateLayoutConfiguration=function(t,e){var o={M:2,L:3,XL:4},i=o.L,r=o.XL,s=t===y.TitleOnLeft,n=e.getUseTwoColumnsForLargeScreen();if(s){i-=1;r-=1}if(n){i-=1}o.L=i;o.XL=r;return o};_.prototype.refreshSeeMoreVisibility=function(){var t=this._getSeeMoreButton(),e=this._getSeeLessButton();this._bBlockHasMore=!!this.getMoreBlocks().length;if(!this._bBlockHasMore){this._bBlockHasMore=this.getBlocks().some(function(t){if(t instanceof i&&t.getVisible()&&t.getShowSubSectionMore()){return true}})}this.toggleStyleClass("sapUxAPObjectPageSubSectionWithSeeMore",this._bBlockHasMore);t.toggleStyleClass("sapUxAPSubSectionSeeMoreButtonVisible",this._bBlockHasMore);e.toggleStyleClass("sapUxAPSubSectionSeeMoreButtonVisible",this._bBlockHasMore);return this._bBlockHasMore};_.prototype.setMode=function(t){if(this.getMode()!==t){this._switchSubSectionMode(t);if(this._bRenderedFirstTime){this.rerender()}}return this};_.prototype.onkeydown=function(e){if(e.keyCode===h.SPACE&&e.srcControl.isA("sap.uxap.ObjectPageSubSection")){e.preventDefault()}if(e.keyCode===h.F7){e.stopPropagation();var o=t.byId(e.target.id);if(o instanceof _){this._handleSubSectionF7()}else{this._handleInteractiveElF7();this._oLastFocusedControlF7=o}}};_.prototype._handleInteractiveElF7=function(){if(this.getParent().getSubSections().length>1){this.$().trigger("focus")}else{this.getParent().$().trigger("focus")}};_.prototype._handleSubSectionF7=function(t){if(this._oLastFocusedControlF7){this._oLastFocusedControlF7.$().trigger("focus")}else{this.$().firstFocusableDomRef().focus()}};_.prototype._getMinRequiredColspan=function(){var t=this._getColumnSpan(),e,o,i;if(t===_.COLUMN_SPAN.auto){e=this.getBlocks().concat(this.getMoreBlocks());o=e.filter(function(t){return t.getVisible&&t.getVisible()});return o.reduce(function(t,e){return t+this._getMinRequiredColspanForChild(e)}.bind(this),0)}i=parseInt(t);if(i>0&&i<=4){return i}return 4};_.prototype._getMinRequiredColspanForChild=function(t){var e=1;if(!t){e=0}else if(t instanceof i&&t.getColumnLayout()!="auto"){e=parseInt(t.getColumnLayout())}return e};_.prototype._allowAutoextendColspanForChild=function(t){return this._hasAutoLayout(t)};_.prototype._hasAutoLayout=function(t){return!(t instanceof i)||t.getColumnLayout()=="auto"};_.prototype._setAggregationProxy=function(){var t;if(this._bRenderedFirstTime){return}jQuery.each(this._aAggregationProxy,jQuery.proxy(function(e,o){t=this.removeAllAggregation(e,true);t.forEach(this._onAddBlock,this);this._setAggregation(e,t,true)},this));this._bRenderedFirstTime=true};_.prototype.hasProxy=function(t){return this._bRenderedFirstTime&&this._aAggregationProxy.hasOwnProperty(t)};_.prototype._getAggregation=function(t){return this._aAggregationProxy[t]};_.prototype._setAggregation=function(t,e,o){this._aAggregationProxy[t]=e;if(o!==true){this._notifyObjectPageLayout();this.invalidate()}return this._aAggregationProxy[t]};_.prototype.addAggregation=function(t,r,s){var n;if(r instanceof o){if(r.isStashed()){this._aStashedControls.push({aggregationName:t,control:r})}else{r.getContent().forEach(function(e){this.addAggregation(t,e)},this);r.removeAllContent();r.destroy();this.invalidate()}}else if(this.hasProxy(t)){n=this._getAggregation(t);n.push(r);this._onAddBlock(r);this._setAggregation(t,n,s);if(r instanceof i||r instanceof o){r.setParent(this)}}else{e.prototype.addAggregation.apply(this,arguments)}return this};_.prototype.insertBlock=function(t,e){c.warning("ObjectPageSubSection :: usage of insertBlock is not supported - addBlock is performed instead.");return this.addAggregation("blocks",t)};_.prototype._onAddBlock=function(t){t&&this._oBlocksObserver.observe(t,{properties:["visible"]})};_.prototype._onRemoveBlock=function(t){t&&this._oBlocksObserver.unobserve(t,{properties:["visible"]})};_.prototype.insertMoreBlock=function(t,e){c.warning("ObjectPageSubSection :: usage of insertMoreBlock is not supported - addMoreBlock is performed instead.");return this.addAggregation("moreBlocks",t)};_.prototype.removeAllAggregation=function(t,o){var i;if(this.hasProxy(t)){i=this._getAggregation(t);this._unobserveBlocks();this._setAggregation(t,[],o);return i.slice()}return e.prototype.removeAllAggregation.apply(this,arguments)};_.prototype.removeAggregation=function(t,o){var i=false,r;if(this.hasProxy(t)){r=this._getAggregation(t);r.forEach(function(e,s){if(e.getId()===o.getId()){r.splice(s,1);this._onRemoveBlock(o);this._setAggregation(t,r);i=true}return!i},this);return i?o:null}return e.prototype.removeAggregation.apply(this,arguments)};_.prototype.indexOfAggregation=function(t,o){var i=-1;if(this.hasProxy(t)){this._getAggregation(t).some(function(t,e){if(t.getId()===o.getId()){i=e;return true}},this);return i}return e.prototype.indexOfAggregation.apply(this,arguments)};_.prototype.getAggregation=function(t){if(this.hasProxy(t)){return this._getAggregation(t)}return e.prototype.getAggregation.apply(this,arguments)};_.prototype.destroyAggregation=function(t){if(this.hasProxy(t)){this._getAggregation(t).forEach(function(t){t.destroy()});this._setAggregation(t,[]);return this}return e.prototype.destroyAggregation.apply(this,arguments)};_.prototype.destroy=function(){this._aStashedControls.forEach(function(t){t.control.destroy()});e.prototype.destroy.apply(this,arguments)};_.prototype._getSeeMoreButton=function(){if(!this._oSeeMoreButton){this._oSeeMoreButton=new r(this.getId()+"--seeMore",{type:f.Transparent,iconFirst:false,text:_._getLibraryResourceBundle().getText("SHOW_MORE")}).addStyleClass("sapUxAPSubSectionSeeMoreButton").attachPress(this._seeMoreLessControlPressHandler,this)}return this._oSeeMoreButton};_.prototype._getSeeLessButton=function(){if(!this._oSeeLessButton){this._oSeeLessButton=new r(this.getId()+"--seeLess",{type:f.Transparent,iconFirst:false,text:_._getLibraryResourceBundle().getText("SHOW_LESS")}).addStyleClass("sapUxAPSubSectionSeeMoreButton").attachPress(this._seeMoreLessControlPressHandler,this)}return this._oSeeLessButton};_.prototype._seeMoreLessControlPressHandler=function(t){var e=this.getMode(),o,r=this.getMoreBlocks()||[];if(e===d.Expanded){o=d.Collapsed}else{o=d.Expanded;r.forEach(function(t){if(t instanceof i){t.setMode(e);t.connectToModels()}},this)}this._switchSubSectionMode(o);this._bShouldFocusSeeMoreLessButton=true};_.prototype._switchSubSectionMode=function(t){t=this.validateProperty("mode",t);if(t===d.Collapsed){this.setProperty("mode",d.Collapsed);this._oCurrentlyVisibleSeeMoreLessButton=this._getSeeMoreButton().setVisible(true);this._getSeeLessButton().setVisible(false)}else{this.setProperty("mode",d.Expanded);this._getSeeMoreButton().setVisible(false);this._oCurrentlyVisibleSeeMoreLessButton=this._getSeeLessButton().setVisible(true)}};_.prototype._setBlockMode=function(t,e){if(t instanceof i){t.setMode(e)}else{c.debug("ObjectPageSubSection :: cannot propagate mode "+e+" to "+t.getMetadata().getName())}};_.prototype._setToFocusable=function(t){var e="0",o="-1",i="tabindex";if(t){this.$().attr(i,e)}else{this.$().attr(i,o)}return this};_.prototype._getUseTitleOnTheLeft=function(){var t=this._getObjectPageLayout();return t&&t.getSubSectionLayout()===y.TitleOnLeft};_.prototype._updateShowHideState=function(t){if(this._getIsHidden()===t){return this}this.$().children(this._sMoreContainerSelector).toggle(!t);return e.prototype._updateShowHideState.call(this,t)};_.prototype.getVisibleBlocksCount=function(){var t=this._aStashedControls.length;(this.getBlocks()||[]).forEach(function(e){if(e.getVisible&&!e.getVisible()){return true}t++});(this.getMoreBlocks()||[]).forEach(function(e){if(e.getVisible&&!e.getVisible()){return true}t++});return t};return _});
//# sourceMappingURL=ObjectPageSubSection.js.map