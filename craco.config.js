const path = require('path')
const dotenv = require('dotenv')
const fs = require('fs');
const resolve = (dir) => path.resolve(__dirname, dir)

// 读取.env文件并将其添加到process.env中
// dotenv.config()
const config = dotenv.parse(fs.readFileSync(resolve(`.env.${process.env.REACT_APP_MODE}`)))
Object.assign( process.env,config)
// console.log(config);



module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    }
  }
}
