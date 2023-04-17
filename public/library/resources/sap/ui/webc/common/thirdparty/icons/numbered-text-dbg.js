sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v5/numbered-text", "./v4/numbered-text"], function (_exports, _Theme, _numberedText, _numberedText2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _numberedText.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _numberedText.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isThemeFamily)("sap_horizon") ? _numberedText.pathData : _numberedText2.pathData;
  _exports.pathData = pathData;
  var _default = "numbered-text";
  _exports.default = _default;
});