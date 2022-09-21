import koa,{ Context } from 'koa'
import { defaults } from 'lodash';

import {success,fail} from './ResResult'

  const globalExcettion = async (ctx:Context,next:koa.Next)=>{
    try{
        await next()
    }catch(error){
        const errslt = error as {message:''}
        ctx.body =fail(`服务端出现异常${errslt.message}` ) 
        
    }
}

export default globalExcettion