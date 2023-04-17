/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/ui/webc/common/WebComponent","./library","./thirdparty/Table"],function(e,a){"use strict";var t=a.TableGrowingMode;var i=a.TableMode;var l=e.extend("sap.ui.webc.main.Table",{metadata:{library:"sap.ui.webc.main",tag:"ui5-table-ui5",properties:{accessibleName:{type:"string"},busy:{type:"boolean",defaultValue:false},busyDelay:{type:"int",defaultValue:1e3},growing:{type:"sap.ui.webc.main.TableGrowingMode",defaultValue:t.None},growingButtonSubtext:{type:"string",defaultValue:""},growingButtonText:{type:"string",defaultValue:""},height:{type:"sap.ui.core.CSSSize",mapping:"style"},hideNoData:{type:"boolean",defaultValue:false},mode:{type:"sap.ui.webc.main.TableMode",defaultValue:i.None},noDataText:{type:"string",defaultValue:""},stickyColumnHeader:{type:"boolean",defaultValue:false},width:{type:"sap.ui.core.CSSSize",mapping:"style"}},defaultAggregation:"rows",aggregations:{columns:{type:"sap.ui.webc.main.ITableColumn",multiple:true,slot:"columns"},rows:{type:"sap.ui.webc.main.ITableRow",multiple:true}},associations:{ariaLabelledBy:{type:"sap.ui.core.Control",multiple:true,mapping:{type:"property",to:"accessibleNameRef",formatter:"_getAriaLabelledByForRendering"}}},events:{loadMore:{parameters:{}},popinChange:{parameters:{poppedColumns:{type:"Array"}}},rowClick:{parameters:{row:{type:"HTMLElement"}}},selectionChange:{parameters:{selectedRows:{type:"Array"},previouslySelectedRows:{type:"Array"}}}},designtime:"sap/ui/webc/main/designtime/Table.designtime"}});return l});
//# sourceMappingURL=Table.js.map