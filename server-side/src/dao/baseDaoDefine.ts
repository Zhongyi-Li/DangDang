import DbConfig from "../conf/DbConfig";
import { Dialect } from 'sequelize'
import { Sequelize } from 'sequelize-typescript'

class BaseDaoDefine{
    static baseDaoORM:BaseDaoDefine = new BaseDaoDefine()
    sequelize!:Sequelize
    constructor(){
        this.initSeqConf('mysql')
    }

    initSeqConf(dialect:Dialect){
        const { host,password,user,port, database } = DbConfig.getConf()
        console.log('数据库配置',host,password,user,port,database);
        
        this.sequelize = new Sequelize(database,user,password,{
            host,
            port,
            dialect,
            define:{timestamps:false,freezeTableName:true }
        })
        
    }
}

export const { sequelize } = BaseDaoDefine.baseDaoORM;