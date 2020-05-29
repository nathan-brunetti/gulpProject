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

function img() {
	return gulp
	.src(paths.src.imgs)
		.pipe(imagemin())
		.pipe(gulp.dest(paths.dist.imgs));
}

function clear() {
	return gulp
	.src(paths.dist.root)
		.pipe(clean());
}

exports.img = img;
exports.clear = clear;