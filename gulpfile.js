const gulp = require('gulp');
const connect = require('gulp-connect-php');
const browserSync = require('browser-sync');

gulp.task('default', ['browser-sync'], () => {
  gulp.watch('./web/*.php').on('change', browserSync.reload);
});


gulp.task('browser-sync', () => {
  connect.server({}, () => {
    browserSync({
      baseDir: 'web',
      proxy: '127.0.0.1:8000/web',
      notify: {
        styles: {
          top: 'auto',
          bottom: '0',
          opacity: '1'
        }
      }
    });
  });
});