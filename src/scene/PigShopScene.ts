class PigShopScene extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/pig/PigShopScene.exml";
	}
	public close:eui.Image;
	public myList:eui.List;
	public myItemList:eui.Group;
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
		console.log(PigData.levelInfo)
		// eui数据
		let euiArr:eui.ArrayCollection = new eui.ArrayCollection(PigData.levelInfo)
		this.myList.dataProvider = euiArr
		this.close.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){
			SceneManager.removeScene('shopScene');
		},this);
	}
	
}