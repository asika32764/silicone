/**
 * Part of silicone project.
 *
 * @copyright  Copyright (C) 2016 ${ORGANIZATION}.
 * @license    Please see LICENSE file.
 */

var gulp = require("gulp"),//http://gulpjs.com/
	util = require("gulp-util"),//https://github.com/gulpjs/gulp-util
	sass = require("gulp-sass"),//https://www.npmjs.org/package/gulp-sass
	autoprefixer = require('gulp-autoprefixer'),//https://www.npmjs.org/package/gulp-autoprefixer
	minifycss = require('gulp-minify-css'),//https://www.npmjs.org/package/gulp-minify-css
	rename = require('gulp-rename'),//https://www.npmjs.org/package/gulp-rename
	log = util.log;

var sassFiles = "src/**/*.scss";
var entryFile = "src/main.scss";

gulp.task("sass", function(){
	log("Generate CSS files " + (new Date()).toString());
	gulp.src(entryFile)
		.pipe(rename('silicone'))
		.pipe(sass({ style: 'expanded' }))
		.pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9"))
		.pipe(gulp.dest("dist"))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(gulp.dest('dist'));
});

gulp.task("watch", function(){
	log("Watching scss files for modifications");
	gulp.watch(sassFiles, ["sass"]);
});

gulp.task("default", ["sass", "watch"]);
