class PigRankScene extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		/**加载皮肤 */
		this.skinName = "resource/eui_skins/pig/PigRankScene.exml";
	}
	public dclose:eui.Image;
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.dclose.addEventListener(egret.TouchEvent.TOUCH_TAP, function(){SceneManager.removeScene('rankScene')}, this);
	}
}