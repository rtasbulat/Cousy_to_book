const gulp = require('gulp');
const requireDir = require('require-dir');

requireDir('./gulp');

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Compile
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('compile', gulp.parallel('style', 'script', 'script:webpack', 'vendor'));
gulp.task('compile:all', gulp.parallel('compile', 'pug'));

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Deploy
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('build', gulp.series('Cousily:build', 'build:static', 'compile:all'));
gulp.task('build:test', gulp.series('build', 'watch'));
gulp.task('live', gulp.series('Cousily:live', 'build', 'build:push'));

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Run development environment
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('default', gulp.series('Cousily', 'compile', 'watch'));
