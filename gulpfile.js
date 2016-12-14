var gulp = require('gulp'),
    config = require('load-gulp-config'),
    runSequence = require('run-sequence');


// Specifics of npm's package.json handling.
// @see https://docs.npmjs.com/files/package.json
var pack = config.util.readJSON('package.json');

let CONSTANTS = {
    DIST: './src/.dist/',
    TMP_E2E: './src/.tmpE2e/'
};

config(gulp, {
    // path to task's files, defaults to gulp dir.
    configPath: config.util.path.join('gulp', '*.*'),
    // data passed into config task.
    data: Object.assign(
        {
            path: {
                frontend: './src/frontend/',
                backend: './src/backend/',
                prod: './.prod/',
                tmpProd: './src/.tmpProd/',
                aot: './src/.aot/',
                e2e: './src/e2e/',
                spec: './src/spec/'
            },
            anyValue: 1,
            anyParams: []
        },
        pack
    )
});

gulp.task('Default', function(callback) {
    process.env.destination = CONSTANTS.DIST;
    process.env.PORT = 3000;

    runSequence(
        'build',
        'serve',
        ['watch:Typescript', 'watch:Sass', 'watch:Html'],
        callback
    );
});

gulp.task('Prod', function(callback) {
    runSequence(
        ['clean:Prod'],
        ['sass:Prod', 'copy:tmpProd'],
        ['transpiling:Prod'],
        ['copy:ProdMain'],
        ['transpiling:Prod'],
        ['copy:Prod', 'rollup:Prod'],
        'serve:Prod',
        callback
    );
});

gulp.task('UnitTest', function(callback) {
    process.env.destination = CONSTANTS.DIST;

    runSequence(
        'build',
        'karma:Frontend',
        callback
    );
});

gulp.task('E2e', function(callback) {
    process.env.destination = CONSTANTS.TMP_E2E;
    process.env.PORT = 9000;

    runSequence(
        'clean',
        ['transpiling', 'sass'],
        ['copy:Backend', 'copy:App'],
        'serve',
        'angularProtractor',
        callback
    );
});

gulp.task('build', function(callback) {
    process.env.destination = CONSTANTS.DIST;
    runSequence(
        'lint:Es',
        'lint:Ts',
        'clean',
        ['transpiling', 'sass'],
        ['copy:Backend', 'copy:App'],
        callback
    );
});
