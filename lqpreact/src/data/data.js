content:{
    title:'环境搭建',
        step:[
        {title:'create-react-app project创建项目'},
        {title:'eject',
            content:'可配置webpack'
        },
        {title:'sass,css-module的配置',
            content:'{\n' +
                '              test: cssRegex,\n' +
                '              exclude: [cssModuleRegex,node_modulesRegex],\n' +
                '              use: getStyleLoaders({\n' +
                '                importLoaders: 1,\n' +
                '                sourceMap: isEnvProduction && shouldUseSourceMap,\n' +
                '                modules: {localIdentName:\'[name]__[local]--[hash:base64:5]\'} // 指定启用css modules\n' +
                '              },'
        },
        {title:'移动端rem的配置'},
        {title:'redux，react-redux',
            a:'阮一峰',
            src:'http://www.ruanyifeng.com/blog/javascript/',
        },
        {title:'react-router-dom'},
    ]
}
