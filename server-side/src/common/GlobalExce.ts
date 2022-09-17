import koa,{ Context } from 'koa'
import { defaults } from 'lodash';

  const globalExcettion = async (ctx:Context,next:koa.Next)=>{
    try{
        await next()
    }catch(error){
        const errslt = error as {message:''}
        console.log('抛出异常');
        ctx.body = `服务端出现异常${errslt.message}`
        
    }
}

export default globalExcettion