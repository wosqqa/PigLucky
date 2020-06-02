
class PigStartScene extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		/**加载皮肤 */
		this.skinName = "resource/eui_skins/pig/PigStartScene.exml";
	}
	public pigShop:eui.Image;
	public recover:eui.Image;
	public gift:eui.Image;
	public ranking:eui.Image;
	public playDoc:eui.Image;
	public addGift:eui.Image;
	public startCall:eui.Image;
	public app_MyGroup:eui.Group;
	public down:eui.Image;
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.playDoc.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onPlayDocClick, this);
		this.ranking.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onRankingClick, this);
		this.gift.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGiftClick, this);
		this.addGift.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onGiftClick, this);
		this.pigShop.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onShopClick, this);
		this.startCall.addEventListener(egret.TouchEvent.TOUCH_TAP, this.faceTween, this);
		// this.faceTween();        /**调用face缓动函数 */
		this.pigPulsate(); //测试组件
	}
	private pigPulsate():void{
		// console.log(this.app_MyGroup.$children)
		let len = this.app_MyGroup.$children.length
		for(let i = 0;i < len;i++){
			let tw = egret.Tween.get( this.app_MyGroup.$children[i],{loop:true});
			tw.to({scaleY:0.37,scaleX:0.37},500).to({scaleY:0.35,scaleX:0.35},500).wait(5000);
		}
        let tw = egret.Tween.get( this.recover,{loop:true});
        tw.to({scaleY:1.1,scaleX:1.1},500).to({scaleY:1,scaleX:1},500).wait(2000);
	}

	private faceTween():void      /**face对象的缓动动画 */
    {        
        var tw = egret.Tween.get( this.pigShop);
        tw.to({x:360,y:500},3000,egret.Ease.backInOut).wait(100).to({x:560,y:1200},3000,egret.Ease.backIn).wait(200);
		let render = new egret.RenderTexture();
        render.drawToTexture(this.down);//rootLayer是当前显示层的总容器down，或者用this.stage
        let base64Str = render.toDataURL("image/jpeg");
		console.log(base64Str)
        render.saveToFile("image/png", "aa.png");//也可以保存下来
    }
	

	private testExml():void{
		var button = new eui.Button();
		this.addChild(button);
	}
	/**
     * 点击按钮
     * Click the button
     */
    private onPlayDocClick(e: egret.TouchEvent) {
		SceneManager.addScene('docScene');
    }
	private onRankingClick(e: egret.TouchEvent) {
		SceneManager.addScene('rankScene');
    }
	private onGiftClick(e: egret.TouchEvent) {
        SceneManager.addScene('giftScene');
    }
	private onShopClick(e: egret.TouchEvent) {
        SceneManager.addScene('shopScene');
    }
}