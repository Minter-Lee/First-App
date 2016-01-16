# TestNEW
初步尝试使用nodeJS+webpack+express构建web基础结构

#运行
- 1. git clone 项目
- 2. 进入项目目录 运行 npm install，安装各类插件
- 3. 运行 webpack 将前端文件打包
- 4. 运行 supervisor lib/app.js 运行系统
- 5. 使用浏览器访问 localhost:8080

#开发技巧
- 若仅修改后端文件，则可直接执行 supervisor lib/app.js，此命令也会实时监控后端修改，自动reload服务。
- 若前后端都修改了，请依次执行第3、4步。（后续会通过命令集将其合并至一个命令）;