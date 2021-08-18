// --------------------------------------------------
// [Gulpfile]
// --------------------------------------------------

'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass')(require('sass')),
	changed = require('gulp-changed');

gulp.task('started', async function () {
	return console.log('Gulp started');
});


// --------------------------------------------------
// [Libraries]
// --------------------------------------------------

// Sass - Compile Sass files into CSS
gulp.task('sass', async() => {
	return gulp.src('styles/sass/**/*.sass')
		.pipe(sass()) // Converts Sass to CSS with gulp-sass
		.on('error', sass.logError)
		.pipe(gulp.dest('./../styles/css'));
});

// This handles watching and running tasks
gulp.task('watch', async() => {
	return gulp.watch('../styles/sass/**/*.scss', gulp.series('sass'));
});


// Testing gulp
gulp.task('message', async() => {
	console.log("async message started");
});


gulp.task('default', async function () {
	return gulp.series('message', 'started', 'sass', 'watch');
})
