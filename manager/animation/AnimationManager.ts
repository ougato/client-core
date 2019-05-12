/*
 * @Description: 动画管理器
 * @Author: ougato
 * @Date: 2019-05-12 23:55:06
 * @LastEditors: ougato
 * @LastEditTime: 2019-05-13 00:20:35
 */

export class AnimationManager {

    // 静态 单例对象
    private static s_objInstace: AnimationManager;

    constructor() {

    }

    /**
     * 获取单例对象
     * @return {AnimationManager} 单例对象
     */
    public static getInstance(): AnimationManager {
        if (this.s_objInstace === undefined) {
            this.s_objInstace = new AnimationManager();
        }
        return this.s_objInstace;
    }

}