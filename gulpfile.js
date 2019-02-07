global.$ = {
    gulp: require('gulp'),
    del: require('del'),
    fs: require('fs'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')(),
    prettify: require('gulp-html-prettify'),
    panini: require('panini')
};

$.gulp.task('clean', function () {
    return $.del([
        './build'
    ]);
});

$.gulp.task('compile-scss', () => {
    return $.gulp.src('./scss/**/*.scss')
        .pipe($.gp.sourcemaps.init())
        .pipe($.gp.sass({
            includePaths: ['./scss/**/*.scss'],
            outputStyle: 'expanded'
        }).on('error', $.gp.sass.logError))
        .pipe($.gp.sourcemaps.write())
        .pipe($.gp.autoprefixer({
            browsers: ['last 4 version']
        }))
        .pipe($.gulp.dest('./build/assets/css/'))
        .pipe($.browserSync.reload({
            stream: true
        }));
});


$.gulp.task('compile-html', () => {
    return $.gulp.src('html/pages/**/*.html')
        .pipe($.panini({
            root: 'html/pages/',
            layouts: 'html/layouts/',
            partials: 'html/includes/',
            helpers: 'html/helpers/',
            data: 'html/data/'
        }))
        .pipe($.prettify({indent_char: ' ', indent_size: 2}))
        .pipe($.gulp.dest('./build/'))
        .on('end', $.browserSync.reload);
});

$.gulp.task('compile-html:reset', (done) => {
    $.panini.refresh();
    done();
});

$.gulp.task('assets', function () {
    return $.gulp.src('./assets/**/*')
        .pipe($.gulp.dest('./build/assets/'))
        .pipe($.browserSync.reload({
            stream: true
        }));
});

$.gulp.task('watch', function () {
    $.gulp.watch('./scss/**/*.scss', $.gulp.series('compile-scss'));
    $.gulp.watch('./html/pages/*.html', $.gulp.series('compile-html'));
    $.gulp.watch('html/{layouts,includes,helpers,data}/**/*', $.gulp.series('compile-html:reset', 'compile-html'));
    $.gulp.watch('./assets/**/*', $.gulp.series('assets'));
});
$.gulp.task('serve', function () {
    $.browserSync.init({
        server: './build'
    });
});
$.gulp.task('default', $.gulp.series(
    'clean',
    'assets',
    'compile-html',
    'compile-scss',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
