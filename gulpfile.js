// node.js Packages & Dependencies
const { series } = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
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
function clean(cb) {
	// body omitted
	cb();
}

function build(cb) {
	// body omitted
	cb();
}

exports.build = build;
exports.default = series(clean, build);