// igonore minifying tasks
var isProduction = false;
var gulp = require('gulp'),
    _if = require('gulp-if'),
    beautify = require('gulp-beautify'),
    cssnano = require('gulp-cssnano'),
    cssbeautify = require('gulp-cssbeautify'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    browserify = require('gulp-browserify'),
    add = require('gulp-add-src'),
    htmlmin = require('gulp-htmlmin'),
    templateCache = require('gulp-angular-templatecache'),
    runSequence = require('run-sequence'),
    del = require('del');


//this task lints your js code
gulp.task('lint', function () {
    return gulp.src(['src/js/**/*.js', '!src/js/lib/*.js'])
    // .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

//this task register all ng-tmpls
gulp.task('tmpls', ['lint'], function () {
  return gulp.src('src/tmpls/**/*.html')
    .pipe(templateCache({
      root: 'src/tmpls',
      standalone: true
    }))
    .pipe(gulp.dest('src/js/angulars/config/'));
});

// this task build all angular modules to ng.min,js
gulp.task('js-ng-app', ['tmpls'], function () {
    return gulp.src(['src/js/angulars/modules/*.js'])
    .pipe(add.append(['src/js/angulars/**/*.js', '!src/js/angulars/modules/*.js']))
    .pipe(concat('ng.js'))
    .pipe(gulp.dest('dest/assets/js'))
    .pipe(_if(isProduction, uglify(), beautify()))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dest/assets/js'));
});

// this task copy angular file to MafSite
gulp.task('deploy-ng',['js-ng-app'], function() {
    return gulp.src('dest/assets/js/ng.min.js')
    .pipe(gulp.dest('../MafSite_Angular/src/js/lib/MafTable/'));
});

//this task collect all libs
gulp.task('js-lib', function () {
  return gulp.src(['src/js/app.js'])
    .pipe(browserify({
        debug: true,
        insertGlobals: true
    }))
    .pipe(_if(isProduction, uglify(), beautify()))
    .pipe(gulp.dest('dest/assets/js/libs.min.js'));
});

// this task unite ng-modules and libs
gulp.task('js',['js-ng-app', 'js-lib'] ,function() {
  return gulp.src('dest/assets/js/libs.js')
    .pipe(add.append('dest/assets/js/ng.min.js'))
    .pipe(concat())
    .pipe(gulp.dest('dest/assets/js/main.min.js'));
});


// this task build all css
gulp.task('css', function() {
  return gulp.src('src/css/**')
    .pipe(add.append('src/js/lib/bootstrap-css/css/bootstrap.min.css'))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dest/assets/css'))
    .pipe(_if(isProduction, cssnano(), cssbeautify()))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dest/assets/css'));
});

// this task copy css file to MafSite
gulp.task('deploy-css',['css'], function() {
    return gulp.src('dest/assets/css/main.min.css')
    .pipe(gulp.dest('../MafSite_Angular/src/css/'));
});


// this task deploy MafTable to MafSite
gulp.task('deploy',['deploy-css', 'deploy-ng']);

// this task wathes for changes
gulp.task('watch', function() {
  // Create LiveReload server

  // Watch .scss files
  gulp.watch('src/css/**/*.css', function () {
    runSequence('css', 'deploy-css');
  });

  // Watch .js files
  gulp.watch(['src/js/**/*.js', 'src/tmpls/pages/**/*.html', '!src/js/angulars/configs/templates.js'], function () {
    runSequence('js-ng-app', 'deploy-ng');
  });

});

// this task build all and deploy to MafSite
// then it wathces for changes
gulp.task('default', ['deploy'], function() {
  return gulp.start('watch');
});



// ======== NOT IN USE ===========
//this task minify your html
gulp.task('html', function () {
    return gulp.src(['main.html'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dest/assets'));
});

//this task cleans directory
gulp.task('clean', function() {
    return del(['dest']);
});
