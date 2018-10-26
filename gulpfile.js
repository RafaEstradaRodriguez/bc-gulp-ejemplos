let gulp = require('gulp')
let uglify = require('gulp-uglify')
let notify = require('gulp-notify')


gulp.task('uglify', function () {
    console.log('Uglifying files')
    return gulp.src('js/*.js')
            .pipe(uglify())
            .pipe(gulp.dest('dist/'))
            .pipe(notify("Ficheros generados"))
})

gulp.task( 'watch:js', function() {
    gulp.watch('js/*.js',['uglify'])
} );
