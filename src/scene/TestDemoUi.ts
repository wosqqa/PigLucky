class TestDemoUi extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		this.skinName = "resource/eui_skins/TestDemoUi.exml";
	}
	public myGroup:eui.Group;
	public myPig:eui.Image;
	public myList:eui.List;
	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();

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
		console.log(this.myPig)
		var tw = egret.Tween.get( this.myPig, { loop:true});
        tw.to({x:300},3000,egret.Ease.backInOut).to({x:50},0).wait(1000);
		
		// eui数据
		let euiArr:eui.ArrayCollection = new eui.ArrayCollection(PigData.testLevel)
		this.myList.dataProvider = euiArr

	}
	
}

