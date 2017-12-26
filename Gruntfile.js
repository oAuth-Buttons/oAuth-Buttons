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
                src: ['src/css/main.css', 'src/css/svg/*.css'],
                dest: 'dist/css/oauth-buttons.css'
            },
            font: {
                src: ['src/css/main.font.css', 'src/css/font/*.css'],
                dest: 'dist/css/oauth-buttons-font.css'
            }
        },
        copy: {
            fonts: {
              files: [{
                    expand: true,
                    cwd: 'src/fonts',
                    src: '*',
                    dest: 'dist/fonts',
                }],
            },
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
                    cwd: 'src/logo',
                    src: ['*.svg'],
                    dest: 'dist/logo'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-svgo');
    grunt.loadNpmTasks('grunt-convert-svg-to-png');

    grunt.registerTask('default', ['concat', 'copy', 'svgo', 'convert-svg-to-png', 'cssmin']);
}