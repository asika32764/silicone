/**
 * Part of silicone project.
 *
 * @copyright  Copyright (C) 2016 ${ORGANIZATION}.
 * @license    Please see LICENSE file.
 */

const gulp = require("gulp");
const util = require("gulp-util");
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const rename = require('gulp-rename');
const log = util.log;
const sourcemaps = require('gulp-sourcemaps');
const filter = require('gulp-filter');

const sassFiles = "src/**/*.scss";
const entryFile = "src/main.scss";

gulp.task("sass", function () {
  log("Generate CSS files " + (new Date()).toString());
  gulp.src(entryFile)
    .pipe(sourcemaps.init())
    .pipe(rename('silicone'))
    .pipe(sass({style: 'expanded'}))
    .pipe(autoprefixer('last 3 version'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest("dist"))
    .pipe(filter('**/*.css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(minifycss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task("watch", function () {
  log("Watching scss files for modifications");
  gulp.watch(sassFiles, ["sass"]);
});

gulp.task("default", ["sass", "watch"]);
