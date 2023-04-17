/*!
 * OpenUI5
 * (c) Copyright 2009-2023 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["./ExportType"],function(e){"use strict";var t=/[\r\n"\t;,]/;var r=/^[=\+\-@](?![\d.,]+(?:e[\+-]?\d+)?$)/i;var a=e.extend("sap.ui.core.util.ExportTypeCSV",{metadata:{library:"sap.ui.core",properties:{separatorChar:{type:"string",defaultValue:","}}}});a.MAX_CELL_LENGTH=32760;a.prototype.setSeparatorChar=function(e){var e=this.validateProperty("separatorChar",e);if(e.length>1){throw new Error('Value of property "separatorChar" needs to be exactly one character or empty. '+'"'+e+'" is '+e.length+" characters long.")}return this.setProperty("separatorChar",e)};a.prototype.init=function(){this.setProperty("fileExtension","csv",true);this.setProperty("mimeType","text/csv",true);this.setProperty("charset","utf-8",true)};a.prototype.escapeContent=function(e){if(!e){return e}if(e.length>a.MAX_CELL_LENGTH){e=e.slice(0,a.MAX_CELL_LENGTH)}if(r.test(e)){e="'"+e}var o=e.indexOf(this.getSeparatorChar())>-1;if(o||t.test(e)){e=e.replace(/"/g,'""');e='"'+e+'"'}return e};a.prototype.generate=function(){var e=[];this.generateColumns(e);this.generateRows(e);return e.join("\r\n")};a.prototype.generateColumns=function(e){var t=[],r=this.columnGenerator(),a;while(!(a=r.next()).done){t.push(this.escapeContent(a.value.name))}e.push(t.join(this.getSeparatorChar()))};a.prototype.generateRows=function(e){var t=this.rowGenerator(),r;while(!(r=t.next()).done){var a=[];var o=r.value.cells,n;while(!(n=o.next()).done){a.push(this.escapeContent(n.value.content))}e.push(a.join(this.getSeparatorChar()))}};return a});
//# sourceMappingURL=ExportTypeCSV.js.map