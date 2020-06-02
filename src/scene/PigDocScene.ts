class PigDocScene extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/pig/PigDocScene.exml";
	}
	public close:eui.Image;
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		this.close.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
			SceneManager.removeScene('docScene')
		},this)
	}
	
}