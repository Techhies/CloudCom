sap.ui.define(["exports", "sap/ui/webc/common/thirdparty/base/config/Theme", "./v5/add-photo", "./v4/add-photo"], function (_exports, _Theme, _addPhoto, _addPhoto2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "accData", {
    enumerable: true,
    get: function () {
      return _addPhoto.accData;
    }
  });
  _exports.default = void 0;
  Object.defineProperty(_exports, "ltr", {
    enumerable: true,
    get: function () {
      return _addPhoto.ltr;
    }
  });
  _exports.pathData = void 0;
  const pathData = (0, _Theme.isThemeFamily)("sap_horizon") ? _addPhoto.pathData : _addPhoto2.pathData;
  _exports.pathData = pathData;
  var _default = "add-photo";
  _exports.default = _default;
});