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
    add_comment: {
      comment: {
        options: {
          comments: [
            'These sources are distributed and available under the MIT License.',
            'See LICENSE for details.',
            'Build date: ' + moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
          ],
          carriageReturn: "\n",
          prepend: true,
          syntaxes: {
            '.css': ['/*', '*/']
          }
        },
        files: [{
          expand: true,
          cwd: 'dist',
          src: ['**/*.css'],
          dest: 'dist'
        }]
      }
    },
    webfont: {
      icons: {
        src: 'src/logo/*.svg',
        dest: 'dist/fonts',
        destCss: 'dist/css',
        options: {
          font: 'oAuth-Buttons',
          styles: 'font',
          types: 'eot,woff,ttf,svg',
          relativeFontPath: '../fonts',
          engine: 'node',
          fontFamilyName: 'oAuth-Buttons',
          htmlDemo: false,
          codepointsFile: 'codepoints.json',
          autoHint: false
        }
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-add-comment')
  grunt.loadNpmTasks('grunt-webfont')

  grunt.registerTask('default', ['webfont', 'concat', 'cssmin', 'add_comment'])
}