var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;  
module.exports = function(grunt){  
grunt.loadNpmTasks('grunt-connect-proxy');
    require('load-grunt-tasks')(grunt, {scope: 'devDependencies' });  
    grunt.initConfig({  
        connect: {  
            server: {  
                options: {  
                    port: 3000,  
                    hostname: 'localhost',  
                    keepalive: true,  
                    middleware: function (connect, options){  
                        return [  
                            proxySnippet,  
                            require('serve-static')(options.base[0])  
                        ]  
                    }  
                },  
                proxies:[  
                    {  
                        context: '/sap/opu/odata',  
                        host: 'SAPES4.SAPDEVCENTER.COM',  
                        port: 's',  
                        https: false  
                    }  
                ]  
            }  
        }  
    });  
    grunt.registerTask('default',[  
        'configureProxies:server',  
        'connect'  
    ]);  
}  