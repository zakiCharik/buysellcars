var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('default', function () { 
    console.log('Hello Gulp!') 
});


gulp.task('default', function() {
  connect.server({
    root: './www/',
    livereload: true
  })
});