const moment = require('moment');

module.exports = (grunt) => {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        cssmin: {
            options: {
              sourceMap: true
            },
            minify: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        concat:{
            options: {
                sourceMap: true
            },
            svg: {
                src: ['src/css/main.css', 'src/css/list/*.css'],
                dest: 'dist/css/oauth-buttons.css'
            },
            js: {
                src: ['src/js/class.js', 'src/js/getByClassName.js', 'src/js/ready.js',
                    'src/js/modenizer.oauth-buttons.js', 'src/js/oauth-buttons.js'],
                dest: 'dist/js/oauth-buttons.js'
            }
        },
        svgo: {
            svgo: {
                files: [{
                    expand: true,
                    cwd: 'src/logo',
                    src: ['*.svg','!*_solid.svg'],
                    dest: 'dist/logo'
                }]
            }
        },
        'convert-svg-to-png': {
            svg: {
                options: {
                    size: {
                        w: '64px',
                        h: '64px'
                    },
                },
                files: [{
                    expand: true,
                    cwd: 'dist/logo',
                    src: ['*.svg','!*_solid.svg'],
                    dest: 'dist/logo'
                }]
            }
        },
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            js: {
                files: {
                    'dist/js/oauth-buttons.js': 'dist/js/oauth-buttons.js'
                }
            },
            script: {
                files: {
                    'script.js': 'src/js/script.js'
                }
            }
        },
        uglify: {
            options: {
                sourceMap: true
            },
            js: {
                files: [{
                    expand: true,
                    cwd: 'dist/js',
                    src: ['*.js','!*.min.js'],
                    dest: 'dist/js',
                    ext: '.min.js'
                }]
            }
        },
        add_comment: {
            comment: {
                options: {
                    comments: ['These sources are distributed and available under the MIT License.', 'See LICENSE for details.', 'Build date: ' + moment().format("dddd, MMMM Do YYYY, h:mm:ss a")],
                    carriageReturn: "\n",
                    prepend: true,
                    syntaxes: {
                        '.js': '//',
                        '.css': ['/*', '*/']
                    }
                },
                files: [{
                    expand: true,
                    cwd: 'dist',
                    src: ['**/*.js', '**/*.css'],
                    dest: 'dist'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-svgo');
    grunt.loadNpmTasks('grunt-convert-svg-to-png');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-add-comment');

    grunt.registerTask('default', ['concat', 'babel', 'svgo', 'convert-svg-to-png', 'cssmin', 'uglify', 'add_comment']);
}