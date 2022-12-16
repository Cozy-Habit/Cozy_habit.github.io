const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

//Sass Task
function scssTask() {
    return src(['public/scss/style.scss', 'public/scss/style_about.scss'], { sourcemaps: true })
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest('dist', { sourcemaps: '.' }));
}

//JavaScript Task
function jsTask() {
    return src('public/js/script.js', { sourcemaps: true })
        .pipe(terser())
        .pipe(dest('dist', { sourcemaps: '.' }));
}

//Browsersync Task
function browsersyncServe(cb) {
    browsersync.init({
        server: {
            baseDir: '.'
        }
    });
    cb();
}

function browsersyncReload(cb) {
    browsersync.reload();
    cb();
}

//Watch
function watchTask() {
    watch('*.html', browsersyncReload);
    watch(['public/scss/**/*.scss', 'public/js/**/*.js'], series(scssTask, jsTask, browsersyncReload));
}

//Default Gulp Task
exports.default = series(
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask
);