global.$ = {
    gulp: require('gulp'),
    del: require('del'),
    fs: require('fs'),
    browserSync: require('browser-sync').create(),
    gp: require('gulp-load-plugins')(),
    prettify: require('gulp-html-prettify'),
    template: require('gulp-template-html')
};

$.gulp.task('scss', () => {
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
        .pipe($.gulp.dest('./css/'))
        .pipe($.browserSync.reload({
            stream: true
        }));
});

$.gulp.task('html', () => {
    return $.gulp.src('./html/pages/*.html')
        .pipe($.template('./html/template/template.html'))
        .pipe($.prettify({indent_char: ' ', indent_size: 2}))
        .pipe($.gulp.dest('./'))
        .pipe($.browserSync.reload({
            stream: true
        }));
})

$.gulp.task('watch', function () {
    $.gulp.watch('./scss/**/*.scss', $.gulp.series('scss'));
    $.gulp.watch('./html/pages/*.html', $.gulp.series('html'));
});
$.gulp.task('serve', function () {
    $.browserSync.init({
        server: './'
    });
});
$.gulp.task('default', $.gulp.series(
    'html',
    'scss',
    $.gulp.parallel(
        'watch',
        'serve'
    )
));
