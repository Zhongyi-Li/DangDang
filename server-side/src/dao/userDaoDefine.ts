import { Op, Sequelize } from 'sequelize'
import { reduceEachTrailingCommentRange } from 'typescript'
import { model } from '../defineModel/index'

class userDaoDefine{
   static addUser(userinfo: userInfo){
        return model.create(userinfo)
    }

    static findAllUser(){
        return model.findAll({
            raw:true   //屏蔽底层代码 只返回数据
        })
    }

    //投影查询
    static findByProps(){
        return model.findAll({
            raw:true,
            attributes:['username','psw']
        })
    }

    //or and查询
    static findByUsmAndPsw(username:string,psw:string){
        return model.findOne({
            raw:true,
            where:{
                [Op.or]:[
                    {username},
                    {psw}
                ]
            }
        })
    }
    
    //模糊查询
    static findByLike(){
        return model.findAll({
            raw:true,
            where:{
                username:{
                    [Op.like]:"l%"
                }
            }
        })
    }

    //模糊查询多个条件
    static findByUsmAndAddr(){
        return model.findAll({
            raw:true,
            where:{
                [Op.and]:[
                    {
                        username:{
                            [Op.like]:'l%'
                       }
                   },
                   {
                    address:{
                        [Op.like]:'h%'
                    }
                   }
                ]
            }
        })
    }
    
    //聚合查询
    static countUserinfo(){
        return model.findAll({
            raw:true,
            group:'address',
            attributes:['address',[Sequelize.fn('count',Sequelize.col('valid')),'totalCount']],
            where:{
                valid:1
            }
        })
    }

    //分页查询
    static findUserWithPage(offset:number,pageSize:number){
        return model.findAll({
            raw:true,
            limit:pageSize,
            offset:offset
            
        })
    }
}

export const { addUser ,findAllUser,findByProps,findByUsmAndPsw,findByLike,findByUsmAndAddr,countUserinfo,findUserWithPage} = userDaoDefine

export type userInfo = {
    userid:number
    username:string
    psw:string
    address:string
    valid:number
}

