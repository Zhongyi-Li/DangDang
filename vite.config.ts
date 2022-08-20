import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


export default defineConfig((mode) => {
  console.log('当前环境', mode.mode);

  // 拼接当前环境文件名
  const envFileName: string = '.env'
  const curEnvFileName = `${envFileName}.${mode.mode}`

  // fs.readFileSync：读取环境文件key-value数据到缓存对象，
  // dotenv.parse 读取缓存对象到envConf对象中。

  return {
    plugins: [vue()]
  }
})
// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })
