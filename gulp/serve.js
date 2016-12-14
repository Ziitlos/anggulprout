module.exports = function(gulp, data, util, taskName) {

    var server = require('gulp-express');

    gulp.task(taskName, function() {
        return server.run([process.env.destination + 'server.js'], {}, {});
    });

    gulp.task(taskName + ':Prod', function() {
        return server.run([data.path.prod + 'server.js'], {}, false);
    });
};
