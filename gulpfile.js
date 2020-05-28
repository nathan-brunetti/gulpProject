// node.js Packages & Dependencies
const gulp = require('gulp');
const sass = require('gulp-sass');
const imagemin = require('gulp-imagemin');
const clean = require('gulp-clean');

// Paths
var paths = {
	root: {
		www: 'public'
	},
	src: {
		root: 'public/assets',
		html: 'public/**/*.html',
		css: 'public/assets/css/*.css',
		js: 'public/assets/js/*.js',
		imgs: 'public/assets/img/**/*.+(png|jpg|jpeg|gif|svg)'
	},
	dist: {
		root: 'public/dist',
		css: 'public/dist/css',
		js: 'public/dist/js',
		imgs: 'public/dist/img'
	}
};

// Compress (JPG, JPEG, PNG, GIF, SVG)
gulp.task('img', () => {
	return gulp
		src('paths.src.imgs')
		.pipe(
			imagemin([
				imagemin.gifsicle({
					interlaced: true
				}),
				imagemin.mozjpeg({
					quality: 75,
					progressive: true
				}),
				imagemin.optipng({
					optimizationLevel: 5
				}),
				imagemin.svgo({
					plugins: [
						{removeViewBox: true},
						{cleanupIDs: false}
					],
				})
			])
		)
		.pipe(gulp.dest('paths.dist.imgs'));
});