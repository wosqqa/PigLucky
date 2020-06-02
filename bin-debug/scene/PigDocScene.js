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
var PigDocScene = (function (_super) {
    __extends(PigDocScene, _super);
    function PigDocScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/pig/PigDocScene.exml";
        return _this;
    }
    PigDocScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PigDocScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.removeScene('docScene');
        }, this);
    };
    return PigDocScene;
}(eui.Component));
__reflect(PigDocScene.prototype, "PigDocScene", ["eui.UIComponent", "egret.DisplayObject"]);
