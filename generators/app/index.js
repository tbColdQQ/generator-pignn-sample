const Generator = require('yeoman-generator')
module.exports = class extends Generator {

    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'projectName',
                message: 'Your Project Name',
                default: this.appname
            }
        ]).then(answers => {
            // answers => {name: 'user input value'}
            this.answers = answers
        })
    }

    writing() {
        // 普通文件写入
        // this.fs.write(
        //     this.destinationPath('temp.txt'),
        //     Math.random().toString()
        // )

        // 通过模板方式写入文件到目标目录
        // const tmpl = this.templatePath('foo.txt')
        // const output = this.destinationPath('foo.txt')
        // const context = {
        //     title: 'Hello pignn',
        //     success: false
        // }
        // this.fs.copyTpl(tmpl, output, context)

        // 接收用户输入
        // const tmpl = this.templatePath('foo.txt')
        // const output = this.destinationPath('foo.txt')
        // const context = {
        //     title: this.answers.name,
        //     success: true
        // }
        // this.fs.copyTpl(tmpl, output, context)

        // 批量写入文件
        const templates = [
            'css/bootstrap-theme.min.css',
            'css/bootstrap.min.css',
            'fonts/glyphicons-halflings-regular.eot',
            'fonts/glyphicons-halflings-regular.svg',
            'fonts/glyphicons-halflings-regular.ttf',
            'fonts/glyphicons-halflings-regular.woff',
            'fonts/glyphicons-halflings-regular.woff2',
            'imgs/aaa.jpg',
            'js/bootstrap.min.js',
            'js/jquery.min.js',
            'foo.txt',
            'index.html',
            'package.json',
            'README.md'
        ]
        templates.forEach(item => {
            this.fs.copyTpl(
                this.templatePath(item),
                this.destinationPath(item),
                this.answers
            )
        })
    }
}