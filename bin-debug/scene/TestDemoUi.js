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
var TestDemoUi = (function (_super) {
    __extends(TestDemoUi, _super);
    function TestDemoUi() {
        var _this = _super.call(this) || this;
        _this.skinName = "resource/eui_skins/TestDemoUi.exml";
        return _this;
    }
    TestDemoUi.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    TestDemoUi.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // var exml = `
        // <e:Skin xmlns:e="http://ns.egret.com/eui"> 
        //     <e:DataGroup> 
        //         <e:itemRendererSkinName> 
        //             <e:Skin> 
        //                 <e:Image source="resource/assets/Panel/border.png"/> <e:Label textColor="0xfd0000" text="{data.label}"/> 
        //             </e:Skin> 
        //         </e:itemRendererSkinName> 
        //         <e:ArrayCollection> 
        //             <e:Array> 
        //                 <e:Object label="item1"/> 
        //                 <e:Object label="item2"/> 
        //                 <e:Object label="item3"/> 
        //                 <e:Object label="item4"/> 
        //             </e:Array> 
        //         </e:ArrayCollection> 
        //     </e:DataGroup> 
        // </e:Skin>`;
        // var component = new eui.Component();
        // component.skinName = exml;
        // this.myGroup.addChild(component);
        // this.myGroup.removeChild(this.myPig);pig28Imgs_json.pig_13
        console.log(this.myPig);
        var tw = egret.Tween.get(this.myPig, { loop: true });
        tw.to({ x: 300 }, 3000, egret.Ease.backInOut).to({ x: 50 }, 0).wait(1000);
        // eui数据
        var euiArr = new eui.ArrayCollection(PigData.testLevel);
        this.myList.dataProvider = euiArr;
    };
    return TestDemoUi;
}(eui.Component));
__reflect(TestDemoUi.prototype, "TestDemoUi", ["eui.UIComponent", "egret.DisplayObject"]);
