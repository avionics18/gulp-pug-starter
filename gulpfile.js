const { src, dest, series, watch } = require('gulp');
const pug = require('gulp-pug');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const browserSync = require('browser-sync').create();
const mode = require('gulp-mode')();

// Build HTML
function buildHTML() {
    const sourceFiles = ['./src/*.pug'];
    return src(sourceFiles)
        .pipe(pug())
        .pipe(dest('./docs'));
}

// Build CSS
function buildCSS() {
    const processors = [autoprefixer, cssnano];
    return src(['./src/assets/css/style.css'])
        .pipe(postcss(processors))
        .pipe(dest('./docs/assets/css'));
}

// Images Task
function imgTask() {
    return src('./src/assets/images/*.{jpg, jpeg, png, gif, webp}')
        .pipe(dest('./docs/assets/images'));
}

// BrowserSync Initialize
function bsServe(done) {
    browserSync.init({
        server: {
            baseDir: './docs',
            serveStaticOptions: {
                extensions: ['html']
            }
        },
        notify: false,
    });

    done();
}

// BrowserSync Reload
function bsReload(done) {
    browserSync.reload();
    done();
}


/* === WORKFLOW ===  */

// Watch Files for Changes
function watchTask() {
    watch('./src/assets/css/style.css', series(buildCSS, bsReload));
    watch('./src/**/*.pug', series(buildHTML, bsReload));
    watch('./src/assets/images/imageUpdate.txt', series(imgTask, bsReload));
}


exports.default = mode.production() ? series(buildCSS, buildHTML, imgTask) : series(buildCSS, buildHTML, imgTask, bsServe, watchTask);