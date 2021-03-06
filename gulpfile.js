var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var autoprefixer = require('autoprefixer');
var config = {
    'src': './',
    'dest': 'static',
    'minify': true,
    'sourcemaps': true,
    'browsers': [
        'last 2 versions',
        'android >= 2.3',
        'safari >= 6',
        'ie >= 9'
    ]
};

// Compile and autoprefix stylesheets
gulp.task('styles', function() {
    return gulp.src('scss/*.scss')
        .pipe($.if(config.sourcemaps, $.sourcemaps.init()))
        .pipe($.sass({
            precision: 8,
            outputStyle: 'compressed'
        }).on('error', function(error) {
            $.util.log($.util.colors.red(error.message));
            this.emit('end');
        }))
        .pipe($.postcss([
            autoprefixer({
                browsers: config.browsers
            })
        ]))
        .pipe(gulp.dest(config.dest + '/css'))
        .pipe($.cleanCss({compatibility: 'ie8'}))
        .pipe($.if(config.sourcemaps, $.sourcemaps.write('')))
        .pipe($.if(config.minify, gulp.dest(config.dest + '/css')));
});

// Lint stylesheets
gulp.task('stylelint', function() {
    return gulp.src(config.src + 'scss/**/*.scss')
        .pipe($.postcss([
            require('stylelint')
        ], {
            syntax: require('postcss-scss')
        }));
});

// Compile javascript
gulp.task('scripts', function() {
    return gulp.src('js/**/*.js')
        .pipe($.include().on('error', function(error) {
            $.util.log($.util.colors.red(error.message));
            this.emit('end');
        }))
        .pipe($.concat('main.js'))
        .pipe($.uglify().on('error', function(error) {
            $.util.log($.util.colors.red(error.message));
            this.emit('end');
        }))
        // .pipe($.if(config.sourcemaps, $.sourcemaps.init()))
        // .pipe($.if(config.sourcemaps, $.sourcemaps.write()))
        .pipe(gulp.dest(config.dest))
});

// Watch files for changes
gulp.task('watch', function() {
    gulp.watch(config.src + 'scss/**/*.scss', ['styles']);
    gulp.watch(config.src + 'js/**/*.js', ['scripts']);
});

// Run all tasks
gulp.task('default', ['watch']);
