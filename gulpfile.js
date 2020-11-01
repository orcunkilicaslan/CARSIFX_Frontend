const gulp = require('gulp');
const sass = require('gulp-sass');
const twig = require('gulp-twig');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

const config = {
    paths: {
        stylesPath: './src/styles',
        mainStyle: this.stylesPath + '/style.scss',
        fontsPath: this.stylesPath + '/fonts',
        imagesPath: this.templatesPath + '/images',
        jsPath: '',                                                 // main js path
        templatesPath: './src',                                     // templates path
        outputPath: './dist',                                       // output path
        stylesOutputPath: this.outputPath + '/css',                 // output path for style files
        jsOutputPath: this.outputPath + '/js',                       // output path for javascript files
        fontsOutputPath: this.stylesOutputPath + '/fonts'
    }
};

gulp.task('process-fonts', ()=> {
    return gulp.src(config.paths.stylesPath + '/fonts/**/*.*')
        // .pipe(gulp.dest(config.paths.stylesOutputPath + '/fonts'));
        // TODO: make all imports in dynamic way
        .pipe(gulp.dest('./dist/css/fonts'));
});

gulp.task('process-images', ()=>{
    return gulp.src(config.paths.templatesPath + '/images/**/*.*')
    // .pipe(gulp.dest(config.paths.stylesOutputPath + '/fonts'));
    // TODO: make all imports in dynamic way
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('scss', () => {
    return gulp.src('./src/styles/*.*') // *.*
        .pipe(sass())
        .pipe(gulp.dest('./dist/css'))
        .pipe(reload({stream: true}))
});

gulp.task('twig', () => {
    return gulp.src('src/*.*') // *.*
        .pipe(twig({ base: './src' }))
        .pipe(gulp.dest('./dist'))
        .on("end", reload)
});

gulp.task('serve', () => {

    browserSync({
        server: './dist',
    });

    gulp.watch('src/styles/**', gulp.series(['scss'])); // **
    gulp.watch('src/**', gulp.series(['twig'])).on('change', reload);        // **
});

gulp.task('default', gulp.series([gulp.parallel(['scss', 'process-fonts', 'process-images']), 'twig','serve']));