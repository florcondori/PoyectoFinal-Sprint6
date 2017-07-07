'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');

//configurando las tareas en gulp
gulp.task('html', ()=>{
	gulp.src("./src/*.html")
	.pipe(gulp.dest("./public/"));
});

gulp.task('sass', ()=>{
	gulp.src("./src/assets/scss/main.scss")
	.pipe(sass({
			outputStyle: "compressed"
		}).on("Error", sass.logError))
	.pipe(gulp.dest("./public/assets/css"));
});

gulp.task('js', ()=>{
	//gulp.src(["./src/assets/js/components/componente1.js","./src/assets/js/components/componente2.js","./src/assets/js/app.js"])	
	gulp.src("./src/assets/js/**/*.js")
	.pipe(concat('main.js'))
	.pipe(gulp.dest("./public/assets/js"))
});

gulp.task('img', ()=>{
	gulp.src("./src/assets/img/*")	
	.pipe(gulp.dest("./public/assets/img"))
});

gulp.task('sass-watch',['sass'], (done)=>{
	browserSync.reload();
	done();
});

gulp.task('js-watch',['js'], (done)=>{
	browserSync.reload();
	done();
});

gulp.task('html-watch',['html'], (done)=>{
	browserSync.reload();
	done();
});

gulp.task('img-watch',['img'], (done)=>{
	browserSync.reload();
	done();
});

gulp.task('serve',()=>{
	/*browserSync.init(null,{
		server:{
			baseDir: "./public/",
			proxy:{
				target: "localhost:3000",
				ws: true
			}
		}		
	});*/
	
	gulp.watch("./src/*.html", ['html']);
	gulp.watch("./src/assets/scss/**/*.scss", ['sass']);
	gulp.watch("./src/assets/js/**/*.js", ['js']);
	gulp.watch("./src/assets/img/**/*.png", ['img']);
});

gulp.task('nodemon', function (cb) {
    var callbackCalled = false;
    return nodemon({script: 'server.js'}).on('start', function () {
        if (!callbackCalled) {
            callbackCalled = true;
            cb();
        }
    });
});
