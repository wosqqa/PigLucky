window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml","PigStartScene":"resource/eui_skins/pig/PigStartScene.exml","PigRankScene":"resource/eui_skins/pig/PigRanking.exml","PigDocScene":"resource/eui_skins/pig/PigDocScene.exml","PigShop":"resource/eui_skins/pig/PigShop.exml","PigGift":"resource/eui_skins/pig/PigGift.exml","PigGiftScene":"resource/eui_skins/pig/PigGiftScene.exml","PigShopScene":"resource/eui_skins/pig/PigShopScene.exml","TestDemoUi":"resource/eui_skins/TestDemoUi.exml","goodsListItem":"resource/eui_skins/goodsListItem.exml","shopListItem":"resource/eui_skins/pig/pig_item/shopListItem.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/goodsListItem.exml'] = window.goodsListItem = (function (_super) {
	__extends(goodsListItem, _super);
	function goodsListItem() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 300;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Label2_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.image"],[0],this._Image2,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.value"],[0],this._Label2,"text");
	}
	var _proto = goodsListItem.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.horizontalCenter = 0;
		t.source = "uibgImgs_json.blessbg";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.width = 60;
		t.x = 34;
		t.y = 18;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xffdb51;
		t.width = 130;
		t.x = 148.5;
		t.y = 23;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.size = 20;
		t.textColor = 0x00cce5;
		t.width = 231;
		t.x = 123;
		t.y = 63;
		return t;
	};
	return goodsListItem;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/pig/pig_item/shopListItem.exml'] = window.shopListItemSkin = (function (_super) {
	__extends(shopListItemSkin, _super);
	function shopListItemSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 95;
		this.width = 463;
		this.elementsContent = [this._Group1_i()];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data.source"],[0],this._Image1,"source");
		eui.Binding.$bindProperties(this, ["hostComponent.data.level"],[0],this._Label1,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.name"],[0],this._Label2,"text");
		eui.Binding.$bindProperties(this, ["hostComponent.data.callMax"],[0],this._Label3,"text");
	}
	var _proto = shopListItemSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.x = 28;
		t.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Rect2_i(),this._Label1_i(),this._Label2_i(),this._Rect3_i(),this._Label3_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 30;
		t.ellipseWidth = 30;
		t.fillColor = 0xeddfd9;
		t.height = 80;
		t.strokeColor = 0xd39c84;
		t.width = 463;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.scaleX = 0.15;
		t.scaleY = 0.15;
		t.x = 60;
		t.y = 7;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xdb4342;
		t.height = 34;
		t.width = 30;
		t.x = 15;
		t.y = 21;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		this._Label1 = t;
		t.size = 22;
		t.textColor = 0xfcf9f9;
		t.x = 19;
		t.y = 27;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		this._Label2 = t;
		t.bold = true;
		t.size = 26;
		t.textColor = 0x5b0909;
		t.x = 139.5;
		t.y = 25;
		return t;
	};
	_proto._Rect3_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 50;
		t.ellipseWidth = 50;
		t.fillColor = 0xe43b36;
		t.height = 45;
		t.strokeColor = 0xfee557;
		t.strokeWeight = 2;
		t.width = 106;
		t.x = 335;
		t.y = 17;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		this._Label3 = t;
		t.size = 24;
		t.textColor = 0xfee557;
		t.x = 347;
		t.y = 27;
		return t;
	};
	return shopListItemSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/pig/PigDocScene.exml'] = window.PigDocSceneSkin = (function (_super) {
	__extends(PigDocSceneSkin, _super);
	function PigDocSceneSkin() {
		_super.call(this);
		this.skinParts = ["close"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this.close_i()];
	}
	var _proto = PigDocSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.6;
		t.height = 1334;
		t.strokeAlpha = 1;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.helpview";
		t.x = 72.06;
		t.y = 161.49;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Image();
		this.close = t;
		t.source = "actionImgs_json.close";
		t.x = 624;
		t.y = 164.52;
		return t;
	};
	return PigDocSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/pig/PigGiftScene.exml'] = window.PigGiftSceneSkin = (function (_super) {
	__extends(PigGiftSceneSkin, _super);
	function PigGiftSceneSkin() {
		_super.call(this);
		this.skinParts = ["close"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Label1_i(),this.close_i()];
	}
	var _proto = PigGiftSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.6;
		t.height = 1334;
		t.strokeAlpha = 1;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.invitebg";
		t.x = 54.97;
		t.y = 112.3;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "actionImgs_json.invite";
		t.x = 239.33;
		t.y = 915.21;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 32;
		t.text = "8.8b";
		t.textColor = 0x820303;
		t.x = 318.83;
		t.y = 860;
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Rect();
		this.close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0;
		t.fillColor = 0x000000;
		t.height = 62;
		t.width = 64;
		t.x = 631.97;
		t.y = 186;
		return t;
	};
	return PigGiftSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/pig/PigRankScene.exml'] = window.PigRankSceneSkin = (function (_super) {
	__extends(PigRankSceneSkin, _super);
	function PigRankSceneSkin() {
		_super.call(this);
		this.skinParts = ["dclose"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.dclose_i(),this._Image6_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Image7_i(),this._Image8_i(),this._Scroller1_i()];
	}
	var _proto = PigRankSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.6;
		t.height = 1334;
		t.strokeAlpha = 1;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 118;
		t.anchorOffsetY = 284;
		t.source = "uibgImgs_json.rankbg";
		t.x = 175;
		t.y = 490;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 60;
		t.anchorOffsetY = 60;
		t.source = "actionImgs_json.invite";
		t.x = 308.5;
		t.y = 1106;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.itembg";
		t.x = 135;
		t.y = 374;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.itembg";
		t.x = 135;
		t.y = 500;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "actionImgs_json.1";
		t.x = 158;
		t.y = 396;
		return t;
	};
	_proto.dclose_i = function () {
		var t = new eui.Image();
		this.dclose = t;
		t.source = "actionImgs_json.close";
		t.x = 635;
		t.y = 272;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "actionImgs_json.2";
		t.x = 164;
		t.y = 524;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 36;
		t.size = 22;
		t.text = "卡卡辅助";
		t.textColor = 0xf72727;
		t.width = 112;
		t.x = 300;
		t.y = 394;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 24;
		t.text = "开心福猪";
		t.x = 309;
		t.y = 432;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 28;
		t.text = "10.8m";
		t.textColor = 0x891616;
		t.x = 514;
		t.y = 432;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64;
		t.source = "dfttth_png";
		t.width = 64;
		t.x = 215;
		t.y = 394;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64;
		t.source = "dfttth_png";
		t.width = 64;
		t.x = 220.5;
		t.y = 518;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 658;
		t.width = 498;
		t.x = 128;
		t.y = 352;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 658;
		t.width = 492;
		t.x = 6;
		t.y = 0;
		return t;
	};
	return PigRankSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/pig/PigShopScene.exml'] = window.PigShopSceneSkin = (function (_super) {
	__extends(PigShopSceneSkin, _super);
	function PigShopSceneSkin() {
		_super.call(this);
		this.skinParts = ["myItemList","myList","close"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Rect1_i(),this._Image1_i(),this._Image2_i(),this._Label1_i(),this._Rect2_i(),this._Scroller1_i(),this.close_i()];
	}
	var _proto = PigShopSceneSkin.prototype;

	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fillAlpha = 0.6;
		t.height = 1334;
		t.strokeAlpha = 1;
		t.width = 750;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 800;
		t.source = "uibgImgs_json.kuang";
		t.width = 616;
		t.x = 84.97;
		t.y = 227.39;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "uibgImgs_json.titlebg";
		t.x = 135.6;
		t.y = 312.97;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 62;
		t.size = 32;
		t.text = "福气值：188.88m";
		t.textColor = 0x600e0e;
		t.verticalAlign = "middle";
		t.width = 302;
		t.x = 224;
		t.y = 317.11;
		return t;
	};
	_proto._Rect2_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillAlpha = 0.9;
		t.fillColor = 0xdbc1b2;
		t.height = 575;
		t.strokeAlpha = 1;
		t.strokeColor = 0xd39c84;
		t.strokeWeight = 3;
		t.width = 515;
		t.x = 117.5;
		t.y = 413.18;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetY = 0;
		t.height = 549;
		t.width = 515;
		t.x = 117.5;
		t.y = 425.18;
		t.viewport = this.myList_i();
		return t;
	};
	_proto.myList_i = function () {
		var t = new eui.List();
		this.myList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 575;
		t.itemRendererSkinName = shopListItemSkin;
		t.width = 515;
		t.dataProvider = this.myItemList_i();
		return t;
	};
	_proto.myItemList_i = function () {
		var t = new eui.Group();
		this.myItemList = t;
		t.layout = this._VerticalLayout1_i();
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 15;
		t.horizontalAlign = "center";
		return t;
	};
	_proto.close_i = function () {
		var t = new eui.Image();
		this.close = t;
		t.source = "actionImgs_json.close";
		t.x = 631.6;
		t.y = 231.96;
		return t;
	};
	return PigShopSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/pig/PigStartScene.exml'] = window.PigStartSceneSkin = (function (_super) {
	__extends(PigStartSceneSkin, _super);
	function PigStartSceneSkin() {
		_super.call(this);
		this.skinParts = ["startCall","gift","ranking","playDoc","addGift","recover","pigShop","app_MyGroup"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Label1_i(),this._Label2_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this.startCall_i(),this.gift_i(),this.ranking_i(),this.playDoc_i(),this._Image14_i(),this._Image15_i(),this.addGift_i(),this._Image16_i(),this._Label3_i(),this.recover_i(),this.pigShop_i(),this._Image17_i(),this._Label4_i(),this._Label5_i(),this.app_MyGroup_i()];
	}
	var _proto = PigStartSceneSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "bg2_jpg";
		t.top = 0;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 25;
		t.text = "福气值：333.00m  2345/秒";
		t.textColor = 0x561B06;
		t.x = 223.82;
		t.y = 337.16;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 25;
		t.text = "福气值：333.00m  2345/秒";
		t.textColor = 0x561B06;
		t.x = 223.82;
		t.y = 337.16;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.gridbg";
		t.x = 28;
		t.y = 478;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.gridbg";
		t.x = 208;
		t.y = 480;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.gridbg";
		t.x = 567;
		t.y = 478;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.gridbg";
		t.x = 391;
		t.y = 478;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.gridbg";
		t.x = 28;
		t.y = 648.83;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.gridbg";
		t.x = 208;
		t.y = 650.83;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.gridbg";
		t.x = 567;
		t.y = 648.83;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.gridbg";
		t.x = 391;
		t.y = 648.83;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.gridbg";
		t.x = 28;
		t.y = 847.83;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.gridbg";
		t.x = 208;
		t.y = 849.83;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.gridbg";
		t.x = 567;
		t.y = 847.83;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.gridbg";
		t.x = 391;
		t.y = 847.83;
		return t;
	};
	_proto.startCall_i = function () {
		var t = new eui.Image();
		this.startCall = t;
		t.source = "actionImgs_json.button";
		t.x = 220;
		t.y = 1010;
		return t;
	};
	_proto.gift_i = function () {
		var t = new eui.Image();
		this.gift = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "actionImgs_json.gift1";
		t.x = 485.24;
		t.y = 180;
		return t;
	};
	_proto.ranking_i = function () {
		var t = new eui.Image();
		this.ranking = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "actionImgs_json.gift2";
		t.x = 566.9;
		t.y = 180;
		return t;
	};
	_proto.playDoc_i = function () {
		var t = new eui.Image();
		this.playDoc = t;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "actionImgs_json.gift3";
		t.x = 651.2;
		t.y = 180;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "actionImgs_json.return";
		t.x = 28;
		t.y = 264.8;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "uibgImgs_json.goldbg";
		t.x = 17.5;
		t.y = 180;
		return t;
	};
	_proto.addGift_i = function () {
		var t = new eui.Image();
		this.addGift = t;
		t.source = "actionImgs_json.add";
		t.x = 200.92;
		t.y = 189.12;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "dfttth_png";
		t.x = 18.88;
		t.y = 180;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "金币：888";
		t.textColor = 0xf7be25;
		t.x = 81.84;
		t.y = 198;
		return t;
	};
	_proto.recover_i = function () {
		var t = new eui.Image();
		this.recover = t;
		t.source = "actionImgs_json.cycle";
		t.x = 594;
		t.y = 1000;
		return t;
	};
	_proto.pigShop_i = function () {
		var t = new eui.Image();
		this.pigShop = t;
		t.anchorOffsetY = 0;
		t.source = "actionImgs_json.pigimgbtn";
		t.x = 48;
		t.y = 1000;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "uibgImgs_json.blessbg";
		t.x = 178.72;
		t.y = 304;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "当前等级：Lv.9兴福福猪";
		t.textColor = 0x63210b;
		t.x = 240.92;
		t.y = 267.84;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.size = 25;
		t.text = "福气值：333.00m  2345/秒";
		t.textColor = 0x561B06;
		t.x = 216.22;
		t.y = 327.7;
		return t;
	};
	_proto.app_MyGroup_i = function () {
		var t = new eui.Group();
		this.app_MyGroup = t;
		t.anchorOffsetX = 350;
		t.anchorOffsetY = 310;
		t.height = 620;
		t.width = 750;
		t.x = 350;
		t.y = 680;
		t.elementsContent = [this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i()];
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.scaleX = 0.35;
		t.scaleY = 0.35;
		t.source = "pig28Imgs_json.pig_1";
		t.x = 100;
		t.y = 250;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.scaleX = 0.35;
		t.scaleY = 0.35;
		t.source = "pig28Imgs_json.pig_1";
		t.x = 100;
		t.y = 80;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.scaleX = 0.35;
		t.scaleY = 0.35;
		t.source = "pig28Imgs_json.pig_18";
		t.x = 640;
		t.y = 80;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.scaleX = 0.35;
		t.scaleY = 0.35;
		t.source = "pig28Imgs_json.pig_1";
		t.x = 460;
		t.y = 250;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.scaleX = 0.35;
		t.scaleY = 0.35;
		t.source = "pig28Imgs_json.pig_12";
		t.x = 100;
		t.y = 450;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.scaleX = 0.35;
		t.scaleY = 0.35;
		t.source = "pig28Imgs_json.pig_12";
		t.x = 640;
		t.y = 250;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.scaleX = 0.35;
		t.scaleY = 0.35;
		t.source = "pig28Imgs_json.pig_12";
		t.x = 280;
		t.y = 250;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.scaleX = 0.35;
		t.scaleY = 0.35;
		t.source = "pig28Imgs_json.pig_14";
		t.x = 280;
		t.y = 450;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.scaleX = 0.35;
		t.scaleY = 0.35;
		t.source = "pig28Imgs_json.pig_14";
		t.x = 465;
		t.y = 450;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.scaleX = 0.35;
		t.scaleY = 0.35;
		t.source = "pig28Imgs_json.pig_14";
		t.x = 280;
		t.y = 80;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.scaleX = 0.35;
		t.scaleY = 0.35;
		t.source = "pig28Imgs_json.pig_28";
		t.x = 635;
		t.y = 450;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 200;
		t.anchorOffsetY = 200;
		t.scaleX = 0.35;
		t.scaleY = 0.35;
		t.source = "pig28Imgs_json.pig_28";
		t.x = 460;
		t.y = 80;
		return t;
	};
	return PigStartSceneSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TestDemoUi.exml'] = window.TestDemoUiSkin = (function (_super) {
	__extends(TestDemoUiSkin, _super);
	function TestDemoUiSkin() {
		_super.call(this);
		this.skinParts = ["myList","myPig","myGroup"];
		
		this.height = 1334;
		this.width = 750;
		this.elementsContent = [this._Image1_i(),this._Scroller1_i(),this._ViewStack1_i()];
	}
	var _proto = TestDemoUiSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.source = "uibgImgs_json.invitebg";
		t.x = 53;
		t.y = 55;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 426.82;
		t.width = 485;
		t.x = 132;
		t.y = 271;
		t.viewport = this.myGroup_i();
		return t;
	};
	_proto.myGroup_i = function () {
		var t = new eui.Group();
		this.myGroup = t;
		t.anchorOffsetY = 0;
		t.height = 422.28;
		t.elementsContent = [this.myList_i(),this.myPig_i()];
		return t;
	};
	_proto.myList_i = function () {
		var t = new eui.List();
		this.myList = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 409.09;
		t.itemRendererSkinName = goodsListItem;
		t.width = 412.12;
		t.x = 20;
		t.y = 9;
		return t;
	};
	_proto.myPig_i = function () {
		var t = new eui.Image();
		this.myPig = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 201.51;
		t.source = "pig28Imgs_json.pig_13";
		t.width = 168.19;
		t.x = 117;
		t.y = 140;
		return t;
	};
	_proto._ViewStack1_i = function () {
		var t = new eui.ViewStack();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 219.7;
		t.width = 380.3;
		t.x = 179.54;
		t.y = 754.73;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.name = "Group";
		t.percentWidth = 100;
		t.x = 5.46;
		t.y = 4.24;
		t.elementsContent = [this._Image2_i(),this._Image3_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 201.51;
		t.source = "pig28Imgs_json.pig_13";
		t.width = 168.19;
		t.x = 17;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 222.73;
		t.source = "pig28Imgs_json.pig_19";
		t.width = 262.12;
		t.x = 117.88;
		t.y = 0;
		return t;
	};
	return TestDemoUiSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);