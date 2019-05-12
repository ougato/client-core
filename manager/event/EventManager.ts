/*
 * @Description: 事件管理器
 * @Author: ougato
 * @Date: 2019-05-12 23:55:06
 * @LastEditors: ougato
 * @LastEditTime: 2019-05-13 00:22:58
 */

export class EventManager {

    // 静态 单例对象
    private static s_objInstace: EventManager;

    constructor() {

    }

    /**
     * 获取单例对象
     * @return {EventManager} 单例对象
     */
    public static getInstance(): EventManager {
        if (this.s_objInstace === undefined) {
            this.s_objInstace = new EventManager();
        }
        return this.s_objInstace;
    }

}