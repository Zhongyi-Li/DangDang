import { Context } from 'Koa'
 import Router from 'koa-router'

const router = new Router() 
router.prefix('/usermodule')

 router.get('/findUserInfo/:username',async (ctx:Context)=>{
    const {username} = ctx.params
     ctx.body = `Hello ${username}`
})

router.post('/addUser',async(ctx)=>{
   const {userName} = ctx.request.body
   ctx.body = `welcome to ${userName}`
    
})

module.exports = router
// export default router 