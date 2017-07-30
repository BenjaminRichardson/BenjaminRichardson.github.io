module.exports = function(grunt) {
         grunt.initConfig({

             less: {
                 dev: {
                     files: {"site/static/css/main.css": "less/Corr.less"}
                 },
                 production: {
                     options: {
                         cleancss: true
                     },
                    files: {"site/static/css/main.css": "less/Corr.less"}
                 }
             },

             watch: {
                files: "./less/**/*.less",
                tasks: ['less:dev']
             }
        });
        grunt.loadNpmTasks('grunt-contrib-less');
        grunt.loadNpmTasks('grunt-contrib-watch');

         grunt.registerTask('default', ['less:dev','watch']);
     };