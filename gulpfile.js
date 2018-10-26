let gulp = require('gulp')
let uglify = require('gulp-uglify')
let notify = require('gulp-notify')
let runSequence = require('run-sequence')
let del = require('del')
let imagemin = require('gulp-imagemin')
let yarg = require('yargs')
let concat = require('gulp-concat')
let zip = require('gulp-gzip')

let arguments = yarg.argv
let environment = arguments.environment

gulp.task('join-js', function () {
    if (environment == 'prod') {
        console.log('PRODUCTION');
        return gulp.src('js/*.js')
            .pipe(concat('all.js'))
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'))
            .pipe(zip())
            .pipe(gulp.dest('dist/js'))

    } else {
        console.log('DEVELOPMENT');
        return gulp.src('js/*.js')
            .pipe(concat('all.js'))
            .pipe(gulp.dest('dist/js'))
    }
})

gulp.task('process-images', function () {
    return gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
})

gulp.task('clean', function () {
    console.log('Cleaning dist directory')
    return del(['dist/'])
})

gulp.task( 'default', ['clean'], function(cb) {
    runSequence('process-images', 'join-js', cb)
} );
