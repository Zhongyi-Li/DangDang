import mysql, { Connection } from 'mysql'
import DbConfig from '../conf/DbConfig'
import { Dialect } from 'sequelize'
import { Sequelize } from 'sequelize-typescript'

class BaseDao {
    static baseDao:BaseDao = new BaseDao()
    con!:Connection

    constructor(){
        this.connect()
    }

    async connect(){
        this.con = await mysql.createConnection(DbConfig.getConf())
    }

    async query<T>(sql:string){
        return new Promise<T>((resolve,reject)=>{
            this.con.query(sql,(err,result)=>{
                if(err){
                    reject(err)
                }else{
                    resolve(result)
                }
            })
        })
    }
}

export default BaseDao.baseDao