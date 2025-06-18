import gulp from 'gulp';
import fileInclude from 'gulp-file-include';

export function copyhtml() {
  console.log("copying html files with includes");
  return gulp.src(['src/*.html'])
    .pipe(fileInclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('dist'));
};

export default gulp.series(copyhtml);