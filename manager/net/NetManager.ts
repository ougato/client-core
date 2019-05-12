/*
 * @Description: 网络管理器
 * @Author: ougato
 * @Date: 2019-05-12 23:55:06
 * @LastEditors: ougato
 * @LastEditTime: 2019-05-13 00:22:36
 */

export class NetManager {

    // 静态 单例对象
    private static s_objInstace: NetManager;

    constructor() {

    }

    /**
     * 获取单例对象
     * @return {NetManager} 单例对象
     */
    public static getInstance(): NetManager {
        if (this.s_objInstace === undefined) {
            this.s_objInstace = new NetManager();
        }
        return this.s_objInstace;
    }

}