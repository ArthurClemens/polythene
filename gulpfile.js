var gulp = require('gulp');

var sass = require('gulp-sass'),
    concat = require('gulp-concat'),
	minifyCss = require('gulp-minify-css');

gulp.task('sass', function () {
    gulp.src(['lib/theme/_theme.scss', 'lib/**/_theme.scss'])
    	.pipe(concat('tmp.scss'))
        .pipe(sass())
	    .pipe(concat('theme.css'))
	    //.pipe(minifyCss())
	    .pipe(gulp.dest('lib/theme/'));
});

gulp.task('default', ['sass']);