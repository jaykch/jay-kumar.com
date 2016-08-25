var gulp = require('gulp');
var useref = require('gulp-useref');


gulp.task('useref', function(){
    return gulp.src('*.html')
        .pipe(useref())
        .pipe(gulp.dest('dist'))
});