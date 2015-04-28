var gulp = require('gulp');
var config = require('./gulpfile.json');

var browserSync = require('browser-sync');
var reload = browserSync.reload;

var sass = require('gulp-sass');
var through = require('through2');

var minCSS = require('gulp-minify-css')

var ts = require('gulp-typescript');
var merge = require('merge2');

var sourcemaps = require('gulp-sourcemaps');

var es6Config = config.ts6;
es6Config.typescript = require('typescript')
var ts6Project = ts.createProject(es6Config);

var es5Config = config.ts5;
es5Config.typescript = require('typescript')
var ts5Project = ts.createProject(es5Config);
var through = require('through2');

var karma = require('gulp-karma');

var protrac = require('gulp-protractor').protractor;


gulp.task('sass', function () {
  return gulp.src(config.source.scss)
    .pipe(sass())
    .pipe(minCSS())
    .pipe(gulp.dest(config.destination.css))
    .pipe(reload({stream: true}));
});

gulp.task('templates', function () {
  return gulp.src(config.source.templates)
    .pipe(gulp.dest(config.build.application.out))
    .pipe(reload({stream: true}));
});

gulp.task('json', function () {
  return gulp.src(config.source.json)
    .pipe(gulp.dest(config.build.application.out))
    .pipe(reload({stream: true}));
});

gulp.task('static', function () {
  return gulp.src(config.source.static)
    .pipe(gulp.dest(config.build.out))
    .pipe(reload({stream: true}));
});

gulp.task('vendor', function () {
  return gulp.src(config.source.vendor)
    .pipe(gulp.dest(config.build.vendor.out))
    .pipe(reload({stream: true}));
});

gulp.task('transpile', function () {
  var tsResult = gulp.src(config.source.ts6)
    .pipe(sourcemaps.init())
    .pipe(ts(ts6Project));

  return merge([
    tsResult.dts.pipe(gulp.dest('api/')),
    tsResult.js
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.build.application.out))]);
});

gulp.task('transpile:e2e', function () {
  var tsResult = gulp.src(config.source.ts5)
    .pipe(sourcemaps.init())
    .pipe(ts(ts5Project));

  return merge([
    tsResult.dts.pipe(gulp.dest('api/')),
    tsResult.js
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.build.e2e.out))]);
});

gulp.task('serve', function () {
  browserSync({
    server: {
      baseDir: config.build.out
    }
  });

  gulp.watch(config.source.scss, ['sass']);
  gulp.watch(config.source.ts6, ['transpile']);
  gulp.watch(config.source.ts5, ['transpile:e2e']);
  gulp.watch(config.source.templates, ['templates']);
  gulp.watch(config.source.static, ['static']);
  gulp.watch(config.source.json, ['json']);

  gulp.watch(config.watch.files,
    {
      cwd: config.watch.source
    },
    reload);
});

gulp.task('default', ['sass', 'templates', 'json', 'static', 'vendor', 'transpile', 'transpile:e2e'], function () {
});

gulp.task('test', function () {
  return gulp.src([])
    .pipe(karma({
      configFile: './karma.conf',
      action: 'run'
    }))
    .on('error', function (err) {
      throw err;
    });
});


gulp.task('test:ci', function () {
  return gulp.src([])
    .pipe(karma({
      configFile: './karma-ci.conf',
      action: 'run'
    }))
    .on('error', function (err) {
      throw err;
    });
});

gulp.task('test:watch:chrome', function () {
  return gulp.src([])
    .pipe(karma({
      configFile: './karma.conf',
      action: 'watch'
    }))
    .on('error', function (err) {
      throw err;
    });
});

gulp.task('test:watch:phantomjs2', function () {
  return gulp.src([])
    .pipe(karma({
      configFile: './karma-phantomjs2.conf',
      action: 'watch'
    }))
    .on('error', function (err) {
      throw err;
    });
});

gulp.task('e2e', function () {
  return gulp.src([])
    .pipe(protrac({
      configFile: './protractor.conf'
    }))
    .on('error', function (err)
    {
      throw err;
    });
});

