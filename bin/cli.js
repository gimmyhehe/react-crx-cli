#! /usr/bin/env node

const create = require('./create.js')
const commander = require('commander')
const figlet = require('figlet');
console.log(1111)

commander
  .command('create <name>')
  .description('create a new project')
  // -f or --force 为强制创建，如果创建的目录存在则直接覆盖
  .option('-f, --force', 'overwrite target directory if it exist')
  .action((name, options) => {
    // 打印执行结果
    console.log('name:',name,'options:',options)
    create(name, options)
  })

figlet('react-crx-cli', function(err, data) {
  if (err) {
      console.log('figlet error: Something went wrong...');
      console.dir(err);
      return;
  }
  console.log(data)
});


// 解析用户执行命令传入参数
commander.parse(process.argv);