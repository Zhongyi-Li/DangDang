import { Context } from 'koa'
declare module "Koa"{
    export interface Context extends Context {
        params:{
            [key:string]:string
        }
    }
}