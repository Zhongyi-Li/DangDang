import { success } from '../common/ResResult'
import { Context } from 'Koa'
 import Router from 'koa-router'
import userDao from '../dao/userDao'
import Userinfo from '../model/userInfo'

const router = new Router() 
router.prefix('/usermodule')

 router.get('/findUserInfo/:username/:psw',async (ctx:Context)=>{
    const {username, psw } = ctx.params
    const userInfo:Userinfo[] = await userDao.findUserinfo(username,psw)
    console.log('usefInfo--',userInfo);
    
     ctx.body = success(`Hello ${username}`) 
})

router.post('/addUser',async(ctx)=>{
   const {userName} = ctx.request.body
   ctx.body = `welcome to ${userName}`
    
})

module.exports = router
// export default router 