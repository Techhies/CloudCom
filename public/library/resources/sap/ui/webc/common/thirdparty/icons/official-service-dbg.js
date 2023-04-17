sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v5/official-service", "./v4/official-service"], function (_exports, _Theme, _officialService, _officialService2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _officialService.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _officialService.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isThemeFamily)("sap_horizon") ? _officialService.pathData : _officialService2.pathData;
  _exports.pathData = pathData;
  var _default = "official-service";
  _exports.default = _default;
});