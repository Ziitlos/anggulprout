module.exports = function(gulp, data, util, taskName) {

    var runSequence = require('run-sequence'),
        server = require('gulp-express');

    gulp.task(taskName + ':Typescript', function() {
        gulp.watch([
            data.path.frontend + '**/*.ts'
        ], function(event) {
            runSequence('build', reload(event));
        });
    });

    gulp.task(taskName + ':Sass', function() {
        gulp.watch([
            data.path.frontend + '**/*.scss',
        ], function(event) {
            runSequence('sass', reload(event));
        });
    });

    gulp.task(taskName + ':Html', function() {
        gulp.watch([
            data.path.frontend + '**/*.html',
        ], function(event) {
            runSequence('copy:App', reload(event));
        });
    });

    function reload(event) {
        return function() {
            console.log('Autoreload');
            server.notify(event);
        }
    }
};
