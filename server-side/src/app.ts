import Koa from 'koa'
import allRouterLoader from './common/AllRouterLoader'
import Config from './conf/DbConfig'

const app = new Koa()
allRouterLoader.init(app)
const envCon = Config.getConf('')
console.log(envCon);


