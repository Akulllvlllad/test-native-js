import fileInclude from 'gulp-file-include'
import webphtml from 'gulp-webp-html-nosvg'

export const html = () => {
	return app.gulp
		.src(app.path.src.html)

		.pipe(fileInclude())
		.pipe(app.plugins.replace(/@assets\//g, 'assets/'))
		.pipe(webphtml())

		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream())
}
