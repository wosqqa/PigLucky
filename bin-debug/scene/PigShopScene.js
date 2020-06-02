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
var PigShopScene = (function (_super) {
    __extends(PigShopScene, _super);
    function PigShopScene() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/pig/PigShopScene.exml";
        return _this;
    }
    PigShopScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PigShopScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        console.log(PigData.levelInfo);
        // eui数据
        var euiArr = new eui.ArrayCollection(PigData.levelInfo);
        this.myList.dataProvider = euiArr;
        this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.removeScene('shopScene');
        }, this);
    };
    return PigShopScene;
}(eui.Component));
__reflect(PigShopScene.prototype, "PigShopScene", ["eui.UIComponent", "egret.DisplayObject"]);
