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
            concat: {
                src: ['src/css/main.css', 'src/css/service/*.css'],
                dest: 'dist/css/oauth-buttons.css'
            }
        },
        copy: {
            copy: {
              files: [{
                    expand: true,
                    cwd: 'src/logo',
                    src: '*.svg',
                    dest: 'dist/logo',
                }],
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-webfont');

    grunt.registerTask('default', ['concat', 'copy', /*'webfont', */'cssmin']);
}