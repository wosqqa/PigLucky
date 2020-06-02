class SceneManager {
  public _stage: egret.DisplayObjectContainer; // 根场景
  public mainScene: Main;
  public startScene: PigStartScene;
  public rankScene: PigRankScene;
  public docScene: PigDocScene;
  public giftScene: PigGiftScene;
  public shopScene: PigShopScene;
  public testScene: TestDemoUi;

  constructor() {
    this.mainScene = new Main();
    this.startScene = new PigStartScene();
    this.rankScene = new PigRankScene();
    this.docScene = new PigDocScene();
    this.giftScene = new PigGiftScene();
    this.shopScene = new PigShopScene();
    this.testScene = new TestDemoUi();
  }

  // 获取单例
  static sceneManager: SceneManager;
  static get instance() {
    if (!this.sceneManager) {
      this.sceneManager = new SceneManager();
    }
    return this.sceneManager;
  }

  // 删除其他场景
  private removeOtherScene(scene) {
    let arr = [this.startScene, this.mainScene];
    arr.forEach(item => {
      if (scene === item) {
        return
      }
      if (item.parent) {
        this._stage.removeChild(item)
      }
    })
  }
  // 删除其他场景
  static removeScene(scene) {
    console.log('removeScene')
    this.instance._stage.removeChild(this.instance[scene]);
  }

  // 删除其他场景
  static addScene(scene) {
    console.log('addScene')
    this.instance._stage.addChild(this.instance[scene]);
  }

  // 设置根场景
  public setScene(s: egret.DisplayObjectContainer) {
    this._stage = s;
  }

  // 开始场景
  static toStartScene() {
    // this.instance._stage.addChild(this.instance.startScene)
    this.instance._stage.addChild(this.instance['startScene']);
    // this.instance._stage.addChild(this.instance['testScene']);
  }

  // 游戏场景
  static toMainScene() {
    this.instance._stage.addChild(this.instance.mainScene)
  }
}

