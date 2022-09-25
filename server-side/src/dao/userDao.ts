import Userinfo from '@/model/userInfo'
import {isNotEmpty} from '../common/StringUtil'
import baseDao from './baseDao'

class UserDao{
    static userDao:UserDao = new UserDao()
    findUserinfo(uasername:string,psw:string){
        let sql = "select * from myuserinfo where 1=1"

        if(isNotEmpty(uasername)){
            sql+= ` and username = "${uasername}" `
        }
        if(isNotEmpty(psw)){
            sql+= `and psw="${psw}"`
        }

        return baseDao.query<Userinfo[]>(sql)
    }
}

export default UserDao.userDao