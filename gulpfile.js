var gulp = require('gulp'),
    cssnano = require('gulp-cssnano'),
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

gulp.task('css', function() {
  return gulp.src('src/css/**')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('dest/assets/css'))
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dest/assets/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('lint', function () {
    return gulp.src('src/js/*.js')
    // .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'));
});

gulp.task('html', function () {
    return gulp.src(['main.html'])
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dest/assets'));
});

gulp.task('tmpls', function () {
  return gulp.src('src/tmpls/**/*.html')
    .pipe(templateCache({
      root: 'src/tmpls/pages',
      standalone: true
    }))
    .pipe(gulp.dest('src/js/angulars/config/'));
});

gulp.task('js', ['lint', 'tmpls'], function() {

  return gulp.src(['src/js/app.js'])
    .pipe(browserify({
        debug: true,
        insertGlobals: true
    }))
    .pipe(add.append('src/js/angulars/modules/*.js'))
    .pipe(add.append(['src/js/angulars/**/*.js', '!src/js/angulars/modules/*.js']))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dest/assets/js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dest/assets/js'))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('js-prod', ['lint', 'tmpls'], function() {

    return gulp.src(['src/js/angulars/modules/*.js'])
    .pipe(add.append(['src/js/angulars/**/*.js', '!src/js/angulars/modules/*.js']))
    .pipe(concat('maftable.js'))
    .pipe(gulp.dest('dest/assets/js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('../MafSite_Angular/src/js/lib/MafTable/'))
    .pipe(notify({ message: 'JS Prod task complete' }));
});
gulp.task('css-prod', ['css'], function() {

    return gulp.src(['dest/assets/css/main.min.css'])
    .pipe(gulp.dest('../MafSite_Angular/src/css/'))
    .pipe(notify({ message: 'CSS Prod task complete' }));
});


gulp.task('prod', ['css-prod', 'js-prod']);


gulp.task('clean', function() {
    return del(['dest']);
});

gulp.task('all', ['clean'], function() {
  return gulp.start('css', 'js', 'html');
});

gulp.task('default', function() {
  runSequence('all', 'deploy', 'watch');
});

//GENERAL WATCHER
function reactOn(task) {
  return function reacter() {
    runSequence(task, 'deploy');
  };
}

// watchers
gulp.task('watch', function() {
  // Create LiveReload server

  // Watch .scss files
  gulp.watch('src/css/**/*.css', reactOn('css'));

  // Watch .js files
  gulp.watch(['src/js/**/*.js', 'src/tmpls/pages/**/*.html', '!src/js/angulars/configs/templates.js'], reactOn('js'));

  gulp.watch('src/tmpls/base.html', reactOn('html'));

  // Watch any files in dest/, reload on change
  gulp.watch(['dest/**']);
});

gulp.task('deploy', function () {
  return gulp.src('dest/**/**')
    .pipe(gulp.dest('../bs/public/MafTable'));
});