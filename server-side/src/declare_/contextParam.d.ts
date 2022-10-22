import { Context } from 'koa'

declare module 'koa' {
    export interface Context extends Context {
        params:{
            [key:string]:number | string
        }
    }
}