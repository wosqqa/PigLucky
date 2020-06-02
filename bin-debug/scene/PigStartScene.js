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
var PigStartScene = (function (_super) {
    __extends(PigStartScene, _super);
    function PigStartScene() {
        var _this = _super.call(this) || this;
        /**加载皮肤 */
        _this.skinName = "resource/eui_skins/pig/PigStartScene.exml";
        return _this;
    }
    PigStartScene.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    PigStartScene.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.playDoc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayDocClick, this);
        this.ranking.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRankingClick, this);
        this.gift.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGiftClick, this);
        this.addGift.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGiftClick, this);
        this.pigShop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopClick, this);
        this.startCall.addEventListener(egret.TouchEvent.TOUCH_TAP, this.faceTween, this);
        // this.faceTween();        /**调用face缓动函数 */
        this.pigPulsate(); //测试组件
    };
    PigStartScene.prototype.pigPulsate = function () {
        // console.log(this.app_MyGroup.$children)
        var len = this.app_MyGroup.$children.length;
        for (var i = 0; i < len; i++) {
            var tw_1 = egret.Tween.get(this.app_MyGroup.$children[i], { loop: true });
            tw_1.to({ scaleY: 0.37, scaleX: 0.37 }, 500).to({ scaleY: 0.35, scaleX: 0.35 }, 500).wait(5000);
        }
        var tw = egret.Tween.get(this.recover, { loop: true });
        tw.to({ scaleY: 1.1, scaleX: 1.1 }, 500).to({ scaleY: 1, scaleX: 1 }, 500).wait(2000);
    };
    PigStartScene.prototype.faceTween = function () {
        var tw = egret.Tween.get(this.pigShop);
        tw.to({ x: 360, y: 500 }, 3000, egret.Ease.backInOut).wait(100).to({ x: 560, y: 1200 }, 3000, egret.Ease.backIn).wait(200);
        var render = new egret.RenderTexture();
        render.drawToTexture(this.down); //rootLayer是当前显示层的总容器down，或者用this.stage
        var base64Str = render.toDataURL("image/jpeg");
        console.log(base64Str);
        render.saveToFile("image/png", "aa.png"); //也可以保存下来
    };
    PigStartScene.prototype.testExml = function () {
        var button = new eui.Button();
        this.addChild(button);
    };
    /**
     * 点击按钮
     * Click the button
     */
    PigStartScene.prototype.onPlayDocClick = function (e) {
        SceneManager.addScene('docScene');
    };
    PigStartScene.prototype.onRankingClick = function (e) {
        SceneManager.addScene('rankScene');
    };
    PigStartScene.prototype.onGiftClick = function (e) {
        SceneManager.addScene('giftScene');
    };
    PigStartScene.prototype.onShopClick = function (e) {
        SceneManager.addScene('shopScene');
    };
    return PigStartScene;
}(eui.Component));
__reflect(PigStartScene.prototype, "PigStartScene", ["eui.UIComponent", "egret.DisplayObject"]);
