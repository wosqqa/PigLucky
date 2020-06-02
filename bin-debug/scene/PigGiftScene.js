var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var PigGiftScene = (function (_super) {
    __extends(PigGiftScene, _super);
    function PigGiftScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/pig/PigGiftScene.exml";
        return _this;
    }
    PigGiftScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PigGiftScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { SceneManager.removeScene('giftScene'); }, this);
    };
    return PigGiftScene;
}(eui.Component));
__reflect(PigGiftScene.prototype, "PigGiftScene", ["eui.UIComponent", "egret.DisplayObject"]);
