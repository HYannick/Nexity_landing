//Initialisation des variables
var gulp    = require('gulp'),
    sass    = require('gulp-sass');

//Compilation de SASS vers CSSS
gulp.task('styles', function(){
   gulp.src('sass/**/*.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('./css/'));
});

//Watch
gulp.task('default', function(){
   gulp.watch('sass/**/*.scss',['styles']);
});