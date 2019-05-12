/*
 * @Author: ougato
 * @LastEditors: ougato
 * @Date: 2019-05-01 22:02:14
 * @LastEditTime: 2019-05-13 00:25:19
 */

export class AudioManager {
    // 静态单例对象
    private static s_objInstace: AudioManager;

    constructor() {
        this._initData();
        this._register();
    }

    /**
     * 获取单例
     */
    public static getInstance(): AudioManager {
        if( this.s_objInstace === undefined ) {
            this.s_objInstace = new AudioManager();
        }
        return this.s_objInstace;
    }

    /**
     * 单例销毁
     */
    public static destroy(): void {
        if( this.s_objInstace !== undefined ) {
            this.s_objInstace._destroy();
            this.s_objInstace = undefined;
        }
    }

    /**
     * 初始化数据
     */
    private _initData(): void {

    }

    /**
     * 注册事件
     */
    private _register(): void {

    }

    /**
     * 实例销毁
     */
    private _destroy(): void {
        this._initData();
    }

    /**
     * 播放音乐
     * @param path {string} 路径
     * @param volume {number} 音量 [0-1]
     * @param finishCF {Function} 完成后回调函数
     */
    public playMusic( path: number, volume: number, finishCF: Function ): number {

    }

    /**
     * 播放音效
     * @param path {string} 路径
     * @param volume {number} 音量 [0-1]
     * @param finishCF {Function} 完成后回调函数
     */
    public playSound( path: string, volume: number, finishCF: Function ): number {

    }


}