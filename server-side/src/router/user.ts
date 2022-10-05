import { success } from '../common/ResResult'
import { Context } from 'Koa'
 import Router from 'koa-router'
import userDao from '../dao/userDao'
import Userinfo from '../model/userInfo'
import { addUser, findAllUser, findByProps,
         findByUsmAndPsw ,findByLike, findByUsmAndAddr,
          countUserinfo,findUserWithPage
         } from '../dao/userDaoDefine'

const router = new Router() 
router.prefix('/usermodule')

 router.get('/findUserInfo/:username/:psw',async (ctx:Context)=>{
    const {username, psw } = ctx.params
    const oneUser = await findByUsmAndPsw(  username,psw)
    ctx.body = success(oneUser)
   //  const userInfo:Userinfo[] = await userDao.findUserinfo(username,psw)
   //   ctx.body = success(`Hello ${username}`) 
})

router.get('/findAllUser',async(ctx:Context)=>{
   const dbAllUserinfo =  await findByProps()
   ctx.body = success(dbAllUserinfo)
})

router.get('/findByLike',async(ctx:Context)=>{
   // ctx.body = success( await findByLike())
   ctx.body = success(await findByUsmAndAddr())
})

router.post('/addUser',async(ctx)=>{
   const userinfo:Userinfo = ctx.request.body
   const dbUserinfo = await addUser(userinfo)
   ctx.body = success(dbUserinfo)  
})

router.get('/countTotal',async(ctx:Context)=>{
   ctx.body = success(await countUserinfo())
})

router.get('/findUserWithPager/:pageNo/:pageSize',async(ctx:Context)=>{
   const { pageNo,pageSize } = ctx.params;
   const offset = ((parseInt(pageNo)  -1))  * parseInt(pageSize)

   ctx.body = success(await findUserWithPage(offset,parseInt(pageSize)))

})
module.exports = router
// export default router 