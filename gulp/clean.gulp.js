const gulp = require('gulp');
const del = require('del');

const { paths, baseDir, version } = require('./utils.js');

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
|  Cousily
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
gulp.task('Cousily', () =>
  del([
    `${baseDir}/${paths.style.dest}/**/*.*`,
    `${baseDir}/${paths.script.dest}/**/*.*`,
    `${baseDir}/**/*.html`,
  ])
);
gulp.task('Cousily:build', () => del(paths.dir.prod));
gulp.task('Cousily:live', () => del(`live/${version}`));
