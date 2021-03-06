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
var PigRankScene = (function (_super) {
    __extends(PigRankScene, _super);
    function PigRankScene() {
        var _this = _super.call(this) || this;
        /**加载皮肤 */
        _this.skinName = "resource/eui_skins/pig/PigRankScene.exml";
        return _this;
    }
    PigRankScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PigRankScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.dclose.addEventListener(egret.TouchEvent.TOUCH_TAP, function () { SceneManager.removeScene('rankScene'); }, this);
    };
    return PigRankScene;
}(eui.Component));
__reflect(PigRankScene.prototype, "PigRankScene", ["eui.UIComponent", "egret.DisplayObject"]);
