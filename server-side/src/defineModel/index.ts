import { DataTypes } from "sequelize";
import { sequelize } from '../dao/baseDaoDefine'

class UserInfo {
    static createModel(){
        
      const model =  sequelize.define('myuserinfo',{  //必须为数据表名称
        userid: {
            type: DataTypes.INTEGER, //表示属性的数据类型
            field: 'userid', //属性对应的列名,若不定义field则表中的列名(userid)就是属性名
            primaryKey: true, //表示主键
            autoIncrement: true, //表示主键自增
          },
          username: {
            type: DataTypes.STRING(30),
            field: 'username',
            allowNull: false, //表示当前列是否允许为空，false表示该列不能为空
            //unique:true    //表示该列的值必须唯一
          },
          psw: {
            type: DataTypes.STRING(20),
            field: 'psw',
            allowNull: false,
          },
          address: {
            type: DataTypes.STRING(50),
            field: 'address',
            allowNull: true,
          },
          valid: {
            type: DataTypes.TINYINT,
            field: 'valid',
            allowNull: true,
          }
        },
        {
            // freezeTableName:false, 
            timestamps:false, 
        }
        )
        // model.sync({force:false})
        return model
    }
}

export const model = UserInfo.createModel()