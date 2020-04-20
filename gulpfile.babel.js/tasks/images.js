/*
 * @title Styles
 * @description A task to compile Sass to CSS.
 */

// Dependencies
import { src, dest, series } from 'gulp';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import imagemin from 'gulp-imagemin';
import errorHandler from '../util/errorHandler.js';
import { isProd } from "../util/env.js"

import { reload } from '../tasks/server';
import browserSync from 'browser-sync'

// Config
import { paths } from "../config";

export function images() {
  return src(paths.assets.images)
  .pipe(plumber({ errorHandler }))
  .pipe(gulpif(isProd, imagemin([
    imagemin.gifsicle({ interlaced: true }),
    imagemin.mozjpeg({ quality: 75, progressive: true }),
    imagemin.optipng({ optimizationLevel: 5 }),
    imagemin.svgo({
      plugins: [
        { removeViewBox: true },
        { cleanupIDs: false }
      ]
    })
  ], {
    verbose: true,
    silent: true
  })))
  .pipe(dest('assets/img'))
}

export const styles = images();
