sap.ui.define(["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:true});e.default=void 0;const t=/^(?:a|area)$/i;const n=/^(?:input|select|textarea|button)$/i;const r=e=>{if(e.disabled){return false}const r=e.getAttribute("tabindex");if(r!==null&&r!==undefined){return parseInt(r)>=0}return n.test(e.nodeName)||t.test(e.nodeName)&&e.href};var a=r;e.default=a});
//# sourceMappingURL=isNodeClickable.js.map