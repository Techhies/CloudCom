sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v5/dishwasher", "./v4/dishwasher"], function (_exports, _Theme, _dishwasher, _dishwasher2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _dishwasher.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _dishwasher.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isThemeFamily)("sap_horizon") ? _dishwasher.pathData : _dishwasher2.pathData;
  _exports.pathData = pathData;
  var _default = "dishwasher";
  _exports.default = _default;
});