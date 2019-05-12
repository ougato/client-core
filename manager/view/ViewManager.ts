/*
 * @Description: 视图管理器
 * @Author: ougato
 * @Date: 2019-05-12 23:55:06
 * @LastEditors: ougato
 * @LastEditTime: 2019-05-13 00:22:19
 */

export class ViewManager {

    // 静态 单例对象
    private static s_objInstace: ViewManager;

    constructor() {

    }

    /**
     * 获取单例对象
     * @return {ViewManager} 单例对象
     */
    public static getInstance(): ViewManager {
        if (this.s_objInstace === undefined) {
            this.s_objInstace = new ViewManager();
        }
        return this.s_objInstace;
    }

}