const gulp = require('gulp');

const sass = require('gulp-sass');


// PATHS

const PATHS = {
    scss: './src/styles/style.scss',
    outputPath: './dist'
};


gulp.task('sass', function(){
   return gulp.src(PATHS.scss)
       .pipe(sass())
       .pipe(gulp.dest('dist/css'))

});


gulp.task('default', gulp.series('sass'));