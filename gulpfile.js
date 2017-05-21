// gulp
var gulp = require('gulp')
var browserSync = require('browser-sync').create()

// plugins
var es = require('event-stream')
var sass = require('gulp-sass')
var bowerFiles = require('main-bower-files')
var inject = require('gulp-inject')

gulp.task('styles', function() {
    gulp.src('./app/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./app/assets/css/'))
        .pipe(browserSync.stream())
})

gulp.task('inject', function() {
    var target = gulp.src('./app/index.html')
    var sources = gulp.src(['./app/**/*.js', './app/assets/**/*.css'], { read: false })
    var dependencies = gulp.src(bowerFiles(), { read: false })

  return target
        .pipe(inject(dependencies, { name: 'bower' }))
        .pipe(inject(es.merge(sources), { relative: true }))
    .pipe(gulp.dest('./app'))
})

gulp.task('serve', ['styles', 'inject'], function () {
    browserSync.init({
        server: {
            baseDir: "app",
            routes: {
                "/bower_components": "bower_components"
            }
        }
    })
    gulp.watch('./app/**/*.scss', ['styles'])
    gulp.watch("./app/**/*.js").on('change', browserSync.reload)
    gulp.watch("./app/**/*.html").on('change', browserSync.reload)
})

// default task
gulp.task('default', ['serve'])
