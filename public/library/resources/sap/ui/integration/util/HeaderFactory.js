/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/core/Core","./BaseFactory","sap/base/Log","sap/base/util/isEmptyObject","sap/ui/integration/cards/actions/CardActions","sap/ui/integration/library","sap/m/library","sap/ui/integration/cards/NumericHeader","sap/ui/integration/cards/Header","sap/ui/integration/util/Utils","sap/m/Button"],function(t,e,a,r,i,n,s,o,c,u,d){"use strict";var p=n.CardActionArea;var g=s.ButtonType;var f=t.getLibraryResourceBundle("sap.ui.integration");var l=e.extend("sap.ui.integration.util.HeaderFactory");l.prototype.create=function(t,e){if(r(t)){a.warning("Card sap.card/header entry in the manifest is mandatory","sap.ui.integration.widgets.Card");return null}var n=this._oCard,s=n.getOpener(),d,g;t=this.createBindingInfos(t,n.getBindingNamespaces());if(s){e=this._createCloseButton()}switch(t.type){case"Numeric":g=new o(t,e);break;default:g=new c(t,e,n._oIconFormatter);break}g.setCard(n);if(t.status&&t.status.text&&t.status.text.format){d=u.getStatusTextBindingInfo(t.status.text.format,g);if(d){g.bindProperty("statusText",d)}}g.setServiceManager(n._oServiceManager);g.setDataProviderFactory(n._oDataProviderFactory);g._setDataConfiguration(t.data);var f=new i({card:n});f.attach({area:p.Header,enabledPropertyName:"interactive",actions:t.actions,control:g});g._oActions=f;if(s){g.setProperty("focusable",false)}return g};l.prototype._createCloseButton=function(){var t=new d({type:g.Transparent,tooltip:f.getText("CARD_DIALOG_CLOSE_BUTTON"),icon:"sap-icon://decline",press:function(){this._oCard.hide()}.bind(this)});return t};return l});
//# sourceMappingURL=HeaderFactory.js.map