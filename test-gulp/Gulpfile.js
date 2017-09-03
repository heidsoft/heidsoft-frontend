var gulp = require('gulp');
var rev = require('gulp-rev-append');
var htmlreplace = require('gulp-html-replace');
var strReplace  = require('gulp-string-replace');

gulp.task('myreplace', function() {
  gulp.src('views/index.html')
    .pipe(htmlreplace({js: {
      src: null,
    tpl: '<script src="%f".js></script>'
  }}))
    .pipe(gulp.dest('build/'));
});

gulp.task('testRev', function () {
    gulp.src('views/index.html')
        .pipe(rev())
        .pipe(strReplace(new RegExp('\.\.\/js$', 'g'), '/js'))
        //.pipe(strReplace('../js', '/js'))
        .pipe(gulp.dest('views/dist'));
});
gulp.task('default', function() {
    gulp.start('testRev');
});

 
