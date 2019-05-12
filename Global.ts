import { AnimationManager } from "./manager/animation/AnimationManager";
import { AudioManager } from "./manager/audio/AudioManager";
import { DataManager } from "./manager/data/DataManager";
import { EventManager } from "./manager/event/EventManager";
import { NetManager } from "./manager/net/NetManager";
import { ViewManager } from "./manager/view/ViewManager";

/*
 * @Description: 全局变量
 * @Author: ougato
 * @Date: 2019-05-10 00:19:03
 * @LastEditors: ougato
 * @LastEditTime: 2019-05-13 00:24:50
 */

export class Global {
    // 动画管理器
    private m_objAnimationManager: AnimationManager;
    // 声音管理器
    private m_objAudioManager: AudioManager;
    // 数据管理器
    private m_objDataManager: DataManager;
    // 事件管理器
    private m_objEventManager: EventManager;
    // 网络管理器
    private m_objNetManager: NetManager;
    // 视图管理器
    private m_objViewManager: ViewManager;

    public get AnimationManager(): AnimationManager {
        return this.m_objAnimationManager;
    }

    public get AudioManager(): AudioManager {
        return this.m_objAudioManager;
    }

    public get DataManager(): DataManager {
        return this.m_objDataManager;
    }

    public get EventManager(): EventManager {
        return this.m_objEventManager;
    }

    public get NetManager(): NetManager {
        return this.m_objNetManager;
    }

    public get ViewManager(): ViewManager {
        return this.m_objViewManager;
    }

    constructor() {
        this.init();
    }

    public init(): void {
        this._initManager();
    }

    public _initManager(): void {
        this.m_objAnimationManager = AnimationManager.getInstance();
        this.m_objAnimationManager = AudioManager.getInstance();
        this.m_objAnimationManager = DataManager.getInstance();
        this.m_objAnimationManager = EventManager.getInstance();
        this.m_objAnimationManager = NetManager.getInstance();
        this.m_objAnimationManager = ViewManager.getInstance();
    }
}