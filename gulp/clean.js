module.exports = function(gulp, data, util, taskName) {

    var clean = require('gulp-clean');
    gulp.task(taskName, function() {
        return gulp.src(process.env.destination, {read: false})
            .pipe(clean({force: true}));
    });

    gulp.task(taskName + ':Prod', function() {
        return gulp.src([data.path.tmpProd, data.path.aot, data.path.prod], {read: false})
            .pipe(clean({force: true}));
    });
};
