export function isString(data:unknown):data is string{
    return typeof data === 'string'
}

interface DbConConf{
    host:string,
    user:string,
    password:string,
    port:number,
    database:string
}

interface envConf{
    dev:DbConConf,
    prod:DbConConf
}

 class Config{
    static Config:Config = new Config()
    env!:keyof envConf
    envConf!:envConf
    constructor(){
        this.env = process.env.NODE_ENV === 'dev' ? 'dev' : 'prod'
        this.initConf()
    }

    initConf(){
        this.envConf = {
            dev:{
                host:'localhost',
                user:'lzy',
                password:'123',
                database:'test',
                port:3306
            },
            prod:{
                host:'www.xxx.com',
                user:'lzy',
                password:'123',
                database:'test',
                port:3306
            }
        }
    }

    // setConf():DbConConf
    // setConf(key:string):string
    setConf<T extends Record<string,any>>( data:T ):void{
      for(let key in data){
        if(this.isDbConConfKeys(key) && data.length){
           this.envConf[this.env][key] = data[key]
        }
      }
    }

    getConf(): DbConConf
    getConf(key: keyof DbConConf | '' ): string
    getConf(key: any = ''): any {
      if (this.isDbConConfKeys(key) && key.length > 0) {
        return this.envConf[this.env][key]
      } else {
        return this.envConf[this.env]
      }
    }
  
    isDbConConfKeys(key: unknown): key is keyof DbConConf {
      return (
        key === 'host' || key === 'user' || key === 'password' || key === 'database' || key === 'port'
      )
    }
}

export default  Config.Config