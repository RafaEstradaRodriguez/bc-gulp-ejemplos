let gulp = require('gulp')
let spritesmith = require('gulp.spritesmith')

gulp.task('sprites', function () {
    var spriteData = gulp.src('img/escuderias/*.png')
        .pipe(spritesmith({
            imgName: '../img/sprite.png',
            cssName: 'sprite.css'
        }))
    spriteData.img.pipe(gulp.dest('dist/img'))
    spriteData.css.pipe(gulp.dest('dist/css'))
})
gulp.task('default', ['sprites'], function () {
    console.log('Default task')
})
