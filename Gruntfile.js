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
                    'dist/js/oauth-buttons.js': 'src/js/oauth-buttons.js'
                }
            },
            modernizr: {
                files: {
                    'dist/js/modernizr-oauth-buttons.min.js': 'src/js/modernizr-oauth-buttons.min.js'
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-svgo');
    grunt.loadNpmTasks('grunt-convert-svg-to-png');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['concat', 'babel', 'svgo', 'convert-svg-to-png', 'cssmin', 'uglify']);
}