"use strict";

var gulp = require("gulp");
var del = require("del");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var imagemin = require("gulp-imagemin");
var webp = require("gulp-webp");
var svgstore = require("gulp-svgstore");
var run = require("run-sequence");
var server = require("browser-sync").create();

gulp.task("copy-html", function () {
    return gulp.src("*.html")
        .pipe(gulp.dest("build"))
        .pipe(server.stream());
});

gulp.task("copy", ["copy-html"], function () {
    return gulp.src([
        "fonts/**",
        "img/**",
        "js/**",
        "*.html"
    ], {
        base: "."
    })
        .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {
    return del("build");
});

gulp.task("style", function () {
    gulp.src("sass/style.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest("build/css"))
        .pipe(minify())
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("build/css"))
        .pipe(server.stream());
});

gulp.task("images", function () {
    return gulp.src("build/img/**.*")
        .pipe(imagemin([
            imagemin.jpegtran({progressive: true}),
            imagemin.optipng({optimizationLevel: 3}),
            imagemin.svgo()
        ]))
        .pipe(gulp.dest("build/img"));
});

gulp.task("webp", function () {
    return gulp.src("build/img/**.*{jpg, png}")
        .pipe(webp({quality: 90}))
        .pipe(gulp.dest("build/img"));
});

gulp.task("sprite", function () {
    return gulp.src("img/icon-*.svg")
        .pipe(svgstore({
            inlineSvg: true
        }))
        .pipe(rename("sprite.svg"))
        .pipe(gulp.dest("build/img"));
});

gulp.task("serve", function () {
    server.init({
        server: "./build",
        notify: false,
        open: true,
        cors: true,
        ui: false
    });

    gulp.watch("sass/**/*.sass", ["style"]);
    gulp.watch("*.html", ["copy-html"]);
});

gulp.task("build", function (done) {
    run("clean", "copy", "style", "sprite", done);
});
