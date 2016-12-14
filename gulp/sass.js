module.exports = function(gulp, data, util, taskName) {

    var sass = require('gulp-sass'),
        stream = require('event-stream'),
        cleanCss = require('gulp-clean-css');

    gulp.task(taskName, function() {
        return gulp.src(data.path.frontend + '**/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(gulp.dest(process.env.destination + 'frontend'));
    });

    gulp.task(taskName + ':Prod', function() {
        var inStyle = gulp.src([data.path.frontend + '**/*.scss', '!all.scss'])
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCss())
            .pipe(gulp.dest(data.path.tmpProd));

        var globalStyle = gulp.src(data.path.frontend + '**/all.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(cleanCss())
            .pipe(gulp.dest(data.path.prod));

        return stream.merge([inStyle, globalStyle]);
    });
};
