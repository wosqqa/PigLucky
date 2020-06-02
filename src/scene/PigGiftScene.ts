class PigGiftScene extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/pig/PigGiftScene.exml";
	}
	public close:eui.Rect;

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	 	this.close.addEventListener(egret.TouchEvent.TOUCH_TAP, function(){SceneManager.removeScene('giftScene')}, this);
	}
	
}