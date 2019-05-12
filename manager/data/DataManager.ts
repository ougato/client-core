
/*
 * @Description: 数据管理器
 * @Author: ougato
 * @Date: 2019-05-12 23:55:06
 * @LastEditors: ougato
 * @LastEditTime: 2019-05-13 00:52:08
 */

export class DataManager {

    // 静态 单例对象
    private static s_objInstace: DataManager;

    constructor() {
        
    }

    /**
     * 获取单例对象
     * @return {DataManager} 单例对象
     */
    public static getInstance(): DataManager {
        if (this.s_objInstace === undefined) {
            this.s_objInstace = new DataManager();
        }
        return this.s_objInstace;
    }

}